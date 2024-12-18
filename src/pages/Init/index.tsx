import { responsiveHeight, responsiveWidth, responsiveFontSize as rf } from '../../utils/responsive-functions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';
import { ActionButton, Container, Title } from '../SignUp/style';
import { BsCheckCircle, BsInfoCircle } from 'react-icons/bs';
import { Center } from '../ProductView/style';
import { Span, SubTitle } from './style';
import { getUser } from '../../utils/user-token-request';

const Init = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        const isAuthenticated = getUser().user_id;
        isAuthenticated? navigate('/ProfileLojista') : navigate('/Login');
    };
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}/>
            {/* ----------------------- Container ----------------------- */}
            <Center>
                <Container>
                <Span> Tudo Pronto! </Span>
                <BsCheckCircle style={{fontSize: rf(180), color:'#32cf15', marginBlock: responsiveHeight(50)}}/>
                <SubTitle>Que tal começar a explorar as funcionalidades da sua loja?</SubTitle>
                <ActionButton onClick={handleSubmit} style={{marginTop: responsiveHeight(100)}}>Começar</ActionButton>
                </Container>
            </Center>

            {/* ----------------------- FOOTER ----------------------- */}

            <Footer />
        </div >

    );
};

export default Init;