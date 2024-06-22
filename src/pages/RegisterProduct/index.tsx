import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import HeaderLojista from '../../components/HeaderLojista/HeaderLojista';
import { ActionButton, AtualPage, Center, InfoPage, Container, NoWrap, RedLine, Titulo} from './style';
import InputDesktopLojista from '../../components/InputDesktopLojista/InputDesktopLojista';
import Select from '../../components/Select/Select';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { clearToken } from '../../utils/clear-cookie';
import Default from '../../assets/imgDefault.png'

const Categorias = [
    { value: 'cat1', label: 'Categoria 1' },
    { value: 'cat2', label: 'Categoria 2' },
    { value: 'cat3', label: 'Categoria 3' },
];
const Adicionais = [
    { value: 'add1', label: 'Bacon Crispy', price:3},
    { value: 'add2', label: 'Bacon Crispy', price:3 },
    { value: 'add3', label: 'Bacon Crispy', price: 3 }
];

function RegisterProduct(){
    return(
        <>
            <HeaderLojista transparent={false}></HeaderLojista>
                <Center>
                    <Titulo>Cadastrar Novo Produto</Titulo>
                    <RedLine/>
                </Center>
                    <InfoPage>
                        <NoWrap>Gerenciar Produtos</NoWrap>
                        <BsChevronDoubleRight/> 
                        {/* >> */}
                        <AtualPage>Cadastrar novo produto</AtualPage>
                    </InfoPage>
                <Center>
                            <Container>
                                <ImageUpload defaultImageSrc={Default}></ImageUpload>
                                <InputDesktopLojista label='Nome'></InputDesktopLojista>
                                <InputDesktopLojista label='Descrição'></InputDesktopLojista>
                                <InputDesktopLojista label='Preço'></InputDesktopLojista>
                                {/* ARRUMAR AQUI */}
                                <Select title='Categoria' options={Categorias} />
                                <Select title='Inserir Adicionais' options={Adicionais} />
                            </Container>
                    {/* O botao nao está fazendo nada ainda! */}
                    <ActionButton onClick={clearToken}>Adicionar</ActionButton>
                </Center>
            <Footer/>
        </>
    );
}

export default RegisterProduct;