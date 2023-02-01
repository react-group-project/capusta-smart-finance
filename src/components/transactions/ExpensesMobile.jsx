import { Box } from 'components/Box/Box.styled';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import { Container } from 'components/Common/Container/Container.styled';

export default function ExpensesMobile() {
  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box as={Container} position="relative" py="40px">
          <AddingExpensessArea />
        </Box>
      </BackgroundHome>
    </Box>
  );
}
