import AppToastContainer from './AppToastContainer';
import { routes } from 'constants/routes';
import { MobilePage, PrivatePage, RestrictedPage } from 'pages/access';
import { lazy, useEffect } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthorized,
  selectIsRefreshing,
  selectRefreshToken,
} from 'redux/auth/auth.selectors';
import { refreshTokenThunk } from 'redux/auth/auth.thunk';
import { addToken } from 'redux/auth/auth.slice';
import { Box } from './Box/Box.styled';

const HomePage = lazy(() => import('pages/Home'));
const AuthPage = lazy(() => import('pages/Auth'));
const Login = lazy(() => import('components/Auth/Login'));
const Registration = lazy(() => import('components/Auth/Registration'));
const ReportsPage = lazy(() => import('pages/Reports/Reports.page'));
const NotFoundPage = lazy(() => import('pages/NotFound/NotFound.page'));
const Expenses = lazy(() => import('components/transactions/Expenses'));
const Incomes = lazy(() => import('components/transactions/Incomes'));
const ExpensesMobile = lazy(() =>
  import('components/transactions/ExpensesMobile')
);
const IncomesMobile = lazy(() =>
  import('components/transactions/IncomesMobile')
);

export const App = () => {
  const dispatch = useDispatch();
  const refreshToken = useSelector(selectRefreshToken);
  const isAuthorized = useSelector(selectIsAuthorized);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (refreshToken && !isAuthorized && !isRefreshing) {
      dispatch(refreshTokenThunk());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  // Google authtorization
  useEffect(() => {
    if (window.location.pathname === '/') {
      const params = new URLSearchParams(window.location.search);

      const accessToken = params.get('accessToken');
      const refreshToken = params.get('refreshToken');
      const sid = params.get('sid');

      dispatch(addToken({ accessToken, refreshToken, sid }));
      window.location.pathname = '/capusta-smart-finance' + routes.HOME;
    }
  }, [dispatch]);

  return (
    <BrowserRouter basename="capusta-smart-finance">
      <Box height="100vh">
        <Routes>
          <Route path={routes.BASE} element={<AppLayout />}>
            <Route index element={<Navigate to={routes.HOME} replace />} />
            <Route
              path={routes.HOME}
              element={
                <PrivatePage redirect={routes.LOGIN} component={<HomePage />} />
              }
            >
              <Route
                index
                element={<Navigate to={routes.EXPENSES} replace />}
              />
              <Route path={routes.EXPENSES} element={<Expenses />} />
              <Route path={routes.INCOME} element={<Incomes />} />
            </Route>
            <Route
              path={routes.REPORTS}
              element={
                <PrivatePage
                  redirect={routes.LOGIN}
                  component={<ReportsPage />}
                />
              }
            />
            <Route
              path={routes.AUTH}
              element={
                <RestrictedPage
                  redirect={routes.HOME}
                  component={<AuthPage />}
                />
              }
            >
              <Route index element={<Navigate to={routes.LOGIN} replace />} />
              <Route path={routes.LOGIN} element={<Login />} />
              <Route path={routes.REGISTRATION} element={<Registration />} />
            </Route>
            <Route
              path={routes.EXPENSES_MOBILE}
              element={
                <PrivatePage
                  redirect={routes.LOGIN}
                  component={
                    <MobilePage
                      redirect={routes.EXPENSES}
                      component={<ExpensesMobile />}
                    />
                  }
                />
              }
            />
            <Route
              path={routes.INCOME_MOBILE}
              element={
                <PrivatePage
                  redirect={routes.LOGIN}
                  component={
                    <MobilePage
                      redirect={routes.INCOME}
                      component={<IncomesMobile />}
                    />
                  }
                />
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <AppToastContainer />
      </Box>
    </BrowserRouter>
  );
};
