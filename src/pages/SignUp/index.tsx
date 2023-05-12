import React, { useState } from 'react';
import { LOGOIMAGE, TERMS, WRAP, FLEXROWTERMS, CHECK, LINK, TITLE, FLEXROW, FLEXCOLUMN, TEXT, INPUT, UNSELECTEDBUTTON, SELECTEDBUTTON } from './style';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';


const SignUp = () => {
    const [pf, setPF] = useState(false)
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}

            <Header></Header>

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN style={{
                marginTop: rh(78),
                marginBottom: rh(84)
            }}>
                <TITLE>Crie sua conta</TITLE>
                <FLEXROW style={{
                    marginTop: rh(95),
                }}>
                    { 
                        pf ?
                            <SELECTEDBUTTON>
                                <Icon icon="material-symbols:person" width={26} style={{
                                    color: THEME.COLORS.PRIMARY,
                                    marginRight: "10px"
                                }}/>
                                Pessoa física
                            </SELECTEDBUTTON>
                            :
                            <UNSELECTEDBUTTON onClick={() => setPF(true)}>
                                <Icon icon="material-symbols:person" width={26} style={{
                                    color: THEME.COLORS.GRAY_300,
                                    marginRight: "10px"
                                }}/>
                                Pessoa física
                            </UNSELECTEDBUTTON>
                    }
                    <div style={{ width: rw(25) }}></div>
                    {
                        pf ?
                            <UNSELECTEDBUTTON onClick={() => setPF(false)}>
                                <Icon icon="ic:round-business-center" width={26} style={{
                                    color: THEME.COLORS.GRAY_300,
                                    marginRight: "10px"
                                }}/>
                                Pessoa Juridica
                            </UNSELECTEDBUTTON>
                            :
                            <SELECTEDBUTTON>
                                <Icon icon="ic:round-business-center" width={26} style={{
                                    color: THEME.COLORS.PRIMARY,
                                    marginRight: "10px"
                                }}/>
                                Pessoa Juridica
                            </SELECTEDBUTTON>
                    }
                </FLEXROW>
                <FLEXCOLUMN style={{
                    width: rw(569),
                    marginTop: rh(20),
                }}>
                    {pf &&
                        <WRAP>
                            <TEXT>
                                Nome Completo
                            </TEXT>
                            <Input type='text' placeholder='Seu Nome' />
                        </WRAP>
                    }
                    <WRAP>
                        <TEXT>
                            {pf ? "CPF" : "CNPJ" /* Change true to a variable */}
                        </TEXT>
                        <Input type="text" placeholder='123.456.789-10' />
                    </WRAP>

                    {pf &&
                        <WRAP>
                            <TEXT>
                                {"RG"}
                            </TEXT>
                            <Input type='text' placeholder='12.345.678-9' />
                        </WRAP>
                    }

                    {pf &&
                        <WRAP>
                            <TEXT>
                                {"Orgão Emissor"}
                            </TEXT>
                            <Input type='text' placeholder='texto' />
                        </WRAP>
                    }

                    <WRAP>
                        <TEXT>
                            {"E-mail"}
                        </TEXT>
                        <Input type="text" placeholder='seuemail@email.com' />
                    </WRAP>

                    <WRAP>
                        <TEXT>
                            {"Senha"}
                        </TEXT>
                        <Input type="password" placeholder='*************' />
                    </WRAP>

                    <WRAP>
                        <TEXT>
                            {"Confirmar senha"}
                        </TEXT>
                        <Input type="password" placeholder='*************' />
                    </WRAP>

                    <FLEXROWTERMS style={{
                        marginTop: rh(95)
                    }}>
                        <CHECK type='checkbox' />
                        <TERMS>
                            Eu aceito o uso dos meus dados de acordo com a Declaração de Privacidade e aceito os Termos e Condições.
                        </TERMS>
                    </FLEXROWTERMS>


                    <Button as="a" type="red" href="/Politica" style={{ marginTop: rh(150) }}>
                        <FLEXROW style = {{
                            justifyItems: 'center'
                        }}>
                            <div> Avançar </div>
                            <a href="" style={{
                                marginTop: rh(8),
                                marginLeft: rw(10)
                            }}><Icon icon="mdi:arrow-right" width={25} style={{
                                color: THEME.COLORS.WHITE
                            }} /></a>
                        </FLEXROW>
                    </Button>
                </FLEXCOLUMN>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer></Footer>
        </div>

    );
};

export default SignUp;