import React from 'react';
import { HEADER, LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, BUTTON } from './generics-style';
import logoText from '../assets/logoText.svg';
import { THEME } from '../theme/index';
import { Icon } from '@iconify-icon/react';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from './responsive-functions';

export const header = () => {
    return (
        <HEADER>
            <LOGOIMAGE src={logoText} alt="logo" />
            <FLEXROW style={{
                width: "max(30%, 320px)"
            }}>
                <LINK href="">Home</LINK>
                <LINK href="">Como Funciona</LINK>
                <LINK href="">Login</LINK>
                <LINK href="">Cadastre-se</LINK>
            </FLEXROW>
        </HEADER>
    )
}

export const footer = () =>{
    return(
        <FLEXCOLUMN style={{
            backgroundColor: THEME.COLORS.PRIMARY,
            paddingTop: rh(16),
            paddingBottom: rh(16)

        }}>
            <LOGOIMAGE src={logoText} alt="logo" style={{
                width: rw(200),
                marginBottom: "10px",
                padding: 0
            }} />
            <FLEXROW style={{
                width: "136px"
            }}>
                <a href=""><Icon icon="mdi:instagram" width={24} style={{
                    color: THEME.COLORS.WHITE
                }} /></a>
                <a href=""><Icon icon="mdi:linkedin" width={24} style={{
                    color: THEME.COLORS.WHITE
                }} /></a>
                <a href=""><Icon icon="ic:baseline-whatsapp" width={24} style={{
                    color: THEME.COLORS.WHITE
                }} /></a>
                <a href=""><Icon icon="ic:baseline-call" width={24} style={{
                    color: THEME.COLORS.WHITE
                }} /></a>
            </FLEXROW>
            <div style={{
                marginBottom: "10px"
            }}>
                <a href="" style={{
                    fontSize: rf(20),
                    color: THEME.COLORS.WHITE,
                    textDecoration: "none"
                }}>
                    Política de privacidade |
                </a>
                <a href="" style={{
                    fontSize: rf(20),
                    color: THEME.COLORS.WHITE,
                    textDecoration: "none",
                    marginLeft: "2px"
                }}>
                    Termos de uso
                </a>
            </div>
            <div style={{
                fontSize: rf(20),
                color: THEME.COLORS.WHITE,
            }}>
                © 2023. MSE Cazzapi - Delivery app | Desenvolvido por CATI Jr.
            </div>
        </FLEXCOLUMN>

    )
}
