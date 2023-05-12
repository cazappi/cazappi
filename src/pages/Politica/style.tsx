import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';


export const HEADER = styled.header`
  background-color: ${THEME.COLORS.PRIMARY};
  margin: 0;
  width: ${rw(1400)};
  min-height: min(10.9vh, 160px);
  height: ${rh(160)};
  display: flex;
  align-items: end;
  justify-content: space-between;
  padding-left: ${rw(20)};
  padding-right: ${rw(20)};
`;

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
`;

export const LINK = styled.a`
  color: ${THEME.COLORS.WHITE};
  font-size: ${rf(24)};
  font-weight: bold;
  padding-bottom: min(2.38vh, 35px);
  text-decoration: none;
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export const BUTTON = styled.button`
  background-color: ${THEME.COLORS.PRIMARY};
  cursor: pointer;
  border: none;
  width: ${rw(150)};
  height: ${rh(64)};
  border-radius: 32px;
  color: ${THEME.COLORS.WHITE};
  font-size: ${rf(20)};
  font-weight: bold;
  font-family: 'Roboto';
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  margin-bottom: ${rh(30)};
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

export const CHECK = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  margin-right: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: 24px;
  height: 24px;
  border: 2px solid ${THEME.COLORS.PRIMARY};
  color: ${THEME.COLORS.SECONDARY};
  border-radius: 5px;
  &:focus{
    background-color: ${THEME.COLORS.PRIMARY};
  }
`;