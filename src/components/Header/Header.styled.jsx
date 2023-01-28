import styled from 'styled-components';

export const StyledHeader = styled.header``;

export const Container = styled.div`
    margin: 0 auto;

    display: flex;
    justify-content: space-between;

    width: 100%;
    padding-left: 21px;
    padding-right: 21px;

    @media screen and (min-width: ${props => props.theme.breakpoints[0]}) {
        width: ${props => props.theme.breakpoints[0]};
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        width: ${props => props.theme.breakpoints[1]};
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        width: ${props => props.theme.breakpoints[2]};
    }
`;

export const UserInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const UserInitials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-right: 16px;

    width: 32px;
    height: 32px;

    text-transform: uppercase;

    border-radius: 50%;
    background-color: #f5f6fa;

    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        margin-right: 12px;
    }
`;

export const UserEmail = styled.p`
    display: none;
    margin-right: 20px;
    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        display: block;
    }
`;

export const Decorline = styled.div`
    display: none;

    margin-right: 20px;
    width: 1px;
    height: 36px;
    background-color: ${props => props.theme.colors.grey.light};

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        display: block;
    }
`;

export const LogInBtn = styled.button`
    display: none;
    padding: 0;

    color: inherit;
    cursor: pointer;
    border: 0;

    background-color: transparent;
    text-decoration: underline;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        display: block;
    }
`;
