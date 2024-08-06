import { useState } from 'react';
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
import { useLocation, useNavigate } from 'react-router-dom';
import { ActionButton, INPUT } from '../SignUp/style';
import api from '../../services/api';
interface FormData {
    lojista: boolean;
    nome: string;
    documento: string;
    email: string;
    senha: string;
    confirmarSenha: string;
    nomeComercio: string;
    documentoComercio: string;
    categoria: string;
    delivery: boolean;
    pickup: boolean;
    banco: string;
    agencia: string;
    conta: string
}

const DadosBancariosPreenchimento = () => {
    // ESSA TELA SERÁ STORE TRANSATION, MAS O REGISTRO JA ESTÁ FUNCIONANDO, SÓ ESTÁ COM UM ERRO DE GERENCIAMENTO
    const navigate = useNavigate();
    const location = useLocation();
    const initialFormData = location.state;

    const [formData, setFormData] = useState<FormData>({
        ...initialFormData,
        banco: '',
        agencia: '',
        conta: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Antes dessa tela, precisamos da tela de politicas de lojista, e essa tela está diferente do que será realmente!
    const lojista = {
        shopkeeper: {
            name: formData.nome,
            email: formData.email,
            document: formData.documento,
            documentType: formData.documento.length === 9? 'cpf':'cnpj',
            password:  formData.senha,
            bank: formData.banco,
            account: formData.conta,
            agency: formData.agencia,
            confirmedEmail: true,
        },
        store: {
            name: formData.nomeComercio,
            category: formData.categoria,
            delivery: formData.delivery,
            pickup: formData.pickup,
            document: formData.documentoComercio,
            documentType: formData.documento.length === 9? 'cpf':'cnpj',
            deliveryFee: 0,
            serviceRadius: 10,
            // nessa tela salvamos o lojista, mas ainda nao temos essas informações, porém elas nao são necessárias para finalizar o cadastro!
            // pix: "pixlojadamaria6@gmail.com",
            // subCategory: "",
             schedule: [{
                openingTime: {
                    mon: "12h00",
                    tue: "12h00",
                    wed: "12h00",
                    thur: "12h00",
                    fri: "12h00",
                    sat: "12h00",
                    sun: "12h00"
                },
                closingTime: {
                    mon: "18h00",
                    tue: "18h00",
                    wed: "18h00",
                    thur: "18h00",
                    fri: "18h00",
                    sat: "18h00",
                    sun: "18h00"
                }
            }],   
            // address: {
            //     city: "São Carlos",
            //     state: "São Paulo",
            //     street: "Rua Padre Teixeira",
            //     zipCode: "13561207",
            //     number: "1913",
            //     district: "Centro",
            //     complement: ""
            // }
        }
    }

    const saveUser = async () => {
        const config = {
            headers: {
                'Authorization': "",
                'Content-Type': 'application/json'
            }
        }

        const dataShopkeeper = lojista
        const urlShopkeeper = "/user?userRole=shopkeeper"
        // Criação de usuário lojista (informações do lojista e da loja)
        console.log(lojista);
        await api
            .post(urlShopkeeper, dataShopkeeper, config)
            .then((response) => {
                console.log(response);
            });
    }

    const handleSubmit = () => {
        const requiredFields: (keyof FormData)[] = [
            'banco',
            'agencia',
            'conta',
        ];
    
        for (const field of requiredFields) {
            if (!formData[field]) {
                alert(`Por favor, preencha o campo ${field}`);
                return;
            }
        }
        // definir onde redirecionará após essa tela!
        saveUser().then(()=> { navigate('/') })

        // navigate('/', { state: formData });
    };

    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}/>
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
                                {formData.nome}
                            </INFO>
                        </ITEM>

                        <ITEM>
                            <SUBTITLE>
                                CNPJ
                            </SUBTITLE>
                            <INFO>
                                {formData.documento}
                            </INFO>
                        </ITEM>
                    </FLEXROW>

                    <ITEM>
                        <SUBTITLE >
                            Tipo de negócio (categoria)
                        </SUBTITLE>
                        <INFO>
                            {/* MEI */}
                            {formData.categoria}
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
                        <INPUT type='text' name='banco' placeholder='' value={formData.banco} onChange={handleChange} />
                    </ITEM>

                    <FLEXROW>

                        <ITEM>
                            <SUBTITLE>
                                Agência
                            </SUBTITLE>
                            <INPUT type='text' name='agencia' placeholder='' value={formData.agencia} onChange={handleChange} />
                        </ITEM>


                        <ITEM>
                            <SUBTITLE>
                                Conta
                            </SUBTITLE>
                            <INPUT type='text' name='conta' placeholder='' value={formData.conta} onChange={handleChange} />
                        </ITEM>

                        {/* REMOVIDO: DÍGITO? NÃO PRESENTE NAS INFORMAÇÕES DO BACKEND */}
                        {/* <ITEM>
                            <SUBTITLE>
                                Dígito
                            </SUBTITLE>
                            <Input type="text" placeholder=''/>
                        </ITEM> */}
                    </FLEXROW>

                </div>


                <ActionButton style={{
                    backgroundColor: THEME.COLORS.PRIMARY,
                    marginBottom: rh(80),
                }} onClick={handleSubmit}>
                    Confirmar Assinatura
                </ActionButton>
            </FLEXCOLUMN>

            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div >

    );
};

export default DadosBancariosPreenchimento;