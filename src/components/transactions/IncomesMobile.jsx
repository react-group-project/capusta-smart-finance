import { Box } from 'components/Box/Box.styled';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import { Container } from 'components/Common/Container/Container.styled';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import { useSelector } from 'react-redux';
import { selectIncomesCategories } from 'redux/transactions/transactions.selectors';
import { addIncomeThunk } from 'redux/transactions/transactions.thunk';

export default function IncomesMobile() {
  const categories = useSelector(selectIncomesCategories);
  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" pt="16px">
          <MainPageButtonArrow position="absolute" />
          <AddingExpensessArea
            categories={categories}
            addFunction={addIncomeThunk}
          />
        </Box>
      </BackgroundHome>
    </Box>
  );
}
