import styled from "styled-components";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { BsChevronDoubleRight } from "react-icons/bs";

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

    hr {
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
`

export const ItensList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${rh(35)};
    padding-bottom: ${rh(80)};
`

export const DoubleArrowIcon = styled(BsChevronDoubleRight)`
    font-size: 1rem;
`