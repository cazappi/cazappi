import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Container = styled.div`
    font-Weight: 400;
    padding: ${rw(80)};
    padding-inline: ${rw(200)};
    display:flex;
    flex-direction: column;
    font-family: 'Inter', sans-serif;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

export const ProductTitle = styled.p`
    font-size: ${rf(30)}; 
    font-Weight: 500;
`

export const JustifyBetween = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const ProductPrice = styled.div`
    color: #2ede0d;
    display:flex;
    flex-direction:row;
    align-items:center;
`

export const ProductOriginalPrice = styled.p`
    color: black;
    font-weight: 500;
    text-decoration: line-through;
    font-size: ${rf(22)}; 
    margin-left: ${rw(5)};
`

export const ComplementTitle = styled.div`
    background-color: rgba(255, 0, 0, 0.43);
    padding-block: ${rw(7)};
    margin-top: ${rh(80)};
    padding-inline: ${rw(20)};
`

export const OptionInfos = styled.div`
    margin-inline: ${rw(30)};
    margin-block: ${rh(40)};
`

export const Bold = styled.div`
    font-weight: 500;
`
export const Button = styled.button`
    font-size: ${rf(30)};
    color: ${THEME.COLORS.PRIMARY};
    cursor: pointer;
    margin-inline: ${rw(7)};

    &:hover {
        color: #a11212;
    }
`;

export const Center = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const ActionButton = styled(Button)`
    font-size: ${rf(30)};
    border-radius: 20px;
    padding-block: ${rh(10)};
    padding-inline: ${rw(50)};
    margin-top: ${rh(20)};
    color: white;
    background-color: #32cf15;

    &:hover {
        background-color: #259410;
        color:white;
    }
`;

export const ComplementPrice = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-around;
    margin-inline: ${rw(3)};
`;

export const ObsImage = styled.img`
    width: 3%;
    margin-right: ${rw(8)};
`;

export const ObsNameIcon = styled.div`
    margin-top: ${rh(100)};
    display:flex;
    flex-direction:row;
    font-weight:500;
    color: ${THEME.COLORS.PRIMARY};
`;

export const Observations = styled.textarea`
    width: 100%;
    min-height: ${rh(100)};
    margin-top: ${rh(20)};
    font-size: ${rf(22)};
    border: ${rw(1.6)} solid ${THEME.COLORS.PRIMARY};
    border-radius: 12px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    &: focus{
        outline: none;
    }
`;
// CONDITIONAL RENDERING!!!!!!!!!!!!!
export const ComplementQuantity = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: space-around;
    margin-left: ${rw(10)};
    border: ${rw(1.4)} solid #e5e7eb;
    border-radius: 5px;
`;

export const Quantity = styled.span`
    color: #363636;
    font-size: ${rf(20)};
`;
