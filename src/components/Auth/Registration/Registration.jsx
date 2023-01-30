import { routes } from 'constants/routes';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationThunk } from 'redux/auth/auth.thunk';

export default function Registration() {
  const [email, setEmail] = useState('goit.test6.user@test.com');
  const [password, setPassword] = useState('qwerty123');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(
      registrationThunk({
        email,
        password,
      })
    )
      .unwrap()
      .then(() => {
        navigate(routes.LOGIN, { replace: true });
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
      <button onClick={clickHandler}>Registration</button>
    </>
  );
}
