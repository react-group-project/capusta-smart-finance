import styled from 'styled-components';
export const WagesContainer = styled.div`
    @media screen and (max-width: 767px) {
        width: 280px;
        height: 85px;
        padding-top: 20px;
        padding-bottom: 25px;
        padding-left: 10px;
        padding-right: 10px;
    }
    @media screen and (min-width: ${({ theme }) =>
            theme.breakpoints[1]}) and (max-width: 1279px) {
        width: 704px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1034px;
    height: 50px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radii[2]}px;
    box-shadow: ${({ theme }) => theme.shadows.base};
    padding-top: 15px;
    padding-bottom: 15px;
    margin-bottom: 32px;
`;

export const Text = styled.p`
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-size: ${({ theme }) => theme.fontSizes[4]};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
        margin-right: 15px;
    }
`;
export const PositiveSum = styled(Text)`
    color: ${({ theme }) => theme.colors.green.base};
`;
export const NegativeSum = styled(Text)`
    position: relative;
    color: ${({ theme }) => theme.colors.red.base};
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
        margin-right: 40px;
        ::after {
            display: inline-block;
            content: '';
            position: absolute;

            border: 1px solid ${({ theme }) => theme.colors.grey.light};
            height: 36px;
            right: -20px;
            top: -10px;
        }
    }
`;
export const MobileContainer = styled.div`
    @media screen and (max-width: 767px) {
        width: 130px;
        text-align: center;
        position: relative;
        &:not(:last-child) {
            ::after {
                display: block;
                content: '';
                position: absolute;
                height: 70px;
                border: 1px solid ${({ theme }) => theme.colors.grey.light};
                right: -6px;
                top: -14px;
            }
        }
    }
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
        display: flex;
    }
`;
