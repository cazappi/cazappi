import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import { Title, Center, OrderHistory } from './style';
import OrderList from '../../components/OrderList/OrderList';
import LogoVeni from '../../assets/logoVeni.png'
import SaladaCamarao from '../../assets/SaladaCamarao.png'

interface Product {
    productImage: string,
    name: string;
    price: number;
}
  
interface OrderData {
    restaurantName: string;
    restaurantImage: string;
    products: Product[];
    date: string;
    status: 'completed' | 'canceled';
    reviewed: boolean;
}
// PEDIDOS CONSTANTES, precisa ser integrado.
const orders: OrderData[] = [
    {
      restaurantName: 'Veni - Healthy food',
      restaurantImage: LogoVeni,
      products: [
        { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99},
        { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99 },
      ],
      date: '01/01/2020',
      status: 'completed',
      reviewed: false,
    },

    {
      restaurantName: 'Veni - Healthy food',
      restaurantImage: LogoVeni,
      products: [{productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99 }],
      date: '01/01/2020',
      status: 'canceled',
      reviewed: false,
    },
    {
        restaurantName: 'Veni - Healthy food',
        restaurantImage: LogoVeni,
        products: [
          { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99 },
          { productImage: SaladaCamarao, name: 'Salada de camarão', price: 4.99 },
        ],
        date: '01/01/2020',
        status: 'canceled',
        reviewed: false,
      },
  ];

function OrderHistoryClient(){
    return(
        <>
        <Header transparent={false}/>
        <Center>
            <Title> Histórico de Pedidos</Title>
            <OrderHistory>
                <OrderList orders={orders} />
            </OrderHistory>
        </Center>
        <Footer/>
        </>
    )
}

export default OrderHistoryClient;