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
    margin-top: rh(57);
    font-size: ${rf(48)};
    line-height: 58px;
    font-weight: 700;
    color: ${THEME.COLORS.PRIMARY};
    text-align: center;
    font-family: 'Inter';
    @media (max-width: 710px) {
      font-size: ${rf(20)};
      line-height: 23.44px;
      font-weight: 500;
    }
`;

export const TEXT = styled.p`
    margin: 0;
    font-family: 'Inter';
    font-size: ${rf(24)};
    font-weight: 400;
    line-height: 29px;
    text-align: justify;
    @media (max-width: 710px) {
      font-size: ${rf(12)};
      line-height: 14.06px;
    }
`;