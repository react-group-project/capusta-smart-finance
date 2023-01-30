import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import WagesPanel from 'components/Reports/WagesPanel/WagesPanel';
import MainPageButtonArrow from 'components/Reports/MainPageButton/MainPageButtonArrow';
import CurrentPeriod from 'components/Reports/CurrentPeriod/CurrentPeriod';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import { selectPeriod } from './../../redux/transactions/transactions.selectors';
import { FlexContainer } from './Reports.page.styled';
import { format } from 'date-fns';

export default function ReportsPage() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const [wages, setWages] = useState('expenses');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        dispatch(getPeriodDataThunk(format(date, 'yyyy/MM')));
    }, [date, dispatch]);
    const getCategory = category => {
        setCategory(category[0]);
    };
    const getWages = wages => {
        setWages(wages);
    };
    const data = useSelector(selectPeriod);

    const statCategories = Object.entries(data?.[wages]?.data);

    const chartData = data?.[wages]?.data?.[category]?.list.reduce(
        (acc, item) => ({
            labels: [...acc.labels, item.description],
            data: [...acc.data, item.amount],
        }),
        { labels: [], data: [] }
    );

    return (
        <>
            <FlexContainer>
                <MainPageButtonArrow />
                <CurrentPeriod date={date} setDate={setDate} />
            </FlexContainer>
            <WagesPanel data={data} />
            <Reports
                statCategories={statCategories}
                getCategory={getCategory}
                getWages={getWages}
            />
            <CommonChart stats={chartData} />
        </>
    );
}
