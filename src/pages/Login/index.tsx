import React from 'react';
import { LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, TITLE, CONTAINER, INPUTTEXT } from './style';
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

const Login = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header />

            {/* ----------------------- Container ----------------------- */}
            <CONTAINER>
                <TITLE style={{
                    marginBottom: rh(90),
                }}>Bem vindo(a) de volta</TITLE>
                <LOGOIMAGE src={logoImg} style={{
                    marginBottom: rh(55),
                }}></LOGOIMAGE>
                <form action="">
                    <FLEXCOLUMN>
                        <div style={{
                            marginBottom: rh(31),
                        }}>
                            <INPUTTEXT type="normal" style={{
                                marginBottom: rh(17),
                            }}>E-mail ou usuário</INPUTTEXT>
                            <Input type="text" placeholder='email@email.com' />
                        </div>
                        <div style={{
                            marginBottom: rh(59),
                        }}>
                            <INPUTTEXT type="normal" style={{
                                marginBottom: rh(17),
                            }}>Senha</INPUTTEXT>
                            <Input type="password" placeholder='**********' />
                            <INPUTTEXT type="forget" style={{
                                marginTop: rh(7),
                            }}>Esqueceu a senha? <LINK href="/forgetPass">Alterar senha</LINK></INPUTTEXT>
                        </div>
                        <FLEXCOLUMN style={{
                            marginBottom: rh(94),
                        }}>
                            <Button as="a" type="red" style={{
                                marginBottom: rh(26),
                            }}>Entrar</Button>
                            <Button as="a" type="white">Registrar outra conta</Button>
                        </FLEXCOLUMN>
                    </FLEXCOLUMN>
                </form>
            </CONTAINER>

            {/* ----------------------- FOOTER ----------------------- */}    
            <Footer />
        </div>
    )
}

export default Login;