import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AccessPropTypes } from './Access.props';

export default function PrivatePage({ component: Component, redirect }) {
  const location = useLocation();
  // TODO: Додати авторізацію
  //const token = useSelector(selectToken);
  //const isRefreshing = useSelector(selectIsRefreshing);
  //const shouldRedirect = !isRefreshing && !token;
  const shouldRedirect = false;

  return shouldRedirect ? (
    <Navigate to={redirect} state={{ from: location }} replace />
  ) : (
    Component
  );
}

PrivatePage.propTypes = AccessPropTypes;
