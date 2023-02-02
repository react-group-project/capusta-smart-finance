import { useMediaQuery } from 'react-responsive';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'components/Table';
import { useEffect, useState } from 'react';
import {
  addIncomeThunk,
  getIncomeCategoriesThunk,
} from 'redux/transactions/transactions.thunk';
import { Box } from 'components/Box/Box.styled';
import { MobTable } from 'components/MobTable/MobTable';
import { AddingExpensessArea } from 'components/AddingExpensessArea/AddingExpensessArea';
import { selectIncomesData } from 'redux/transactions/transactions.selectors';
import { theme } from 'theme';

export default function Incomes() {
  const isMobile = useMediaQuery({
    query: `(max-width: calc(${theme.breakpoints[1]} - 1px))`,
  });
  const data = useSelector(selectIncomesData);

  const [incomesCategories, setIncomesCategories] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIncomeCategoriesThunk()).then(data => {
      setIncomesCategories(data.payload);
    });
  }, [dispatch]);

  return (
    <Box>
      {isMobile ? (
        <MobTable />
      ) : (
        <>
          <AddingExpensessArea
            categories={incomesCategories}
            addFunction={addIncomeThunk}
          />
          <Table data={data} />
        </>
      )}
    </Box>
  );
}
