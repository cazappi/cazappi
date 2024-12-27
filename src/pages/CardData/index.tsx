import { useState } from 'react';
import {  CardTypeSelect, FLEXROW, InputsHolder } from './style';
import { THEME } from '../../theme/index';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { ActionButton, CHECK } from '../SignUp/style';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from "../RegisterProduct/style";
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import Input from '../../components/Input/Input';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { getToken } from '../../utils/get-cookie';
import { clearToken } from '../../utils/clear-cookie';

const CardData = () => {
    const navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        cardNumber: '',
        cardHolder: '',
        cardType: '',
        expiryDate: '',
        cvv: '',
        cpfCnpj: '',
        cardBrand: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        // Validation rules
        const validationRules: Record<string, { maxLength: number; format?: (value: string) => string }> = {
            cardNumber: { maxLength: 16 },
            expiryDate: { maxLength: 5, format: (v) => v.replace(/^(\d{2})(\d{1,2})?/, (_, g1, g2) => (g2 ? `${g1}/${g2}` : g1)) },
            cvv: { maxLength: 3 },
            cpfCnpj: { maxLength: 14 },
        };
    
        const rules = validationRules[name];
    
        if (rules) {
            if (value.length > rules.maxLength) return;
    
            const formattedValue = rules.format ? rules.format(value.replace(/\D/g, '')) : value;
    
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: formattedValue,
            }));
        } else {
            setFormValues((prevValues) => ({
                ...prevValues,
                [name]: value,
            }));
        }
    };
            
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const validationErrors: string[] = [];
    
        const fieldValidations: Record<string, { minLength?: number; required: boolean; label: string }> = {
            cardNumber: { minLength: 16, required: true, label: 'Número do Cartão' },
            cardHolder: { required: true, label: 'Nome do Titular' },
            cardType: { required: true, label: 'Tipo do Cartão' },
            expiryDate: { required: true, label: 'Data de Validade' },
            cvv: { minLength: 3, required: true, label: 'CVV' },
            cpfCnpj: { required: true, label: 'CPF/CNPJ do titular' },
            cardBrand: { required: true, label: 'Bandeira do Cartão' },
        };
    
        // Validate each field
        Object.entries(fieldValidations).forEach(([fieldName, rules]) => {
            const value = formValues[fieldName as keyof typeof formValues];
    
            if (rules.required && !value) {
                validationErrors.push(`${rules.label} é obrigatório.`);
            } else if (fieldName === 'cpfCnpj') {
                const digitsOnly = value.replace(/\D/g, ''); // Remove non-numeric characters
                if (digitsOnly.length !== 11 && digitsOnly.length !== 14) {
                    validationErrors.push(`${rules.label} deve ter exatamente 11 ou 14 dígitos.`);
                }
            } else if (fieldName === 'expiryDate') {
                const currentDate = new Date();
                const [month, year] = value.split('/').map((val) => parseInt(val, 10)); // Convert both to numbers
    
                if (!month || !year || month < 1 || month > 12) {
                    validationErrors.push('Data de Validade deve estar no formato MM/YY.');
                } else {
                    const expiryDate = new Date(2000 + year, month - 1); // Ensure year is valid
                    if (expiryDate < currentDate) {
                        validationErrors.push('O cartão está expirado.');
                    }
                }
            } else if (rules.minLength && value.length < rules.minLength) {
                validationErrors.push(`${rules.label} deve ter no mínimo ${rules.minLength} caracteres.`);
            }
        });
    
        if (validationErrors.length > 0) {
            alert(validationErrors.join('\n'));
            return;
        }
    
        // Prepare the body for the POST request
        const digitsOnlyCpfCnpj = formValues.cpfCnpj.replace(/\D/g, ''); // Remove non-numeric characters
        const postBody = {
            cardNumber: formValues.cardNumber,
            ownerName: formValues.cardHolder,
            type: formValues.cardType === 'Débito' ? 'debitCard' : 'creditCard',
            ownerDocumentType: digitsOnlyCpfCnpj.length === 11 ? 'cpf' : 'cnpj',
            ownerDocument: digitsOnlyCpfCnpj,
            securityCode: formValues.cvv,
            expirationDate: new Date(
                `20${formValues.expiryDate.split('/')[1]}-${formValues.expiryDate.split('/')[0]}-01T23:59:59.000Z`
            ).toISOString(),
            brand: formValues.cardBrand,
        };
            
        // console.log('POST Body:', postBody);
    

        try {
            const response = await api.post('/creditCard', postBody, {
                headers: {
                    "Authorization": `Bearer ${getToken()}`,
                },
            });
    
            alert('Dados do cartão salvos com sucesso!');
            // console.log('Response:', response.data);
            navigate('/home');
        } catch (err: any) {
            if (err.response?.status === 401) {
                clearToken();
                navigate("/unauthorized");
            } else {
                console.error('Erro ao salvar os dados do cartão:', err);
                // alert('Ocorreu um erro ao salvar os dados. Tente novamente mais tarde.');
            }
        }
    };
                        
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}/>

            {/* ----------------------- Container ----------------------- */}
            {/* Título */}
            <Center>
                <Titulo>Dados do Cartão</Titulo>
                <RedLine />
            </Center>

            {/* perfil >> gerenciar dados >> dados do cartao*/}
            <InfoPage style={{ marginBottom: 0 }}>
                <NoWrap>Perfil</NoWrap>
                <BsChevronDoubleRight />
                <NoWrap>Gerenciar meus Dados</NoWrap>
                <BsChevronDoubleRight />
                <AtualPage>Dados do Cartão</AtualPage>
            </InfoPage>

            <InputsHolder onSubmit={handleSubmit}>

                <div className='inputWrapper'>
                    <p className="InputTitle">Numero do Cartão</p>
                    <Input name="cardNumber" type="number" value={formValues.cardNumber} onChange={handleChange} placeholder='XXXX.XXXX.XXXX.XXXX' required/>
                </div>

                <div className='inputWrapper'>
                    <p className="InputTitle">Bandeira do Cartão</p>
                    <CardTypeSelect
                        name="cardBrand"
                        value={formValues.cardBrand}
                        onChange={handleChange}
                        aria-placeholder='Escolher'
                        required
                    >
                        <option value="">Selecione a Bandeira</option>
                        <option value="elo">Elo</option>
                        <option value="mastercard">Mastercard</option>
                        <option value="visa">Visa</option>
                        <option value="amex">Amex</option>
                        <option value="jcb">JCB</option>
                        <option value="aura">Aura</option>
                        <option value="hipercard">Hipercard</option>
                        <option value="diners">Diners</option>
                        <option value="unionpay">UnionPay</option>
                        <option value="discover">Discover</option>
                    </CardTypeSelect>
                </div>

                
                <div className='inputWrapper'>
                    <p className="InputTitle">Tipo do Cartão</p>
                    <CardTypeSelect
                        name="cardType"
                        value={formValues.cardType}
                        onChange={handleChange}
                        aria-placeholder='Escolher'
                        required
                    >
                        <option value="">Selecione o Tipo do Cartão</option>
                        <option value="Débito">Débito</option>
                        <option value="Crédito">Crédito</option>
                    </CardTypeSelect>
                </div>

                <div className="smallerInputs">
                    <div className='inputWrapper'>
                        <p className="InputTitle">Data de Validade</p>
                        <Input name="expiryDate" type="text" value={formValues.expiryDate} onChange={handleChange} placeholder='XX/XX' required/>
                    </div>

                    <div className='inputWrapper' >
                        <p className="InputTitle">CVV</p>
                        <Input name="cvv" type="number" value={formValues.cvv} onChange={handleChange} placeholder='CVV' required/>
                    </div>
                </div>

                <div className="nameCpfHolder">
                    <div className='inputWrapper'>
                        <p className="InputTitle">Nome do Titular</p>
                        <Input name="cardHolder" type="text" value={formValues.cardHolder} onChange={handleChange} placeholder='NOME DO TITULAR' required/>
                    </div>

                    <div className='inputWrapper'>
                        <p className="InputTitle">CPF/CNPJ do titular</p>
                        <Input name="cpfCnpj" type="number" value={formValues.cpfCnpj} onChange={handleChange} required/>
                    </div>
                </div>

                <button type='submit' className='submitButton'>Salvar</button>
            </InputsHolder>

            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div>

    );
};

export default CardData;