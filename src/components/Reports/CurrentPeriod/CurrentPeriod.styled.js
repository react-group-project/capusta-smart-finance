import styled from 'styled-components';

export const Button = styled.button`
    cursor: pointer;
    border: none;
    background-color: transparent;
`;
export const PaleText = styled.p`
    color: ${({ theme }) => theme.colors.grey.alpha};
    margin-bottom: 5px;
    text-align: center;
`;
export const FlexContainer = styled.div`
    display: flex;
`;
