import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw, responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Red = styled.span`
  color:red;
`;

export const ActionButton = styled.button`
    cursor: pointer;
    font-size: ${rf(25)};
    border-radius: 20px;
    padding-block: ${rh(8)};
    padding-inline: ${rw(60)};
    margin-top: ${rh(20)};
    margin-inline: ${rw(10)};
    color: white;
    background-color: #32cf15;
    margin-bottom: ${rh(80)};

    &:hover {
        background-color: #259410;
        color:white;
    }
`;
export const DeleteButton = styled(ActionButton)`
    color: ${THEME.COLORS.PRIMARY};
    background-color: white;
    border: 2px solid ${THEME.COLORS.PRIMARY};

    &:hover {
        background-color: ${THEME.COLORS.PRIMARY};
        color:white;
    }
`;
export const BackgroundModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${THEME.COLORS.WHITE};
  padding: ${rh(48)};
  border-radius: ${rw(10)};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: ${rw(380)};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;

`;

export const ModalButton = styled.button`
  background-color: ${THEME.COLORS.WHITE};
  color: black;
  border: none;
  padding: ${rh(10)} ${rw(20)};
  margin: ${rh(10)};
  margin-inline: ${rh(50)};
  cursor: pointer;
  border-radius: ${rw(5)};
  font-size: ${rf(20)};
  font-weight: 500;

  &:hover {
    color: ${THEME.COLORS.PRIMARY};
  }
`;