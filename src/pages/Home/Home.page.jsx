import { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { MdBarChart } from 'react-icons/md';
import { Container } from 'components/Common/Container/Container.styled';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import Balance from 'components/Balance';
import { routes } from 'constants/routes';
import { Box } from 'components/Box/Box.styled';
import { HomeHeader, ReportsButton } from './HomePage.styled';
import { theme } from 'theme';

const iconColor = theme.colors.grey.dark;

export default function HomePage() {
  const location = useLocation();

  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" pt="40px">
          <HomeHeader>
            <Balance ml={{ tablet: '0', desktop: 'auto' }} />
            <ReportsButton state={{ from: location }}>
              Reports <MdBarChart color={iconColor} size={20} height="40px" />
            </ReportsButton>
          </HomeHeader>

          <Box
            display="flex"
            flexDirection={{ _: 'column-reverse', tablet: 'column' }}
          >
            <Box
              mt={{ tablet: '60px', desktop: '8px' }}
              position={{ _: 'absolute', tablet: 'static' }}
              bottom="0"
              display={{ _: 'flex', tablet: 'block' }}
              width="calc(100% - 40px)"
            >
              <Box
                as={NavLink}
                to={routes.EXPENSES_MOBILE}
                //flexGrow="1"
                //textAlign="center"
              >
                Expenses
              </Box>
              <Box
                as={NavLink}
                to={routes.INCOME_MOBILE}
                //flexGrow="1"
                //textAlign="center"
              >
                Incomes
              </Box>
            </Box>

            <Box w="full" mt={{ _: '140px', tablet: '0' }}>
              <Suspense fallback={null}>
                <Outlet />
              </Suspense>
            </Box>
          </Box>
        </Box>
      </BackgroundHome>
    </Box>
  );
}
