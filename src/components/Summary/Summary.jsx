import { List, Item, ListHead, Wrapper } from './Summary.styled';
import { convertMoneyToString } from 'helpers';
import { subMonths, format } from 'date-fns';

function getLastMonths(stats, monthQuantity = 6) {
  const newStats = [];
  const date = new Date();

  for (let i = 0; i < monthQuantity; i += 1) {
    const newDate = subMonths(date, i);
    const month = format(newDate, 'MMMM');
    const foundMonth = stats.find(m => m.month === month);

    if (!foundMonth) {
      newStats.push({
        id: newDate.getMonth() + 1,
        month: format(newDate, 'MMMM'),
        amount: 0,
      });
    } else {
      newStats.push(foundMonth);
    }
  }

  return newStats;
}

export const Summary = ({ stats }) => {
  return (
    <Wrapper>
      <ListHead>Summary</ListHead>

      <List>
        {getLastMonths(stats).map(stat => (
          <Item key={stat.id}>
            <p>{stat.month}</p>
            <p>{convertMoneyToString(stat.amount)}</p>
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};
