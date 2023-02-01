import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { selectIncomesData } from 'redux/transactions/transactions.selectors';
import { theme } from 'theme';

export default function Incomes() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectIncomesData);

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea />
          <Table data={data} />
        </>
      )}
    </Box>
  );
}
