import { TableRow } from './TableRow/TableRow';
import {
  StyledTable,
  Thead,
  TableWrapper,
  Th,
  TBody,
  TbodyWrapper,
  TheadWrapper,
  HeadRow,
} from './Table.styled';
import { useSelector } from 'react-redux';
import { selectExpensesData } from 'redux/transactions/transactions.selectors';

export const Table = () => {
  const expenses = useSelector(selectExpensesData);
  console.log(expenses);

  return (
    <TableWrapper>
      <TheadWrapper>
        <Thead>
          <HeadRow>
            <Th>Date</Th>
            <Th>Descripton</Th>
            <Th>Category</Th>
            <Th>Sum</Th>
            <Th></Th>
          </HeadRow>
        </Thead>
      </TheadWrapper>
      <TbodyWrapper>
        <StyledTable>
          <TBody>
            {expenses.map(expense => {
              const { date, description, category, amount, _id } = expense;
              return (
                <TableRow
                  key={_id}
                  date={date}
                  description={description}
                  category={category}
                  amount={amount}
                  id={_id}
                />
              );
            })}
          </TBody>
        </StyledTable>
      </TbodyWrapper>
    </TableWrapper>
  );
};
