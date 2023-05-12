import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;

export const REGISTER = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 710px) {
    flex-direction: column-reverse;
  }
`;

export const FLEXCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IMAGE = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: rw(552);
  @media (max-width: 710px) {
    margin-bottom: 21px;
    width: ${rw(960)}; 
  }
`;

export const TEXT = styled.div`
  font-size: ${rf(24)};
  margin-left: ${rw(41)};
  font-weight: 400;
  width: ${rw(569)};
  text-align: justify;
  @media (max-width: 710px) {
    font-size: 16px;
    margin: 0;
    width: ${rw(960)};
    margin-bottom: 71px;
  }
`

export const TEXTINT = styled.div`
  font-size: ${rf(32)};
  font-weight: 500;
  text-align: center; 
  width: ${rw(569)};
  margin-bottom: ${rh(120)};
  @media (max-width: 710px) {
    font-size: 16px;
    width: ${rw(960)};
  }
`

export const SPACE = styled.div`
  @media (max-width: 710px) {
    margin-bottom: 20px;
  }
`

