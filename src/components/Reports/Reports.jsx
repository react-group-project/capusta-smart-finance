import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReportsItem from './ReportsItem/ReportsItem';
import { List, ReportContainer, NoDataText } from './Reports.styled';
import ArrowButton from './ArrowButton/ArrowButton';
import { selectPeriod } from 'redux/transactions/transactions.selectors';

export default function Reports({ onChangeCategory, onChangeWages, wages }) {
  const data = useSelector(selectPeriod);
  const statCategories = Object.entries(data[wages].data);
  const [activeIcon, setActiveIcon] = useState('');

  useEffect(() => {
    if (data) {
      const firstElement = Object.entries(data[wages].data);
      if (firstElement.length > 0) {
        onChangeCategory(firstElement[0][0]);
        setActiveIcon(firstElement[0][0]);
      }
    }
  }, [wages, data, onChangeCategory]);

  const changeCategoryHandler = category => {
    onChangeCategory(category);
    setActiveIcon(category);
  };

  return (
    <ReportContainer>
      <ArrowButton onChangeWages={onChangeWages} wages={wages} />

      {statCategories.length > 0 ? (
        <List>
          {statCategories.map(category => (
            <li
              key={category[0]}
              onClick={() => changeCategoryHandler(category[0])}
            >
              <ReportsItem category={category} activeIcon={activeIcon} />
            </li>
          ))}
        </List>
      ) : (
        <NoDataText>You have no data for this period</NoDataText>
      )}
    </ReportContainer>
  );
}
Reports.propTypes = {
  onChangeCategory: PropTypes.func.isRequired,
  onChangeWages: PropTypes.func.isRequired,
  wages: PropTypes.string.isRequired,
};
