import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import { selectPeriod } from './../../redux/transactions/transactions.selectors';

export default function ReportsPage() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');
    const getCategory = category => {
        setCategory(category[0]);
    };

    const data = useSelector(selectPeriod);
    const statCategories = Object.entries(data?.expenses.data);

    const chartData = data.expenses?.data?.[category]?.list.reduce(
        (acc, item) => ({
            labels: [...acc.labels, item.description],
            data: [...acc.data, item.amount],
        }),
        { labels: [], data: [] }
    );

    const [date, setDate] = useState('2023-01');
    useEffect(() => {
        dispatch(getPeriodDataThunk({ date }));
    }, [date, dispatch]);
    return (
        <>
            <Reports
                statCategories={statCategories}
                getCategory={getCategory}
            />
            <CommonChart stats={chartData} />
        </>
    );
}
