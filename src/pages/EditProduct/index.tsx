import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import HeaderLojista from '../../components/HeaderLojista/HeaderLojista';
import InputDesktopLojista from '../../components/InputDesktopLojista/InputDesktopLojista';
import Select from '../../components/Select/Select';
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { BsChevronDoubleRight } from 'react-icons/bs';
import { clearToken } from '../../utils/clear-cookie';
import Lanche from '../../assets/sanduiche.png'
import {AtualPage, Center, InfoPage, Container, NoWrap, RedLine, Titulo } from '../RegisterProduct/style';
import { ActionButton, Botoes, DeleteButton, ModalButton, ModalContainer, ModalContent, BackgroundModal, Red } from './style';

function EditProduct(){
    // Aqui necessário pegar os dados do produto clicado. Apenas como exemplo os dados constantes. Assim como as categorias.
    const productData = {
        name: 'Sanduiche natural',
        description: 'Pão italiano, queijo prato, tomate, ovo, alface e rúcula.',
        price: 22.00,
        image: Lanche,
        category: [{ value: 'cat1', label: 'Categoria 1' },
        { value: 'cat2', label: 'Categoria 2' },
        { value: 'cat3', label: 'Categoria 3' }],
        additional: [{ value: 'add1', label: 'Bacon Crispy', price:3},
            { value: 'add2', label: 'Bacon Crispy', price:3 },
            { value: 'add3', label: 'Bacon Crispy', price: 3 }]
    };

    function FormattedPrice(valor:number){
        const formattedPrice = valor.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }); // arruma o valor a ser exibido no formato 0,00
        return formattedPrice;
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const mudarModal = (cond:boolean) => {
        setIsModalOpen(cond);
    };

    const handleConfirmDelete = () => {
        setIsModalOpen(false);
        clearToken(); // Lógica de excluir o produto!!! Adicionar aqui e redirecionamento de página.
    };
    return(
        <>
            <HeaderLojista transparent={false}/>
                <Center>
                    <Titulo>Editar Produto</Titulo>
                    <RedLine/>
                </Center>
                    <InfoPage>
                        <NoWrap>Gerenciar Produtos</NoWrap>
                        <BsChevronDoubleRight/> 
                        <NoWrap>Produtos já cadastrados</NoWrap>
                        <BsChevronDoubleRight/> 
                        <AtualPage>Editar Produto</AtualPage>
                    </InfoPage>
                <Center>
                    <Container>
                        {/* Colocar que a imagem e labels, categorias e adicionais venham do produto */}
                        <ImageUpload defaultImageSrc={productData.image}></ImageUpload>
                        <InputDesktopLojista label='Nome' value={productData.name}></InputDesktopLojista>
                        <InputDesktopLojista label='Descrição' value={productData.description}></InputDesktopLojista>
                        <InputDesktopLojista label='Preço' value={FormattedPrice(productData.price)}></InputDesktopLojista>
                        <Select title='Categoria' options={productData.category} />
                        <Select title='Inserir Adicionais' options={productData.additional} />
                    </Container>
                    {/* O botao nao está fazendo nada ainda! */}
                    <Botoes>
                        <DeleteButton onClick={() => mudarModal(true)}>Excluir</DeleteButton>
                        {/* Criação do Modal CERTEZA QUE QUER EXCLUIR ESSE PRODUTO */}
                        <ActionButton onClick={clearToken}>Editar</ActionButton>
                    </Botoes>
                </Center>
            <Footer/>

            {/* MODAL DE EXCLUSÃO DO PRODUTO */}
            {isModalOpen && (
                <BackgroundModal>
                    <ModalContainer>
                        <ModalContent>
                            <h2>Tem certeza que deseja <Red>excluir</Red> este produto?</h2>
                            <div>
                                <ModalButton onClick={() => mudarModal(false)}>Não</ModalButton>
                                <ModalButton onClick={handleConfirmDelete}>Sim</ModalButton>
                            </div>
                        </ModalContent>
                    </ModalContainer>
                </BackgroundModal>
            )}
        </>
    );
}

export default EditProduct;