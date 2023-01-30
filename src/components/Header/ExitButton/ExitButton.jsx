import styled from 'styled-components';

const ExitBtnWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const ExitTextBtn = styled.button`
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

const ExitMobileBtn = styled.button`
    display: block;
    padding: 0;

    border: 0;
    background-color: inherit;
    cursor: pointer;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        display: none;
    }
`;

function Icon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
        >
            <g fill="#CBCCD0" clipPath="url(#clip0_19406_1192)">
                <path d="M10 14H2V2h8v1h2V0H0v16h12v-3h-2v1z"></path>
                <path d="M12.293 4.293l-1.414 1.414L12.172 7H7v2h5.172l-1.293 1.293 1.414 1.414L16 8l-3.707-3.707z"></path>
            </g>
            <defs>
                <clipPath id="clip0_19406_1192">
                    <path fill="#fff" d="M0 0H16V16H0z"></path>
                </clipPath>
            </defs>
        </svg>
    );
}

export default function ExitButton({ onClick }) {
    return (
        <ExitBtnWrapper onClick={onClick}>
            <ExitTextBtn type="button">Exit</ExitTextBtn>
            <ExitMobileBtn type="button">
                <Icon />
            </ExitMobileBtn>
        </ExitBtnWrapper>
    );
}
