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

export const RetangleContainer = styled.img`
  @media (max-width: 900px) {
    display: none;
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
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Subtitulo2 = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  color: #bb2649;
  text-align: center;
  margin-top: 5vh;
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MiddleContainerImg = styled.img`
  width: 80%;
  margin-top: 10vh;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Restaurante = styled.h3`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #bb2649;
  @media (max-width: 900px) {
    text-align: center;
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
    margin-right: 2vh;
  }

  @media (max-width: 500px) {
    font-size: 18px;
    margin-right: 2vh;
  }
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
  @media (max-width: 700px) {
    font-size: 16px;
  }
  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const InternetLogoStyle = styled.img`
  width: 40px;
  height: 40px;
  @media (max-width: 900px) {
    width: 30px;
    height: 30px;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerInfos = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerInternetLogo = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    justify-content: center;
    align-items: center;
  }
`;

export const ContainerInternetLogoP = styled.p`
  font-size: 24px;
  font-weight: 400;
  font-family: "Inter";
  margin-left: 16px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export const ContainerCarrinho = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 47px;
  margin-bottom: 12vh;
`;

export const CarrinhoLogoContainer = styled.img`
  @media (max-width: 700px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 400px) {
    width: 160px;
    height: 160px;
  }
`;

export const CelularLogoContainer = styled.img`
  @media (max-width: 700px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 400px) {
    width: 160px;
    height: 160px;
  }
`;

export const GlobalCarrinho = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const GlobalPagamento = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 6vh;
  }
`;

export const ContainerCarrinhoP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 900px) {
    text-align: left;
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const ContainerCelularP = styled.p`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  @media (max-width: 900px) {
    text-align: left;
    margin-left: 7.3vh;
  }
  @media (max-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const TituloCarrinho = styled.div`
  margin-left: 9vh;
`;

export const TituloPagamento = styled.div`
  text-align: end;
  margin-right: 8vh;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Cazappi = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #bb2649;
  text-align: end;
  @media (max-width: 900px) {
    text-align: center;
    margin-top: 2vh;
    font-size: 40px;
    width: 100%;
    margin-left: 3vh;
  }
  @media (max-width: 700px) {
    text-align: center;
    margin-top: 2vh;
    font-size: 30px;
    width: 100%;
    margin-left: 3vh;
    font-size: 30px;
  }

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
