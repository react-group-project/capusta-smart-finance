import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsRefreshing, selectToken } from 'redux/auth/auth.selectors';
import { AccessPropTypes } from './Access.props';

export default function PrivatePage({ component: Component, redirect }) {
  const location = useLocation();
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isRefreshing && !token;

  return shouldRedirect ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    Component
  );
}

PrivatePage.propTypes = AccessPropTypes;
