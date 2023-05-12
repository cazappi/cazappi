import React from 'react';
import { LOGOIMAGE, LINK, EMAIL, IMAGE, FLEXROW, FLEXCOLUMN, TITLE, GROUP, DIVTEXT, DIVTEXTMAIN } from './style';
import logoText from '../../assets/logoText.svg';
import mailImg from '../../assets/mail.svg';
import logoImg from '../../assets/logoImg.png';
import cellphonesHome from '../../assets/cellphonesHome.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MailConfirmation = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header></Header>

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN style={{
                marginTop: rh(78),
                marginBottom: rh(54)
            }}>
                <TITLE>
                    Quase lá
                </TITLE>
                <FLEXROW style={{
                    width: rw(1299),
                    justifyContent: 'center',
                }}>
                    <IMAGE src={mailImg} alt=""/>
                    <DIVTEXTMAIN>
                        Enviamos uma confirmação para 
                        <EMAIL>ok*****@gmail.com</EMAIL> 
                    </DIVTEXTMAIN>
                </FLEXROW>
                <GROUP style={{
                    marginTop: rh(140),
                }}>
                    <DIVTEXTMAIN style={{
                        textAlign: "center",
                        marginBottom: rh(120)
                    }}>
                        Confirme seu e-mail para acessar sua conta pela primeira vez
                    </DIVTEXTMAIN>
                    <Button as="a" type="red">Fazer login</Button>
                    <DIVTEXT style={{
                        marginTop: "15px",
                    }}>
                        Não recebeu o e-mail?
                        <LINK style={{
                            marginLeft: rw(5),
                        }}>
                            Enviar novamente
                        </LINK>
                    </DIVTEXT>
                </GROUP>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer></Footer>
        </div>

    );
};

export default MailConfirmation;