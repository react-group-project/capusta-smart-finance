import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import {
  selectIncomesCategories,
  selectIncomesData,
  selectIncomesSortedLastSixMonths,
} from 'redux/transactions/transactions.selectors';
import { addIncomeThunk } from 'redux/transactions/transactions.thunk';
import { Box } from 'components/Box/Box.styled';

import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import Table from 'components/Table';

import { TransactionsDataWrapper } from './Transactions.styled';
import { theme } from 'theme';
import MobTable from 'components/MobTable';
import Summary from 'components/Summary';

export default function Incomes() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectIncomesData);
  const stats = useSelector(selectIncomesSortedLastSixMonths);
  const categories = useSelector(selectIncomesCategories);

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea
            categories={categories}
            addFunction={addIncomeThunk}
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
