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

            .valueWrapper {
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                border: 2px solid #2AE812;
                border-radius: 10px;
                padding: 19.5px 0;
                width: 100%;
            }
        }
    }

    .revenueAndSales {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
         
        .monthlyRevenue{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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

                .product {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-around;
                    width: 70%;
                    border-radius: 16px;
                    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.15);
                    padding: .5rem;

                    img {
                        width: 131.55px;
                        height: 75.17px;
                        border-radius: 8px;
                        /* border: 1px solid ${THEME.COLORS.GRAY_300}; */
                    }

                    .productInfo {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;

                        .productName{
                            font-family: 'Inter', sans-serif;
                            font-size: 14px;
                            font-weight: 400;
                            text-align: left;
                        }

                        .productSales {
                            font-family: 'Inter', sans-serif;
                            font-size: 16px;
                            font-weight: 500;
                            text-align: left;
                        }
                    }
                }
            }
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

