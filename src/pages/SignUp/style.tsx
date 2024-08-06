import styled, { ThemeConsumer } from 'styled-components';
import { THEME } from '../../theme/index';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { Button } from '../ProductView/style';

interface ButtonProps {
  isActive: boolean;
}

export const Title = styled.text`
    font-size: ${rf(40)};
    color: ${THEME.COLORS.PRIMARY};
    text-align: center;
`;

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-block: ${rw(12)};
`;

export const FLEXROWTERMS = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 40vw;
  justify-content: center;
  @media (max-width: 710px) {
    width: 80vw;
  }
`;

export const FLEXCOLUMN = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-block: ${rh(50)};
`;

export const CHECK = styled.input`
  margin-right: ${rw(10)};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  width: ${rw(28)};
  height: ${rw(28)};
  border: 1.6px solid ${THEME.COLORS.PRIMARY};
  border-radius: 5px;
  &:checked {
    background-color: ${THEME.COLORS.PRIMARY};
  }
`;

export const TERMS = styled.div`
  font-size: ${rf(27)};
`

export const ButtonRegister = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${rw(20)};
  padding-inline: ${rw(35)};
  font-size: ${rf(28)};
  background: ${THEME.COLORS.WHITE};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  border: 1px solid ${({ isActive }) => (isActive ? '#32cf15' : 'none')};;
  margin-inline: ${rw(15)};
  margin-top: ${rh(40)};
`;

export const Container = styled.div`
  width: 30%;
  margin-block: ${rh(40)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: ${rh(30)};
`;

export const TEXT = styled.label`
  font-size: ${rf(28)};
  width: 100%;
  text-align: left;
  margin-bottom: ${rh(8)};
`;

export const INPUT = styled.input`
  margin-top: ${rh(10)};
  background: ${THEME.COLORS.GRAY_300};
  border-radius: 10px;
  width: 100%;
  padding: ${rw(6)};  
  padding-left: ${rw(15)};  
  border: none;
  font-size: ${rf(26)};
`;

export const LeftContent = styled.div`
  display: flex;
  width:100%;
  justify-content: flex-end;
  margin-right: ${rw(250)};
`;

export const ActionButton = styled(Button)`
    font-size: ${rf(30)};
    border-radius: 20px;
    padding-block: ${rh(25)};
    padding-inline: ${rw(30)};
    margin-top: ${rh(20)};
    color: white;
    background-color: #32cf15;

    &:hover {
        background-color: #259410;
        color:white;
    }
`;
