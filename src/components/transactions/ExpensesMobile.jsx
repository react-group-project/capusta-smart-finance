import { Box } from 'components/Box/Box.styled';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import { Container } from 'components/Common/Container/Container.styled';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';

export default function ExpensesMobile() {
  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" pt="16px">
          <MainPageButtonArrow position="absolute" />
          <AddingExpensessArea />
        </Box>
      </BackgroundHome>
    </Box>
  );
}