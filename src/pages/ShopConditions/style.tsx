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
`;

export const TEXT = styled.p`
    font-family: 'Inter';
    font-size: ${rf(24)};
    font-weight: 400;
    line-height: 29px;
`;