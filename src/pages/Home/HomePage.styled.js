import { Box } from 'components/Box/Box.styled';
import { routes } from 'constants/routes';
import { Link, NavLink } from 'react-router-dom';
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

export const HomeBody = styled(Box)``;

export const HomeTabs = styled(Box)`
  position: fixed;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  gap: 4px;

  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: static;
    display: block;
    height: 40px;

    margin-top: 60px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 8px;
  }
`;

export const HomeTabButton = styled(Box)`
  cursor: pointer;

  flex-grow: 1;
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  background-color: ${({ theme }) => theme.colors.lilac.base};

  &.active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.orange.base};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: inline-block;
    padding: 13px 36px;

    border-top-left-radius: ${({ theme }) => theme.radii.md}px;
    border-top-right-radius: ${({ theme }) => theme.radii.md}px;

    background-color: ${({ theme }) => theme.colors.blue.base};

    &.active {
      color: ${({ theme }) => theme.colors.orange.base};
      background-color: ${({ theme }) => theme.colors.lilac.light};
    }
  }
`;

HomeTabButton.defaultProps = {
  as: NavLink,
};

export const ReportsButton = styled(Box)`
  cursor: pointer;

  display: flex;
  align-items: flex-end;
  gap: 15px;

  color: ${({ theme }) => theme.colors.grey.alpha};
  text-decoration: none;

  border: none;
  border-bottom: 1px solid transparent;
  background: none;

  transition: ${({ theme }) =>
    theme.transitions.create(['border-bottom-color'])};

  &:hover,
  &:focus {
    border-bottom-color: ${({ theme }) => theme.colors.grey.alpha};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
  }
`;

ReportsButton.defaultProps = {
  as: Link,
  to: routes.REPORTS,
};

export const HomeOutlet = styled(Box)`
  width: 100%;

  @media (max-width: calc(${({ theme }) => theme.breakpoints.tablet} - 1px)) {
    margin-top: 140px;
    margin-bottom: 57px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 24px 40px 42px 40px;
    border-radius: ${({ theme }) => theme.radii[2]}px;
    border-top-left-radius: 0px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.base};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px 32px 61px 32px;
  }
`;

// w="full"
// mt={{ _: '140px', tablet: '0' }}
// bg={{ tablet: 'white' }}
// borderRadius={2}
// borderTopLeftRadius="0px"
// px={{ mobile: '0px', tablet: '40px', desktop: '32px' }}
// pb={{ mobile: '0px', tablet: '42px', desktop: '61px' }}
// pt={{ mobile: '0px', tablet: '24px', desktop: '32px' }}
// boxShadow={{ tablet: 'base' }}
