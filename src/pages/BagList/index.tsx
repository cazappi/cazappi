import React, { useState } from "react";
import {
  CONTAINER,
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
  MainContainer,
} from "./style";
import logoText from "../../assets/logoText.svg";
import mailImg from "../../assets/mail.svg";
import logoImg from "../../assets/logoImg.png";
import noProductImage from "../../assets/noProductImage.svg";
import noStoreImage from "../../assets/noStoreImage.svg";
import cellphonesHome from "../../assets/cellphonesHome.png";
import { THEME } from "../../theme/index";
import { Icon } from "@iconify-icon/react";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { increaseQuantity, decreaseQuantity, clearCart } from "../../redux/reducers/cartSlice";

const BagList = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const storeInfo = useSelector((state: RootState) => state.cart.storeInfo);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const isValidImage = (url?: string): boolean => {
    return !!url && url.startsWith('https://storage.googleapis.com');
  };
  
  const deliveryFee = storeInfo ? storeInfo.deliveryFee : 0;

  console.log(storeInfo);

  const totalProductPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const handleNavigateToStore = () => {
    if (storeInfo) {
      navigate(`/store/${storeInfo.shopkeeperId}`);
    }
    else {
      navigate(`/`);
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };


  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}

      <MainContainer>
        <CONTAINER className="  ">
        <Image
          src={storeInfo && isValidImage(storeInfo.image) ? storeInfo.image : storeInfo ? noStoreImage : undefined}
          alt={storeInfo?.name || "No store"}
          style={{ display: storeInfo ? "block" : "none" }}
        />
          <TitleText>{storeInfo ? storeInfo.name : ""}</TitleText>
        </CONTAINER>
        <CustomDiv>
          <Text1>Itens</Text1>
          <Text2 onClick={handleClearCart}>Esvaziar Sacola</Text2>
        </CustomDiv>

        <ItemsContainer>
          <ListContainer>
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <ListItemContainer key={item.id}>
                  <ItemImage src={isValidImage(item.image) ? item.image : noProductImage} alt={item.name} />
                  <ItemInfo>
                    <div>
                      <ItemName>{item.name}</ItemName>
                      <ItemPrice>
                        R$ {item.price.toFixed(2)}
                      </ItemPrice>
                    </div>
                    <ItemQuantity>
                      <MinusIcon onClick={() => handleDecrease(item.id)} />
                      <QuantityValue>{item.quantity}</QuantityValue>
                      <PlusIcon onClick={() => handleIncrease(item.id)} />
                    </ItemQuantity>
                  </ItemInfo>
                </ListItemContainer>
              ))
            ) : (
              <p>Carrinho vazio! Adicione itens para continuar.</p>
            )}

            
            <AddItens onClick={handleNavigateToStore}>
              <TextAddItens>+ Adicionar mais itens</TextAddItens>
            </AddItens>

            <SummaryText>Resumo do pedido</SummaryText>

            <InfoBox>
              {/* Linha: Valor do produto */}
              <InfoLine>
                <span>Valor do produto</span>
                <span>
                R$ {(totalProductPrice).toFixed(2)}
                </span>
              </InfoLine>

              {/* Linha: Taxa */}
              <InfoLine>
                <span>Taxa</span>
                <span>R$ 4.99</span>
              </InfoLine>

              {/* Linha: Entrega */}
              <InfoLine>
                <span>Entrega</span>
                <span>R$ {deliveryFee.toFixed(2)}</span>
              </InfoLine>

              <TotalPaymentInfo>
                {/* Conteúdo dentro do TotalPaymentInfo */}
                <span>Total a pagar</span>
                <span>
                  R$ {(totalProductPrice + deliveryFee).toFixed(2)}
                </span>
              </TotalPaymentInfo>
            </InfoBox>
            <Link to={"/BagWithDraw"}>
              <ContinueButton>Continuar</ContinueButton>
            </Link>
          </ListContainer>
        </ItemsContainer>
      </MainContainer>

      {/* ----------------------- FOOTER ----------------------- */}

      <Footer />
    </div>
  );
};

export default BagList;
