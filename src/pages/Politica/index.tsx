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

const Politica = () => {
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
                    Nossa Política
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in.
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>
                    Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus.
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget.
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices.
                </div>

                {/*TITULO*/}
                <div>
                    Política de venda
                </div>
                {/*TEXTO*/}
                <div>
                    Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                </div>

                <FLEXROW>
                    <input type='checkbox' style={
                        {
                            border: 2,
                            borderColor: THEME.COLORS.SECONDARY,
                            color: THEME.COLORS.SECONDARY,
                            borderRadius: 5,
                        }
                    } />

                    <div>
                        Declaro que li e aceito as Condições de Venda e Pagamento, e tenho ciência das boas práticas para o varejo.
                    </div>
                </FLEXROW>

                <BUTTON>Fazer login</BUTTON>


            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            {footer()}
        </div>

    );
};

export default Politica;