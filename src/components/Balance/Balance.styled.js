import { Box } from 'components/Box/Box.styled';
import { Button } from 'components/Common/Button/Button.styled';
import { Text } from 'components/Common/Text/Text.styled';
import styled from 'styled-components';

export const BalanceContainer = styled(Box)`
  display: flex;
  align-items: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-direction: column;
    gap: 8px;

    width: 100%;
  }
`;

export const BalanceInput = styled.input`
  padding: 12px 14px;

  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-align: center;

  border: none;
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.sm}px;
  text-transform: uppercase;
  box-shadow: none;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-grow: 1;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right-width: 1px;
    width: 50%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 16px;
  }
`;

export const BalanceLabel = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-right: 20px;
  }

  color: ${({ theme }) => theme.colors.grey.alpha};

  text-transform: none;
`;

export const BalanceConfirmButton = styled(Button)`
  padding-left: 34px;
  padding-right: 34px;

  color: ${({ theme }) => theme.colors.grey.alpha};

  box-shadow: none;
  border: 2px solid ${({ theme }) => theme.colors.white};

  transition: ${({ theme }) =>
    theme.transitions.create(['color', 'border-color', 'background-color'])};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    border-color: ${({ theme }) => theme.colors.orange.base};
    background-color: ${({ theme }) => theme.colors.orange.base};
  }

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-grow: 1;
    width: 50%;

    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left-width: 1px;
  }
`;
