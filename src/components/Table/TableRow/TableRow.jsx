import { useDispatch } from 'react-redux';
import { Tr, Td, Icon, Ttrash, ExpenseTd } from './TableRow.styled';
import { deleteTransactionThunk } from 'redux/transactions/transactions.thunk';
import { convertMoneyToStringWithCurrency } from 'helpers';
import { DeleteButton } from 'components/Common/Button';

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
        <DeleteButton onClick={() => dispatch(deleteTransactionThunk(id))}>
          <Icon />
        </DeleteButton>
      </Ttrash>
    </Tr>
  );
};
