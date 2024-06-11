import styled from 'styled-components';
import { responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Title = styled.span`
  font-weight: 500;
  font-size: ${rf(26)};
`;

export const Center = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`;

export const OrderHistory = styled.div`
    width:65%;
`;