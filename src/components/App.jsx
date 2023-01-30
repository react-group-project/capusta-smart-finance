import AppToastContainer from './AppToastContainer';
import { routes } from 'constants/routes';
import { MobilePage, PrivatePage, RestrictedPage } from 'pages/access';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout';

const HomePage = lazy(() => import('pages/Home'));
const AuthPage = lazy(() => import('pages/Auth'));
const ReportsPage = () => <h2>Reports</h2>;

export const App = () => {
    return (
        <>
            <Routes>
                <Route path={routes.BASE} element={<AppLayout />}>
                    <Route
                        index
                        element={<Navigate to={routes.HOME} replace />}
                    />
                    <Route
                        path={routes.HOME}
                        element={
                            <PrivatePage
                                redirect={routes.LOGIN}
                                component={<HomePage />}
                            />
                        }
                    >
                        <Route
                            index
                            element={<Navigate to={routes.EXPENSES} replace />}
                        />
                        <Route
                            path={routes.EXPENSES}
                            element={<h2>Expenses component</h2>}
                        />
                        <Route
                            path={routes.INCOME}
                            element={<h2>Income element</h2>}
                        />
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
                        <Route
                            index
                            element={<Navigate to={routes.LOGIN} replace />}
                        />
                        <Route
                            path={routes.LOGIN}
                            element={<h2>Login component</h2>}
                        />
                        <Route
                            path={routes.REGISTRATION}
                            element={<h2>Registration component</h2>}
                        />
                    </Route>
                    <Route
                        path={routes.MOBILE_FORM}
                        element={
                            <PrivatePage
                                redirect={routes.LOGIN}
                                component={
                                    <MobilePage
                                        redirect={routes.HOME}
                                        component={<h2>Mobile form</h2>}
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
