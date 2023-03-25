import React from 'react';
import { LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, BUTTON, TEXT, INPUT, UNSELECTEDBUTTON, SELECTEDBUTTON } from './style';
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

const pf = false;

const SignUp = () => {
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
                    Crie sua conta
                </div>
                <FLEXROW style={{
                    width: rw(1299),
                    justifyContent: 'center',
                    marginTop: rh(95),

                }}>
                    {
                        pf ?
                            <SELECTEDBUTTON>
                                Pessoa física
                            </SELECTEDBUTTON>
                            :
                            <UNSELECTEDBUTTON>
                                Pessoa física
                            </UNSELECTEDBUTTON>
                    }
                    <div style={{ width: rw(25) }}></div>
                    {
                        pf ?
                            <UNSELECTEDBUTTON>
                                Pessoa Juridica
                            </UNSELECTEDBUTTON>
                            :
                            <SELECTEDBUTTON>
                                Pessoa Juridica
                            </SELECTEDBUTTON>
                    }
                </FLEXROW>
                <FLEXCOLUMN style={{
                    width: rw(569),
                    marginTop: rh(140),
                }}>
                    <TEXT>
                        {pf ? "CPF" : "CNPJ" /* Change true to a variable */}
                    </TEXT>
                    <INPUT type="text" />

                    <TEXT>
                        {"E-mail"}
                    </TEXT>
                    <INPUT type="text" />

                    <TEXT>
                        {"Senha"}
                    </TEXT>
                    <INPUT type="text" />

                    <TEXT>
                        {"Confirmar senha"}
                    </TEXT>
                    <INPUT type="text" />

                    <FLEXROW style={{
                        width: rw(1299),
                        justifyContent: 'center',
                        marginTop: rh(95),
                    }}>
                        <input type='checkbox' style={
                            {
                                border: 2,
                                borderColor: THEME.COLORS.SECONDARY,
                                color:THEME.COLORS.SECONDARY,
                                borderRadius: 5,
                            }
                        } />
                        <div>
                            Eu aceito o uso dos meus dados de acordo com a Declaração de Privacidade e aceito os Termos e Condições.
                        </div>
                    </FLEXROW>


                    <BUTTON style={{ marginTop: rh(150) }}>
                        <FLEXROW>
                            <div> Avançar </div>
                            <div> Icon </div>
                        </FLEXROW>
                    </BUTTON>
                </FLEXCOLUMN>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            {footer()}
        </div>

    );
};

export default SignUp;