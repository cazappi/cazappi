import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Container = styled.div`
  margin-bottom: ${rh(15)};
  width:100%;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: ${rf(23)};
  color: ${THEME.COLORS.GRAY_600};
  margin-left: ${rw(5)};
`;

export const InputElement = styled.input`
  border: none;
  border-bottom: 1px solid ${THEME.COLORS.GRAY_600};
  font-size: ${rf(23)};
  width: 100%;
  outline: none;
  padding-left: ${rw(5)};
  ::placeholder {
    color: ${THEME.COLORS.BLACK};
    font-weight: 400;
  }
`;
