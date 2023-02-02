import Table from 'components/Table';
import { Box } from 'components/Box/Box.styled';
import { useMediaQuery } from 'react-responsive';
import { theme } from 'theme';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { useSelector, useDispatch } from 'react-redux';
import { selectExpensesData } from 'redux/transactions/transactions.selectors';
import {
  addExpenseThunk,
  getExpenseCategoriesThunk,
} from 'redux/transactions/transactions.thunk';
import { useEffect, useState } from 'react';

export default function Expenses() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectExpensesData);

  const [expensesCategories, setExpensesCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExpenseCategoriesThunk()).then(data => {
      setExpensesCategories(data.payload);
    });
  }, [dispatch]);

  return (
    <Box>
      {isMobile ? (
        <MobTable data={data} />
      ) : (
        <>
          <AddingExpensessArea
            categories={expensesCategories}
            addFunction={addExpenseThunk}
          />
          <Table data={data} />
        </>
      )}
    </Box>
  );
}
