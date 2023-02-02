import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import Chart from './Chart';
import MobileChart from './MobileChart';
import { selectPeriodByCategory } from 'redux/transactions/transactions.selectors';

export default function CommonChart({ wages, category }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });

  const data = useSelector(state =>
    selectPeriodByCategory(state, {
      categoryName: category,
      transactionName: wages,
    })
  );

  function changeDesctopData(data) {
    return (data = {
      labels: ['', ...data.labels, ''],
      data: [null, ...data.data, null],
    });
  }
  return (
    <>
      {isMobile ? (
        <MobileChart stats={data} />
      ) : (
        <Chart stats={isTablet ? data : changeDesctopData(data)} />
      )}
    </>
  );
}
CommonChart.propTypes = {
  wages: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
