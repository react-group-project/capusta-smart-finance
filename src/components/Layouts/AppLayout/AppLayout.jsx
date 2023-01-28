import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AppLayout() {
  return (
    <>
      <h1>Header</h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
