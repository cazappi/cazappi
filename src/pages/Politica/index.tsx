import React from 'react';
import { LOGOIMAGE, LINK, CHECK, FLEXROW, FLEXCOLUMN, BUTTON, SUBTITLE, POLITICA } from './style';
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

const Politica = () => {
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}

            <Header />

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN style={{
                marginTop: rh(78),
                marginBottom: rh(54),
            }}>

                <div style={{
                    fontSize: rf(48),
                    fontWeight: 700,
                    color: THEME.COLORS.PRIMARY,
                }}>
                    Nossa Política
                </div>

                <div style={{
                    alignItems: 'flex-start',
                    marginTop: rh(70),
                }}>
                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de venda
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                    </POLITICA>
                </div>
                
                <FLEXROW>
                    <CHECK type='checkbox' />

                    <div style={{
                        fontWeight: "600",
                        marginTop: rh(50),
                        marginBottom: rh(50),
                    }}>
                        Declaro que li e aceito as Condições de Venda e Pagamento, e tenho ciência das boas práticas para o varejo.
                    </div>
                </FLEXROW>

                <Button as="a" type="red" href="/BusinessType" style={{
                    marginTop: rh(26),
                    marginBottom: rh(70),
                }}>Confirmar Assinatura</Button>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div>

    );
};

export default Politica;