import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box.styled';
import { BackgroundAuth } from 'components/Common/BackgroundAuth/BackgroundAuth.styled';
import {
  AuthContainer,
  AuthOutlet,
  AuthSubTitle,
  AuthTitle,
  AuthTitleLayout,
} from './Auth.styled';

export default function AuthPage() {
  return (
    <Box as="section">
      <BackgroundAuth>
        <AuthContainer>
          <AuthTitleLayout>
            <AuthTitle as="h1">Kapu$ta</AuthTitle>
            <AuthSubTitle as="h2">Smart finance</AuthSubTitle>
          </AuthTitleLayout>
          <AuthOutlet>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </AuthOutlet>
        </AuthContainer>
      </BackgroundAuth>
    </Box>
  );
}
