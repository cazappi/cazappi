import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Notifications from "../../assets/notifications.svg"
import Sacola from "../../assets/Sacola.svg"
import FilterComponentTop from '../../components/Filter/FilterComponent/TopFilters/index';
import FilterComponentBot from '../../components/Filter/FilterComponent/BottomFilters/index';
import Ping from "../../assets/ping.svg"
import Preco from "../../assets/Preco.png"
import Moto from "../../assets/Moto.png"
import Loja from "../../components/StoreComponent/index"
import { SubHeader,
        SubHeaderContainer1,
        SubHeaderContainer2, 
        Container, 
        Notify, 
        ParagrafoNotify,
        FilterContainer, 
        Titulo,
        ImagemTela, 
        ImgDireita, 
        ImgEsquerda, 
        Imagens, 
        ParImg, 
        Endereco, 
        ParagrafoEndereco,
        ListaLojas,
        ListaLojasContainer } from "./style";


const HomeClient = () => {
    return (
        <div>
            <Header transparent={false}/>
            
            <Container>

                <SubHeader>
                    <SubHeaderContainer1>
                        <Endereco>
                            <img src={Ping} alt="ping"/>
                            <ParagrafoEndereco>Rua do Tucura, 397</ParagrafoEndereco>
                        </Endereco>
                    </SubHeaderContainer1>
                    <SubHeaderContainer2>
                        <Notify>
                            <img src={Notifications} alt="notificacao"/>
                            <ParagrafoNotify>Notificações</ParagrafoNotify>
                        </Notify>
                        <Notify>
                            <img src={Sacola} alt="sacola"/>
                            <ParagrafoNotify>Meu carrinho</ParagrafoNotify>
                        </Notify>
                    </SubHeaderContainer2>
                </SubHeader>

                <FilterContainer>
                    <FilterComponentTop />
                </FilterContainer>
                
                <Titulo>Para você economizar</Titulo>

                <Imagens>
                    <ImgEsquerda>
                        <a href="/"><ImagemTela src={Preco} alt="preço" /></a>
                        <a href="/"><ParImg>Promoções</ParImg></a>
                    </ImgEsquerda>
                    <ImgDireita>
                        <a href="/"><ImagemTela src={Moto} alt="moto" /></a>
                        <a href="/"><ParImg>Entrega Grátis</ParImg></a>
                    </ImgDireita>
                </Imagens>

                <Titulo>Lojas</Titulo>
                <FilterComponentBot />
                
                <ListaLojas>
                    <ListaLojasContainer>
                        <Loja />
                        <Loja /> 
                    </ListaLojasContainer>
                    <ListaLojasContainer>
                        <Loja />
                        <Loja /> 
                    </ListaLojasContainer>
                </ListaLojas>

            </Container>

            <Footer />
        </div>
    );
};

export default HomeClient;