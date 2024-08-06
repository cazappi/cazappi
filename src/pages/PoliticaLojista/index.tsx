import { useState } from 'react';
import {  FLEXROW, FLEXCOLUMN, SUBTITLE, POLITICA } from '../Politica/style';
import { THEME } from '../../theme/index';
import {
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ActionButton, CHECK } from '../SignUp/style';
import { useLocation, useNavigate } from 'react-router-dom';

const PoliticaLojista = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const formData = location.state;

    const [checked, setChecked] = useState(false);
    const handleChangeChecked = () => {
        setChecked(!checked);
    }
    
    function handleSubmit(){
        if(!checked){
            alert("Necessário aceitar os termos e condições!")
            return;
        }
        if(formData.lojista){
            navigate('/DadosBancariosPreenchimento', {state: formData}) // se for lojista, vai para a tela de preenchimento dos dados bancários
        }
    }
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}/>

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
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices. Proin venenatis risus libero, at viverra massa fringilla in.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar eleifend ipsum, sed sodales erat consectetur eget. Etiam maximus, leo ut dapibus euismod, ipsum ipsum fringilla massa, ac vehicula tellus neque sit amet risus. Aliquam pretium arcu sagittis mauris vehicula, eu suscipit quam ultrices.
                    </POLITICA>

                    {/*TITULO*/}
                    <SUBTITLE>
                        Política de Recebimento
                    </SUBTITLE>
                    {/*TEXTO*/}
                    <POLITICA>
                        Pellentesque elit urna, congue vel odio ut, sagittis mollis diam. Nam vel tristique augue. Sed ac aliquam eros, vitae elementum nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Quisque vitae mauris non velit placerat venenatis. In at dapibus eros, eget convallis est.
                    </POLITICA>
                </div>
                
                <FLEXROW>
                    <CHECK type='checkbox' onChange={handleChangeChecked}/>

                    <div style={{
                        fontWeight: "600",
                        marginTop: rh(50),
                        marginBottom: rh(50),
                    }}>
                        Declaro que li e aceito as Condições de Venda e Pagamento, e tenho ciência das boas práticas para o varejo.
                    </div>
                </FLEXROW>

                <ActionButton onClick={handleSubmit}>
                    Confirmar Assinatura
                </ActionButton>

            </FLEXCOLUMN>

            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div>

    );
};

export default PoliticaLojista;