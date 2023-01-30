import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsRefreshing } from 'redux/auth/auth.selectors';

export default function AppLayout() {
  const isRefreshing = useSelector(selectIsRefreshing);
  return (
    <>
      <Header />
      <Suspense fallback={null}>{!isRefreshing && <Outlet />}</Suspense>
    </>
  );
}
