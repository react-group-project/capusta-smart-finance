import { Box } from 'components/Box/Box.styled';
import { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserBalance } from 'redux/user/user.selectors';
import { addUserBalanceThunk } from 'redux/user/user.thunk';
import {
  BalanceConfirmButton,
  BalanceContainer,
  BalanceInput,
  BalanceLabel,
} from './Balance.styled';

export default function Balance(props) {
  const dispatch = useDispatch();
  const userBalance = useSelector(selectUserBalance);
  const [balance, setBalance] = useState(userBalance);

  useEffect(() => {
    setBalance(userBalance);
  }, [userBalance]);

  return (
    <BalanceContainer {...props}>
      <BalanceLabel as="label" htmlFor="balance">
        Balance:
      </BalanceLabel>

      <Box width="100%" display="flex">
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
        <BalanceConfirmButton
          variant="whiteOutline"
          onClick={() => {
            dispatch(addUserBalanceThunk(balance));
          }}
        >
          Confirm
        </BalanceConfirmButton>
      </Box>
    </BalanceContainer>
  );
}
