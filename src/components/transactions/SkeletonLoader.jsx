import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { Summary } from 'components/Summary/Summary';
import { TransactionsDataWrapper } from './Transactions.styled';

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
          <AddingExpensessArea />
          <TransactionsDataWrapper>
            <Table data={[]} />
            {!isMobile && <Summary stats={[]} />}
          </TransactionsDataWrapper>
        </>
      )}
    </Box>
  );
}
