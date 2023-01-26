import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function AuthPage() {
  return (
    <>
      <h1>Kapu$ta</h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
