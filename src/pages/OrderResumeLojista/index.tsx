import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import ResumoPedido from '../../components/ResumoPedido/ResumoPedido';
import { Container, LogoProduct, Quantity, ProductInfos, OrderStatus, NoWrap, UserName } from '../OrderResume/style';
import { Column, Span } from '../../components/Order/style';
import Profile from '../../assets/userProfile.png'
import SaladaCamarao from '../../assets/SaladaCamarao.png'
import { FLEXROW } from '../Politica/style';
import { AddressContainer, Botoes, NeibTitle, StreetTitle } from './style';
import { clearToken } from '../../utils/clear-cookie';
import { ActionButton, DeleteButton } from '../EditProduct/style';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { responsiveHeight } from '../../utils/responsive-functions';


// AINDA NÃO ESTAO INTEGRADAS COM O BACKEND
function OrderResumeLojista(){
    function FormattedPrice(valor:number) {
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    const user = {
        icon: Profile,
        name: 'Antonio Carlos de Almeida',
    };

    const infoPedidos = [
        { label: 'Valor do pedido', value: 9.98 },
        { label: 'Taxa', value: 0.99 },
        { label: 'Entrega', value: 0.00 },
        { label: 'Desconto', value: 0.00 },
    ];

    const paymentDetails = {
        isPaid: true, 
        paymentMethod: "Pago no aplicativo",
        paymentType: "Visa",
    };

    const order = {
        number: 9819,
        address: {street: 'Rua Dom Pedro IV, 1714', neighborhood: 'Setor Monte Alto, Senador Canedo - GO'},
        products: [
            { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99, quantity: 1},
            { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99, quantity: 1},
        ]
    }

    const position: [number, number] = [-16.6799, -49.255];
    // Coordenadas de exemplo (Goiânia, Brasil)

    return(
        <>
        <Header transparent={false}/>
        <Container>
            <NoWrap> Solicitação de Pedido</NoWrap>
            <OrderStatus>
                    <UserName>Pedido nº {order.number}</UserName>
            </OrderStatus>
            <NoWrap> Itens</NoWrap>
            {order.products.map((product, index) => (
                <>
                <ProductInfos key={index}>
                    <FLEXROW>
                        <LogoProduct src={product.productImage} alt={product.name} />
                        <Column>
                            <span>{product.name}</span>
                            <Span>R$ {FormattedPrice(product.price)}</Span>
                        </Column>
                    </FLEXROW>
                    <Quantity>{product.quantity.toString().padStart(2, '0')}</Quantity>
                </ProductInfos>
                </>
            ))}
            <NoWrap> Endereço </NoWrap>
            <AddressContainer>
                <StreetTitle>{order.address.street}</StreetTitle>
                <NeibTitle>{order.address.neighborhood}</NeibTitle>
            </AddressContainer>
            <MapContainer center={position} zoom={13} style={{ height: responsiveHeight(1000), width: '100%', }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            <NoWrap> Valores</NoWrap>
            <ResumoPedido infoPedidos={infoPedidos} paymentDetails={paymentDetails}/>
            <Botoes>
                {/* Não estão fazendo nada */}
                <DeleteButton onClick={clearToken}>Rejeitar</DeleteButton>
                <ActionButton onClick={clearToken}>Aceitar</ActionButton>
            </Botoes>
        </Container>
        <Footer/>
        </>
    )
}

export default OrderResumeLojista;