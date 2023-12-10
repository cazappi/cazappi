import React from 'react';
import imagem from "../../assets/imagem.svg"
import { Img, Par, Loja, Fav, Container } from "./style"

interface StoreProps {
    name: string;
    imageUrl: string;
}

const StoreComponent: React.FC= () => {
    return (
        <Loja href='/'>
            {/*Usar os itens comentados quando estiver integrado com backend*/}
            {/*<img src={imageUrl} alt={`Store: ${name}`} style={{ width: '100%', height: 'auto' }} />*/}
            <Container><Img src={imagem} alt="Nome"/></Container>
            <Par>Pizza Real</Par>
            <Fav></Fav>
        </Loja>
    );
};

export default StoreComponent;