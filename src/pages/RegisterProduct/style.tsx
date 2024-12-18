import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';

export const Center = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    margin-inline: ${rw(250)};
`;
export const Container = styled.div`
    width: 50%;

    .adicionalWrapper {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #909090;
        padding: 1rem 0.5rem;

        .adicionalInfo {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .label {
                font-size: 1rem;
                font-weight: 400;
                line-height: ${rf(18.75)};
                font-size: ${rf(18.75)};
            }

            .subtitle {
                margin-top: 0.0625rem;
                font-size: 0.875rem;
                font-weight: 300;
                line-height: 1.025rem;
                font-size: ${rf(16.41)};
                text-align: justify;
            }
        }

        .adicionalPrice {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: ${rw(36.71)};

            .editButton {
                border: 1px solid #CC0000;
                border-radius: 50%;

                .buttonIcon {
                    width: 1rem;
                    height: 1rem;
                    margin: 0.3125rem;
                    color: #CC0000;
                }
            }

            .price {
                font-family: 'inter', sans-serif;
                font-weight: 500;
            }
        }

        .modal {
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
        }

        .modal-content {
            background-color: #fff;
            border-radius: 8px;
            padding: 1.25rem;
            max-width: 31.25rem;
            width: 100%;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
            z-index: 1001;
            position: relative;

            display: flex;
            flex-direction: column;
            align-items: center;

            .saveAdicional {
                width: fit-content;
                display: flex;


                color: white;
                background-color: #32cf15;
                border-radius: 16px;

                padding: 0.5625rem 1.15625rem;

                line-height: 1.025625rem;
                font-size: ${rf(16.41)};
            }
        }
    }

    .additionalsTitle {
        font-size: ${rf(19.36)};
        font-weight: 500;
        font-family: 'Inter', sans-serif;

        text-align: left;

        margin-top: 1.5rem;
        margin-bottom: 1.1875rem;
        margin-left: 0.3125rem;

    }

    .buttonsHolder {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        margin-top: 1.1875rem;
        margin-bottom: 4.3125rem;

        .sizeHelper {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            gap: 1.1875rem;
        }

        .newAdditional {
            width: fit-content;
            
            padding: 0.5625rem 0.75rem;
            background-color: #32cf15;
            color: white;
            border-radius: 32px;
            
            cursor: pointer;

            font-size: ${rf(16.41)};
            font-weight: 500;

            &:hover {
                background-color: #259410;
            }

        }

        .importAdditionals {
            width: 100%;

            padding: 0.5625rem 1.4375rem;
            background-color: white;
            color: #32cf15;
            border: 1px solid #32cf15;
            border-radius: 32px;
            
            cursor: pointer;

            font-size: ${rf(16.41)};
            font-weight: 500;

            &:hover {
                color: #259410;
                border: 1px solid #32cf15;
            }

        }
    }
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

export const ActionButton = styled.button`
    cursor: pointer;

    font-size: ${rf(14.06)};
    font-weight: 500;

    border-radius: 32px;
    padding: 0.5rem 2rem;
    color: white;
    background-color: #32cf15;
    margin-bottom: ${rh(64)};

    &:hover {
        background-color: #259410;
        color:white;
    }
`;

export const ModalPopup = styled.div`
    position: fixed;
    flex-wrap: wrap;
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
            background-color: #fff;
            border-radius: 8px;
            padding: 1.25rem;
            max-width: 31.25rem;
            max-height: 31.25rem;
            overflow-y: auto;
            width: 100%;
            box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);
            z-index: 1001;
            position: relative;

            form {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;

                .selectWrapper {
                    width: 86.9%;
                }

                .noProducts {
                    font-family: 'Roboto', sans-serif;
                    line-height: 1.025625rem;
                    font-size: ${rf(16.41)};
                }

            }

            .addAdicional {
                width: fit-content;
                display: flex;


                color: white;
                background-color: #32cf15;
                border-radius: 16px;

                padding: 0.5625rem 1.15625rem;

                line-height: 1.025625rem;
                font-size: ${rf(16.41)};
            }

        }
`;
