import styled from 'styled-components';

export const List = styled.ul`
    width: 623px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;
export const ReportContainer = styled.div`
    @media screen and (min-width: ${({ theme }) =>
            theme.breakpoints[1]}) and (max-width: 1279px) {
        width: 704px;
        padding: 20px 40px;
    }
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadows.base};
    width: 1034px;
    padding: 20px 200px;
    margin-bottom: 40px;
`;
