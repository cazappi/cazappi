import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';


export const HEADER = styled.header`
  background-color: ${THEME.COLORS.PRIMARY};
  margin: 0;
  width: 100%;
  min-height: min(10.9vh, 160px);
  height: ${rh(160)};
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const LOGOIMAGE = styled.img`
  height: min(6.13vh, 90px);
  padding-bottom: min(2.38vh, 35px);
  margin-left: ${rw(20)};
`;

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LINK = styled.a`
  color: ${THEME.COLORS.WHITE};
  font-size: ${rf(24)};
  font-weight: bold;
  padding-bottom: min(2.38vh, 35px);
  text-decoration: none;
  margin-right: ${rw(20)};
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;