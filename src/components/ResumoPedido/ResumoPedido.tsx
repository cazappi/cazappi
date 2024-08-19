// src/components/ResumoPedido/ResumoPedido.tsx
import React from 'react';
import { Resumo, InfoPedido, Line, Total, RedIcon, PaymentType, Payment } from './style';
import {BsCreditCardFill, BsXDiamondFill} from 'react-icons/bs';


interface PaymentDetailsType {
    isPaid: boolean;
    paymentMethod?: string;
    paymentType?: string;
  }
interface ResumoPedidoProps {
  infoPedidos: { label: string, value: number }[];
  paymentDetails?: PaymentDetailsType;
}

const ResumoPedido: React.FC<ResumoPedidoProps> = ({ infoPedidos, paymentDetails = { isPaid: false } }) => {
    function FormattedPrice(valor:number){
        const formattedPrice = valor.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }); // arruma o valor a ser exibido no formato 0,00
        return formattedPrice;
    }

    const totalAmount = infoPedidos.reduce((acc, item) => acc + item.value, 0);
    
    return (
        <Resumo>
            {infoPedidos.map((item, index) => (
                <InfoPedido key={index}>
                    <span>{item.label}</span>
                    <span>R$ {FormattedPrice(item.value)}</span>
                </InfoPedido>
            ))}
            <Line />
            <InfoPedido>
                <Total>Total a pagar</Total>
                <Total>R$ {FormattedPrice(totalAmount)}</Total>
            </InfoPedido>
            {paymentDetails.isPaid && (
            <InfoPedido>
            <Payment>{paymentDetails.paymentMethod}</Payment>
            <PaymentType>
                <Payment>{paymentDetails.paymentType}</Payment>
                {paymentDetails.paymentType?.toLowerCase() === 'pix' ? (
                    <RedIcon><BsXDiamondFill/></RedIcon>
                ) :
                (
                    <RedIcon> <BsCreditCardFill/> </RedIcon>
                )}
            </PaymentType>
            </InfoPedido>
        )}
        </Resumo>
    );
}

export default ResumoPedido;
