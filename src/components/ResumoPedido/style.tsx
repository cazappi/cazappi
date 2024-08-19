// src/components/ResumoPedido/style.ts
import styled from 'styled-components';
import { THEME } from '../../theme/index';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Resumo = styled.div`
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(0, 0, 0, 0.1), 4px 0 8px rgba(0, 0, 0, 0.1), -4px 0 8px rgba(0, 0, 0, 0.1);
    border-radius:8px;
    padding: ${rw(15)};
`;

export const InfoPedido = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Total = styled.span`
    color: red;
    font-size: ${rf(27)};
`;
export const Payment = styled(Total)`
    color: black;
`;

export const Line = styled.div`
    background-color: ${THEME.COLORS.BLACK};
    width: 100%;
    height: ${rh(3)};
    margin-block: ${rh(5)};
`;

export const Logo = styled.img`
    width: ${rw(30)};
    height: ${rw(30)};
    margin-right: ${rw(10)};
`;
export const PaymentType = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const RedIcon = styled.div`
  margin-inline ${rw(4)};
  color: ${THEME.COLORS.PRIMARY};
`;