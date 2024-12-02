import styled from "styled-components";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { BsChevronDoubleRight, BsPlusLg } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";


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

    .createSub {
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border: 1px solid rgba(57, 255, 20, 1);
        color: rgba(57, 255, 20, 1);
        border-radius: 8px;
        font-weight: 500;
        gap: 10px;
        font-size: 1rem;
        padding: 12px 18px;
        margin-top: 10px;
    }
`

export const ModalOverlay = styled.div`
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

    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        max-width: 400px;
        width: 100%;
        text-align: center;
        position: relative;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }

    .modal-content label {
        display: block;
        margin-bottom: 8px;
        font-size: 14px;
        color: #333;
    }

    .modal-content input, .modal-content select {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
    }

    .cancel-btn {
        background-color: white;
        border: 1px solid red;
        color: red;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .cancel-btn:hover { 
            background-color: #ffe5e5;
    }

    .register-btn { 
        background-color: green;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .register-btn:hover {   
        background-color: #00b300;
    }
`

export const SubCategory = styled.div`
    width: 100%;

    .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 400;
        font-size: 1rem;
        margin-left: ${rh(40)};
        font-weight: 500;
    }

    hr {
        background-color: rgba(144, 144, 144, 1);
        height: 1px;
        margin-bottom: ${rh(20)};
    }

    &:first-of-type hr {
        background-color: transparent;
    }

    &:last-of-type .info {
        margin-bottom: ${rh(40)};
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

export const DoubleArrowIcon = styled(BsChevronDoubleRight)`
    font-size: 1rem;
`

export const PlusIcon = styled(BsPlusLg)`
    font-size: 1.5rem;
`

export const IconEdit = styled(FaPencilAlt)`
    font-size: 1rem;
`


