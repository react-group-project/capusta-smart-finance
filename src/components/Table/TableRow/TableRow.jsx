import { useDispatch } from 'react-redux';
import { Tr, Td, Button, Icon, Ttrash, ExpenseTd } from './TableRow.styled';
import { deleteTransactionThunk } from 'redux/transactions/transactions.thunk';
import { useLocation } from 'react-router-dom';

export const TableRow = ({ date, description, category, amount, id }) => {
  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location);

  return (
    <Tr>
      <Td>{date}</Td>
      <Td>{description}</Td>
      <Td>{category}</Td>
      <ExpenseTd>{amount}</ExpenseTd>
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
