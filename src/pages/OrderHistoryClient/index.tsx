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
  status: 'Requested' | 'InProgress' | 'Cancelled' | 'InDelivery' | 'Completed';
  reviewed: boolean;
}
// PEDIDOS CONSTANTES, precisa ser integrado.
const orders: OrderData[] = [
    {
      restaurantName: 'Veni - Healthy food',
      restaurantImage: LogoVeni,
      products: [
        { productImage: SaladaCamarao, name: 'Salada de camarão completa', price: 4.99},
        { productImage: SaladaCamarao, name: 'Salada de camarão completa', price: 4.99 },
        { productImage: SaladaCamarao, name: 'Salada de camarão completa', price: 4.99 },
        { productImage: SaladaCamarao, name: 'Salada de camarão completa', price: 4.99 },
      ],
      date: '01/01/2020',
      status: 'Completed',
      reviewed: false,
    },

    {
      restaurantName: 'Veni - Healthy food',
      restaurantImage: LogoVeni,
      products: [{productImage: SaladaCamarao, name: 'Salada de camarão requested', price: 4.99 }],
      date: '01/01/2020',
      status: 'Requested',
      reviewed: false,
    },
    {
        restaurantName: 'Veni - Healthy food',
        restaurantImage: LogoVeni,
        products: [
          { productImage: SaladaCamarao, name: 'Salada de camarão inprogress', price: 4.99 },
          { productImage: SaladaCamarao, name: 'Salada de camarão inprogress', price: 4.99 },
        ],
        date: '01/01/2020',
        status: 'InProgress',
        reviewed: false,
      },
    {
        restaurantName: 'Veni - Healthy food',
        restaurantImage: LogoVeni,
        products: [
          { productImage: SaladaCamarao, name: 'Salada de camarão cancelada', price: 4.99 },
          { productImage: SaladaCamarao, name: 'Salada de camarão cancelada', price: 4.99 },
        ],
        date: '01/01/2020',
        status: 'Cancelled',
        reviewed: false,
      },
    {
        restaurantName: 'Veni - Healthy food',
        restaurantImage: LogoVeni,
        products: [
          { productImage: SaladaCamarao, name: 'Salada de camarão indelivery', price: 4.99 },
          { productImage: SaladaCamarao, name: 'Salada de camarão indelivery', price: 4.99 },
        ],
        date: '01/01/2020',
        status: 'InDelivery',
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