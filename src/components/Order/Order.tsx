import React, { useState } from 'react';
import { AvaliarPedido, Container, GreenIcon, Logo, Mr, OrderStatus, RedIcon, RestaurantInfos, Column, GrayLine, LogoProduct, OrderInfos, Span  } from './style';
import {BsCheckCircleFill, BsXCircleFill, BsStar} from 'react-icons/bs'
import ReviewModal from '../ReviewModal/ReviewModal';

interface Product {
  productImage:string,
  name: string;
  price: number;
}

interface OrderProps {
  order: {
    restaurantName: string;
    restaurantImage: string;
    products: Product[];
    date: string;
    status: 'completed' | 'canceled';
    reviewed: boolean;
  };
}

function FormattedPrice(valor:number){
  const formattedPrice = valor.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }); // arruma o valor a ser exibido no formato 0,00
  return formattedPrice;
}

const Order: React.FC<OrderProps> = ({ order }) => {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleReviewSubmit = (ratingProduct: number, ratingShop:number, comment: string) => {
    console.log('Avaliação enviada:', { ratingProduct, ratingShop, comment });
    // numeros de 1 a 5 da avaliação do produto e do estabelecimento, e os comentarios
    // necessario fazer a logica de salvar a avaliação e mudar o reviewed para true.
  };

  return (
    <Container>
      <RestaurantInfos>
        {/* INFORMAÇOES DO RESTAURANTE */}
        <Logo src={order.restaurantImage} alt={order.restaurantName} />
        <span>{order.restaurantName}</span>
      </RestaurantInfos>
      <div>
        {/* PRODUTOS DO PEDIDO */}
        {order.products.map((product, index) => (
          <OrderInfos>
            <LogoProduct src={product.productImage} alt={product.name}/>
            <Column>
              <span>{product.name}</span>
              <Span>R$ {FormattedPrice(product.price)}</Span>
              <GrayLine/>
            </Column>
          </OrderInfos>
        ))}
      </div>
      <OrderStatus>
        {/* STATUS DO PEDIDO */}
        <Span>Data: {order.date} </Span>
        {order.status === 'completed' ? (
          <OrderStatus>
            <GreenIcon><BsCheckCircleFill/></GreenIcon>
            <span>Pedido concluído</span>
          </OrderStatus>
        ) : (
          <OrderStatus>
            <RedIcon> <BsXCircleFill/> </RedIcon>
            <span>Pedido cancelado</span>
          </OrderStatus>
        )} 
      </OrderStatus>
      {order.status === 'completed'? order.reviewed ? (
        null
      ) : (
        // AVALIAR PEDIDO
        <AvaliarPedido onClick={handleOpenModal}>
          <OrderStatus>
            <Mr> <BsStar/> </Mr>
            <button> Avaliar Pedido</button>
          </OrderStatus>
        </AvaliarPedido>
      ): null}
      {/* MODAL DE AVALIAÇÃO */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmit={handleReviewSubmit}
      />
    </Container>
  );
}

export default Order;
