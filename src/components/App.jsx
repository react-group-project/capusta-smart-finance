import AppToastContainer from './AppToastContainer';
import { routes } from 'constants/routes';
import { MobilePage, PrivatePage, RestrictedPage } from 'pages/access';
import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsAuthorized,
  selectIsRefreshing,
  selectRefreshToken,
} from 'redux/auth/auth.selectors';
import { refreshTokenThunk } from 'redux/auth/auth.thunk';

const HomePage = lazy(() => import('pages/Home'));
const AuthPage = lazy(() => import('pages/Auth'));
const Login = lazy(() => import('components/Auth/Login'));
const Registration = lazy(() => import('components/Auth/Registration'));
const ReportsPage = () => <h2>Reports</h2>;

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

  return (
    <>
      <Routes>
        <Route path={routes.BASE} element={<AppLayout />}>
          <Route index element={<Navigate to={routes.HOME} replace />} />
          <Route
            path={routes.HOME}
            element={
              <PrivatePage redirect={routes.LOGIN} component={<HomePage />} />
            }
          >
            <Route index element={<Navigate to={routes.EXPENSES} replace />} />
            <Route
              path={routes.EXPENSES}
              element={<h2>Expenses component</h2>}
            />
            <Route path={routes.INCOME} element={<h2>Income element</h2>} />
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
              <RestrictedPage redirect={routes.HOME} component={<AuthPage />} />
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
                    component={<h2>Expenses Mobile form</h2>}
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
                    component={<h2>Income Mobile form</h2>}
                  />
                }
              />
            }
          />
        </Route>
      </Routes>
      <AppToastContainer />
    </>
  );
};
