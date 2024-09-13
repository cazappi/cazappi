import React, { useState } from 'react';
import { TERMS, FLEXROWTERMS, CHECK, Container, Title, FLEXROW, FLEXCOLUMN, TEXT, INPUT, ButtonRegister, InputsWrapper, LeftContent, ActionButton } from './style';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { useNavigate } from 'react-router-dom';
import SelectS from '../../components/SelectSimples/SelectS';

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
}

const SignUp = () => {
    const [pf, setPF] = useState(true)
    const [formData, setFormData] = useState({
        lojista: !pf,
        nome: '',
        documento: '',
        email: '',
        senha: '',
        confirmarSenha: '',
        nomeComercio: '',
        documentoComercio: '',
        categoria: 'restaurant',
        delivery: false,
        pickup: false,
    });
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!checked);
      };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData((prevData) => ({
                ...prevData,
                [name]: checked
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };
    
    const navigate = useNavigate();
    function handleSubmit(){
        // Documento deve ter no minimo 11 caracteres.
        const requiredFields: (keyof FormData)[] = [
            'nome',
            'documento',
            'email',
            'senha',
        ];
    
        for (const field of requiredFields) {
            if (!formData[field]) {
                alert(`Por favor, preencha o campo ${field}`);
                return;
            }
        }

        if (!pf) {
            const requiredBusinessFields: (keyof FormData)[] = [
                'nomeComercio',
                'documentoComercio',
                'categoria'
            ];

            for (const field of requiredBusinessFields) {
                if (!formData[field]) {
                    alert(`Por favor, preencha o campo ${field}`);
                    return;
                }
            }

            if (formData.documentoComercio.length < 11) {
                alert("CPF ou CNPJ inválido");
                return;
            }
        }
        else{
            if(formData.documento.length < 11){
                alert('CPF ou CNPJ inválido');
                return;
            }
        }

        if (formData.senha !== formData.confirmarSenha) {
            alert("A senha e a confirmação de senha devem ser iguais.");
            return;
        }
        if(!checked){
            alert("Necessário aceitar os termos e condições!");
            return;
        }
        navigate('/Politica', {state: formData})
    }

    function changeType(pf: boolean) {
        setPF(pf);
        setFormData((prevData) => {
            const updatedData = { ...prevData, lojista: !pf };
            return updatedData;
        });
    }


    const camposPessoaFisica = [
        { label: 'Nome', type: 'text', name: 'nome', placeholder: 'Seu Nome' },
        { label: 'CPF ou CNPJ', type: 'text', name: 'documento', placeholder: '123.456.789-10' },
        { label: 'E-mail', type: 'text', name: 'email', placeholder: 'seuemail@email.com' },
        { label: 'Senha', type: 'password', name: 'senha', placeholder: '*************' },
        { label: 'Confirmar senha', type: 'password', name: 'confirmarSenha', placeholder: '*************' }
    ];

    const camposPessoaJuridica = [
        { label: 'Nome completo', type: 'text', name: 'nome', placeholder: 'Seu Nome' },
        { label: 'E-mail', type: 'text', name: 'email', placeholder: 'seuemail@email.com' },
        { label: 'CPF', type: 'text', name: 'documento', placeholder: '123.456.789-10' },
        { label: 'Nome do comércio', type: 'text', name: 'nomeComercio', placeholder: 'Nome do Comércio' },
        { label: 'Tipo de comércio', type: 'select', name: 'categoria', placeholder: 'Tipo do Comércio' },
        { label: 'CPF/CNPJ da loja', type: 'text', name: 'documentoComercio', placeholder: '12.345.678/0001-90' },
        { label: 'Senha', type: 'password', name: 'senha', placeholder: '*************' },
        { label: 'Confirmar senha', type: 'password', name: 'confirmarSenha', placeholder: '*************' },
        { label: 'Permite entregas?', type: 'checkbox', name: 'delivery', placeholder: '' },
        { label: 'Permite retirada no local?', type: 'checkbox', name: 'pickup', placeholder: '' },
    ];
    const campos = pf ? camposPessoaFisica : camposPessoaJuridica;
    const categoriaOptions = [
        { value: 'restaurant', label: 'Restaurante' },
        { value: 'supermarket', label: 'Supermercado' },
    ];
    return (
        <>
        {/* ----------------------- HEADER ----------------------- */}
        <Header transparent={false}/>
        {/* ----------------------- Container ----------------------- */}
        <FLEXCOLUMN>
            <Title>Crie sua conta</Title>

            {/* BOTOES PF E PJ */}
            <FLEXROW>
                <ButtonRegister isActive={pf} onClick={() => pf? null : changeType(true)}>
                    <Icon icon="material-symbols:person" width={rw(26)} style={{
                        color: pf ? '#32cf15': THEME.COLORS.GRAY_300,
                        marginRight: "10px"
                    }}/>
                    Pessoa física
                </ButtonRegister>
                <ButtonRegister isActive={!pf} onClick={() => pf? changeType(false) : null}>
                    <Icon icon="ic:round-business-center" width={rw(26)} style={{
                        color: pf? THEME.COLORS.GRAY_300 : '#32cf15',
                        marginRight: "10px"
                    }}/>
                    Pessoa Juridica
                </ButtonRegister>
            </FLEXROW>
            {/* BOTOES PF E PJ */}
            
            {/* INPUTS */}
            <Container>
                {campos.map(({ label, type, name, placeholder }) => (
                    <div key={name} style={{ width: '100%' }}>
                        {type === 'checkbox' ? (
                            <FLEXROW>
                                <CHECK type={type} name={name} onChange={handleChange} />
                                <TEXT>{label}</TEXT>
                            </FLEXROW>
                        ) : 
                        type === 'select' ? (
                            <InputsWrapper>
                                <TEXT>{label}</TEXT>
                                <SelectS name={name} onChange={handleChange} options={categoriaOptions}/>
                            </InputsWrapper>
                        )
                        :
                        (
                            <InputsWrapper>
                                <TEXT>{label}</TEXT>
                                <INPUT type={type} name={name} placeholder={placeholder} value={formData[name as keyof typeof formData] as string} onChange={handleChange} />
                            </InputsWrapper>
                        )}
                    </div>
                ))}
            </Container>
            {/* INPUTS */}

            {/* TERMOS DE USO */}
            <FLEXCOLUMN>
                <FLEXROWTERMS>
                    <CHECK type='checkbox' onChange={handleCheckboxChange}/>
                    <TERMS>
                        Eu aceito o uso dos meus dados de acordo com a Declaração de Privacidade e aceito os Termos e Condições.
                    </TERMS>
                </FLEXROWTERMS>
            </FLEXCOLUMN>
            {/* TERMOS DE USO */}

            {/* BOTAO AVANÇAR */}
            <LeftContent>
                <ActionButton onClick={handleSubmit}>
                    <FLEXROW style = {{marginBlock: 0}}>
                        <div> Avançar </div>
                        <Icon icon="mdi:arrow-right" width={25} style={{
                            color: THEME.COLORS.WHITE,
                            marginLeft: 5
                        }}/>
                    </FLEXROW>
                </ActionButton>
            </LeftContent>
            {/* BOTAO AVANÇAR */}

        </FLEXCOLUMN>

        {/* ----------------------- FOOTER ----------------------- */}
        <Footer/>
        </>

    );
};

export default SignUp;