import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Logo, OrderInfos, RestaurantInfos } from '../../components/Order/style';
import { Resumo } from '../../components/ResumoPedido/style';
import { motion } from 'framer-motion';

interface CircleProps {
    isActive: boolean;
}

export const Container = styled.div`
    margin-inline: ${rw(200)};
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${rf(24)};
    margin-bottom: ${rh(100)};
`;

export const UserInfos = styled(RestaurantInfos)`
    padding-inline: ${rw(20)};
    padding-block: ${rh(15)};
`

export const UserProfile = styled(Logo)`
  margin-right: ${rw(15)};
`;

export const LogoProduct = styled.img`
  width: ${rw(60)};
  border-radius: 5px;
  margin-right: ${rw(10)};
`;
export const ProductInfos = styled(OrderInfos)`
    justify-content: space-between;
    padding-block: ${rh(15)};
    border-bottom: 1px solid #cfcfcf;
    margin-block: ${rh(10)};
`;
export const Quantity = styled.span`
    font-size: ${rf(28)};
    margin-right: ${rw(10)};
`;

export const OrderStatus = styled(Resumo)`
    box-shadow: none;
    border: 1px solid ${THEME.COLORS.GRAY_300};
`;
export const NoWrap = styled.span`
    white-space: nowrap;
    margin-block: ${rh(50)};
    font-size: ${rf(28)};
`;
export const UserName = styled.span`
    white-space: nowrap;
    font-size: ${rf(26)};
`;
export const LineContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-inline: ${rw(35)};
`;

export const Line = styled(motion.div)<CircleProps>`
  height: ${rw(3)};
  background-color: ${({ isActive }) => (isActive ? 'red' : '#e0e0e0')};
  position: relative;
  flex-grow: 1;
`;

export const Progress = styled(motion.div)<CircleProps>`
  height: ${rw(3)};
  background-color: ${({ isActive }) => (isActive ? 'red' : '#e0e0e0')};
  position: absolute;
  top: 0;
  left: 0;
`;

export const Circle = styled.div<CircleProps>`
  width: ${rw(19)};
  height: ${rw(19)};
  background-color: ${({ isActive }) => (isActive ? 'red' : '#e0e0e0')};
  border-radius: 50%;
  position: relative;
  z-index: 1;
`;

export const VerticalLine = styled.div`
    width: ${rw(2.5)};
    height: ${rh(60)};
    background-color: #e0e0e0;
    margin-bottom: ${rh(45)};
`;

export const StatusContainer = styled.div<CircleProps>`
    opacity: ${({ isActive }) => (isActive ? '100' : '0')};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    padding-inline: ${rw(43)};
`;
export const LabelStatus = styled.span`
    font-size: ${rf(20)};
    top:0;
    left:0;
    margin-top: ${rh(75)};
    position:absolute;
    white-space: nowrap;
`;