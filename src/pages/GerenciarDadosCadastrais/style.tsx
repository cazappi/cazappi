import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf, 
  responsiveFontSize} from '../../utils/responsive-functions';
import { ButtonRegister, INPUT } from '../SignUp/style';

export const DatasWrapper = styled.span`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: ${rh(35)}
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

export const EditImgContainer = styled.div`
  display:flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin: ${rw(3)};
  font-size: inherit;
  padding: 0;
  background-color: light-gray;
  border-radius: 8px;
  border: 1px solid gray;
  width: 100%;
  text-align: center;
`;

export const SubTitle = styled.span`
  font-weight: 500;
  font-size: ${responsiveFontSize(30)};
`;

export const InputAddress = styled(INPUT)`
  margin: ${rw(7)};
  padding-left: ${rw(50)};
`;

export const InputWithIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  left: ${rw(25)};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: ${THEME.COLORS.GRAY_600};
  pointer-events: none;
`;
