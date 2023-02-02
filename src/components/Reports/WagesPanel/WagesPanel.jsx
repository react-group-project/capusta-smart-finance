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
          {data.expenses.total === 0
            ? convertMoneyToStringWithCurrency(data.expenses.total)
            : '- ' + convertMoneyToStringWithCurrency(data.expenses.total)}
        </NegativeSum>
      </MobileContainer>
      <MobileContainer>
        <Text>Income:</Text>
        <PositiveSum>
          {data.incomes.total === 0
            ? convertMoneyToStringWithCurrency(data.incomes.total)
            : '+ ' + convertMoneyToStringWithCurrency(data.incomes.total)}
        </PositiveSum>
      </MobileContainer>
    </WagesContainer>
  );
}
