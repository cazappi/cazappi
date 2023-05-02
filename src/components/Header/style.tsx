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
  max-width: 100vw;
  height: ${rh(160)};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 710px) {
    flex-direction: row-reverse;
    height: 81px;
  }
`;

export const LOGOIMAGE = styled.img`
  height: min(6.13vh, 90px);
  margin: 0 ${rw(20)};
  @media (max-width: 710px){
    height: min(4.13vh, 60px);
    margin: 0 15px;
  }
`;

export const OPTIONS = styled.div`
  position: relative;
  background-color: ${THEME.COLORS.PRIMARY};
  z-index: 3;
  padding: 0;
  height: ${rh(85)};
  width: max(559px, ${rw(559)});
  margin-left: 150px;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  @media (max-width: 960px) {
    margin-left: 10px;
  }
  @media (max-width: 710px){
    padding: 81px 35px;
    margin: 0;
    justify-content: initial;
    align-items: initial;
    height: 100%;
    width: 132px;
    top: 0;
    left: 0;
    flex-direction: column;
    position: absolute;
  }
`;

export const BACK = styled.div`
  display: none;
  margin-top: 96px;
  top: 0;
  position: absolute;
  z-index: 2;
  @media (max-width: 710px){
    position: absolute;
    display: block;
    width: 100vw;
    height: 100vh;
    background-color: ${THEME.COLORS.BLACK};
    opacity: 0;
  }
`;

export const OPT = styled.div`
  z-index: 4;
  width: 24px;
  height: 24px;
  margin-left: 37px;
  display: none;
  cursor: pointer;
  @media (max-width: 710px){
    display: block;
  }
`;


export const LINK = styled.a`
  color: ${THEME.COLORS.WHITE};
  font-size: ${rf(24)};
  font-weight: bold;
  text-decoration: none;
  margin: 0 ${rw(20)};
  line-height: 28.13px;
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 710px){
    font-size: ${rf(18)};
    line-height: 16.41px;
    font-weight: 400;
    margin-bottom: 24px;
  }
`;