import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth.selectors';
import { AccessPropTypes } from './Access.props';

export default function RestrictedPage({ component: Component, redirect }) {
    const location = useLocation();
    const to = location.state?.from || redirect;
    const isAuthenticated = useSelector(selectToken);

    return isAuthenticated ? (
        <Navigate to={to} state={{ from: location }} replace />
    ) : (
        Component
    );
}

RestrictedPage.propTypes = AccessPropTypes;
