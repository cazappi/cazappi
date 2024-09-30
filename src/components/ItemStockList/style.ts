import styled from "styled-components";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { FaPencilAlt } from "react-icons/fa";

export const ItemWrapper = styled.div`
    display: flex;
    width: 100%;
    height: ${rh(120)};
    align-items: center;
    justify-content: space-between;
    border-radius: 16px;
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);

    .productInfo {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-left: 16px;
    }

    .info{
        align-self: flex-start;
    }

    .title {
        font-size: 0.8rem;
        font-weight: 500;
    }

    .qtd {
        font-size: 0.8rem;
    }

    .editButton {
        width: 2rem;
        height: 2rem;
        background-color: transparent;
        border: 2px solid red;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(235, 18, 18, 1);
        margin-right: 16px;
    }
`

export const ImageStyled = styled.img`
    width: ${rw(100)};
    height: ${rh(90)};
    border-radius: 8px;
`

export const IconEdit = styled(FaPencilAlt)`
    font-size: 1rem;
`