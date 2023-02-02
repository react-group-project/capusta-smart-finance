import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { useSelector } from 'react-redux';
import { selectExpensesData } from 'redux/transactions/transactions.selectors';

export default function Expenses() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectExpensesData);

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
