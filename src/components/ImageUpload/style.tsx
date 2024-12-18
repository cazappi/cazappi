import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveHeight as rh,
    responsiveFontSize as rf, responsiveWidth as rw } from '../../utils/responsive-functions';

export const ImageComp = styled.img`
    width: 100%;
    height: ${rh(500)};
    object-fit: cover;
`;

export const ImageProfile = styled.img`
    width: ${rw(150)};
    height: ${rw(150)};
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid ${THEME.COLORS.PRIMARY};
    text-align: center;
`;

export const ImgContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: end;
    margin-bottom: ${rh(30)};
`;

export const AddImg = styled.input`
    display:none;
`;

export const Icon = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${THEME.COLORS.PRIMARY};
    border-radius: 50%;
    width: ${rh(60)};
    height:${rh(60)};
    color: white;
    cursor: pointer;
    position: absolute;
    font-size: ${rf(24)};
    margin-top: -${rh(40)};
    margin-right: ${rh(20)};
`;