import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h1>Home page</h1>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
