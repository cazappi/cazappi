import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

export const FLEXROW = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const InputsHolder = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: ${rw(250)};
  width: 65%;
  margin-top: ${rh(50)};
  margin-bottom: ${rh(86)};

  gap: 29px;

  & > :last-child {
    margin-top: ${rw(50)}; 
  }

  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: .5rem;
  }

  .smallerInputs {
    display: flex;
    flex-direction: row;
    width: 47%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .submitButton {
    background-color: #33cc12;
    color: white;

    padding: 8.5px 62.5px;
    border-radius: 16px;

    width: fit-content  ;	

    align-self: center;
  }
`;

export const CardTypeSelect = styled.select`
  width: 100%;
  height: 36px;
  border-radius: 8px;
  border: none;
  /* padding: 9.5px 16px; */
  font-size: ${rf(18)};
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
 

  background-color: rgba(238, 238, 238, 1);
`