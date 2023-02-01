import { TableRow } from './TableRow/TableRow';
import {
  StyledTable,
  Thead,
  TableWrapper,
  Th,
  TBody,
  TbodyWrapper,
  HeadRow,
} from './Table.styled';
import { useSelector } from 'react-redux';
import { selectExpensesData } from 'redux/transactions/transactions.selectors';

const Table = () => {
  const expenses = useSelector(selectExpensesData);
  return (
    <TableWrapper>
      <TbodyWrapper>
        <StyledTable>
          <Thead>
            <HeadRow>
              <Th>Date</Th>
              <Th>Descripton</Th>
              <Th>Category</Th>
              <Th>Sum</Th>
              <Th></Th>
            </HeadRow>
          </Thead>
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
export default Table;
