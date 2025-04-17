import React, { useState, useEffect } from "react";
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
<<<<<<< HEAD
import { Link } from "react-router-dom";

// Integração com a API
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// const data = [
//   {
//     id: "1",
//     name: "Salada de Camarão",
//     price: 4.99,
//     quantity: 2,
//     image:
//       "https://s3-alpha-sig.figma.com/img/9cf2/5a0b/e4f03b5a846ff4ed671085503f763c28?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4fvctr3dneE3imFJpYCAtvgOU26qnc9pWNHmlQoQycWInlBaUa4aHVMkiTTtnw8r5XeaYWaIC6FsCRnAYYuA1~bd0y0BdkhcoD~sdZIdiY38hMkaGGsw7uODdlRxB7YfL3Dljw3RjrJ6nX8IsVioV1CnVq6J8sIyjkTvhy~~HdsGof6iIncXan561pVo0PUGSixsTz6cxz5mXyYVEcvB9GJbjROY0dtm5PRqxjXGikMsZgfKJFvCD8wOgC4~3mGDOFlUEiaW~qdhb~GPDBUcCx9xumjxmUuWX93DK3tKr9BrXCL~KmeaqB8cLbDyz0U8-QyFk6-kS7tsNFR-onrGg__",
//   },
//   {
//     id: "2",
//     name: "Salada de Camarão",
//     price: 4.99,
//     quantity: 1,
//     image:
//       "https://s3-alpha-sig.figma.com/img/9cf2/5a0b/e4f03b5a846ff4ed671085503f763c28?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J4fvctr3dneE3imFJpYCAtvgOU26qnc9pWNHmlQoQycWInlBaUa4aHVMkiTTtnw8r5XeaYWaIC6FsCRnAYYuA1~bd0y0BdkhcoD~sdZIdiY38hMkaGGsw7uODdlRxB7YfL3Dljw3RjrJ6nX8IsVioV1CnVq6J8sIyjkTvhy~~HdsGof6iIncXan561pVo0PUGSixsTz6cxz5mXyYVEcvB9GJbjROY0dtm5PRqxjXGikMsZgfKJFvCD8wOgC4~3mGDOFlUEiaW~qdhb~GPDBUcCx9xumjxmUuWX93DK3tKr9BrXCL~KmeaqB8cLbDyz0U8-QyFk6-kS7tsNFR-onrGg__",
//   },
// ];

const BagList = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const navigate = useNavigate();

  // Essa recepção da api deve ocorrer na tela Shop_Public_Profile
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const user = getUser();
        // Mudar a URL para a correta
        const response = await api.get(`/product/Restaurante São Carlos/cb652dde-85da-49ea-a67c-073d48456148`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setProducts(response.data);
        console.log("Produtos:", response.data);

      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Adição e Remoção de Produtos do Carrinho
  const [totalPrice, setTotalPrice] = useState(0);

  // Define o valor inicial da compra
  useEffect(() => {
    const newTotal = products
      .map((item) => item.price * item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(newTotal);
  }, [products]); 

  const handleRemoveAllFromCart = (productId: string) => {
    // Código para remover o produto do carrinho
    console.log("Produto removido do carrinho:", productId);
  };

  function handleAddItem(item: Product) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
            product.id === item.id
                ? { ...product, quantity: product.quantity + 1 } // Update item quantity immutably
                : product
        )
    );

    setTotalPrice((prevTotal) => prevTotal + item.price);
  }

  function handleRemoveItem(item: Product) {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === item.id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      // Talvez faça sentido adicionar um filtro aqui para remover o item do array se a quantidade for 0
    );

    if (item.quantity > 0) {
      // Evitar subtrair do total se a quantidade for 0
      setTotalPrice((prevTotal) => prevTotal - item.price);
    }
  }

  // Cálculo do valor final
  const finalPrice = totalPrice + 4.99 + 4.99; // Adicionando taxa do app e da entrega fixa
=======
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

>>>>>>> feat/ListagemDeProdutos

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
<<<<<<< HEAD
            {products.map((item) => (
              <ListItemContainer key={item.id}>
                <ItemImage src={item.image} alt={item.name} />
                <ItemInfo>
                  <div>
                    <ItemName>{item.name}</ItemName>
                    <ItemPrice>R$ {item.price.toFixed(2)}</ItemPrice>
                  </div>
                  <ItemQuantity>
                    <MinusIcon onClick={() => handleRemoveItem(item)}/>
                    <QuantityValue>{item.quantity}</QuantityValue>
                    <PlusIcon onClick={() => handleAddItem(item)}/>
                  </ItemQuantity>
                </ItemInfo>
              </ListItemContainer>
            ))}
            <AddItens>
=======
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
>>>>>>> feat/ListagemDeProdutos
              <TextAddItens>+ Adicionar mais itens</TextAddItens>
            </AddItens>

            <SummaryText>Resumo do pedido</SummaryText>

            <InfoBox>
              {/* Linha: Valor do produto */}
              <InfoLine>
                <span>Valor do produto</span>
<<<<<<< HEAD
                <span>R$ {totalPrice.toFixed(2)}</span>
=======
                <span>
                R$ {(totalProductPrice).toFixed(2)}
                </span>
>>>>>>> feat/ListagemDeProdutos
              </InfoLine>

              {/* Linha: Taxa */}
              <InfoLine>
                <span>Taxa</span>
                <span>R$ 4.99</span>
              </InfoLine>

              {/* Linha: Entrega */}
              <InfoLine>
                <span>Entrega</span>
<<<<<<< HEAD
                <span>R$ 4.99</span>
=======
                <span>R$ {deliveryFee.toFixed(2)}</span>
>>>>>>> feat/ListagemDeProdutos
              </InfoLine>

              <TotalPaymentInfo>
                {/* Conteúdo dentro do TotalPaymentInfo */}
                <span>Total a pagar</span>
<<<<<<< HEAD
                <span>R$ {finalPrice.toFixed(2)}</span>
=======
                <span>
                  R$ {(totalProductPrice + deliveryFee).toFixed(2)}
                </span>
>>>>>>> feat/ListagemDeProdutos
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
