import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addExpenseThunk,
  addIncomeThunk,
  getAllTransactionsThunk,
} from 'redux/transactions/transactions.thunk.js';
import { useState, useEffect } from 'react';
import { selectUserBalance } from 'redux/user/user.selectors';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import {
  selectIncomesPeriodByCategory,
  selectExposesPeriodByCategory,
} from 'redux/transactions/transactions.selectors';
import { Container } from 'components/Common/Container/Container.styled';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import Balance from 'components/Balance';
import { routes } from 'constants/routes';
import { Box } from 'components/Box/Box.styled';

export default function HomePage() {
  const dispatch = useDispatch();
  const balance = useSelector(selectUserBalance);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('Alcohol');
  const [incomeDescription, setIncomeDescription] = useState('');
  const [incomeAmount, setIncomeAmount] = useState(0);
  const [incomeCategory, setIncomeCategory] = useState('Salary');

  // Запити для отримання данних за період по конкретній категорії
  const periodIncomeData = useSelector(state =>
    selectIncomesPeriodByCategory(state, 'Salary')
  );
  const periodExpenseData = useSelector(state =>
    selectExposesPeriodByCategory(state, 'Alcohol')
  );
  // ========================================

  const addExpenseHandler = () => {
    dispatch(
      addExpenseThunk({
        description,
        category,
        amount,
        date: '2023-01-29',
      })
    );
  };
  const addIncomeHandler = () => {
    dispatch(
      addIncomeThunk({
        description: incomeDescription,
        category: incomeCategory,
        amount: Number(incomeAmount),
        date: '2023-01-29',
      })
    );
  };

  useEffect(() => {
    console.log(periodIncomeData, periodExpenseData);
  }, [periodIncomeData, periodExpenseData]);

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getPeriodDataThunk({ date: '2023-01' }));
  }, [dispatch]);
  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative">
          <div>
            <Balance />
          </div>
          <div>{balance}</div>

          <div>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option calue="Alcohol">Alcohol</option>
              <option calue="Entertainment">Entertainment</option>
              <option calue="Health">Health</option>
            </select>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
            />
            <button onClick={addExpenseHandler}>Add Expenses</button>
          </div>
          <div>
            <input
              type="text"
              value={incomeDescription}
              onChange={e => setIncomeDescription(e.target.value)}
            />
            <select
              value={incomeCategory}
              onChange={e => setIncomeCategory(e.target.value)}
            >
              <option calue="Salary">Salary</option>
              <option calue="Add. income">Add. income</option>
            </select>
            <input
              type="number"
              value={incomeAmount}
              onChange={e => setIncomeAmount(e.target.value)}
            />
            <button onClick={addIncomeHandler}>Add Incomes</button>
          </div>
          <Box
            display="flex"
            flexDirection={{ _: 'column-reverse', tablet: 'column' }}
          >
            <Box
              mt={{ tablet: '60px', desktop: '8px' }}
              position={{ _: 'absolute', tablet: 'static' }}
              bottom="0"
              display={{ _: 'flex', tablet: 'block' }}
              width="calc(100% - 40px)"
            >
              <Box
                as={NavLink}
                to={routes.EXPENSES_MOBILE}
                flexGrow="1"
                textAlign="center"
              >
                Expenses
              </Box>
              <Box
                as={NavLink}
                to={routes.INCOME_MOBILE}
                flexGrow="1"
                textAlign="center"
              >
                Incomes
              </Box>
            </Box>
            <Box w="full" mt={{ _: '63px', tablet: '0' }}>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Box>
          </Box>
        </Box>
      </BackgroundHome>
    </Box>
  );
}
