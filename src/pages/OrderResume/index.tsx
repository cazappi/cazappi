import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import ResumoPedido from '../../components/ResumoPedido/ResumoPedido';
import { Container, UserInfos, UserProfile, LogoProduct, Quantity, ProductInfos, OrderStatus, NoWrap, UserName, LineContainer, Line, Progress, Circle, VerticalLine, StatusContainer, LabelStatus} from './style';
import { Column, OrderInfos, Span } from '../../components/Order/style';
import Profile from '../../assets/userProfile.png'
import SaladaCamarao from '../../assets/SaladaCamarao.png'
import { FLEXCOLUMN, FLEXROW } from '../Politica/style';
import Order from '../../components/Order/Order';

// AINDA NAO ESTÃO INTEGRADAS COM O BACKEND
function OrderResume(){
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
        products: [
            { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99, quantity: 1},
            { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99, quantity: 1},
        ]
    }
    // sem certeza se são essas as situações do pedido
    const OrderStatuses = [
        'Pedido confirmado',
        'Pedido em andamento',
        'Pedido a caminho',
        'Pedido concluído'
    ];

    // esse indexOf deverá receber o status atual do pedido do cliente, por enquanto fica em pedido confirmado
    const currentStep = OrderStatuses.indexOf('Pedido em andamento');

    return(
        <>
        <Header transparent={false}/>
        <Container>
            <NoWrap> Resumo do Pedido</NoWrap>
            <OrderStatus>
                <UserInfos>
                    <UserProfile src={user.icon} alt={user.name} />
                    <UserName>{user.name}</UserName>
                </UserInfos>
                <OrderInfos>
                    <LineContainer>
                        {OrderStatuses.map((item, index) => (
                            <>
                                <Circle key={index} isActive={index <= currentStep} />
                                {index < OrderStatuses.length-1 && (
                                    <Line isActive={index < currentStep}>
                                        <Progress
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                                        isActive={index <= currentStep}
                                        />
                                    </Line>
                                )}
                            </>
                        ))}
                    </LineContainer>
                </OrderInfos>
                <div>
                    <FLEXROW>
                        {OrderStatuses.map((item, index) => (
                            <>
                                <StatusContainer isActive={currentStep === index}>
                                    <VerticalLine />
                                    <LabelStatus>{OrderStatuses[index]}</LabelStatus>
                                </StatusContainer>
                            </>
                        ))}
                    </FLEXROW>
                </div>
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
            <NoWrap> Resumo de Valores</NoWrap>
            <ResumoPedido infoPedidos={infoPedidos} paymentDetails={paymentDetails}/>
        </Container>
        <Footer/>
        </>
    )
}

export default OrderResume;