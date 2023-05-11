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

export const TITLE = styled.text`
    margin-top: ${rh(80)};
    font-size: ${rf(48)};
    line-height: 58px;
    font-weight: 700;
    color: ${THEME.COLORS.PRIMARY};
    text-align: center;
    font-family: 'Inter';
    @media (max-width: 710px) {
        margin-top: ${rh(21)};
        font-size: ${rf(20)};
        line-height: 23.44px;
        font-weight: 500;
    }
`;

export const TEXT = styled.text`
    margin: 0;
    font-family: 'Roboto';
    font-size: ${rf(24)};
    font-weight: 400;
    line-height: 28.13px;
    text-align: justify;
    margin-bottom: ${rh(91)};
    @media (max-width: 710px) {
      font-size: ${rf(12)};
      line-height: 14.06px;
      margin-bottom: ${rh(20)};
    }
`;

export const CONTENT = styled.text`
    color: ${THEME.COLORS.GRAY_600};
    margin: 0;
    font-size: ${rf(26)};
    font-weight: 400;
    line-height: 30px;
    text-align: justify;
    @media (max-width: 710px) {
      font-size: ${rf(12)};
      line-height: 13px;
    }
`;

export const BOX = styled.div`
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
    margin: ${rh(32)} 0;
`;

export const BOXBORDER = styled.div`
    border: 2px solid ${THEME.COLORS.PRIMARY};
    padding: 24px;
    border-radius: 10px;
    margin-bottom: ${rh(43)};
    width: ${rw(636)};
    display: flex;
    flex-direction: column;
    align-items: initial;
    justify-content: initial;
    @media (max-width: 710px) {
        width: 100%;
    }
`;

export const LABEL = styled.label`
    color: ${THEME.COLORS.BLACK};
    font-size: ${rf(28)};
    font-weight: 700;
    line-height: 33px;
    text-align: justify;
    @media (max-width: 710px) {
      font-size: ${rf(12)};
      line-height: 14px;
    }
`;

export const BOLD = styled.text`
    color: ${THEME.COLORS.BLACK};
    margin-bottom: ${rh(16)};
    font-size: ${rf(28)};
    font-weight: 700;
    line-height: 33px;
    text-align: justify;
    @media (max-width: 710px) {
      font-size: ${rf(12)};
      line-height: 14px;
    }
`;

export const LINE = styled.div`
    border: 1px solid ${THEME.COLORS.PRIMARY};
    height: 0px;
    margin-top: 0;
    margin-bottom: ${rh(15)};
    width: ${rw(800)};
`;

export const RADIO = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    accent-color: ${THEME.COLORS.PRIMARY};
    cursor: pointer;
    outline: none;
    margin-top: 0;
    margin-left: 0;
    margin-right: ${rw(16)};
    box-shadow: -1.69545px 1.69545px 1.69545px rgba(0, 0, 0, 0.25); 
    &:checked{
        box-shadow: none;
        border: 10px solid ${THEME.COLORS.ERROR};
    }
    @media (max-width: 710px) {
        width: 14px;
        height: 14px;
        &:checked{
            border: 4px solid ${THEME.COLORS.ERROR};
        }
    }
`;