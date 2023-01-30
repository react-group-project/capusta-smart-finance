import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectToken } from 'redux/auth/auth.selectors';
import { AccessPropTypes } from './Access.props';

export default function PrivatePage({ component: Component, redirect }) {
    const location = useLocation();
    const token = useSelector(selectToken);
    // TODO: Додати авторізацію
    //const isRefreshing = useSelector(selectIsRefreshing);
    //const shouldRedirect = !isRefreshing && !token;
    const shouldRedirect = !token;

    return shouldRedirect ? (
        <Navigate to={redirect} state={{ from: location }} replace />
    ) : (
        Component
    );
}

PrivatePage.propTypes = AccessPropTypes;
