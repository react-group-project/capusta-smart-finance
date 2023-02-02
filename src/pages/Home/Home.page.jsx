import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { MdBarChart } from 'react-icons/md';
import { Container } from 'components/Common/Container/Container.styled';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import Balance from 'components/Balance';
import { routes } from 'constants/routes';
import { Box } from 'components/Box/Box.styled';
import {
  HomeBody,
  HomeHeader,
  HomeOutlet,
  HomeTabButton,
  HomeTabs,
  ReportsButton,
} from './HomePage.styled';
import { theme } from 'theme';
import { useMediaQuery } from 'react-responsive';
import { useDispatch } from 'react-redux';
import {
  getAllTransactionsThunk,
  getExpensesCategoriesThunk,
  getIncomesCategoriesThunk,
} from 'redux/transactions/transactions.thunk';
import SkeletonLoader from 'components/transactions/SkeletonLoader';

const iconColor = theme.colors.grey.dark;

export default function HomePage() {
  const location = useLocation();
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints.tablet} - 1px))`,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTransactionsThunk());
    dispatch(getExpensesCategoriesThunk());
    dispatch(getIncomesCategoriesThunk());
  }, [dispatch]);

  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" py="40px">
          <HomeHeader>
            <Balance ml={{ tablet: '0', desktop: 'auto' }} />
            <ReportsButton state={{ from: location }}>
              Reports <MdBarChart color={iconColor} size={20} height="40px" />
            </ReportsButton>
          </HomeHeader>

          <HomeBody
            display="flex"
            flexDirection={{ _: 'column-reverse', tablet: 'column' }}
          >
            <HomeTabs>
              <HomeTabButton
                to={isMobile ? routes.EXPENSES_MOBILE : routes.EXPENSES}
                state={{ from: { pathname: routes.EXPENSES } }}
              >
                Expenses
              </HomeTabButton>
              <HomeTabButton
                to={isMobile ? routes.INCOME_MOBILE : routes.INCOME}
                state={{ from: { pathname: routes.INCOME } }}
              >
                Incomes
              </HomeTabButton>
            </HomeTabs>

            <HomeOutlet>
              <Suspense fallback={<SkeletonLoader />}>
                <Outlet />
              </Suspense>
            </HomeOutlet>
          </HomeBody>
        </Box>
      </BackgroundHome>
    </Box>
  );
}
