import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.thunk';
import {
  getAllTransactionsThunk,
  getPeriodDataThunk,
} from 'redux/transactions/transactions.thunk';

export default function Login() {
  const [email, setEmail] = useState('goit.test4.user@test.com');
  const [password, setPassword] = useState('qwerty123');
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      loginThunk({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        dispatch(getAllTransactionsThunk());
        dispatch(getPeriodDataThunk({ date: '2023-01' }));
      });
  };
  return (
    <>
      <input
        type="text"
        value={email}
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="text"
        value={password}
        onChange={e => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={clickHandler}>Login</button>
    </>
  );
}
