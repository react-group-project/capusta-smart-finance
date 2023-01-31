import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth.thunk';
import {
  getAllTransactionsThunk,
  getPeriodDataThunk,
} from 'redux/transactions/transactions.thunk';

import { ReactComponent as GoogleIcon } from "../../../images/google-symbol.svg";
import {
  // ErrorText,
  // ErrorStar,
  FieldStyle,
  FormStyle,
  InputStyled,
  LabelInput,
  Text,
  BtnBox,
  SubText,
  Content,
  LinkGoogle,
  FormBtn
} from '.././LogimForm.styled';

// import { Button } from '../../Common/Button/Button.styled';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <FormStyle>
        <Content>
          <Text>You can log in with your Google Account:</Text>
          <LinkGoogle
              href={`/`}
          >
            <GoogleIcon />
            Google
          </LinkGoogle>
          <SubText>
            Or log in using an email and password, after registering:
          </SubText>
          <FieldStyle>
            <LabelInput htmlFor="email">
              {/* {formik.touched.email && formik.errors.email ? (
                  <ErrorStar>*</ErrorStar>
              ) : null} */}
              Email:
            </LabelInput>           
            <InputStyled
              type="text"
              autoComplete="off"
              placeholder="your@email.com"
              value={email}
              onChange={e => {
              setEmail(e.target.value);
               }}
            />
            {/* {formik.touched.email && formik.errors.email ? (
              <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}             */}
          </FieldStyle>
          <FieldStyle>
            <LabelInput htmlFor="password">
              {/* {formik.touched.password && formik.errors.password ? (
                <ErrorStar>*</ErrorStar>
              ) : null} */}
              Password:
            </LabelInput>          
            <InputStyled
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={e => {
              setPassword(e.target.value);
              }}
            />
             {/* {formik.touched.password && formik.errors.password ? (
              <ErrorText>{formik.errors.password}</ErrorText>
            ) : null} */}
          </FieldStyle>
          <BtnBox>
            <FormBtn onClick={clickHandler}>Log in</FormBtn>
            <FormBtn onClick={clickHandler}>Registration</FormBtn>
          </BtnBox>
          </Content>
    </FormStyle>
    </>
  );
}
