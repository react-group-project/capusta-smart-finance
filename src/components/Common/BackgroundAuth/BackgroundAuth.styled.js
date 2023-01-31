import styled from 'styled-components';
import decorAuthBgTopDeskTab from '../../../images/decorAuthBgTopDeskTab.svg';
import decorAuthBgBottomDeskTab from '../../../images/decorAuthBgBottomDeskTab.svg';
import decorAuthBgBottomMobile from '../../../images/decorAuthBgBottomMobile.svg';
import decorAuthBgTopMobile from '../../../images/decorAuthBgTopMobile.svg';

export const BackgroundAuth = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    min-height: calc(
        100vh - 57px
    ); //height 100% встановитти не виходить - прийшлось використовувати (вьюпорт - header);

    background-image: url(${decorAuthBgBottomMobile});
    background-repeat: no-repeat;
    background-position: bottom 8px left 8px;

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        background-image: url(${decorAuthBgBottomDeskTab});
        background-repeat: no-repeat;
        background-position: bottom 56px left 103px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        background-position: bottom 50px left 230px;
    }

    &::before {
        display: block;
        position: absolute;
        content: '';

        width: 100%;
        height: 295px;

        background-color: ${props => props.theme.colors.blue.light};
        border-bottom-left-radius: 120px;

        background-image: url(${decorAuthBgTopMobile});
        background-repeat: no-repeat;
        background-position: top 98px right 8px;

        z-index: -1;

        @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
            height: 526px;

            background-image: url(${decorAuthBgTopDeskTab});
            background-repeat: no-repeat;
            background-position: top 28px center;
        }
    }
`;
