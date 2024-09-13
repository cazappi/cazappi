import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import { useEffect, useState } from "react";
import { AddImg } from "../../components/ImageUpload/style";
import {BsFillPencilFill, BsClipboardData, BsPerson, BsChevronRight, BsFileText, BsChatLeft, BsGear, BsQuestionCircle} from 'react-icons/bs'
import { BorderOptions, EditImgContainer, IconEdit, ImgButtonWrapper, Span } from "../ProfileClient/style";
import { THEME } from "../../theme";
import { responsiveHeight } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { useNavigate } from "react-router-dom";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import { BannerImage, BannerWrapper, ContainerLojista, IconEditBanner, IconEditImg, Image } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
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
    
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const newImageSrc = reader.result as string;
            setImageSrc(newImageSrc);
        };
        reader.readAsDataURL(file);
        }
    };
    
    const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = () => {
            const newBannerSrc = reader.result as string;
            setBannerSrc(newBannerSrc);
          };
          reader.readAsDataURL(file);
        }
      };

    const handleNavigation = (path: string) => {
        navigate(path); // Navega para a página especificada
    };

    return (
        <>
        {/* ----------------------- HEADER ----------------------- */}
        <HeaderLojista transparent={false}/>
        <ContainerLojista>
            {/* BANNER IMAGE (ajustando responsividade) */}
            <BannerWrapper>
                <BannerImage src={bannerSrc} alt="Banner" />
                <AddImg id="selecao-banner" type="file" accept="image/*" onChange={handleBannerChange} />
                <IconEditBanner htmlFor='selecao-banner'><BsFillPencilFill /></IconEditBanner>
            </BannerWrapper>

            {/* IMAGE PROFILE */}
            <div>
                <Image src={imageSrc} alt="Perfil"/>
                <EditImgContainer>
                    <AddImg id="selecao-arquivo" type="file" accept="image/*" onChange={handleImageChange} />
                    <IconEditImg htmlFor='selecao-arquivo'><BsFillPencilFill/></IconEditImg>
                </EditImgContainer>
            </div>

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
