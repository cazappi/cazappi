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
  padding-bottom: ${rh(60)};
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
font-size: ${rf(22)};
align-items: flex-start;
margin-bottom: ${rh(30)};
`;

export const INFO = styled.div`
font-weight: 400;
font-size: ${rf(22)};
align-items: flex-start;
color: ${THEME.COLORS.GRAY_600};
`;

export const ITEM = styled.div`
margin-left: ${rw(40)};
margin-right: ${rw(40)};
margin-bottom: ${rh(30)};
margin-top: ${rh(10)};

`;

export const Input = styled.div`
  margin-top: ${rh(50)};
  width: 100%;
`;

export const Info = styled.span`
  width: 23%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: ${rh(40)};
  color: ${THEME.COLORS.PRIMARY};
  font-weight: 500;
  text-decoration: underline;
`;