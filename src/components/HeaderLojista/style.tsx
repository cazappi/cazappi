import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const GreenIcon = styled.i`
  color: #39FF14;
  margin-right: ${rw(8)};
`;
export const RedIcon = styled.img`
  width: ${rw(50)};
`;
export const Bold = styled.span`
  font-weight: 500;
`;
export const Ml = styled.span`
  margin-left: ${rw(5)};
  white-space: nowrap;
`;
export const Relative = styled.div`
  position: relative;
`;
export const OptionButton = styled.button`
  padding: ${rw(4)};
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:left;
  width:100%;
  border-radius: 8px;
  &:hover {
    background-color: ${THEME.COLORS.GRAY_300};
  }
`;
export const MenuOptions = styled.div`
  display:flex;
  flex-direction:column;
  position:absolute;
  align-items:center;
  right: 0;
  justify-content:left;
  background-color:${THEME.COLORS.WHITE};
  border-radius: 8px;
  padding-left: ${rw(15)};
  padding-right: ${rw(45)};
  padding-block: ${rh(30)};
  zIndex: 1000;
  font-size: ${rf(24)};
`;
export const MenuMoreOptions = styled(MenuOptions)`
  margin-right: ${rw(250)};
`;