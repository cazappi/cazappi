import styled from 'styled-components';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineSearch, AiFillCloseCircle } from 'react-icons/ai';
import { BsFilterSquareFill, BsStarFill, BsClock } from 'react-icons/bs';
import CategoryBackground from "../../assets/SaladaCamarao.png";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    height: fit-content;
`

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: ${rw(1000)};
    height: fit-content;
    margin: 0 6.16vw;
    gap: ${rh(25)};
    flex: 1;
    align-self: center;

    .adressInput p{
        display: flex;
        align-items: center;
        background-color: white;
        border: 2px solid rgba(144, 144, 144, 0.67);
        width: 40vw;
        border-radius: 10px;
        margin-left: 2vw;
        padding: 0.5rem 1rem;
        margin-top: 3vh;

        select {
            width: 100%;
            border: none;
            padding: 0 1rem;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background: none;
            outline: none;
            box-shadow: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            cursor: pointer;
        }     
    }

    .searchBar {
        display: flex;
        align-items: center;
        margin: 0 2vw;
        background-color: white;
        width: auto;
        padding: 0 1rem;
        border-radius: 10px;
        border: 2px solid rgba(144, 144, 144, 0.67);
        margin-top: 2vh;

        input {
            width: 100%;
            border: none;
            background: none;
            outline: none;
            box-shadow: none;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
    }

    .type {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: ${rw(20)};
    margin-top: 2vh;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${rh(10)};
        cursor: pointer;
        width: 47.5%;

        p {
            font-size: ${rf(18)};
            color: rgba(30, 30, 30, 1);
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
            transition: color 0.2s ease-in, font-weight 0.2s ease-in;
        }

        hr {
            width: 100%;
            border: none;
            height: 3px;
            background-color: rgba(238, 238, 238, 1);
            transition: background-color 0.1s ease-in;
        }

        &.active p {
            color: rgba(144, 144, 144, 1);
            font-weight: 400;
        }

        &.active hr {
            background-color: rgba(255, 0, 0, 1);
        }
    }
}

    .filter {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        gap: ${rw(10)};

        section {
            display: flex;
            align-items: center;
            gap: ${rw(10)};
            cursor: pointer;
            background-color: rgba(144, 144, 144, 0.14);
            border-radius: 8px;
            width: fit-content;
            padding: 0.3rem 1.3rem;

            p {
                font-size: 1rem;
                color: rgba(77, 77, 77, 1);
                font-family: 'Poppins', sans-serif;
                font-weight: 400;
            }
        }
    }

`

export const SearchWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rw(20)};
    justify-content: space-around;
    align-items: center;
    margin: 6vh 0;

    .category {
        width: 310px;
        height: 178px;
        background-image: url(${CategoryBackground});
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        cursor: pointer;

        p {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            color: white;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1.3rem;
            line-height: 23.44px;
        }
    }

    .store {
        width: 21vw;
        height: fit-content;
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;

        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }

        .storeInfo {
            display: flex;
            flex-direction: column;

            section{
                display: flex;
                gap: 20px;
            }
        }
    }
`

export const LocationIcon = styled(FaLocationDot)`
    font-size: 1rem;
`

export const SearchIcon = styled(AiOutlineSearch)`
    font-size: 1.5rem;
    color: rgba(255, 0, 0, 1);
`

export const CloseIcon = styled(AiFillCloseCircle)`
    font-size: 1.5rem;
    color: rgba(143, 143, 143, 1);
    cursor: pointer;
`

export const FilterIcon = styled(BsFilterSquareFill)`
    font-size: 1rem;
    color: white;
    background-color: rgba(77, 77, 77, 1);
`

export const StarIcon = styled(BsStarFill)`
    font-size: 1rem;
    color: red;
`

export const ClockIcon = styled(BsClock)`
    font-size: 1rem;
    color: red;
`
