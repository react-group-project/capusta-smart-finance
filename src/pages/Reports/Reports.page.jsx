import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import WagesPanel from 'components/Reports/WagesPanel/WagesPanel';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import CurrentPeriod from 'components/Reports/CurrentPeriod/CurrentPeriod';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import { ReportContainer, ReportsHeader } from './Reports.page.styled';
import { Box } from 'components/Box/Box.styled';
import { BackgroundHome } from 'components/Common/BackgroundHome/BackgroundHome.styled';
import Balance from 'components/Balance';
import { selectPeriod } from './../../redux/transactions/transactions.selectors';

export default function ReportsPage() {
  const dispatch = useDispatch();
  const [date, setDate] = useState(() => new Date());
  const [wages, setWages] = useState('expenses');
  const [category, setCategory] = useState('');

  useEffect(() => {
    dispatch(getPeriodDataThunk({ date: format(date, 'yyyy-MM') }));
  }, [date, dispatch]);

  const data = useSelector(selectPeriod);
  const showChart = data?.[wages]?.total !== 0;

  return (
    <Box as="section" height="calc(100% - 57px)">
      <BackgroundHome>
        <ReportContainer>
          <ReportsHeader>
            <MainPageButtonArrow />
            <Balance order={{ _: 2, tablet: 0 }} />
            <CurrentPeriod date={date} onChangeDate={setDate} />
          </ReportsHeader>

          <WagesPanel />

          <Reports
            onChangeCategory={setCategory}
            wages={wages}
            onChangeWages={setWages}
          />
          {showChart && <CommonChart wages={wages} category={category} />}
        </ReportContainer>
      </BackgroundHome>
    </Box>
  );
}
