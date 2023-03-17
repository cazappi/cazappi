import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';


export const H1 = styled.h1`
  background-color: ${THEME.COLORS.PRIMARY};
  margin: 0;
  width: ${rw(1440)};
`;
