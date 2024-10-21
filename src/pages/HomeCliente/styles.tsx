import styled from 'styled-components';
import { THEME } from '../../theme';
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Button } from '../ProductView/style';

export const Image = styled.img`
    width: ${rw(460)};
    height: ${rw(291)};
    border-radius: 16px;
    object-fit: cover;
`;

export const OptionButton = styled.button`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    border: none;
    padding: 11px 24px;
    border-radius: 16px;
    margin: 0 ${rw(10)};
    cursor: pointer;
    transition: all 0.4s;
    background-color: #EEEEEE;
    border: 1px transparent solid;

    font-family: "Inter", sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #909090;
    line-height: 19.36px;

    &:hover {
        transform: scale(1.05);
        border: 1px solid #909090;
    }

`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .searchItems {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .searchBarHolder {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

            width: 40%;
            margin: 0 ${rw(15)};
            padding: ${rh(10)} ${rw(10)};
            border-radius: 16px;
            border: 1px solid gray;

            input {
                border: none;
                background-color: transparent;
                margin-left: ${rw(10)};
                width: 100%;
                outline: none;
            }

            input:focus {
                outline: none;
                border: none;
            }

            label {
                display: none;
            }


        }

        .buttonsHolder {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin: ${rh(15)} ${rw(15)};

            button {
                display: flex;
                flex-direction: row;
                gap: 1rem;

                border: none;
                padding: ${rh(10)} ${rw(20)};
                border-radius: 16px;
                margin: 0 ${rw(10)};
                cursor: pointer;
                transition: all 0.3s;

                font-size: 20px;
                font-weight: 500;
                line-height: 23.44px;
                color: #EB1212;
            }

            button:hover {
                transform: scale(1.05);
            }
        }
    }


    .pageOptions {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        
        margin-top: ${rh(43)};
    }

    .firstSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: ${rh(54)};

        .pageTitle {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-bottom: ${rh(15)};

            .title {
                font-size: ${rf(36)};
                font-weight: 500;
                line-height: 42.19px;

                margin-bottom: ${rh(51)};
            }
        }

        .optionsClick {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            .leftImage, .rightImage {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0 ${rw(10)};
                cursor: pointer;
                transition: all 0.3s;

                &:hover {
                    transform: scale(1.05);
                }

                .imageSubtitle {
                    font-family: 'Roboto', sans-serif;
                    font-size: 30px;
                    font-weight: 400;
                    line-height: 35.16px;
                    margin-top: 2rem;
                }
            }
        }
    }

    .secondSection {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: ${rh(15)};

        .title {
            font-size: ${rf(36)};
            font-weight: 500;
            line-height: 42.19px;

            margin-bottom: ${rh(35)};
        }

        .storeOptions {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
        }

        .storesWrapper {

        }
    }
`;