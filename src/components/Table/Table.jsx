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

const Table = ({ data }) => {
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
            {data.map(expense => {
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
