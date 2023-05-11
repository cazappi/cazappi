import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from '../../theme/index';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';

export const LOGOIMAGE = styled.img`
  height: min(6.13vh, 90px);
  padding-bottom: min(2.38vh, 35px);
`;

export const TITLE = styled.text`
    font-size: ${rf(48)};
    color: ${THEME.COLORS.PRIMARY};
    text-align: center;
`;

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
`;

export const FLEXROWTERMS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50vw;
  justify-content: center;
  @media (max-width: 710px) {
    width: 80vw;
  }
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

export const WRAP = styled.div`

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

export const TEXT = styled.div`
  margin-top: 39px;
  font-size: 24px;
  margin-bottom: 17px;
  width: 100%;
  @media (max-width: 710px) {
    font-size: 16px;
    margin-bottom: 7px;
  }
  `;
  
export const INPUT = styled.input`
  margin-top: ${rh(20)};
  background: ${THEME.COLORS.GRAY_300};
  border-radius: 16px;
  width: ${rw(420)};
  height: ${rw(24)};
  border-color: ${THEME.COLORS.WHITE};
  border: 0;
  &:focus{
    border: 0;
    border-color: ${THEME.COLORS.PRIMARY};
  }
`;

export const TERMS = styled.div`
  max-width: 90%;
  font-size: 24px;
  @media (max-width: 710px) {
    font-size: 14px;
    max-width: 80%;
  }
`

export const SELECTEDBUTTON = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${rw(310)};
  height: ${rh(95)};
  font-size: 20px;
  background: ${THEME.COLORS.WHITE};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border-color:${THEME.COLORS.PRIMARY};
  @media (max-width: 710px) {
    font-size: 12px;
    width: 40%;
  }
  `;
  
  export const UNSELECTEDBUTTON = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${rw(310)};
  height: ${rh(95)};
  background: ${THEME.COLORS.WHITE};
  font-size: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border-color:${THEME.COLORS.GRAY_300};
  border: none;
  @media (max-width: 710px) {
    font-size: 12px;
    width: 40%;
  }
`;