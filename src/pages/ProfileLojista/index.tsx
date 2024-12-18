import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import { useEffect, useState } from "react";
import { BsClipboardData, BsPerson, BsChevronRight, BsFileText, BsChatLeft, BsGear, BsQuestionCircle} from 'react-icons/bs'
import { BorderOptions, ImgButtonWrapper, Span } from "../ProfileClient/style";
import { responsiveHeight } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { useNavigate } from "react-router-dom";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import { ContainerLojista } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import { Center } from "../ProductView/style";
const menuOptions = [
    { label: 'Gerenciar meus dados', icon: <BsPerson />, path: '/GerenciarDadosLojista' },
    { label: 'Gerenciar produtos', icon: <BsFileText />, path: '/' },
    { label: 'Relatório de vendas', icon: <BsClipboardData/>, path: '/' },
    { label: 'Minhas Conversas', icon: <BsChatLeft />, path: '/' },
    { label: 'Configurações', icon: <BsGear />, path: '/' },
    { label: 'Ajuda', icon: <BsQuestionCircle />, path: '/' },
];

const ProfileLojista = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    async function getUserData() {
        await api
          .get(`store/${getUser().user_id}`, {
            headers: {
              "Authorization": `Bearer ${getToken()}`,
            },
          })
          .then((response) => {
            setUserData(response.data);
            console.log(response.data);
            setImageSrc(response.data.store.imagePerfil || Default);
            setBannerSrc(response.data.store.imageBanner || bannerDefault);
          })
          .catch((err) => {
            clearToken();
            navigate("/unauthorized");
        });
    }
    useEffect(() => {
        getUserData();
    }, []);

    const [imageSrc, setImageSrc] = useState('');
    const [bannerSrc, setBannerSrc] = useState(''); 

    const handleNavigation = (path: string) => {
        navigate(path); // Navega para a página especificada
    };

    return (
        <>
        {/* ----------------------- HEADER ----------------------- */}
        <HeaderLojista transparent={false}/>
        <ContainerLojista>
            {/* BANNER DA LOJA */}
            <ImageUpload
                defaultImageSrc={bannerSrc}
                onChange={(newSrc, file) => {setBannerSrc(newSrc)}}
                altText="Banner da Loja"
                inputId="banner"
              />

              <Center>
              {/* Imagem da loja */}
              <ImageUpload
                defaultImageSrc={imageSrc}
                onChange={(newSrc, file) => {setImageSrc(newSrc)}}
                altText="Perfil da Loja"
                inputId="perfil"
                type="profile"
              />
              </Center>

            {menuOptions.map((option, index) => (
                <BorderOptions key={index}>
                    <ImgButtonWrapper style={{
                    marginBottom: responsiveHeight(30), cursor: 'pointer',
                    }} onClick={() => handleNavigation(option.path)}>
                        <FLEXROW>
                            {option.icon}
                            <Span> {option.label} </Span>
                        </FLEXROW>
                        <BsChevronRight />
                    </ImgButtonWrapper>
                </BorderOptions>
            ))}
        </ContainerLojista>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default ProfileLojista;
