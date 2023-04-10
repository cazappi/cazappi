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

export const BUTTON = styled.button`
  background-color: ${THEME.COLORS.PRIMARY};
  cursor: pointer;
  border: none;
  width: ${rw(220)};
  height: ${rh(150)};
  border-radius: 16px;
  color: ${THEME.COLORS.WHITE};
  font-size: ${rf(24)};
  font-weight: bold;
  font-family: 'Roboto';
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;
