import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveHeight as rh,
    responsiveFontSize as rf } from '../../utils/responsive-functions';

export const ImageComp = styled.img`
    width: 100%
`;

export const ImgContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: end;
    margin-bottom: ${rh(50)};
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
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    position: absolute;
    font-size: ${rf(28)};
    margin-top: -${rh(40)};
    margin-right: ${rh(20)};
`;