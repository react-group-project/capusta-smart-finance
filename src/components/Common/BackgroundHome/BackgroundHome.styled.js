import styled from 'styled-components';
import decorHomeBgDesktop from '../../../images/decorHomeBgDesktop.svg';
import decorHomeBgTablet from '../../../images/decorHomeBgTablet.svg';

export const BackgroundHome = styled.div`
    position: relative;
    z-index: 1;

    width: 100%;
    min-height: calc(
        100vh - 57px
    ); //height 100% встановитти не виходить - прийшлось використовувати (вьюпорт - header);

    @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
        background-image: url(${decorHomeBgTablet});
        background-repeat: no-repeat;
        background-position: bottom 59px right 88px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints[2]}) {
        background-image: url(${decorHomeBgDesktop});
        background-repeat: no-repeat;
        background-position: bottom 3px center;
    }

    &::before {
        display: block;
        position: absolute;
        content: '';

        width: 100%;
        height: 295px;

        background-color: ${props => props.theme.colors.blue.light};
        border-bottom-left-radius: 120px;

        z-index: -1;

        @media screen and (min-width: ${props => props.theme.breakpoints[1]}) {
            height: 526px;
        }
    }
`;
