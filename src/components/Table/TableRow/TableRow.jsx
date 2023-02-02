import { useDispatch } from 'react-redux';
import { Tr, Td, Button, Icon, Ttrash, ExpenseTd } from './TableRow.styled';
import { deleteTransactionThunk } from 'redux/transactions/transactions.thunk';
import { convertMoneyToStringWithCurrency } from 'helpers';

export const TableRow = ({ date, description, category, amount, id }) => {
  const dispatch = useDispatch();

  return (
    <Tr>
      <Td>{date}</Td>
      <Td>{description}</Td>
      <Td>{category}</Td>
      <ExpenseTd amount={amount}>
        {convertMoneyToStringWithCurrency(amount)}
      </ExpenseTd>
      <Ttrash trash>
        <Button
          type="button"
          onClick={() => dispatch(deleteTransactionThunk(id))}
        >
          <Icon />
        </Button>
      </Ttrash>
    </Tr>
  );
};
