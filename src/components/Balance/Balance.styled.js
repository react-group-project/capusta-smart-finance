import { Text } from 'components/Common/Text/Text.styled';
import styled from 'styled-components';

export const BalanceInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  padding: 12px 14px;

  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;

  border: none;
  background: none;
  border-radius: ${({ theme }) => theme.radii.sm}px;
  text-transform: uppercase;
  box-shadow: ${({ theme }) => theme.shadows.whiteOutline};
`;

export const BalanceLabel = styled(Text)`
  text-transform: none;
`;
