import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf, 
  responsiveFontSize} from '../../utils/responsive-functions';
import { ButtonRegister } from '../SignUp/style';

export const DatasWrapper = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

export const Data = styled.span`
  width: 50%;
`;

export const NewAddress = styled.span`
  width: 100%;
  height: 25%;
  border: 1px dashed gray;
  border-radius: 5px;
  margin-block: ${rh(50)};
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #EEEEEE;
  font-weight: 500;
`;
export const Addresses = styled.div`
  border: 1px solid gray;
  width: 100%;
  height: 30%;
  border-radius: 5px;
  background-color: #EEEEEE;
  padding: ${rw(18)};
  margin-block: ${rh(15)};
`;
export const Span = styled.span`
  display:flex;
  flex-direction: row;
  align-items: center;
`;
export const ModifyAdress = styled.div`
  text-align: right;
`;

export const ButtonRole = styled(ButtonRegister)`
  margin-block: ${rh(40)};
  width: 100%; 
  fontSize: ${responsiveFontSize(30)};
  margin-inline: 0;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: ${rh(500)};
  object-fit: cover;
`;

export const EditImgContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const IconEditBanner = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${THEME.COLORS.PRIMARY};
    border-radius: 50%;
    width: ${rw(30)};
    height: ${rw(30)};
    color: white;
    cursor: pointer;
    position: absolute;
    font-size: ${rf(23)};
    right: 0;
    bottom: 0;
    margin-bottom: -${rh(15)}; 
    margin-right: ${rw(100)}; 
`;

// Contêiner principal da agenda
export const ScheduleContainer = styled.div`
  margin-block: ${rh(40)};
  display: flex;
  flex-direction: column;
  jusity-items: center;
  width: 50%;
`;

// Título da agenda
export const ScheduleTitle = styled.div`
  font-weight: 500;
  text-align: center;
`;

// Contêiner da lista de horários
export const ScheduleList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${rh(10)};
`;

// Item da agenda
export const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${rw(8)};
  align-items: center;
`;

// Cabeçalho da agenda
export const ScheduleHeader = styled.div`
  display: flex;
  font-weight: 500;
`;

// Coluna do cabeçalho
export const HeaderColumn = styled.div`
  flex: 1;
  text-align: center;
  padding: ${rw(4)};
`;

// Coluna do item
export const ItemColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rw(2)};
  width: 33%;
`;

// Select do horário
export const TimeSelect = styled.select`
  width: 80%;
  border-radius: 8px;
  background-color: #EEEEEE;
  border: none;
  font-size: ${responsiveFontSize(25)};
`;