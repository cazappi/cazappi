import styled, { css } from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const FLEXCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TITLE = styled.text`
    font-size: ${rf(48)};
    color: ${THEME.COLORS.BLACK};
    text-align: center;
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

export const INPUTTEXT = styled.div<{type: 'normal' | 'forget'}>`
  color: #000000;
  ${({ type }) => {
          switch (type) {
          case 'normal':
              return css`
                font-size: min(${rf(24)}, 30px);
              `;
          case 'forget':
              return css`
                font-size: min(${rf(18)}, 15px);
              `;
          default:
              return css`
                font-size: ${rf(24)};
              `;
          }
      }};
`;