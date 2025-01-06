import styled from "styled-components";
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { THEME } from "../../theme";


export const Center = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-inline: ${rw(250)};

    .stats {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        p {
            font-family: 'Roboto', sans-serif;
            font-size: 1.125rem;
            font-weight: 400;
        }
    }

    .valuesHolder {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .infoWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 47.5%;

            .infoTitle {
                font-family: 'Roboto', sans-serif;
                font-size: 1rem;
                font-weight: 400;
                margin: 1.75rem 0;
            }

            .valueWrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: 2px solid #2AE812;
                border-radius: 10px;
                padding: 1.21875rem 0;
                width: 100%;
            }

            .lowerTitle {
                font-family: 'Roboto', sans-serif;
                font-size: 1.125rem;
                font-weight: 400;

                margin-top: 1.875rem;
            }
        }
    }

    .revenueAndSales {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 1.875rem;
         
        .monthlyRevenue{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: auto;
            margin-left: 1.5rem;
        }

        .mostSellingProducts {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 47.5%;

            .products {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: .6rem;

                .product {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    gap: 1rem;
                    width: 70%;
                    border-radius: 16px;
                    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
                    padding: 1rem;

                    img {
                        width: 44%;
                        height: 4.698125rem;
                        border-radius: 8px;
                    }

                    .productInfo {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        .stars {
                            display: flex; 
                            flex-direction: row;
                            gap: .625rem;
                        }

                        .productName{
                            font-family: 'Inter', sans-serif;
                            font-size: .875rem;
                            font-weight: 400;
                            text-align: left;
                        }

                        .productSales {
                            font-family: 'Inter', sans-serif;
                            font-size: 1rem;
                            font-weight: 500;
                            text-align: left;
                        }
                    }
                }
            }
        }
    }

    .ratingsButton {
        margin: 4rem 0;
        border: 1px solid ${THEME.COLORS.PRIMARY};
        border-radius: 8px;
        transition: all .2s;
        padding: .5rem 1rem;

        font-family: 'Roboto', sans-serif;
        color: ${THEME.COLORS.PRIMARY};
        font-size: 1.125rem;
        font-weight: 400;
        text-align: left;

        &:hover {
            transform: scale(1.05);
        }

    }
`;

export const Titulo = styled.h1`
    color: ${THEME.COLORS.PRIMARY};
    font-size: ${rf(60)};
    font-weight: 500;
`;

export const RedLine = styled.div`
    background-color: ${THEME.COLORS.PRIMARY};
    width: 100%;
    height: ${rh(7)};
    margin-block: ${rh(50)};
`;

export const InfoPage = styled.div`
    display:flex;
    flex-direction:row;
    align-items: center;
    margin-left: ${rw(250)};
    margin-bottom: ${rw(30)};
    font-size: ${rf(20)};
`;

export const NoWrap = styled.span`
    color: ${THEME.COLORS.GRAY_600};
    white-space: nowrap;
    margin-inline: ${rw(8)};
`;
export const AtualPage = styled(NoWrap)`
    font-weight: 500;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${rw(16)};
`;

export const LoadingCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`