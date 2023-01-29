import { useDispatch, useSelector } from 'react-redux';

import {
  loginThunk,
  registrationThunk,
  logoutThunk,
} from 'redux/auth/auth.thunk';
import AppToastContainer from './AppToastContainer';
import { addUserBalanceThunk, getUserInfoThunk } from 'redux/user/user.thunk';
import { selectUserBalance } from 'redux/user/user.selectors';
import { useEffect } from 'react';
import {
  getIncomeThunk,
  getExpenseThunk,
  addIncomeThunk,
  addExpenseThunk,
  getExpenseCategoriesThunk,
  getIncomeCategoriesThunk,
  deleteTransactionThunk,
  getPeriodDataThunk,
  getAllTransactionsThunk,
} from 'redux/transactions/transactions.thunk';
import { selectSortedAllTransactionsData } from 'redux/transactions/transactions.selectors';

export const App = () => {
  const dispatch = useDispatch();

  const userBalance = useSelector(selectUserBalance);
  const transactions = useSelector(selectSortedAllTransactionsData);

  const registrationHandler = () => {
    dispatch(
      registrationThunk({
        email: 'goit.test.user@gmail.com',
        password: 'Test1234goit',
      })
    );
  };

  const loginHandler = () => {
    dispatch(
      loginThunk({
        email: 'goit.test6.user@test.com',
        password: 'qwerty123',
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getAllTransactionsThunk());
      });
  };

  const googleLoginHandler = () => {
    //dispatch(googleLoginThunk());
    window.location.href = 'https://kapusta-backend.goit.global/auth/google';
  };

  const logoutHandler = () => {
    dispatch(logoutThunk());
  };

  const userInfoHandler = () => {
    dispatch(getUserInfoThunk());
  };
  const addBalanceHandler = () => {
    dispatch(addUserBalanceThunk(10));
  };

  const getIncomeCategoriesHandler = () => {
    dispatch(getIncomeCategoriesThunk());
  };

  const getExpenseCategoriesHandler = () => {
    dispatch(getExpenseCategoriesThunk());
  };

  const addExpenseHandler = () => {
    dispatch(
      addExpenseThunk({
        description: 'Remove Health 10',
        amount: 10,
        date: '2023-01-27',
        category: 'Health',
      })
    );
  };

  const addIncomeHandler = () => {
    dispatch(
      addIncomeThunk({
        description: 'Add Health 10',
        amount: 10,
        date: '2022-12-27',
        category: 'Add. income',
      })
    );
  };

  const getIncomeHandler = () => {
    dispatch(getIncomeThunk());
  };

  const getExpenseHandler = () => {
    dispatch(getExpenseThunk());
  };

  const deleteTransactionHandler = () => {
    dispatch(deleteTransactionThunk('63d4298fdb7a810814047703'));
  };

  const getPeriodDataHandler = () => {
    dispatch(getPeriodDataThunk({ date: '2023-01' }));
  };

  useEffect(() => {
    console.log('User balance: ', userBalance);
  }, [userBalance]);

  useEffect(() => {
    console.log('Transactions: ', transactions);
  }, [transactions]);

  return (
    <>
      <button onClick={registrationHandler}>REGISTRATION</button>
      <button onClick={loginHandler}>LOGIN</button>
      <button onClick={logoutHandler}>LOGOUT</button>
      <button onClick={googleLoginHandler}>GOOGLE</button>
      <br />
      <button onClick={userInfoHandler}>GET USER INFO</button>
      <button onClick={addBalanceHandler}>ADD 10 TOBALANCE INFO</button>
      <br />
      <button onClick={getIncomeHandler}>GET INCOME</button>
      <button onClick={getExpenseHandler}>GET EXPENSE</button>
      <button onClick={addExpenseHandler}>ADD EXPENSE HEALTH 10</button>
      <button onClick={addIncomeHandler}>ADD INCOME HEALTH 10</button>
      <button onClick={deleteTransactionHandler}>DELETE TRANSACTION</button>
      <br />
      <button onClick={getIncomeCategoriesHandler}>
        GET INCOME CATEGORIES
      </button>
      <button onClick={getExpenseCategoriesHandler}>
        GET EXPENSE CATEGORIES
      </button>
      <button onClick={getPeriodDataHandler}>GET DATA FROM 2023-01</button>

      <AppToastContainer />
    </>
  );
};
