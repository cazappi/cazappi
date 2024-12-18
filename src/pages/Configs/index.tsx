import Footer from "../../components/Footer/Footer";
import { BsBellFill, BsChevronDoubleRight, BsChevronRight, BsWindowDock } from 'react-icons/bs';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from '../RegisterProduct/style';
import { BorderOptions, Container, Span } from '../ProfileClient/style';
import { responsiveFontSize, responsiveHeight } from '../../utils/responsive-functions';
import { FLEXROW } from '../Politica/style';
import { THEME } from '../../theme';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import { AiOutlineLogout } from "react-icons/ai";

const menuOptions = [
    { label: 'Gerenciamento de notificações', icon: <BsBellFill/>, path: '/' },
    { label: 'Termos de uso', icon: <BsWindowDock/>, path: '/' },
    { label: 'Sair desta conta', icon: <AiOutlineLogout/>, path: '/' },
];

function Configs(){
    const navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path); // Navega para a página especificada
    };
    return(
        <>
        <Header transparent={false}/>
        <Center>
            <Titulo>Notificações</Titulo>
            <RedLine/>
        </Center>
        <InfoPage style={{marginBottom: 0}}>
            <NoWrap>Perfil</NoWrap>
            <BsChevronDoubleRight/> 
            {/* >> */}
            <AtualPage>Configurações</AtualPage>
        </InfoPage>
        <Container style={{marginBlock: 0, marginBottom: responsiveHeight(50)}}>
            {menuOptions.map((option, index) => (
                <BorderOptions key={index}>
                    <FLEXROW style={{cursor: 'pointer', marginBottom: responsiveHeight(20)}} onClick={() => handleNavigation(option.path)}>
                        <FLEXROW>
                            <div style={{color: THEME.COLORS.GRAY_600}}> {option.icon} </div>
                            <Span style={{fontSize: responsiveFontSize(23), color:THEME.COLORS.GRAY_600}}> {option.label} </Span>
                        </FLEXROW>
                        <BsChevronRight/>
                    </FLEXROW>
                </BorderOptions>
            ))}
        </Container>
        <Footer/>
        </>
    );
}

export default Configs;