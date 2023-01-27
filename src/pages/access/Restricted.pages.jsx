import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AccessPropTypes } from './Access.props';

export default function RestrictedPage({ component: Component, redirect }) {
  const location = useLocation();
  const to = location.state?.from || redirect;
  // TODO: Додати авторізацію
  //const isAuthenticated = useSelector(selectIsAuthenticated);
  const isAuthenticated = true;

  return isAuthenticated ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    Component
  );
}

RestrictedPage.propTypes = AccessPropTypes;
