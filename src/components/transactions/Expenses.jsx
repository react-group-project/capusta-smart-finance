import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  selectExpensesData,
  selectExpensesSortedLastSixMonths,
} from 'redux/transactions/transactions.selectors';
import { addExpenseThunk } from 'redux/transactions/transactions.thunk';
import { Box } from 'components/Box/Box.styled';

import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import Table from 'components/Table';

import { TransactionsDataWrapper } from './Transactions.styled';
import { theme } from 'theme';
import MobTable from 'components/MobTable';
import Summary from 'components/Summary';
import { selectExpensesCategories } from '../../redux/transactions/transactions.selectors';

export default function Expenses() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectExpensesData);
  const stats = useSelector(selectExpensesSortedLastSixMonths);
  const categories = useSelector(selectExpensesCategories);

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea
            categories={categories}
            addFunction={addExpenseThunk}
          />
          <TransactionsDataWrapper>
            <Table data={data} />
            {!isMobile && <Summary stats={stats} />}
          </TransactionsDataWrapper>
        </>
      )}
    </Box>
  );
}
