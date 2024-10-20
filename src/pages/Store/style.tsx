import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Container, IconEdit } from '../ProfileClient/style';

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`;

export const TEXT = styled.p`
    color: #EB1212;
    font-size: ${rf(37.5)};
    align-self: flex-start;
    font-weight: 700;
    line-height: 37.5px;
    margin: ${rh(17)} 0 ${rh(16)} 0;
`;

export const SearchInput = styled.input`
    border: 1px solid #EB1212;
    border-radius: 8px;
    padding: 0 1rem;
    height: min-content;
    outline: none;
    width: 20rem;

    :focus {
        border-color: #EB1212;
        box-shadow: 0 0 8px #EB1212;
    }

`;

export const BannerWrapper = styled.div`
    width: 100%;
`;

export const CardsHolder = styled.div`
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0 ${rw(22)};
    flex-wrap: wrap;

    position: relative;
    bottom: ${rw(130)};
`;

export const InfosWrapper = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;

    .imgButton {
        width: ${rw(106)};
        height: ${rw(106)};
        border: none;
        border-radius: 50%;
        position: relative;
        top: -6.5rem;
        left: ${rw(850)};
        background: none; 
        cursor: pointer; 
        display: inline-block;
    }
`;

export const StoreWrapper = styled.div`
    margin-left: 11.5rem;
    position: relative;
    bottom: ${rw(150)};
    display: flex;
    flex-direction: column;

    .storeName {
        font-size: 1.5rem;
        line-height: ${rf(25.78)};
        text-align: left;
        color: #FEFEFE;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
    }

    .storeAbout {
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 16.41px;
        text-align: left;
    }

    .storeStatus{
        display: flex;
        flex-direction: row;
        gap: 6px;

        .statusHolder{
            margin-top: .5rem;
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            width: ${rw(236)};
            padding: 0.25rem 1.5rem 0.25rem 1.5rem;
            border-radius: 8px;

            background: 
                linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                linear-gradient(0deg, #39FF14, #39FF14);

            p{
                color: white;
                font-family: 'Roboto', sans-serif;
                font-size: ${rf(14)};
                font-weight: 700;
                line-height: 1rem;
                text-align: left;

            }
        }
    }

    .deliveryInfo {
        display: flex;
        flex-direction: row;
        gap: 1.5rem;

        margin-top: 1.5rem;
    }
    .ratingSearch {
        display: flex;
        width: 85%;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        /* gap: .25rem; */

        margin-top: .5rem;

        .ratingNumber {
            display: flex;
            flex-direction: row;
            gap: .25rem;
            align-items: center;
            justify-content: center;
            width: fit-content;
        }
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    height: 10rem;
    object-fit: cover;
`;

export const BackButton = styled.button`
    position: absolute;
    margin-top: 1rem;
    margin-left: 2rem;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: #EB1212;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.21rem;
    text-align: left;
`;

export const ContainerLojista = styled(Container)`
    margin-bottom: ${rh(24)};
    margin-top: ${rh(24)};
    width: 100%;
    padding-inline: ${rw(154)};

    .mostSoldHolder {
        width: 90%;
        height: max-content;

        .mostSoldTitle {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.75rem;
            text-align: left;
            margin-bottom: 1.5rem;

            font-family: 'Roboto', sans-serif;
            line-height: 28.13px;

            margin-bottom: 28px;
        }

        .productsGrid {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            margin-bottom: 2.5rem;

            @media (max-width: 1500px) {
                grid-template-columns: 1fr; /* Switch to a single column on smaller screens */
            }

        }

        .clientsButtonHolder {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-bottom: 4.5rem;

            .clientsReviewButton {
                border: 1px solid #CC0000;
                border-radius: 16px;
                padding: 0.5rem 1rem;

                color: #CC0000;
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 500;
                text-align: left;

                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 1rem;
            }

        }

    }

    .carouselHolder {
        width: 70%;
        height: 13rem;
        min-height: max-content;
        overflow: visible;
        z-index: 1;



        .slick-slide {
            padding: 0 0.625rem;
        }

        .slick-list {
            overflow-x: hidden;  // Hide horizontal overflow
            overflow-y: visible; // Ensure vertical overflow (for shadows) is visible
        }


        .productHolder {
            box-shadow: 0px 4px 10px 0px #00000026;
            border-radius: 16px;
            padding: 1.15625rem 0.625rem;
            height: 12.75rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;

            .productImage {
                height: auto;
                width: 78%;
                min-height: 4.5rem;
            }

            .productName {
                font-size: 16px;
                font-weight: 500;
                line-height: 18.75px;
                text-align: left;
            }

            .productDescription {
                font-size: 14px;
                font-weight: 300;
                line-height: 16.41px;
                text-align: justify;

            }

            .productPrice {
                font-size: 14px;
                font-weight: 500;
                line-height: 16.41px;
                text-align: right;
            }

        }
    }
`
export const ItemCard = styled.div`
    box-shadow: 0px 4px 10px 0px #00000026;
    border-radius: 16px;
    padding: 0.5rem 1rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .leftContent {
        height: 4rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .productImage {
            align-self: center;
            height: 4rem;
            border-radius: 8px;
            max-width: 8rem;
        }

        .titleDescription {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            gap: 0.25rem;

            overflow-y: hidden;
        }

        .title {
            font-family: 'Roboto', sans-serif;
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.171875rem;
        }

        .description {
            font-family: 'Roboto', sans-serif;
            font-size: 0.875rem;
            font-weight: 300;
            line-height: 1rem;
            text-align: justify;

        }

    }

    .rightContent {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        height: 100%;

        .price {
            font-family: 'Roboto', sans-serif;
            font-size: 1.025625rem;
            font-weight: 500;
            text-align: right;
        }

        .optionsButton {
            padding: .25rem;
            border-radius: 50%;
            border: .25px solid black;
        }
    }
`;
