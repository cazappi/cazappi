import React from 'react';
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
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { FLEXCOLUMN, FLEXROW, SUBTITLE, INFO, ITEM } from './style';
import Input from "../../components/Input/Input";

const DadosBancariosRevisao = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}

            <Header />

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN>
                <text style={{
                    fontStyle: 'normal',
                    fontWeight: '700',
                    fontSize: rf(48),
                    color: THEME.COLORS.PRIMARY,
                    marginTop: rh(60)
                }}>
                    Dados bancários
                </text>

                <div style={{
                    width: rw(1100),
                    borderWidth: rw(2),
                    borderColor: THEME.COLORS.PRIMARY,
                    borderBlockStyle: 'solid',
                    marginTop: rh(10)
                }}>
                </div> {/* Linha */}

                <div style={{
                    fontWeight: '400',
                    fontSize: rf(24),
                    marginTop: rh(20)
                }}>
                    Informe o banco, agência, conta e o dígito  da conta bancária
                </div>

                <div style={{
                    width: rw(750),
                    marginTop: rh(100),
                    borderRadius: rw(10),
                    borderColor: THEME.COLORS.PRIMARY,
                    borderStyle: 'solid'
                }}>
                    <FLEXROW style={{
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}>
                        <div style={{
                            backgroundColor: THEME.COLORS.PRIMARY,
                            width: 20,
                            height: 20,
                            borderRadius: 1000,
                            marginLeft: rw(40),
                        }}>
                            <Icon icon="mdi:checkbox-blank-circle" width={10} style={{
                                color: THEME.COLORS.WHITE,
                                marginLeft: 5,
                            }} />
                        </div>
                        <SUBTITLE style={{
                            marginTop: rh(25),
                            marginLeft: rw(10)
                        }}>
                            Pessoa Juridica
                        </SUBTITLE>
                    </FLEXROW>

                    <FLEXROW>

                        <ITEM>
                            <SUBTITLE>
                                Razão Social
                            </SUBTITLE>
                            <INFO>
                                Lorem ipsum dolor
                            </INFO>
                        </ITEM>

                        <ITEM>
                            <SUBTITLE>
                                CNPJ
                            </SUBTITLE>
                            <INFO>
                                123.456.789/0000-10
                            </INFO>
                        </ITEM>
                    </FLEXROW>

                    <ITEM>
                        <SUBTITLE >
                            Tipo de negócio
                        </SUBTITLE>
                        <INFO>
                            MEI
                        </INFO>
                    </ITEM>

                </div>

                <div style={{
                    width: rw(750),
                    marginTop: rh(80),
                }}>
                    <ITEM>
                        <SUBTITLE>
                            Banco
                        </SUBTITLE>
                        <Input type="text" placeholder='' />
                    </ITEM>

                    <FLEXROW>

                        <ITEM>
                            <SUBTITLE>
                                Agência
                            </SUBTITLE>
                            <Input type="text" placeholder='' size={rw(80)} />
                        </ITEM>


                        <ITEM>
                            <SUBTITLE>
                                Conta
                            </SUBTITLE>
                            <Input type="text" placeholder='' size={rw(80)} />
                        </ITEM>


                        <ITEM>
                            <SUBTITLE>
                                Dígito
                            </SUBTITLE>
                            <Input type="text" placeholder='' size={rw(80)} />
                        </ITEM>
                    </FLEXROW>

                </div>


                <Button as="a" type="red" style={{
                    marginBottom: rh(80),
                    marginTop: rh(80),
                }}>Continuar</Button>
            </FLEXCOLUMN>

            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div >

    );
};

export default DadosBancariosRevisao;