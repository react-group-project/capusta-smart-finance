import styled from 'styled-components';
import { Container } from 'components/Common/Container/Container.styled';
import { Box } from 'components/Box/Box.styled';
import { Text } from 'components/Common/Text/Text.styled';

export const AuthContainer = styled(Container)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 86px;
  padding-bottom: 86px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-left: 171px;
    padding-right: 171px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 91px;
    padding-right: 91px;
    padding-top: 117px;
    padding-bottom: 117px;
  }
`;

export const AuthTitleLayout = styled(Box)`
  margin-right: auto;
  width: fit-content;

  text-align: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AuthTitle = styled(Text)`
  font-size: 54px;
  font-weight: ${({ theme }) => theme.fontWeights.black};
  line-height: calc(120 / 102);
  text-transform: none;
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 91px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    /* position: absolute;
    top: 0; */
    font-size: 102px;
  }
`;

export const AuthSubTitle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[3]};
  line-height: ${({ theme }) => theme.lineHeights.small};
  letter-spacing: 0.18em;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 4px;

    font-size: ${({ theme }) => theme.fontSizes[5]};
    line-height: ${({ theme }) => theme.lineHeights.small};
  }
`;

export const AuthOutlet = styled(Box)`
  width: 100%;
  max-width: 426px;

  margin-top: 50px;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0px;
  }
`;
