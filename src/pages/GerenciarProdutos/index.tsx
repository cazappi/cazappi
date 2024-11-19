import React from 'react';
import Footer from "../../components/Footer/Footer";
import HeaderLojista from '../../components/HeaderLojista/HeaderLojista';
import { BsChevronDoubleRight, BsChevronRight } from 'react-icons/bs';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from '../RegisterProduct/style';
import { BorderOptions, Container, Span } from '../ProfileClient/style';
import { responsiveHeight } from '../../utils/responsive-functions';
import { FLEXROW } from '../Politica/style';
import { THEME } from '../../theme';
import { useNavigate } from 'react-router-dom';

const menuOptions = [
    { label: 'Produtos já cadastrados', path: '/profileLojista/gerenciarProdutos/produtos' },
    { label: 'Cadastrar novo produto', path: '/RegisterProduct' },
    { label: 'Gerenciar estoque', path: '/profileLojista/gerenciarProdutos/gerenciarEstoque' },
    { label: 'Gerenciar sub-categorias', path: '/profileLojista/gerenciarProdutos/subcategorias' },
];

function GerenciarProdutos() {
    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path); // Navega para a página especificada
    };
    return (
        <>
            <HeaderLojista transparent={false} />
            <Center>
                <Titulo>Gerenciar Produtos</Titulo>
                <RedLine />
            </Center>
            <InfoPage style={{ marginBottom: 0 }}>
                <NoWrap>Perfil</NoWrap>
                <BsChevronDoubleRight />
                {/* >> */}
                <AtualPage>Gerenciar produtos</AtualPage>
            </InfoPage>
            <Container style={{ marginBlock: 0, marginBottom: responsiveHeight(50) }}>
                {menuOptions.map((option, index) => (
                    <BorderOptions key={index}>
                        <FLEXROW style={{ cursor: 'pointer' }} onClick={() => handleNavigation(option.path)}>
                            <Span style={{ color: THEME.COLORS.GRAY_600 }}> {option.label} </Span>
                            <BsChevronRight />
                        </FLEXROW>
                    </BorderOptions>
                ))}
            </Container>
            <Footer />
        </>
    );
}

export default GerenciarProdutos;