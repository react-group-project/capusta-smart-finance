import { Container } from 'components/Common/Container/Container.styled';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { BackgroundAuth } from '../../components/Common/BackgroundAuth/BackgroundAuth.styled';

export default function AuthPage() {
  return (
    <BackgroundAuth>
      <Container>
        <h1>Kapu$ta</h1>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </BackgroundAuth>
  );
}
