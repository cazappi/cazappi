import React from 'react';
import { FLEXROW, FLEXCOLUMN, TITLE, TEXT, BOLD, LINE, BOX, CONTENT, BOXBORDER, RADIO, LABEL } from './style';
import { THEME } from '../../theme/index';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const ShopConditions = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header />

            {/* ----------------------- Container ----------------------- */}
            <div>
                <FLEXCOLUMN style={{
                    width: "99vw",
                }}>
                    <FLEXCOLUMN>
                        <TITLE style={{
                            marginBottom: rh(15)
                        }}>Dados bancários</TITLE>
                        <LINE></LINE>
                        <TEXT>Selecione o tipo de conta que se adeque ao seu caso:</TEXT>
                    </FLEXCOLUMN>

                    <FLEXCOLUMN style={{
                        marginBottom: rh(40)
                    }}>
                        <form action="#" style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }}>
                            <BOXBORDER>
                                <FLEXROW style={{
                                    justifyContent: "initial"
                                }}>
                                    <RADIO type="radio" name="radio-group" id="r1" checked />
                                    <LABEL htmlFor="r1">Pessoa jurídica</LABEL>
                                </FLEXROW>
                                <FLEXROW>
                                    <BOX>
                                        <BOLD>Razão Social</BOLD>
                                        <CONTENT>Lorem ipsum dolor</CONTENT>
                                    </BOX>
                                    <BOX>
                                        <BOLD>CNPJ</BOLD>
                                        <CONTENT>123.456.789/0000-10</CONTENT>
                                    </BOX>
                                </FLEXROW>
                                <BOX>
                                    <BOLD>Tipo de negócio</BOLD>
                                    <CONTENT>MEI</CONTENT>
                                </BOX>
                            </BOXBORDER>

                            <BOXBORDER>
                                <FLEXROW style={{
                                    justifyContent: "initial",
                                }}>
                                    <RADIO type="radio" name="radio-group" id="r2" />
                                    <LABEL htmlFor="r2">Pessoa física</LABEL>
                                </FLEXROW>
                                <FLEXROW>
                                    <BOX>
                                        <BOLD>Nome</BOLD>
                                        <CONTENT>Lorem ipsum dolor</CONTENT>
                                    </BOX>
                                    <BOX>
                                        <BOLD>CPF</BOLD>
                                        <CONTENT>123.456.789-10</CONTENT>
                                    </BOX>
                                </FLEXROW>
                            </BOXBORDER>
                            <Button as="a" type="red" style={{
                                marginBottom: rh(80),
                            }}>Continuar</Button>
                        </form>
                    </FLEXCOLUMN>


                </FLEXCOLUMN>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    )
}

export default ShopConditions;