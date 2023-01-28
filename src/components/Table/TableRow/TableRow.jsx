// import { useDispatch } from 'react-redux';
import { Tr, Td, Button, Icon, Ttrash } from './TableRow.styled';
// import { IoTrashOutline } from 'react-icons/io5';

export const TableRow = ({ date, description, category, amount, type }) => {
  //   const dispatch = useDispatch();
  const handlDeleteItem = () => {
    // dispatch(() => {});
  };

  return (
    <Tr>
      <Td>{date}</Td>
      <Td>{description}</Td>
      <Td>{category}</Td>
      <Td type={type}>{type === 'expenses' ? `-${amount}` : amount}</Td>
      <Ttrash trash>
        <Button type="button" onClick={handlDeleteItem}>
          {/* <IoTrashOutline /> */}
          <Icon />
        </Button>
      </Ttrash>
    </Tr>
  );
};

// {
//   "incomes": [
//     {
//       "description": "Income description",
//       "amount": 100,
//       "date": "2020-12-31",
//       "category": "Доход",
//       "_id": "507f1f77bcf86cd799439011"
//     }
//   ],
