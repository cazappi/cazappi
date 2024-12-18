import Footer from "../../components/Footer/Footer";
import { BsBicycle, BsChevronDoubleRight, BsEnvelope, BsGift } from 'react-icons/bs';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from '../RegisterProduct/style';
import { BorderOptions, Container, Span } from '../ProfileClient/style';
import { responsiveFontSize, responsiveHeight } from '../../utils/responsive-functions';
import { FLEXCOLUMN, FLEXROW } from '../Politica/style';
import { THEME } from '../../theme';
import { useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";

const menuOptions = [
    { label: 'Pedido a caminho!', icon: <BsBicycle/>, description: 'Danilo já saiu com seu pedido e deve chegar em 5 minutos' },
    { label: 'Hoje tem cupom!', icon: <BsGift/>, description: 'Augusto te enviou um cupom de 20 reais para usar como quiser' },
    { label: 'Verifique seu email', icon: <BsEnvelope/>, description: 'Por questões de segurança valide seu email de contato' },
];

function Notificacoes(){
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
            <AtualPage>Notificações</AtualPage>
        </InfoPage>
        <Container style={{marginBlock: 0, marginBottom: responsiveHeight(50)}}>
            {menuOptions.map((option, index) => (
                <BorderOptions key={index}>
                    <FLEXROW style={{cursor: 'pointer', justifyContent: 'flex-start', marginBottom: responsiveHeight(20)}}>
                        <div style={{color: '#32cf15', fontSize: responsiveFontSize(40)}}> {option.icon} </div>
                        <div>
                            <Span style={{fontSize: responsiveFontSize(23)}}> {option.label} </Span>
                            <Span style={{fontSize: responsiveFontSize(20), color:THEME.COLORS.GRAY_600}}> {option.description} </Span>
                        </div>
                    </FLEXROW>
                </BorderOptions>
            ))}
        </Container>
        <Footer/>
        </>
    );
}

export default Notificacoes;