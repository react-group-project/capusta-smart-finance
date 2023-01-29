import Header from './Header/Header.jsx';
import AppToastContainer from './AppToastContainer';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.thunk.js';
import {
    addExpenseThunk,
    addIncomeThunk,
    getAllTransactionsThunk,
} from 'redux/transactions/transactions.thunk.js';
import { useState, useEffect } from 'react';
import { selectUserBalance } from 'redux/user/user.selectors';
import { getPeriodDataThunk } from '../redux/transactions/transactions.thunk';
import {
    selectIncomesPeriodByCategory,
    selectExposesPeriodByCategory,
} from '../redux/transactions/transactions.selectors';

export const App = () => {
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

    const clickHandler = () => {
        dispatch(
            loginThunk({
                email: 'goit.test6.user@test.com',
                password: 'qwerty123',
            })
        )
            .unwrap()
            .then(() => {
                dispatch(getAllTransactionsThunk());
                dispatch(getPeriodDataThunk({ date: '2023-01' }));
            });
    };

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

    return (
        <>
            <Header />

            <button onClick={clickHandler}>Login</button>

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

            <AppToastContainer />
        </>
    );
};
