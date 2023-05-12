import React from "react";
import {
  Titulo,
  Subtitulo1,
  Subtitulo2,
  Section,
  MiddleContainer,
  MiddleContainerImg,
  Restaurante,
  Repasses,
  RetangleContainer,
  InternetLogoStyle,
  ContainerMain,
  ContainerInfos,
  ContainerInternetLogo,
  ContainerInternetLogoP,
  ContainerCarrinho,
  GlobalCarrinho,
  CarrinhoLogoContainer,
  GlobalPagamento,
  ContainerCarrinhoP,
  ContainerCelularP,
  TituloCarrinho,
  CelularLogoContainer,
  TituloPagamento,
  Cazappi,
} from "./style";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import CarrinhoLogo from "../../assets/Carrinho-logo.svg";
import CelularLogo from "../../assets/Celular-logo.svg";
import Retangle from "../../assets/Retangle.svg";
import RetangleMeio from "../../assets/RetanguloMeio-logo.svg";
import InternetLogo from "../../assets/Internet-logo.svg";

const Advertising = () => {
  return (
    <div>
      <Header />

      <Section>
        <Titulo>Crie sua loja</Titulo>

        <ContainerMain>
          <ContainerInfos>
            <Subtitulo1>Como funciona</Subtitulo1>
            <ContainerInternetLogo>
              <InternetLogoStyle src={InternetLogo} />
              <ContainerInternetLogoP>
                Cadastre seus produtos de maneira rápida
              </ContainerInternetLogoP>
            </ContainerInternetLogo>
            <ContainerInternetLogo>
              <InternetLogoStyle src={InternetLogo} />
              <ContainerInternetLogoP>
                Cadastre seus produtos de maneira rápida
              </ContainerInternetLogoP>
            </ContainerInternetLogo>
            <ContainerInternetLogo>
              <InternetLogoStyle src={InternetLogo} />
              <ContainerInternetLogoP>
                Cadastre seus produtos de maneira rápida
              </ContainerInternetLogoP>
            </ContainerInternetLogo>
            <ContainerInternetLogo>
              <InternetLogoStyle src={InternetLogo} />
              <ContainerInternetLogoP>
                Cadastre seus produtos de maneira rápida
              </ContainerInternetLogoP>
            </ContainerInternetLogo>
            <ContainerInternetLogo>
              <InternetLogoStyle src={InternetLogo} />
              <ContainerInternetLogoP>
                Cadastre seus produtos de maneira rápida
              </ContainerInternetLogoP>
            </ContainerInternetLogo>
          </ContainerInfos>
          <RetangleContainer src={Retangle} alt="Retangle" />
        </ContainerMain>

        <MiddleContainer>
          <MiddleContainerImg src={RetangleMeio} />
        </MiddleContainer>

        <Subtitulo2>Como funcionam os repasses</Subtitulo2>
        <Repasses>
          Na hora de comprar, os clientes podem escolher dois tipos de
          pagamentos:
        </Repasses>

        <ContainerCarrinho>
          <GlobalCarrinho>
            <CarrinhoLogoContainer src={CarrinhoLogo} alt="Carrinho" />
            <TituloCarrinho>
              <Restaurante>Via Restaurante</Restaurante>
              <ContainerCarrinhoP>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                facere, cumque id esse, dolores maiores amet quas enim
                perferendis sapiente nemo est illo delectus libero laborum,
                eaque eius aliquam aut!
              </ContainerCarrinhoP>
            </TituloCarrinho>
          </GlobalCarrinho>

          <GlobalPagamento>
            <CelularLogoContainer src={CelularLogo} alt="Celular" />
            <TituloPagamento>
              <Cazappi>Via Cazappi</Cazappi>
              <ContainerCelularP>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                fugit ad, doloremque placeat provident reprehenderit fuga
                reiciendis aliquid ut consequuntur delectus odit eum harum
                voluptatibus consequatur possimus aut nihil rem?
              </ContainerCelularP>
            </TituloPagamento>
          </GlobalPagamento>
        </ContainerCarrinho>
      </Section>

      <Footer />
    </div>
  );
};

export default Advertising;
