import React from 'react';
import { LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, BUTTON } from './style';
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
import { header, footer } from '../../utils/generics';

const MailConfirmation = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}

            {header()}

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN style={{
                marginTop: rh(78),
                marginBottom: rh(54)
            }}>
                <div style={{
                    fontSize: rf(48),
                    fontWeight: 700,
                    color: THEME.COLORS.PRIMARY,
                }}>
                    Quase lá
                </div>
                <FLEXROW style={{
                    width: rw(1299),
                    justifyContent: 'center',
                    marginTop: rh(95),
                }}>
                    <img src={mailImg} alt="" style={{
                        width: rw(200)
                    }} />
                    <div style={{
                        fontSize: rf(36),
                        marginLeft: rw(41),
                        width: rw(545)
                    }}>
                        Enviamos uma confirmação para ok*****@gmail.com
                    </div>
                </FLEXROW>
                <FLEXCOLUMN style={{
                    width: rw(569),
                    marginTop: rh(140),
                }}>
                    <div style={{
                        fontSize: rf(36),
                        textAlign: "center",
                        marginBottom: rh(120)
                    }}>
                        Confirme seu e-mail para acessar sua conta pela primeira vez
                    </div>
                    <BUTTON>Fazer login</BUTTON>
                    <div style={{
                        fontSize: rf(24)
                    }}>
                        Não recebeu o e-mail?
                        <button style={{
                            marginLeft: rw(5),
                            cursor: 'pointer',
                            border: 0,
                            color: THEME.COLORS.PRIMARY,
                            fontSize: rf(24),
                            textDecorationLine: 'underline',
                        }}>
                            Enviar novamente
                        </button>
                    </div>
                </FLEXCOLUMN>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            {footer()}
        </div>

    );
};

export default MailConfirmation;