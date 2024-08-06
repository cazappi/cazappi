import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const AddressContainer = styled.div `
    width: 100%;
    border-radius:8px;
    padding-inline: ${rw(30)};
    padding-block: ${rh(20)};
    margin-bottom: ${rh(50)};
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const NeibTitle = styled.div `
    color: white;
    white-space: nowrap;
`

export const StreetTitle = styled(NeibTitle) `
    font-weight: 700;
    margin-bottom: ${rh(3)};
`
export const Botoes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin-top: ${rh(100)};
`;