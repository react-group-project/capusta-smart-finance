import { Tr, Table, List, Item, ListHead, Wrapper } from './Summary.styled';

export const Summary = () => {
  const monthStats = {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 'N/A',
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  };

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(monthStats).map(month => (
            <Tr key={month[0]}>
              <th>{month[0]}</th>
              <th>{month[1]}</th>
            </Tr>
          ))}
        </tbody>
      </Table>

      <Wrapper>
        <ListHead>Summary</ListHead>

        <List>
          {Object.entries(monthStats).map(month => (
            <Item key={month[0]}>
              <p>{month[0]}</p>
              <p>{month[1]}</p>
            </Item>
          ))}
        </List>
      </Wrapper>
    </>
  );
};
