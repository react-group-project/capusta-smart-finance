import { Box } from 'components/Box/Box.styled';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import { Container } from 'components/Common/Container/Container.styled';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import { useSelector } from 'react-redux';
import { selectExpensesCategories } from 'redux/transactions/transactions.selectors';
import { addExpenseThunk } from 'redux/transactions/transactions.thunk';

export default function ExpensesMobile() {
  const categories = useSelector(selectExpensesCategories);
  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" pt="16px">
          <MainPageButtonArrow position="absolute" />
          <AddingExpensessArea
            categories={categories}
            addFunction={addExpenseThunk}
          />
        </Box>
      </BackgroundHome>
    </Box>
  );
}
