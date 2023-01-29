import styled from 'styled-components';
import { MdArrowBackIosNew } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

export const PrevArrow = styled(MdArrowBackIosNew)`
    color: ${({ theme }) => theme.colors.orange.base};
`;

export const NextArrow = styled(MdArrowForwardIos)`
    color: ${({ theme }) => theme.colors.orange.base};
`;
export const Slider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;
export const StyledButton = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    display: flex;
`;
