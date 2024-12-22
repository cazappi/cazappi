import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import ResumoPedido from '../../components/ResumoPedido/ResumoPedido';
import { Container, UserInfos, UserProfile, LogoProduct, Quantity, ProductInfos, OrderStatus, NoWrap, UserName, LineContainer, Line, Progress, Circle, VerticalLine, StatusContainer, LabelStatus} from './style';
import { Column, OrderInfos, Span } from '../../components/Order/style';
import Profile from '../../assets/userProfile.png'
import SaladaCamarao from '../../assets/SaladaCamarao.png'
import { FLEXCOLUMN, FLEXROW } from '../Politica/style';
import Order from '../../components/Order/Order';
import { Center } from '../ProductView/style';

const OrdersStatus = {
    Requested: 'Requested',
    InProgress: 'InProgress',
    Cancelled: 'Cancelled',
    InDelivery: 'InDelivery',
    Completed: 'Completed',
};

const OrderStatusMapping: Record<keyof typeof OrdersStatus, string> = {
    Requested: 'Pedido confirmado',
    InProgress: 'Pedido em andamento',
    Cancelled: 'Pedido cancelado',
    InDelivery: 'Pedido a caminho',
    Completed: 'Pedido concluído',
};

interface Product {
    productImage: string | undefined;
    name: string | undefined;
    price: number | undefined;
    quantity?: number;
}

interface OrderData {
    restaurantName: string;
    restaurantImage: string;
    products: Product[];
    date: string;
    status: 'Requested' | 'InProgress' | 'Cancelled' | 'InDelivery' | 'Completed';
    reviewed: boolean;
  }
  
function OrderResume(){
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location.state);

    function FormattedPrice(valor:number) {
        return valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    }

    const paymentDetails = {
        isPaid: true, 
        paymentMethod: "Pago no aplicativo",
        paymentType: "Visa",
    };

    const order = location.state as OrderData;
    if (!order) {
        navigate('/');
        return null;
    }

    const user = {
        icon: order.restaurantImage,
        name: order.restaurantName,
    };

    const visibleStatuses = ['Requested', 'InProgress', 'InDelivery', 'Completed'];
    const isCancelled = order.status === 'Cancelled';
    const currentStep = isCancelled ? -1 : visibleStatuses.indexOf(order.status);

    const totalPrice = order.products.reduce(
        (acc, product) => acc + (product.price ?? 0) * (product.quantity ?? 1),
        0
    );

    const infoPedidos = [
        { label: 'Valor do pedido', value: totalPrice },
        { label: 'Taxa', value: 0.99 },
        { label: 'Entrega', value: 0.00 },
    ];

    
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
                    {visibleStatuses.map((status, index) => (
                        <React.Fragment key={index}>
                            <Circle
                                isActive={!isCancelled && index <= currentStep} // Inactive for Cancelled
                            />
                            {index < visibleStatuses.length - 1 && (
                                <Line
                                    isActive={!isCancelled && index < currentStep} // Inactive for Cancelled
                                >
                                                                            <Progress
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
                                        isActive={index <= currentStep}
                                        />
 
                                </ Line>
                            )}
                        </React.Fragment>
                    ))}
                </LineContainer>
                </OrderInfos>
                <div>
                    <FLEXROW>
                        {isCancelled ? (
                            <div className="w-full flex items-center justify-center">
                                <p>Pedido cancelado</p>
                            </div>
                        ) : (
                            visibleStatuses.map((status, index) => (
                                <StatusContainer
                                    key={index}
                                    isActive={currentStep === index}
                                >
                                    <VerticalLine />
                                    <LabelStatus>{OrderStatusMapping[status as keyof typeof OrdersStatus]}</LabelStatus>
                                </StatusContainer>
                            ))
                        )}
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
                            <Span>R$ {FormattedPrice(product.price ?? 0)}</Span>
                        </Column>
                    </FLEXROW>
                    <Quantity>{(product.quantity ?? 1).toString().padStart(2, '0')}</Quantity>
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