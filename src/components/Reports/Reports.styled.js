import styled from 'styled-components';

export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
`;
export const ReportContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 30px;
    box-shadow: ${({ theme }) => theme.shadows.base};
    width: 1034px;
    padding: 20px 200px;
    margin-bottom: 40px;
`;
