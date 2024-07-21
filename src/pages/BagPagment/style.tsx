import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw, responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
  
interface OptionProps {
    isActive: boolean;
}

interface CardProps {
    isActive: boolean;
}

export const Container = styled.div`
    margin-inline: ${rw(200)};
    display:flex;
    flex-direction: column;
    font-size: ${rf(24)};
`;

export const Center = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

export const NoWrap = styled.span`
    white-space: nowrap;
    margin-block: ${rh(20)};
    font-size: ${rf(26)};
`;

export const Ml = styled.span`
    margin-left: ${rw(8)};
`;

export const Option = styled.div<OptionProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: ${({ isActive }) => isActive ? `1px solid ${THEME.COLORS.PRIMARY}` : `1px solid ${THEME.COLORS.GRAY_600}`};
    color: ${({ isActive }) => isActive ? THEME.COLORS.PRIMARY : 'inherit'};
    border-radius: 8px;
    width:25%;
    padding: ${rw(5)};
    margin-right: ${rw(50)};

    &:hover{
        color: ${THEME.COLORS.PRIMARY};
        border: 1px solid ${THEME.COLORS.PRIMARY};
        cursor:pointer;
    }
`;

export const CopyCode = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #0095E1;
    &:hover{
        color: #006ea6;
        cursor:pointer;
    }
`;

export const Pagamento = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-bottom: ${rh(100)};
`;

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

export const Line = styled.div`
    background-color: ${THEME.COLORS.BLACK};
    width: 100%;
    height: ${rh(3)};
    margin-block: ${rh(5)};
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${rf(26)};
    background-color: ${THEME.COLORS.PRIMARY};
    color: ${THEME.COLORS.WHITE};
    cursor: pointer;
    margin-block: ${rh(80)};
    width: 15%;
    padding-block: ${rh(10)};
    border-radius: 16px;
    &:hover {
        background-color: #bf0000;
    }
`;

export const Image = styled.img`
    width: ${rw(50)};
`;

export const InfosWrapper = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
`;

export const CardNumbers = styled.span<CardProps>`
    color: ${({ isActive }) => isActive ? THEME.COLORS.WHITE : THEME.COLORS.GRAY_600 };
    font-size: ${rf(22)};
`;

export const Card = styled.div<CardProps>`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-block: ${rh(15)};
    padding-inline: ${rw(8)};
    justify-content: space-between;
    border: ${({ isActive }) => isActive ? 'inherit' : `1px solid ${THEME.COLORS.GRAY_600}`};
    border-radius: 8px;
    background-color: ${({ isActive }) => isActive ? '#EB1212': 'transparent'};
    color: ${({ isActive }) => isActive ? THEME.COLORS.WHITE : 'inherit'};
    margin-block: ${rh(20)};
    cursor: pointer;
`;

export const InfosCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline: ${rw(8)};
`;

export const MoreOptions = styled.div<CardProps>`
    font-size: ${rf(30)};
    margin-inline: ${rw(15)};
    &:hover {
        color: ${({ isActive }) => isActive ? THEME.COLORS.BLACK : THEME.COLORS.PRIMARY };
    }
`;

export const FlexEnd = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;
`;

export const AddCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: ${THEME.COLORS.PRIMARY};
    font-size: ${rf(30)};
    cursor: pointer;
    width: fit-content;

    &:hover {
        color: #bf0000;
    }
`;