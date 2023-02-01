import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { routes } from 'constants/routes';
import { registrationThunk } from 'redux/auth/auth.thunk';
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
} from '../AuthForm';
import { useForm } from 'react-hook-form';
import { authValidation } from '../Auth.validation';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      navigate(routes.LOGIN, { state: { userEmail: data.email } });
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
              <>Loading...</>
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
