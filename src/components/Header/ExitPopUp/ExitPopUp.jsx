import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '../../Common/Button/Button.styled.js';

const CloseIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            fill="none"
            viewBox="0 0 14 14"
        >
            <path
                stroke="#52555F"
                strokeWidth="2"
                d="M1 1l12 12M1 13L13 1"
            ></path>
        </svg>
    );
};

const ClosePopUpBtn = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    border: 0;
    background-color: transparent;
    cursor: pointer;
`;

const MainLayer = styled.div`
    width: 380px;
    height: 194px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.theme.colors.white};
`;

const InnerLayer = styled.div``;

const ButtonWrapper = styled.div`
    display: flex;
    column-gap: 15px;
`;

const PopUpText = styled.p`
    margin-top: 0;
    margin-bottom: 20px;

    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes[4]};
    line-height: ${props => props.theme.lineHeights.small};

    text-align: center;
    letter-spacing: ${props => props.theme.letterSpacings.small};
    color: ${props => props.theme.colors.grey.dark};
`;

const PopUpButton = styled(Button)`
    width: 125px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ExitPopUp = ({ toggleModalVisibility, LogOut }) => {
    return (
        <MainLayer>
            <ClosePopUpBtn onClick={toggleModalVisibility}>
                <CloseIcon />
            </ClosePopUpBtn>
            <InnerLayer>
                <PopUpText>Are you sure?</PopUpText>
                <ButtonWrapper>
                    <PopUpButton
                        onClick={LogOut}
                        type="button"
                        variant="secondary"
                    >
                        Yes
                    </PopUpButton>
                    <PopUpButton
                        onClick={toggleModalVisibility}
                        type="button"
                        variant="greyOutline"
                    >
                        No
                    </PopUpButton>
                </ButtonWrapper>
            </InnerLayer>
        </MainLayer>
    );
};

ExitPopUp.propTypes = {
    toggleModalVisibility: propTypes.func.isRequired,
};

export default ExitPopUp;
