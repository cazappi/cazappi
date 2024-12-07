import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf, 
  responsiveFontSize} from '../../utils/responsive-functions';

export const Span = styled.span`
  font-size: ${rf(50)};
  font-weight: bolder;
`;
export const SubTitle = styled.div`
  font-size: ${rf(30)};
  font-weight: 500;
  width: 70%;
`;