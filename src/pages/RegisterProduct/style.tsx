import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-inline: ${rw(250)};
`;
export const Container = styled.div`
    width: 50%;
`;
export const InfoPage = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    margin-left: ${rw(250)};
    margin-bottom: ${rw(30)};
    font-size: ${rf(20)};
`;
export const NoWrap = styled.span`
    font-color: ${THEME.COLORS.GRAY_600};
    white-space: nowrap;
    margin-inline: ${rw(8)};
`;
export const AtualPage = styled(NoWrap)`
    font-weight: 500;
`;

export const Titulo = styled.h1`
    color: ${THEME.COLORS.PRIMARY};
    font-size: ${rf(60)};
    font-weight: 500;
`;

export const RedLine = styled.div`
    background-color: ${THEME.COLORS.PRIMARY};
    width: 100%;
    height: ${rh(7)};
    margin-block: ${rh(50)};
`;

export const ActionButton = styled.button`
    cursor: pointer;
    font-size: ${rf(30)};
    border-radius: 20px;
    padding-block: ${rh(10)};
    padding-inline: ${rw(80)};
    margin-top: ${rh(20)};
    color: white;
    background-color: #32cf15;
    margin-bottom: ${rh(80)};

    &:hover {
        background-color: #259410;
        color:white;
    }
`;