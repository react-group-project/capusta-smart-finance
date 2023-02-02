import { useMediaQuery } from 'react-responsive';
import { useSelector } from 'react-redux';
import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import {
  selectIncomesData,
  selectIncomesSortedLastSixMonths,
} from 'redux/transactions/transactions.selectors';
import { theme } from 'theme';
import { TransactionsDataWrapper } from './Transactions.styled';
import { Summary } from 'components/Summary/Summary';

export default function Incomes() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectIncomesData);
  const stats = useSelector(selectIncomesSortedLastSixMonths);

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
