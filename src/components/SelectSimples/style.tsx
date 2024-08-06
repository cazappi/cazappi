import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';


export const SELECT = styled.select`
  margin-top: ${rh(10)};
  background: ${THEME.COLORS.GRAY_300};
  border-radius: 10px;
  width: 100%;
  padding: ${rw(6)};
  padding-left: ${rw(15)};
  border: none;
  font-size: ${rf(26)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  &:focus {
    outline: none;
    border-color: ${THEME.COLORS.PRIMARY};
  }
`;