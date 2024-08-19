import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const FLEXCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SUBTITLE = styled.div`
font-weight: 700;
font-size: 28px;
align-items: flex-start;
margin-left: ${rw(60)};
`;

export const POLITICA = styled.div`
margin-left: ${rw(60)};
margin-bottom: ${rh(20)};
margin-top: ${rh(10)};
font-weight: 400;
`;