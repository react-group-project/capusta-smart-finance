import { Button } from 'components/Common/Button/Button.styled';
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBalance } from 'redux/user/user.selectors';
import { addUserBalanceThunk } from 'redux/user/user.thunk';
import { BalanceInput, BalanceLabel } from './Balance.styled';

export default function Balance() {
  const dispatch = useDispatch();
  const userBalance = useSelector(selectUserBalance);
  const [balance, setBalance] = useState(userBalance);

  useEffect(() => {
    setBalance(userBalance);
  }, [userBalance]);

  return (
    <>
      <BalanceLabel as="label" htmlFor="balance">
        Balance:
      </BalanceLabel>

      <NumericFormat
        displayType="input"
        value={balance.toFixed(2)}
        customInput={BalanceInput}
        valueIsNumericString={true}
        allowNegative
        decimalScale={2}
        thousandSeparator=" "
        suffix={' UAH'}
        id="balance"
        onValueChange={({ value }) => {
          setBalance(Number(value));
        }}
      />
      <Button
        variant="whiteOutline"
        onClick={() => {
          dispatch(addUserBalanceThunk(balance));
        }}
      >
        Confirm
      </Button>
    </>
  );
}
