import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';

import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';

import { TransactionsDataWrapper } from './Transactions.styled';
import MobTable from 'components/MobTable';
import Summary from 'components/Summary';

export default function SkeletonLoader() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea categories={[]} addFunction={() => {}} />
          <TransactionsDataWrapper>
            <Table data={[]} />
            {!isMobile && <Summary stats={[]} />}
          </TransactionsDataWrapper>
        </>
      )}
    </Box>
  );
}
