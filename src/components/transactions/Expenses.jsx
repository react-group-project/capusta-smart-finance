import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { useSelector } from 'react-redux';
import {
  selectExpensesData,
  selectExpensesSortedLastSixMonths,
} from 'redux/transactions/transactions.selectors';
import { Summary } from 'components/Summary/Summary';
import { TransactionsDataWrapper } from './Transactions.styled';

export default function Expenses() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectExpensesData);
  const stats = useSelector(selectExpensesSortedLastSixMonths);

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea />
          <TransactionsDataWrapper>
            <Table data={data} />
            {!isMobile && <Summary stats={stats} />}
          </TransactionsDataWrapper>
        </>
      )}
    </Box>
  );
}
