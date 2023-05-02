import React from 'react';
import { FLEXCOLUMN, TITLE, CONTAINER, INPUTTEXT } from './style';
import logoImg from '../../assets/logoImgWithoutCircles.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const ForgetPass = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header />

            {/* ----------------------- Container ----------------------- */}
            <CONTAINER>
                <TITLE style={{
                    marginBottom: rh(10),
                }}>Esqueceu sua senha?</TITLE>
                <TITLE style={{
                    marginBottom: rh(90),
                }}>Redefina ela agora mesmo!</TITLE>
                <form action="">
                    <FLEXCOLUMN>
                        <div style={{
                            marginBottom: rh(31),
                        }}>
                            <INPUTTEXT type="normal" style={{
                                marginBottom: rh(17),
                            }}>Nova senha</INPUTTEXT>
                            <Input type="password" placeholder='**********' />
                        </div>
                        <div style={{
                            marginBottom: rh(59),
                        }}>
                            <INPUTTEXT type="normal" style={{
                                marginBottom: rh(17),
                            }}>Confirmar nova senha</INPUTTEXT>
                            <Input type="password" placeholder='**********' />
                        </div>
                        <FLEXCOLUMN style={{
                            marginBottom: rh(94),
                        }}>
                            <Button as="a" type="red" style={{
                                marginBottom: rh(26),
                            }}>Salvar senha</Button>
                            <Button as="a" href="/login" type="white">Ir para o login</Button>
                        </FLEXCOLUMN>
                    </FLEXCOLUMN>
                </form>
            </CONTAINER>

            {/* ----------------------- FOOTER ----------------------- */}    
            <Footer />
        </div>
    )
}

export default ForgetPass;