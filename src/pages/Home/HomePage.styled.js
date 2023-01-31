import { Box } from 'components/Box/Box.styled';
import { routes } from 'constants/routes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HomeHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-direction: column-reverse;
    gap: 40px;
  }
`;

export const ReportsButton = styled(Box)`
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  gap: 15px;

  color: inherit;
  text-decoration: none;

  border: none;
  border-bottom: 1px solid transparent;
  background: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['border-bottom-color'])};

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.grey.dark};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
  }
`;

ReportsButton.defaultProps = {
  as: Link,
  to: routes.REPORTS,
};
