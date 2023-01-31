import ReportsItem from './ReportsItem/ReportsItem';
import { List, ReportContainer } from './Reports.styled';
import ArrowButton from './ArrowButton/ArrowButton';
import { useSelector } from 'react-redux';
import { selectPeriod } from 'redux/transactions/transactions.selectors';

export default function Reports({ onChangeCategory, onChangeWages, wages }) {
  const data = useSelector(selectPeriod);
  const statCategories = Object.entries(data[wages].data);

  const changeCategoryHandler = category => {
    onChangeCategory(category);
  };

  return (
    <ReportContainer>
      <ArrowButton onChangeWages={onChangeWages} wages={wages} />

      {statCategories && (
        <List>
          {statCategories.map(category => (
            <li
              key={category[0]}
              onClick={() => changeCategoryHandler(category[0])}
            >
              <ReportsItem category={category} />
            </li>
          ))}
        </List>
      )}
    </ReportContainer>
  );
}
