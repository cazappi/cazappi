import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf, 
  responsiveFontSize} from '../../utils/responsive-functions';


export const ScheduleContainer = styled.div`
  margin-block: ${rh(40)};
  display: flex;
  flex-direction: column;
  jusity-items: center;
  width: 50%;
`;

export const ScheduleTitle = styled.div`
  font-weight: 500;
  text-align: center;
`;

export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${rh(10)};
`;

export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rw(8)};
  align-items: center;
`;

export const ScheduleHeader = styled.div`
  display: flex;
  font-weight: 500;
`;

export const HeaderColumn = styled.div`
  flex: 1;
  text-align: center;
  padding: ${rw(4)};
`;

export const ItemColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rw(2)};
  width: 33%;
`;

export const TimeSelect = styled.select`
  width: 80%;
  border-radius: 8px;
  background-color: #EEEEEE;
  border: none;
  font-size: ${responsiveFontSize(25)};
`;