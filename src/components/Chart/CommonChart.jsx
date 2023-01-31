import { useMediaQuery } from 'react-responsive';
import Chart from './Chart';
import MobileChart from './MobileChart';
import { useSelector } from 'react-redux';
import { selectPeriodByCategory } from 'redux/transactions/transactions.selectors';

export default function CommonChart({ wages, category }) {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const data = useSelector(state =>
    selectPeriodByCategory(state, {
      categoryName: category,
      transactionName: wages,
    })
  );

  return (
    <>{isMobile ? <MobileChart stats={data} /> : <Chart stats={data} />}</>
  );
}
