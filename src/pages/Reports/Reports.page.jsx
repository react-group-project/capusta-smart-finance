import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import WagesPanel from 'components/Reports/WagesPanel/WagesPanel';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import CurrentPeriod from 'components/Reports/CurrentPeriod/CurrentPeriod';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import {
  selectExpensesPeriodByCategory,
  selectPeriod,
} from './../../redux/transactions/transactions.selectors';
import { ReportsHeader } from './Reports.page.styled';
import { format } from 'date-fns';
import { Box } from 'components/Box/Box.styled';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import { Container } from 'components/Common/Container/Container.styled';
import Balance from 'components/Balance';

export default function ReportsPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(() => new Date());
  const [wages, setWages] = useState('expenses');

  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(getPeriodDataThunk({ date: format(date, 'yyyy-MM') }));
  }, [date, dispatch]);

  const getCategory = category => {
    setCategory(category[0]);
  };

  const data = useSelector(selectPeriod);
  const helthData = useSelector(state =>
    selectExpensesPeriodByCategory(state, 'Health')
  );
  console.log(helthData);
  const statCategories = Object.entries(data?.[wages]?.data);

  const chartData = data?.[wages]?.data?.[category]?.list.reduce(
    (acc, item) => ({
      labels: [...acc.labels, item.description],
      data: [...acc.data, item.amount],
    }),
    { labels: [], data: [] }
  );

  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <Box
          as={Container}
          position="relative"
          pt="40px"
          px={{ _: '20px', tablet: '32px', desktop: '123px' }}
        >
          <ReportsHeader>
            <MainPageButtonArrow />
            <Balance order={{ _: 2, tablet: 0 }} />
            <CurrentPeriod date={date} setDate={setDate} />
          </ReportsHeader>

          <WagesPanel />

          <Reports
            statCategories={statCategories}
            getCategory={getCategory}
            getWages={() => setWages(wages)}
          />
          <CommonChart stats={chartData} />
        </Box>
      </BackgroundHome>
    </Box>
  );
}
