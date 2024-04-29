import React from 'react';
import { CONTAINER,
        Image,
        TitleText,
        CustomDiv,
        Text1, 
        Text2, 
        ListContainer, 
        ListItemContainer,
        ListItemText,
        ItemImage,
        ItemInfo,
        ItemName,
        ItemPrice,
        ItemQuantity,
        QuantityButton,
        QuantityValue,
        MinusIcon,
        PlusIcon,
        AddItens,
        TextAddItens,
        ItemsContainer,
        SummaryText,
        InfoBox,
        InfoLine,
        TotalPaymentInfo,
        ContinueButton,
        MainContainer
    
   } from './style';
import logoText from '../../assets/logoText.svg';
import mailImg from '../../assets/mail.svg';
import logoImg from '../../assets/logoImg.png';
import cellphonesHome from '../../assets/cellphonesHome.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const data = [
    { id: '1', name: 'Salada de Camarão', price: 'R$ 4.99', quantity: 2, image: 'https://s3-alpha-sig.figma.com/img/9cf2/5a0b/e4f03b5a846ff4ed671085503f763c28?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4fvctr3dneE3imFJpYCAtvgOU26qnc9pWNHmlQoQycWInlBaUa4aHVMkiTTtnw8r5XeaYWaIC6FsCRnAYYuA1~bd0y0BdkhcoD~sdZIdiY38hMkaGGsw7uODdlRxB7YfL3Dljw3RjrJ6nX8IsVioV1CnVq6J8sIyjkTvhy~~HdsGof6iIncXan561pVo0PUGSixsTz6cxz5mXyYVEcvB9GJbjROY0dtm5PRqxjXGikMsZgfKJFvCD8wOgC4~3mGDOFlUEiaW~qdhb~GPDBUcCx9xumjxmUuWX93DK3tKr9BrXCL~KmeaqB8cLbDyz0U8-QyFk6-kS7tsNFR-onrGg__'},
    { id: '2', name: 'Salada de Camarão', price: 'R$ 4.99', quantity: 1, image: 'https://s3-alpha-sig.figma.com/img/9cf2/5a0b/e4f03b5a846ff4ed671085503f763c28?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4fvctr3dneE3imFJpYCAtvgOU26qnc9pWNHmlQoQycWInlBaUa4aHVMkiTTtnw8r5XeaYWaIC6FsCRnAYYuA1~bd0y0BdkhcoD~sdZIdiY38hMkaGGsw7uODdlRxB7YfL3Dljw3RjrJ6nX8IsVioV1CnVq6J8sIyjkTvhy~~HdsGof6iIncXan561pVo0PUGSixsTz6cxz5mXyYVEcvB9GJbjROY0dtm5PRqxjXGikMsZgfKJFvCD8wOgC4~3mGDOFlUEiaW~qdhb~GPDBUcCx9xumjxmUuWX93DK3tKr9BrXCL~KmeaqB8cLbDyz0U8-QyFk6-kS7tsNFR-onrGg__'},

  ];
  



const BagList = () => {



    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
    
            <MainContainer>
                <CONTAINER className="  ">
                <Image src="https://s3-alpha-sig.figma.com/img/1799/c416/9213c254b2a50c4579ff6af174d63ad1?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KdN6Ydk9bZX3NjRqm3OjruhK6oD8r5hPZTuM40pQDJXqWXwW2Pq-PTqmqBrOfjgS7hU6dBS0LczsF4bRtlrQWxqKmbjCSs-F6tVahttzSK34ryPDX5xhxSOHNrb6hB~ImYCMITTWLXi4az4ZH77RQbj~iacFBX23XAfI27eg1nffYUqVQSX8aSBAz7C7U5fRxqz2XcECmtP1hMpSQ6HjpXX4gGv411aElOq8CzIMPQVGhusuiMqn9VatfLw4XiCpvAT4lB0v7fbJmKMQDVtiQWzl--ohq64MaSgWI6fiWc0u5L96c6Pc69Kff4AwiNWlvP1iFSecNTLXBfKvRuihNw__" alt="Descrição da Imagem" />
                <TitleText>Venni -  Health Food</TitleText>
                </CONTAINER>
                <CustomDiv>
                    <Text1>Itens</Text1>
                    <Text2 >Esvaziar Sacola</Text2>
                </CustomDiv>

                <ItemsContainer>
                <ListContainer>
                {data.map(item => (
                <ListItemContainer key={item.id}>
                    <ItemImage src={item.image} alt={item.name} />
                    <ItemInfo>
                    <div>
                        <ItemName>{item.name}</ItemName>
                        <ItemPrice>{item.price}</ItemPrice>
                        
                    </div>
                    <ItemQuantity>
                        <MinusIcon />
                        <QuantityValue>{item.quantity}</QuantityValue>
                        <PlusIcon />
                    </ItemQuantity>
                    </ItemInfo>
                        </ListItemContainer>
                        ))}
                        <AddItens>
                            <TextAddItens>+  Adicionar mais itens</TextAddItens>
                        </AddItens>

                        <SummaryText>Resumo do pedido</SummaryText>

                        <InfoBox>
                     {/* Linha: Valor do produto */}
                            <InfoLine>
                                <span>Valor do produto</span>
                                <span>R$ 4.99</span>
                            </InfoLine>
                            
                            {/* Linha: Taxa */}
                            <InfoLine>
                                <span>Taxa</span>
                                <span>R$ 4.99</span>
                            </InfoLine>
                            
                            {/* Linha: Entrega */}
                            <InfoLine>
                                <span>Entrega</span>
                                <span>R$ 4.99</span>
                            </InfoLine>
                            
                            {/* Linha: Desconto */}
                            <InfoLine>
                                <span>Desconto</span>
                                <span>R$ 4.99</span>
                            </InfoLine>

                            <TotalPaymentInfo>
                                {/* Conteúdo dentro do TotalPaymentInfo */}
                                <span>Total a pagar</span>
                                <span>R$ 20.99</span>
                            </TotalPaymentInfo>
                        </InfoBox>

                        <ContinueButton>Continuar</ContinueButton>
                    </ListContainer>
                    
                        
                </ItemsContainer>
            </MainContainer>


        

           
               
            


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div>

    );
};

export default BagList;