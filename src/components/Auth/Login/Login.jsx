import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';
import { loginThunk } from 'redux/auth/auth.thunk';
import { ReactComponent as GoogleIcon } from 'images/google-symbol.svg';
import {
  ErrorText,
  ErrorStar,
  FieldStyle,
  FormStyle,
  InputStyled,
  LabelInput,
  FormText,
  FormButtonsLayout,
  FormSubText,
  FormContent,
  GoogleButton,
  FormButton,
} from '../AuthForm.styled';
import { useForm } from 'react-hook-form';
import { authValidation } from '../Auth.validation';
import { selectLoginStatus } from 'redux/auth/auth.selectors';
import { Status } from 'constants';
import AppSpinner from 'components/Spinner/AppSpinner';

export default function Login() {
  const dispatch = useDispatch();
  const loginStatus = useSelector(selectLoginStatus);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, touchedFields, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginHandler = async data => {
    await dispatch(loginThunk(data));
    reset();
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(loginHandler)}>
        <FormContent>
          <FormText>You can log in with your Google Account:</FormText>
          <GoogleButton
            type="button"
            onClick={() => {
              window.location.href =
                'https://kapusta-backend.goit.global/auth/google';
            }}
          >
            <GoogleIcon />
            Google
          </GoogleButton>
          <FormSubText>
            Or log in using an email and password, after registering:
          </FormSubText>
          <FieldStyle>
            <LabelInput htmlFor="email">
              {touchedFields.email && errors.email ? (
                <ErrorStar>*</ErrorStar>
              ) : null}
              Email:
            </LabelInput>
            <InputStyled
              type="text"
              autoComplete="off"
              placeholder="your@email.com"
              {...register('email', authValidation.password)}
            />
            {touchedFields.email && errors.email ? (
              <ErrorText>{errors.email.message}</ErrorText>
            ) : null}
          </FieldStyle>
          <FieldStyle>
            <LabelInput htmlFor="password">
              {touchedFields.password && errors.password ? (
                <ErrorStar>*</ErrorStar>
              ) : null}
              Password:
            </LabelInput>
            <InputStyled
              type="password"
              autoComplete="off"
              placeholder="Password"
              {...register('password', authValidation.password)}
            />
            {touchedFields.password && errors.password ? (
              <ErrorText>{errors.password.message}</ErrorText>
            ) : null}
          </FieldStyle>
          <FormButtonsLayout>
            {isSubmitting ? (
              <>
                {loginStatus === Status.PENDING && (
                  <>
                    <AppSpinner />
                  </>
                )}
              </>
            ) : (
              <>
                <FormButton type="submit" isActive={true}>
                  Log In
                </FormButton>
                <FormButton type="button" as={Link} to={routes.REGISTRATION}>
                  Registration
                </FormButton>
              </>
            )}
          </FormButtonsLayout>
        </FormContent>
      </FormStyle>
    </>
  );
}
