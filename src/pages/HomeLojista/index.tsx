import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import { useEffect, useState } from "react";
import deliveryImage from '../../assets/entrega-rapida.svg';
import sanduiche from '../../assets/sanduiche.png';
import { AddImg } from "../../components/ImageUpload/style";
import {BsBagCheck, BsClipboardData, BsPerson, BsFileText, BsChatLeft, BsGear, BsQuestionCircle} from 'react-icons/bs'
import { FaPen } from "react-icons/fa";
import { THEME } from "../../theme";
import { responsiveHeight } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { MdOutlineGrade, MdOutlineKeyboardDoubleArrowRight, MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineReload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import { BannerImage, BannerWrapper, CardsHolder, ChangeButton, ContainerLojista, Image, InfosWrapper, StoreWrapper, TEXT } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { string } from "yup";
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { Box, Rating } from '@mui/material';


interface StarRatingProps {
    rating?: number; // Optional prop from 0 to 5
  }  

  const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
    return (
      <Box display="flex" gap="0.59rem">
        <Rating
          name="customized-rating"
          value={rating}
          precision={0.1}
          readOnly
          emptyIcon={<Star fontSize="inherit" style={{ color: '#EEEEEE' }} />}
          icon={<Star fontSize="inherit" style={{ color: '#F2EA27' }} />}
          sx={{
            fontSize: '1.125rem',
          }}
        />
      </Box>
    );
  };
type Schedule = {
    fri: string,
    mon: string,
    sat: string,
    sun: string,
    thu: string,
    tue: string,
    wed: string,
  };
  
  const schedule: Schedule = {
    fri: "09h00",
    mon: "09h00",
    sat: "09h00",
    sun: "09h00",
    thu: "09h00",
    tue: "09h00",
    wed: "09h00",
  };

const HomeLojista = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState();
    const [storeName, setStoreName] = useState('');
    const [openingTime, setOpeningTime] = useState<Schedule>(schedule);
    const [closingTime, setClosingTime] = useState<Schedule>(schedule);
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
            console.log('------------------');
            setOpeningTime(response.data.store[0].schedule[0].openingTime);
            setClosingTime(response.data.store[0].schedule[0].closingTime);
            setStoreName(response.data.store[0].name);
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

    const isOpen = (openingTimes: Schedule, closingTimes: Schedule) => {
        const today = new Date();
      
        let day = today.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase().slice(0, 3) as keyof Schedule;

        // jesus pq chamaram thursday de thur pq deus
        if (day === 'thu') {
            day = 'thur' as keyof Schedule;
        }
      
        if (!openingTimes[day] || !closingTimes[day]) {
          console.error(`No opening or closing time found for the current day: ${day}`);
          return false;
        }
      
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
      
        const parseTime = (timeString: string) => {
          const [hours, minutes] = timeString.split("h").map(Number);
          return { hours, minutes };
        };
      
        const { hours: openingHour, minutes: openingMinute } = parseTime(openingTimes[day]);
        const { hours: closingHour, minutes: closingMinute } = parseTime(closingTimes[day]);
      
        const isAfterOpening = currentHour > openingHour || (currentHour === openingHour && currentMinute >= openingMinute);
        const isBeforeClosing = currentHour < closingHour || (currentHour === closingHour && currentMinute <= closingMinute);
      
        return isAfterOpening && isBeforeClosing;
      };

      const today = new Date();
      
      let day = today.toLocaleDateString('en-US', { weekday: 'short' }).toLowerCase().slice(0, 3) as keyof Schedule;

      // jesus pq chamaram thursday de thur pq deus
      if (day === 'thu') {
          day = 'thur' as keyof Schedule;
      }
            
    return (
        <>        
        {/* ----------------------- HEADER ----------------------- */}
        <HeaderLojista transparent={false}/>
        <ContainerLojista>
            <TEXT>Bem vindo de volta,</TEXT>

            <InfosWrapper>
                {/* BANNER IMAGE */}
                <BannerWrapper>
                    <BannerImage src={bannerSrc} alt="Banner" />
                </BannerWrapper>

                {/* IMAGE PROFILE */}
                <button className="imgButton" onClick={() => navigate("/profilelojista")}>
                  <Image src={imageSrc} alt="Perfil"/>
                </button>

                <StoreWrapper>
                    <p>{storeName}</p>
                    <div className="storeStatus">
                        <div className="statusHolder">
                        {isOpen(openingTime, closingTime) ? (
                            <>
                            <p>Loja Aberta</p>
                            <p>-</p>
                            <p>{openingTime[day].replace('h', ':')} até {closingTime[day].replace('h', ':')}</p>
                            </>
                        ) : (
                            <p>Loja Fechada</p>
                        )}
                        </div>
                        <ChangeButton onClick={() => navigate('/GerenciarDadosCadastrais')}>
                        <FaPen color="#FF0000" size={12} />
                        </ChangeButton>
                    </div>
                    <StarRating rating={3.7} />
                </StoreWrapper>

            </InfosWrapper>

            <CardsHolder>
                <div className="aboutToday">
                    <div className="titleHolder">
                        <p className="titleAbout">Sobre seu negócio hoje:</p>
                        <MdOutlineKeyboardDoubleArrowRight size={24} color="#00A650"/>
                    </div>
                    <div className="upperInfo">
                        <div>
                            <p className="upperSubtitle">Valor recebido</p>
                            <p className="valueStand">R$ 2000</p>
                        </div>
                        <div>
                            <p className="upperSubtitle">Avaliações</p>
                            <p className="iconText">
                                <MdOutlineGrade size={18.56} color="#39FF14"/>
                                4,5
                            </p>                        
                        </div>
                    </div>
                    <div className="lowerInfo">
                      <div>
                        <p className="lowerSubtitle">Numero de pedidos</p>
                        <div className="ordersHolder">
                          <img className="deliveryImg" src={deliveryImage} alt="Número de pedidos" />
                          <div>
                            <p className="orderNumber">+20</p>
                            <p>pedidos</p>
                          </div>
                        </div>
                      </div>
                      <div className="mostSoldHolder">
                        <p className="lowerSubtitle">O mais pedido</p>
                        <div className="mostSold">
                          <img className="mostSoldImg" src={sanduiche} alt="" />
                          <div className="orderInfo">
                            <p className="nameHolder">Sanduiche Natural</p>
                            <p className="priceHolder">R$ 22,00</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="orderStatus">
                    <p className="titleStatus">Status dos pedidos</p>
                    <div className="buttonsHolder">
                        <button onClick={() => navigate("/shopkeeper/orders")}><MdOutlinePendingActions size={64} color="#EB1212"/>Solicitações</button>
                        <button onClick={() => navigate("/shopkeeper/orders")}><AiOutlineReload size={56} color="#F2EA27"/>Em Andamento</button>
                        <button onClick={() => navigate("/shopkeeper/orders")}><BsBagCheck size={56} color="#00A650" />Finalizados</button>
                    </div>
                </div>
            </CardsHolder>

            

        </ContainerLojista>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default HomeLojista;
