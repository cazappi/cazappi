import React from 'react';
import { LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, BUTTONPRIMARY, BUTTONSECONDARY, TITLE, CONTAINER } from './style';
import logoImg from '../../assets/logoImgWithoutCircles.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
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
                <TITLE>Bem vindo de volta</TITLE>
                <LOGOIMAGE src={logoImg}></LOGOIMAGE>
                <form action="">
                    <FLEXCOLUMN>
                        <div>
                            <div>E-mail ou usuário</div>
                            <input type="text" />
                        </div>
                        <div>
                            <div>Senha</div>
                            <input type="password" />
                            <div>Esqueceu a senha? <a href="">Alterar senha</a></div>
                        </div>
                        <FLEXCOLUMN>
                            <Button as="a" type="red">Entrar</Button>
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