import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReportsItem from './ReportsItem/ReportsItem';
import { List, ReportContainer } from './Reports.styled';
import ArrowButton from './ArrowButton/ArrowButton';
import {
  selectGetPeriodStatus,
  selectPeriod,
} from 'redux/transactions/transactions.selectors';
import NoFoundData from 'components/NoData/NoData';
import { Status } from 'constants';
import AppSpinner from 'components/Spinner/AppSpinner';
import { Box } from 'components/Box/Box.styled';

export default function Reports({ onChangeCategory, onChangeWages, wages }) {
  const data = useSelector(selectPeriod);
  const periodStatus = useSelector(selectGetPeriodStatus);
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

      {periodStatus === Status.PENDING ? (
        <Box width="100%" textAlign="center" mt="20px">
          <AppSpinner />
        </Box>
      ) : statCategories.length > 0 ? (
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
        <NoFoundData />
      )}
      {}
    </ReportContainer>
  );
}
Reports.propTypes = {
  onChangeCategory: PropTypes.func.isRequired,
  onChangeWages: PropTypes.func.isRequired,
  wages: PropTypes.string.isRequired,
};
