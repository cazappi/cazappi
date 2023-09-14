import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const LOGOIMAGE = styled.img`
  height: min(6.13vh, 90px);
  padding-bottom: min(2.38vh, 35px);
`;

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
  width: 100%;
  position: absolute;
  height: 9rem;
  bottom: 0;
`;


export const TEXT = styled.div`
  font-size: ${rf(20)};
  color: ${THEME.COLORS.WHITE};
  text-align: center;
  @media (max-width: 710px) {
    font-size: 12px;
  }
`;

export const LINK = styled.a`
  font-size: ${rf(20)};
  color: ${THEME.COLORS.WHITE};
  text-decoration: none;
  text-align: center;
  @media (max-width: 710px) {
    font-size: 10px;
  }
`;
