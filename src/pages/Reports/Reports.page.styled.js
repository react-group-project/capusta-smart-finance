import { Container } from 'components/Common/Container/Container.styled';
import styled from 'styled-components';

export const ReportsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    flex-direction: column;
  }
`;

export const ReportContainer = styled(Container)`
  position: relative;
  padding-top: 16px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-top: 40px;
    padding-bottom: 80px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding-left: 123px;
    padding-right: 123px;
  }
`;
