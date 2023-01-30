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
// import { useSelector } from 'react-redux';

export default function Table() {
  const incomes = [
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439011',
      type: 'expenses',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439012',
      type: 'expenses',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439013',
      type: 'incomes',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439014',
      type: 'expenses',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439015',
      type: 'expenses',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439016',
      type: 'expenses',
    },
    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439017',
      type: 'expenses',
    },

    {
      description: 'Income description',
      amount: 100,
      date: '2020-12-31',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439018',
      type: 'expenses',
    },
  ];

  //   const incomes = useSelector()

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
            {incomes.map(income => {
              const { date, description, category, amount, _id, type } = income;
              return (
                <TableRow
                  key={_id}
                  date={date}
                  description={description}
                  category={category}
                  amount={amount}
                  type={type}
                />
              );
            })}
          </TBody>
        </StyledTable>
      </TbodyWrapper>
    </TableWrapper>
  );
}
