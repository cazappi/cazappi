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

export const BannerWrapper = styled.div`
    width: 100%;
`;

export const CardsHolder = styled.div`
    position: relative;
    bottom: ${rw(50)};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0 ${rw(22)};
    flex-wrap: wrap;

    .aboutToday{
        border: 1px solid #EB1212;
        border-radius: 16px;
        padding: 1.125rem;
        height: auto;
        width: auto;
        max-width: ${rw(359)};


        display: flex;
        flex-direction: column;

        .titleHolder {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin-bottom: 1.5rem;

            .titleAbout {
                font-size: ${rf(20)};
                font-weight: 600;
                line-height: 1.465rem;
                text-align: left;

                color: #EB1212;

            }
        }

        .aboutContent{
            display: flex;
            flex-direction: row;
            gap: 3rem;
        }

        .upperInfo {
            display: flex;
            flex-direction: row;
            justify-content: left;
            gap: 3rem;

            .upperSubtitle {
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.171875rem;
                text-align: center;
            }

            .valueStand {
                font-size: 1.625rem;
                font-weight: 600;
                line-height: 1.904375rem;
                text-align: left;
                color: #00A650;
                margin-top: 1.625rem;
                margin-left: 0.7rem;

                font-family: 'Roboto', sans-serif;
            }

        }
        .lowerInfo {
            display: flex;
            flex-direction: row;
            justify-content: left;
            width: fit-content;
            gap: 1.25rem;
            flex-wrap: wrap;

            .lowerSubtitle {
                text-align: center;

                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 500;
                line-height: 1.171875rem;
                text-align: center;

            }

            .ordersHolder {
                display: flex;
                flex-direction: row;
                gap: 0.3125rem; 
                margin-top: 0.5rem; 
            }

            .orderNumber {
                font-size: 2rem; 
                font-weight: 600;
                line-height: 2.34375rem;
                text-align: left;
                color: #00A650;

                font-family: 'Roboto', sans-serif;
            }

            .deliveryImg {
                border: 2px solid black;
                border-radius: 50%;
                width: 2.805rem; 
                height: 3.123125rem;
                margin-top: .5rem;
                margin-left: .75rem;
            }

        }
    }

    .orderStatus {
        border: 1px solid #EB1212;
        border-radius: 16px;
        height: fit-content;
        padding-top: 0.5rem;

        .titleStatus {
            font-size: 24px;
            font-weight: 600;
            line-height: 28.13px;
            text-align: center;
            margin-bottom: 1.5rem;
        }

        .buttonsHolder {
            display: flex;
            flex-direction: row;
            gap: 22px;
            margin-bottom: 19.5px;
            margin-left: 23px;
            margin-right: 28px;

            button {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 25px;

            font-size: 15px;
            font-weight: 500;
            line-height: 17.58px;
            text-align: center;

            }
        }

    }
`;

export const ChangeButton = styled.button`
    border: 1px solid ${THEME.COLORS.PRIMARY};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InfosWrapper = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;

    .imgButton {
        width: ${rw(120)};
        height: ${rw(120)};
        border: none;
        border-radius: 50%;
        position: relative;
        bottom: 3.3rem;
        left: ${rw(574)};
        padding: 0;
        margin: 0;
        background: none; 
        cursor: pointer; 
        display: inline-block;
    }
`;

export const StoreWrapper = styled.div`
    margin-left: 1rem;
    margin-top: .5rem;
    position: relative;
    bottom: ${rw(120)};
    display: flex;
    flex-direction: column;

    p {
        font-size: ${rf(24)};
        font-weight: 700;
        line-height: ${rf(29.05)};
        text-align: left;
    }

    .storeStatus{
        display: flex;
        flex-direction: row;
        gap: 6px;

        .statusHolder{
            display: flex;
            flex-direction: row;
            justify-content: space-around;

            width: ${rw(224)};
            height: 1.375rem;
            padding: 0.25rem 1.5rem 0.25rem 1.5rem;
            border-radius: 8px;

            background: 
                linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
                linear-gradient(0deg, #39FF14, #39FF14);

            p{
                font-size: 12px;
                font-weight: 700;
                line-height: 14.06px;
                text-align: left;
                color: white;
            }
        }
    }
`;

export const BannerImage = styled.img`
    width: 100%;
    border-radius: 1.25rem 1.25rem 0px 0px;
    height: 7.25rem;
    object-fit: cover;
`;

export const ContainerLojista = styled(Container)`
    margin-bottom: ${rh(24)};
    margin-top: ${rh(24)};

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
        width: 44%;
        height: 4rem;

        .productImage {
            align-self: center;
            height: 4rem;
            border-radius: 16px;
        }
    }

    .rightContent {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 56%;
        height: fit-content;

        .upperRight {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        .title {
            font-family: 'Roboto', sans-serif;
            font-size: 0.87875rem;
            font-weight: 400;
        }

        .description {
            font-family: 'Roboto', sans-serif;
            font-size: 0.7325rem;
            font-weight: 300;
        }

        .price {
            font-family: 'Roboto', sans-serif;
            font-size: 1.025625rem;
            font-weight: 500;
            text-align: right;
        }
    }
`;
