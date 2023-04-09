import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const LOGOIMAGE = styled.img`
  height: ${rh(213.59)}
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

export const BUTTONPRIMARY = styled.button`
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

export const BUTTONSECONDARY = styled.button`
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

export const TITLE = styled.text`
    font-size: ${rf(48)};
    color: ${THEME.COLORS.PRIMARY};
`;

export const CONTAINER = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: ${rh(79)};
    margin-bottom: ${rh(79)};
`;