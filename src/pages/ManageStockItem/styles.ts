import styled from "styled-components";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { BsChevronDoubleRight } from "react-icons/bs";
import { GoPlus, GoDash } from "react-icons/go";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${rw(1000)};
    min-height: ${rh(884)};
    height: auto;
    margin: 0 auto;
    gap: ${rh(25)};

    h1 {
        font-size: 3rem;
        color: rgba(235, 18, 18, 1);
        font-weight: 500;
    }

    .nameHr {
        width: 100%;
        background-color: rgba(235, 18, 18, 1);
        height: 2px;
        border: none;
    }

    .path {
        display: flex;
        width: 100%;
        gap: 0.5rem;
        align-items: center;
        color: rgba(144, 144, 144, 1);
    }

    .estoqueTitle {
            font-weight: 500;
            font-size: 1rem;
            margin-bottom: 10px;
        }

    .estoque {
        width: 13%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .minMaxInput {
            font-size: 1rem;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
        }

        input{
            width: ${rw(75)};
            height: ${rh(40)};
            border-radius: 4px;
        }
    }

    .qtdDisponivel{
        width: 13%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .moreLessButton{
            font-weight: 500;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            background-color: rgba(217, 217, 217, 1);
            border-radius: 16px;
            padding: 8px 0;
        }
    }

    .buttons{
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        margin-bottom: ${rh(80)};

        .descarte {
            width: ${rw(170)};
            height: ${rh(60)};
            background-color: transparent;
            border: 1px solid rgba(255, 0, 0, 1);
            color: rgba(255, 0, 0, 1);
            font-weight: 500;
            border-radius: 16px;
        }

        .confirmar {
            width: ${rw(170)};
            height: ${rh(60)};
            background-color: rgba(57, 255, 40, 1);
            color: white;
            border: none;
            font-weight: 500;
            border-radius: 16px;
        }
    }

`

export const DoubleArrowIcon = styled(BsChevronDoubleRight)`
    font-size: 1rem;
`

export const BannerImg = styled.img`
    width: ${rw(350)};
    height: ${rw(200)};
    border: 1px solid black;
    margin-top: 10px;
`

export const MoreButton = styled(GoPlus)`
    font-size: 1.5rem;
    color: rgba(46, 204, 16, 1);
    cursor: pointer;
`

export const LessButton = styled(GoDash)`
    font-size: 1.5rem;
    color: rgba(204, 0, 0, 1);
    cursor: pointer;
`