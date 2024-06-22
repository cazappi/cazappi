import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import { Option, Pagamento, NoWrap, Ml, Container, Resumo, InfoPedido, Line, Total, Center, CopyCode, Button, Card, Image, InfosCard, InfosWrapper, MoreOptions, CardNumbers, AddCard, FlexEnd } from './style';
import {BsXDiamondFill, BsCreditCard, BsFiles, BsCheck, BsThreeDotsVertical, BsPlus} from 'react-icons/bs';
interface CardType {
    id: number;
    image: string;
    proprietario: string;
    type: string;
    numbers: string;
}
function BagPagment(){
    const navigate = useNavigate();
    type PaymentOption = 'pix' | 'creditCard' | null;
    const [selectedPayment, setSelectedPayment] = useState<PaymentOption>(null);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [codeCopied, setCodeCopied] = useState(false);

    // Esses valores virão do pedido do cliente
    const infoPedidos = [
        { label: 'Valor do pedido', value: 9.99 },
        { label: 'Taxa', value: 0.99 },
        { label: 'Entrega', value: 0.00 },
        { label: 'Desconto', value: 0.00 }
    ];

    // Os cartões virão do usuário
    const cards: CardType[] = [
        {
            id: 1,
            image: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/BR-PT/mcbc_refeicao-rev_84px.png', 
            // Bandeira do cartão
            proprietario: 'Your Name',
            type: 'Crédito',
            numbers: '9568'
        },
        {
            id: 2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsZg16ImZEEpz3t_QlBtxvFjYUej92jx-wA&s',
            proprietario: 'Another Name',
            type: 'Crédito',
            numbers: '1234 9568'
        },
    ];
    const totalAmount = infoPedidos.reduce((acc, item) => acc + item.value, 0);

    function FormattedPrice(valor:number){
        const formattedPrice = valor.toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }); // arruma o valor a ser exibido no formato 0,00
        return formattedPrice;
    }

    const copyCodeToClipboard = () => {
        // Aqui irá o link do QRCODE -> mesma forma do gerador, utilizando o totalAmount e o pix destinatário
        navigator.clipboard.writeText(`OLÁ TESTE O LINK FOI COPIADO SIM RS!`);
        setCodeCopied(true);
        setTimeout(() => setCodeCopied(false), 3000);
    };

    return(
        <>
        {/* HEADER */}
        <Header transparent={false}/>

        {/* CONTAINER */}
        <Container>
            <NoWrap>Forma de pagamento</NoWrap>
            {/* OPÇÕES DE PAGAMENTO */}
            <Pagamento>
                <Option onClick={() => setSelectedPayment('pix')} isActive={selectedPayment === 'pix'}>
                    <BsXDiamondFill/>
                    <Ml>Pix</Ml>
                </Option>
                <Option onClick={() => setSelectedPayment('creditCard')} isActive={selectedPayment === 'creditCard'}>
                    <BsCreditCard/>
                    <Ml> Cartão de Crédito </Ml>
                </Option>
            </Pagamento>

            {/* CASO OPÇÃO PIX */}
            {selectedPayment === 'pix' && (
                <Center>
                    <span>Tire um print ou aponte a câmera para o QR code</span>
                    {/* CRIAR O GERADOR DE QRCODE -> VALOR DO TOTAL (totalAMOUNT) para o pix correto */}
                    <img src='https://www.redemagic.com/blog/wp-content/uploads/2011/09/qr-code-site-magic.png' alt='qrCodeExample' width='300px'/>

                    <CopyCode onClick={copyCodeToClipboard}>
                        {codeCopied ? <BsCheck /> : <BsFiles />}
                        <Ml>{codeCopied ? 'Link copiado' : 'Copiar código'}</Ml>
                    </CopyCode>
                </Center>
            )}

            {/* CASO OPÇÃO CRÉDITO */}
            {selectedPayment === 'creditCard' && (
            <>
                <NoWrap>Cartões</NoWrap>
                <Center>
                    {/* CARTÕES DO USUÁRIO */}
                    {cards.length > 0 ?(
                    <>
                        {cards.map((card) => (
                            <Card key={card.id} onClick={() => setSelectedCard(card.id)} isActive={selectedCard === card.id}>
                                <InfosWrapper>
                                    <Image src={card.image}/>
                                    <InfosCard>
                                        <span>{card.proprietario} • {card.type} </span>
                                        <CardNumbers isActive={selectedCard === card.id}> •••• {card.numbers.slice(-4)} </CardNumbers> {/* **** ultimos 4 numeros */}
                                    </InfosCard>
                                </InfosWrapper>
                                {/*  FALTA MODAL, MAIS OPÇÕES (:) */}
                                <MoreOptions isActive={selectedCard === card.id}> <BsThreeDotsVertical/> </MoreOptions>
                             </Card>
                        ))}
                    
                    </>
                    ): null}
                </Center>

                <FlexEnd>
                    {/* FALTA MODAL - ADICIONAR CARTÃO */}
                    <AddCard> <BsPlus/> <NoWrap> Adicionar outro cartão </NoWrap> </AddCard>
                </FlexEnd>
            </>
            )}
            <NoWrap>Resumo do Pedido</NoWrap>
            <Resumo>
                {/* INFORMAÇÕES DO PEDIDO */}
                {infoPedidos.map((item, index) => (
                        <InfoPedido key={index}>
                            <span>{item.label}</span>
                            <span>R$ {FormattedPrice(item.value)}</span>
                        </InfoPedido>
                    ))}
                <Line/>
                <InfoPedido>
                        {/* VALOR TOTAL */}
                        <Total>Total a pagar</Total>
                        <Total>R$ {FormattedPrice(totalAmount)}</Total>
                    </InfoPedido>
            </Resumo>

            <Center>
                <Button onClick={() => navigate('/OrderHistoryClient')}> Continuar </Button> 
            </Center>
        </Container>
        <Footer/>
        </>
    )
}

export default BagPagment;