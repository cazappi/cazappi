import styled from "styled-components";
import React from "react";

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  }
`;

export const Section = styled.div``;

export const Titulo = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  color: #bb2649;
  text-align: center;
  margin-top: 5vh;
`;

export const Subtitulo1 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  color: #bb2649;
  text-align: left;
  margin-bottom: 5vh;
`;

export const Subtitulo2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  color: #bb2649;
  text-align: center;
  margin-top: 5vh;
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainerImg = styled.img`
  width: 80%;
  margin-top: 10vh;
`;

export const Restaurante = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #bb2649;
`;

export const DivCarrinho = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const Carrinho = styled.div`
  display: flex;
  justify-self: center;
  align-items: center;
`;

export const Repasses = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 5vh;
`;

export const InternetLogoStyle = styled.img`
  width: 40px;
  height: 40px;
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
`;

export const ContainerInfos = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

export const ContainerInternetLogo = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const ContainerInternetLogoP = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: "Inter";
  margin-left: 16px;
`;

export const ContainerCarrinho = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 47px;
  margin-bottom: 12vh;
`;

export const GlobalCarrinho = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const GlobalPagamento = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

export const ContainerCarrinhoP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
`;

export const TituloCarrinho = styled.div`
  margin-left: 9vh;
`;

export const TituloPagamento = styled.div`
  text-align: end;
  margin-right: 8vh;
`;

export const Cazappi = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #bb2649;
  text-align: end;
`;
