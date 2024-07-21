import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Container = styled.div`
  width: 100%;
  padding-inline: ${rw(15)};
  padding-block: ${rw(15)};
  border: 1px solid ${THEME.COLORS.GRAY_300};
  border-radius: 8px;
  margin-block: ${rh(50)};
`;
export const Logo = styled.img`
  width: ${rw(50)};
  height: ${rw(50)};
  border-radius: 50%;
  margin-right: ${rw(10)};
`;
export const RestaurantInfos = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${THEME.COLORS.GRAY_300};
  padding-inline: ${rw(5)};
  padding-block: ${rw(5)};
`;
export const OrderStatus = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const GreenIcon = styled.div`
  color: #00A650;
  margin-right: ${rw(5)};
`
export const RedIcon = styled(GreenIcon)`
  color: ${THEME.COLORS.PRIMARY};
`
export const Mr = styled.div`
  margin-right: ${rw(5)};
`
export const AvaliarPedido = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 100%;
  border-radius: 8px;
  margin-block: ${rh(8)};
  padding-block: ${rh(10)};
  cursor: pointer;

  &:hover {
    border: 1px solid #39FF14;  
  }
`;

export const OrderInfos = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-block: ${rh(30)};
`;

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: Column;
`;

export const LogoProduct = styled.img`
  width: ${rw(60)};
  border-radius: 30%;
  margin-right: ${rw(10)};
`;

export const GrayLine = styled.div`
    background-color: ${THEME.COLORS.GRAY_300};
    width: 100%;
    height: ${rh(2)};
    margin-block: ${rh(5)};
`;

export const Span = styled.span`
  weigth: 300;
  font-size: ${rf(22)};
`;
