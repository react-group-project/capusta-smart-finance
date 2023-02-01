import { useSelector } from 'react-redux';
import { selectExpensesMonthsStats } from 'redux/transactions/transactions.selectors';
import { List, Item, ListHead, Wrapper } from './Summary.styled';

export const Summary = () => {
  const stats = useSelector(selectExpensesMonthsStats);

  return (
    <Wrapper>
      <ListHead>Summary</ListHead>

      <List>
        {stats.map(stat => (
          <Item key={stat.id}>
            <p>{stat.month}</p>
            <p>{stat.amount === 'N/A' ? '0,00' : stat.amount}</p>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
