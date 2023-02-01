import { useDispatch } from 'react-redux';
import { deleteTransactionThunk } from 'redux/transactions/transactions.thunk';
import { convertMoneyToStringWithCurrency } from 'helpers';
import {
  Item,
  CategoryWrapper,
  EmountWrapper,
  List,
  Descr,
  Content,
  Emout,
  Icon,
  Button,
  DescrWrapper,
} from './MobTable.styled';

export const MobTable = ({ data }) => {
  const dispatch = useDispatch();

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
              <Emout>{convertMoneyToStringWithCurrency(amount)}</Emout>
              <Button onClick={() => dispatch(deleteTransactionThunk(_id))}>
                <Icon />
              </Button>
            </EmountWrapper>
          </Item>
        );
      })}
    </List>
  );
};
