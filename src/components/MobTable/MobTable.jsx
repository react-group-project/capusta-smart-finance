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
} from './MobTable.styled';

export const MobTable = () => {
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

  return (
    <List>
      {incomes.map(income => {
        const { date, description, category, amount, _id } = income;
        return (
          <Item key={_id}>
            <div>
              <Descr>{description}</Descr>
              <CategoryWrapper>
                <Content>{date}</Content>
                <Content>{category}</Content>
              </CategoryWrapper>
            </div>
            <EmountWrapper>
              <Emout>{amount}</Emout>
              <Button>
                <Icon />
              </Button>
            </EmountWrapper>
          </Item>
        );
      })}
    </List>
  );
};
