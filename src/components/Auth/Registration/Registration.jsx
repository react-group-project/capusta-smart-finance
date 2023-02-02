import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from 'constants/routes';
import { loginThunk, registrationThunk } from 'redux/auth/auth.thunk';
import {
  ErrorText,
  ErrorStar,
  FieldStyle,
  FormStyle,
  InputStyled,
  LabelInput,
  FormButtonsLayout,
  FormContent,
  FormButton,
} from '../AuthForm.styled';
import { useForm } from 'react-hook-form';
import { authValidation } from '../Auth.validation';
import {
  selectLoginStatus,
  selectRegistrationStatus,
} from 'redux/auth/auth.selectors';
import { Status } from 'constants';
import AppSpinner from 'components/Spinner/AppSpinner';

export default function Registration() {
  const dispatch = useDispatch();
  const registrationStatus = useSelector(selectRegistrationStatus);
  const loginStatus = useSelector(selectLoginStatus);

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { isSubmitting, touchedFields, errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const loginHandler = async ({ confirmPassword, ...data }) => {
    try {
      await dispatch(registrationThunk(data)).unwrap();
      await dispatch(loginThunk(data)).unwrap();
      reset();
    } catch (err) {}
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit(loginHandler)}>
        <FormContent>
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
          <FieldStyle>
            <LabelInput htmlFor="password">
              {touchedFields.confirmPassword && errors.confirmPassword ? (
                <ErrorStar>*</ErrorStar>
              ) : null}
              Confirm password:
            </LabelInput>
            <InputStyled
              type="password"
              autoComplete="off"
              placeholder="Confirm password"
              {...register('confirmPassword', {
                validate: value => {
                  const { password } = getValues();
                  return password === value || 'Passwords should match!';
                },
              })}
            />
            {touchedFields.confirmPassword && errors.confirmPassword ? (
              <ErrorText>{errors.confirmPassword.message}</ErrorText>
            ) : null}
          </FieldStyle>
          <FormButtonsLayout>
            {isSubmitting ? (
              <>
                {(registrationStatus === Status.PENDING ||
                  loginStatus === Status.PENDING) && <AppSpinner />}
              </>
            ) : (
              <>
                <FormButton type="button" as={Link} to={routes.LOGIN}>
                  Log In
                </FormButton>
                <FormButton type="submit" isActive={true}>
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
