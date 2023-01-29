import Header from './Header/Header.jsx';
import AppToastContainer from './AppToastContainer';
import { loginThunk } from 'redux/auth/auth.thunk';
import { useDispatch } from 'react-redux';
import { getPeriodDataThunk } from './../redux/transactions/transactions.thunk';
import ReportsPage from 'pages/Reports/Reports.page.jsx';

export const App = () => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(
            loginThunk({
                email: 'goit.test6.user@test.com',
                password: 'qwerty123',
            })
        )
            .unwrap()
            .then(() => dispatch(getPeriodDataThunk({ date: '2023-01' })));
    };
    return (
        <>
            <Header />
            <button onClick={clickHandler}>login</button>
            <ReportsPage />
            <AppToastContainer />
        </>
    );
};
