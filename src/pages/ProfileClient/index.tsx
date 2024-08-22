import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Default from '../../assets/profileExample.png'
import { useState } from "react";
import { AddImg } from "../../components/ImageUpload/style";
import {BsFillPencilFill, BsShopWindow, BsPerson, BsChevronRight, BsBell, BsChatLeft, BsGear, BsQuestionCircle} from 'react-icons/bs'
import { ActionButton, BorderOptions, Container, EditImgContainer, IconEdit, Image, ImgButtonWrapper, Span } from "./style";
import { THEME } from "../../theme";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { useNavigate } from "react-router-dom";

const menuOptions = [
    { label: 'Gerenciar meus dados', icon: <BsPerson />, path: '/Profile' },
    { label: 'Central de notificações', icon: <BsBell />, path: '/' },
    { label: 'Minhas conversas', icon: <BsChatLeft />, path: '/' },
    { label: 'Configurações', icon: <BsGear />, path: '/' },
    { label: 'Ajuda', icon: <BsQuestionCircle />, path: '/' },
];

const ProfileClient = () => {
    const [imageSrc, setImageSrc] = useState(Default);
    
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

// preciso de ajuda para fazer a verificação se o perfil está logado, se não tiver, navegar para a página unauthorized (colocar essa rota como rota privada na pagina de rotas)

// essa pagina para os usuarios clientes comuns, ProfileLojista para os usuários lojistas.

    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path); // Navega para a página especificada
      };

    function handleSubmit(){
        
    }

    return (
        <>
        {/* ----------------------- HEADER ----------------------- */}
        <Header transparent={false}></Header>
        <Container>
            <ImgButtonWrapper>
                {/* IMAGE PROFILE */}
                <div>
                    <Image src={imageSrc} alt="Uploaded"/>
                    <EditImgContainer>
                        <AddImg id="selecao-arquivo" type="file" accept="image/*" onChange={handleImageChange} />
                        <IconEdit htmlFor='selecao-arquivo'><BsFillPencilFill/></IconEdit>
                    </EditImgContainer>
                </div>
                {/* IMAGE PROFILE */}
                <ActionButton onClick={handleSubmit}>
                    <ImgButtonWrapper>
                        <BsShopWindow style={{
                            marginRight: responsiveWidth(10),
                            fontSize: responsiveFontSize(43),
                        }}/>
                        <div style={{
                            width: responsiveWidth(140)
                        }}> Se torne um vendedor </div>
                    </ImgButtonWrapper>
                </ActionButton>
            </ImgButtonWrapper>
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
        </Container>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default ProfileClient;
