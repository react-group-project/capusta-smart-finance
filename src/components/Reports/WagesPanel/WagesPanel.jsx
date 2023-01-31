import { useSelector } from 'react-redux';
import { convertMoneyToStringWithCurrency } from 'helpers';
import { selectPeriod } from 'redux/transactions/transactions.selectors';
import {
  WagesContainer,
  MobileContainer,
  Text,
  PositiveSum,
  NegativeSum,
} from './WagesPanel.styled';

export default function WagesPanel() {
  const data = useSelector(selectPeriod);

  return (
    <WagesContainer>
      <MobileContainer>
        <Text>Expenses:</Text>
        <NegativeSum>
          - {convertMoneyToStringWithCurrency(data.expenses.total)}
        </NegativeSum>
      </MobileContainer>
      <MobileContainer>
        <Text>Income:</Text>
        <PositiveSum>
          + {convertMoneyToStringWithCurrency(data.incomes.total)}
        </PositiveSum>
      </MobileContainer>
    </WagesContainer>
  );
}
