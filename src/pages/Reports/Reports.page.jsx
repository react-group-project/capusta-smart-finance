import CommonChart from 'components/Chart/CommonChart';
import Reports from 'components/Reports/Reports';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPeriodDataThunk } from 'redux/transactions/transactions.thunk';
import { selectPeriod } from './../../redux/transactions/transactions.selectors';

export default function ReportsPage() {
    const dispatch = useDispatch();
    const data = useSelector(selectPeriod);
    const data1 = data.expenses?.data?.Health?.list.reduce(
        (acc, item) => ({
            labels: [...acc.labels, item.description],
            data: [...acc.data, item.amount],
        }),
        { labels: [], data: [] }
    );
    console.log(data);
    const [date, setDate] = useState('2023-01');
    useEffect(() => {
        dispatch(getPeriodDataThunk({ date }));
    }, [date, dispatch]);
    return (
        <>
            <Reports />
            <CommonChart stats={data1} />
        </>
    );
}
