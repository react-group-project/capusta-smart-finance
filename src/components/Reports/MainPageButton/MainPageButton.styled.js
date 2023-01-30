import styled from 'styled-components';

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-right: 16px;
`;
export const ComponentContainer = styled.div`
    display: flex;

    margin-bottom: 42px;
`;
export const Text = styled.p`
    @media screen and (max-width: 767px) {
        display: none;
    }
    color: ${({ theme }) => theme.colors.grey.alpha};
    margin-top: auto;
    margin-bottom: auto;
`;
export const Svg = styled.svg`
    display: block;
`;
