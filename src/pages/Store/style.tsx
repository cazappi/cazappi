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
    font-size: 2.34375rem;
    align-self: flex-start;
    font-weight: 700;
    line-height: 2.34375rem;
    margin: 1.0625rem 0 1rem 0;
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
        box-shadow: 0 0 0.5rem #EB1212;
    }

`;

export const BannerWrapper = styled.div`
    width: 100%;
`;

export const Banner = styled.div`
  background-image: url(${(props: { src: string }) => props.src});
  background-size: cover;
  background-position: center;
  height: 10rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StoreInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 1;

    padding: 1rem;
    width: 63%;

    margin-top: 8.2rem;

    @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    }

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
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.025625rem;
        text-align: left;
    }

    .storeStatus{
        display: flex;
        flex-direction: row;
        gap: 0.375rem;

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

`;

export const ProfileImage = styled.img`
  width: ${rw(100)};
  height: ${rw(100)};
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: ${rw(75)};
    height: ${rw(75)};
  }
`;

export const StoreDetails = styled.div`
  color: #fff;

  .storeName {
    font-size: ${rf(20)};
    font-weight: bold;
  }

  .storeStatus, .deliveryInfo {
    font-size: ${rf(14)};
  }
`;



export const CardsHolder = styled.div`
    margin-top: 2rem;
    width: 75%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0 ${rw(22)};
    flex-wrap: wrap;

    overflow: visible;
`;

export const FilteredCardsDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex-wrap: wrap;

    overflow: visible;
`;

export const InfosWrapper = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;

    .profileImage {
        width: ${rw(106)};
        height: ${rw(106)};
        border: none;
        border-radius: 50%;
        position: relative;
        top: -6.5rem;
        left: ${rw(850)};
        background: none; 
        display: inline-block;
    }
`;

export const StoreWrapper = styled.div`
    margin-left: 11.5rem;
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
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.025625rem;
        text-align: left;
    }

    .storeStatus{
        display: flex;
        flex-direction: row;
        gap: 0.375rem;

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
    overflow: visible;

    .mostSoldHolder {
        width: 90%;
        height: max-content;

        .mostSoldTitle {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.75rem;
            text-align: left;
            margin-bottom: 1.75rem;

            font-family: 'Roboto', sans-serif;
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
        overflow: hidden;
        z-index: 1;
        margin-bottom: 8rem;

        .slick-slide {
            padding: 0 0.625rem;
        }

        .slick-track {
            overflow: visible;
        }

        .slick-list {
            overflow: visible;
        }

        .sliderTitle {
            font-size: 1.5rem;
            font-weight: 600;
            line-height: 1.75rem;
            text-align: left;
            margin-bottom: 1.25rem;

            font-family: 'Roboto', sans-serif;
            margin-top: 1.75rem;
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

            .upperInfo {
                display: flex;
                flex-direction: row;
                align-items: end;
                justify-content: center;
                margin-bottom: .5rem;
            }

            .productImage {
                height: 4.5rem;
                width: 5.625rem;
                max-height: 7.5rem;
                border-radius: 8px;
                object-fit: cover;
            }

            .addButton {
                padding: .25rem;
                border-radius: 50%;
                border: .25px solid black;
                transition: border-color 0.3s ease;

                svg {
                    transition: color 0.3s ease;
                }
                &:hover {
                    border: .25px solid red;
                    transform: scale(1.05);

                    svg {
                        color: red;
                    }
                }
            }

            .productInfo {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                margin-top: 1rem;
                height: 100%;
            }

            .productName {
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.171875rem;
                text-align: left;
                display: -webkit-box;
                -webkit-line-clamp: 2; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .productDescription {
                font-size: 0.875rem;
                font-weight: 300;
                line-height: 1.025625rem;
                text-align: justify;
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis; 
            }

            .productPrice {
                font-size: 0.875rem;
                font-weight: 500;
                line-height: 1.025625rem;
                text-align: right;

                position: relative;
                bottom: 5.5rem;
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

    overflow: visible;

    .leftContent {
        height: 4rem;
        display: flex;
        flex-direction: row;
        gap: 1rem;

        .productImage {
            align-self: center;
            height: 4rem;
            border-radius: 8px;
            width: 7rem;
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

        .addButton {
            padding: .25rem;
            border-radius: 50%;
            border: .25px solid black;
            transition: border-color 0.3s ease;

            svg {
                transition: color 0.3s ease;
            }

            &:hover {
                border: .25px solid red;

                svg {
                    color: red;
                }
            }
        }
    }
`;
