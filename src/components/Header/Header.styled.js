import styled from 'styled-components';

export const StyledHeader = styled.header`
    height: 57px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
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
