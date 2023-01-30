import { convertMoneyToStringWithCurrency } from 'helpers';
import {
    WagesContainer,
    MobileContainer,
    Text,
    PositiveSum,
    NegativeSum,
} from './WagesPanel.styled';
export default function WagesPanel({ data }) {
    return (
        <>
            <WagesContainer>
                <MobileContainer>
                    <Text>Expenses:</Text>
                    <NegativeSum>
                        -{' '}
                        {convertMoneyToStringWithCurrency(data.expenses.total)}
                    </NegativeSum>
                </MobileContainer>
                <MobileContainer>
                    <Text>Income:</Text>
                    <PositiveSum>
                        + {convertMoneyToStringWithCurrency(data.incomes.total)}
                    </PositiveSum>
                </MobileContainer>
            </WagesContainer>
        </>
    );
}
