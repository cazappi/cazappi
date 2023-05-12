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

export const TITLE = styled.text`
    font-size: ${rf(48)};
    color: ${THEME.COLORS.PRIMARY};
    text-align: center;
    font-weight: 700;
`;

export const LOGOIMAGE = styled.img`
  height: min(6.13vh, 90px);
  padding-bottom: min(2.38vh, 35px);
`;

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${rh(95)};
  justify-content: space-between;
  @media (max-width: 710px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const FLEXCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export const GROUP = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  width: 90%;
  @media (max-width: 710) {
  }
`;

export const DIVTEXT = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  font-size: ${rf(24)};
  @media (max-width: 710px) {
    font-size: 16px;
    width: 100%;
  }
`;

export const DIVTEXTMAIN = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${rf(36)};
  margin-left: ${rw(41)};
  @media (max-width: 710px) {
    font-size: 16px;
    margin-left: 0;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const EMAIL = styled.span`
  font-weight: 500;
`;

export const IMAGE = styled.img`
  width: ${rw(200)};
  margin: 0;
  @media (max-width: 710px) {
    width: 30%;
    margin-bottom: 25px;
  }
`;


export const LINK = styled.a`
  color: ${THEME.COLORS.PRIMARY};
  font-weight: bold;
  cursor: pointer;
  text-decoration: underline;
  transition-duration: 0.3s;
  @media (max-width: 710px) {
    text-decoration: none;
  }
  &:hover {
    opacity: 0.8;
  }
`;