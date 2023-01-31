import { routes } from 'constants/routes';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registrationThunk } from 'redux/auth/auth.thunk';
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
              onChange={e => {setEmail(e.target.value);}}
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
