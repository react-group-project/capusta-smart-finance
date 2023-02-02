import { useDispatch, useSelector } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/transactions.thunk';
import { convertMoneyToStringWithCurrency } from 'helpers';
import {
  Item,
  CategoryWrapper,
  EmountWrapper,
  List,
  Descr,
  Content,
  Amount,
  Icon,
  Button,
  DescrWrapper,
} from './MobTable.styled';
import { selectSortedAllTransactionsData } from 'redux/transactions/transactions.selectors';

export default function MobTable() {
  const dispatch = useDispatch();
  const data = useSelector(selectSortedAllTransactionsData);

  return (
    <List>
      {data.map(income => {
        const { date, description, category, amount, _id } = income;
        return (
          <Item key={_id}>
            <DescrWrapper>
              <Descr>{description}</Descr>
              <CategoryWrapper>
                <Content>{date}</Content>
                <Content>{category}</Content>
              </CategoryWrapper>
            </DescrWrapper>
            <EmountWrapper>
              <Amount amount={amount}>
                {convertMoneyToStringWithCurrency(amount)}
              </Amount>
              <Button onClick={() => dispatch(deleteTransactionThunk(_id))}>
                <Icon />
              </Button>
            </EmountWrapper>
          </Item>
        );
      })}
    </List>
  );
}
