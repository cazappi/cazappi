import styled from 'styled-components';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Container = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-inline: ${rw(300)};
    margin-block: ${rh(100)};
`;

export const ImgButtonWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;

export const ActionButton = styled.button`
    cursor: pointer;
    font-size: ${rf(28)};
    font-weight: 500;
    border-radius: ${rf(28)};
    padding-block: ${rh(40)};
    padding-inline: ${rw(40)};
    width: 35%;
    color: #32cf15;
    background-color: none;
    border: 1px solid #32cf15;

    &:hover {
        background-color: #32cf15;
        color:white;
    }
`;


export const BorderOptions = styled.div`
    width: 100%;
    margin-bottom: ${rh(30)};
    margin-top: ${rh(60)};
    border-bottom: 1px solid #999999; 
`;
export const Span = styled.div`
    margin-left: ${rh(30)};
`;