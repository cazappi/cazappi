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
import { count } from 'console';

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
interface CategoriesWrapperProps {
    size: number;
}

function getQtdLines(size: number) {
    if (size === 0)
        return 0;

    return (Math.floor((size - 1) / 4) * 2) + 2;
}

export const CategoriesWrapper = styled.div<CategoriesWrapperProps>`
    display: grid;
    grid-template-columns: repeat(4, ${rw(200)}); /* 4 colunas de largura igual */
    grid-template-rows: repeat(${(props) => getQtdLines(props.size)}, ${rw(110)}); /* 6 linhas de altura igual */
    gap: ${rw(20)}; /* Sem espaçamento entre as células */
    margin: 5vh 0; /* Espaçamento externo opcional */
    justify-content: center;
`

interface CategoryClassProps {
    index: number;
}

function discoverColumnPosition(index: number) {
    index += 1;

    while (index > 8) {
        index -= 8;
    }

    switch (index) {
        case 1:
            return '1 / 3';
        case 2:
            return '3 / 5';
        case 3:
            return '3 / 4';
        case 4:
            return '4 / 5';
        case 5:
            return '1 / 3';
        case 6:
            return '1 / 2';
        case 7:
            return '2 / 3';
        case 8:
            return '3 / 5';
        default:
            return '1 / 3';
    }
}

function discoverRowPosition(Index: number): string {
    Index += 1;
    let rowGroup = 0;

    while (Index > 8) {
        Index -= 8;
        rowGroup++;
    }

    const baseRow = rowGroup * 4;

    switch (Index) {
        case 1:
            return `${1 + baseRow} / ${3 + baseRow}`;
        case 2:
            return `${1 + baseRow} / ${2 + baseRow}`;
        case 3:
        case 4:
            return `${2 + baseRow} / ${3 + baseRow}`;
        case 5:
            return `${3 + baseRow} / ${4 + baseRow}`;
        case 6:
        case 7:
            return `${4 + baseRow} / ${5 + baseRow}`;
        case 8:
            return `${3 + baseRow} / ${5 + baseRow}`;
        default:
            return '1 / 3';
    }
}

export const CategoryClass = styled.div<CategoryClassProps>`
        background-image: url(${CategoryBackground});
        background-size: cover;
        background-position: center;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            background-color: rgba(0, 0, 0, 0.3);
            color: white;
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 23.44px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            border-radius: 8px;
        }

    /* Posicionamento específico do elemento */

        grid-column: ${(props) => discoverColumnPosition(props.index)};
        grid-row: ${(props) => discoverRowPosition(props.index)};
`

export const SearchWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${rw(20)};
    justify-content: space-around;
    align-items: center;
    margin: 6vh 0;

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

    .product {
        width: 400px;
        height: fit-content;
        background-color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 16px;
        padding: 0.6rem 1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        cursor: pointer;

        img {
    width: 164px; /* Ou uma porcentagem específica */
    height: 78px;
    border-radius: 8px;
    object-fit: contain;
}

        .productInfo {
            display: flex;
            flex-direction: column;
        }

        h3 {
            font-size: 1rem;
            color: rgba(255, 0, 0, 1);
            font-weight: 500;
            margin-bottom: 5px;
        }

        h4 {
            font-size: 1rem;
            color: black;
            font-weight: 400;
            margin-bottom: 5px;
        }

        p {
            font-size: 0.9rem;
            color: black;
            font-weight: 300;
        }

        .productPrice {
            display: flex;
            align-self: flex-end;
            font-size: 1rem;
            font-weight: 500;
            margin-top: 5px;
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
