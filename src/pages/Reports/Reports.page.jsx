import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { format } from 'date-fns';
import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import WagesPanel from 'components/Reports/WagesPanel/WagesPanel';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import CurrentPeriod from 'components/Reports/CurrentPeriod/CurrentPeriod';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import { ReportsHeader } from './Reports.page.styled';
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
            <CurrentPeriod date={date} onChangeDate={setDate} />
          </ReportsHeader>

          <WagesPanel />

          <Reports
            onChangeCategory={setCategory}
            wages={wages}
            onChangeWages={setWages}
          />
          <CommonChart wages={wages} category={category} />
        </Box>
      </BackgroundHome>
    </Box>
  );
}
