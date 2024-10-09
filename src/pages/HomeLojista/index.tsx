import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import { useEffect, useState } from "react";
import deliveryImage from '../../assets/entrega-rapida.svg';
import sanduiche from '../../assets/sanduiche.png';
import { AddImg } from "../../components/ImageUpload/style";
import {BsBagCheck, BsPlusLg} from 'react-icons/bs'
import { FaPen } from "react-icons/fa";
import { THEME } from "../../theme";
import { responsiveHeight } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { MdOutlineGrade, MdOutlineKeyboardDoubleArrowRight, MdOutlinePendingActions } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import { BannerImage, BannerWrapper, CardsHolder, ChangeButton, ContainerLojista, Image, InfosWrapper, ItemCard, StoreWrapper, TEXT } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { string } from "yup";
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';


interface StarRatingProps {
    rating?: number;
  }  

  const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
    return (
      <Box display="flex" gap="0.59rem" sx={{ width: 'fit-content' }}>
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

interface ProductProps {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    subCategory: string;
    quantity_sold: number;
    average_rating: number;
  }
  
const ProductCard: React.FC<ProductProps> = ({
    id,
    name,
    description,
    image,
    category,
    subCategory,
    quantity_sold,
    average_rating,
  }) => {
    return (
      <>
        <ItemCard>
          <div className="leftContent">
            {/* Imagem */}
            <img className="productImage" src={sanduiche}/>
          </div>
          <div className="rightContent">
            <div className="upperRight">

              {/* nome do produto */}
              <p className="title">
                {name}
              </p>

              <button className="optionsButton"> <BsThreeDotsVertical size={9.75}/> </button>
            </div>
      
            {/* descrição */}
            <p className="description">
              {description}
            </p>

            {/* PREÇO */}
            <p className="price">
              R$ 22,00
            </p>
          </div>
        </ItemCard>
      </>
      );
  };

  const products = [
    {
      id: "1",
      name: "Sanduiche Natural",
      description: "Pão italiano, queijo prato, tomate, ovo, alface e rúcula",
      image: sanduiche,
      category: "Food",
      subCategory: "Sandwiches",
      quantity_sold: 250,
      average_rating: 4.5,
    },
    {
      id: "2",
      name: "Pizza Margherita",
      description: "Pizza com molho de tomate, queijo mussarela e manjericão",
      image: Default, // Use a different image if available
      category: "Food",
      subCategory: "Pizza",
      quantity_sold: 100,
      average_rating: 4.7,
    },
    {
      id: "3",
      name: "Suco Natural de Laranja",
      description: "Suco fresco e natural de laranja sem açúcar",
      image: Default, // Use a different image if available
      category: "Beverage",
      subCategory: "Juices",
      quantity_sold: 150,
      average_rating: 4.2,
    },
    {
      id: "4",
      name: "Bolo de Cenoura",
      description: "Bolo de cenoura com cobertura de chocolate",
      image: Default, // Use a different image if available
      category: "Dessert",
      subCategory: "Cakes",
      quantity_sold: 75,
      average_rating: 4.8,
    },
  ];  

  
const HomeLojista = () => {
    const navigate = useNavigate();
    const [storeName, setStoreName] = useState('');
    const [storeRating, setStoreRating] = useState(0);
    const [openingTime, setOpeningTime] = useState<Schedule>(schedule);
    const [closingTime, setClosingTime] = useState<Schedule>(schedule);
    const getCurrentDate = (): string => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Add 1 because months are 0-indexed
      const day = String(today.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    };
    const [mostOrderedProducts, setMostOrderedProducts] = useState<any[]>([]);
    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    
    async function getUserData() {
        const data = {
          date: getCurrentDate(),
          status: "Completed",
          numberOfProducts: 4,
        };
    
        await api
          .get(`store/${getUser().user_id}`, {
            headers: {
              "Authorization": `Bearer ${getToken()}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            console.log('------------------');
            setStoreRating(response.data.store[0].rating);
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

        await api
          .post(`store/dailyReport/shopkeeper1`, data, {
            headers: {
              "Authorization": `Bearer ${getToken()}`,
            },
          })
          .then((response) => {
            console.log(response.data);
            setMostOrderedProducts(response.data.mostOrderedProducts);
            setTotalOrders(response.data.totalOrders);
            setTotalRevenue(response.data.totalRevenue);
          })
          .catch((err) => {
            alert("ops! ocorreu um erro: " + err);
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


      const renderProductCards = () => {
        return products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            image={product.image}
            category={product.category}
            subCategory={product.subCategory}
            quantity_sold={product.quantity_sold}
            average_rating={product.average_rating}
          />
        ));
    };
    
            
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
                    <a href={`/store/${getUser().user_id}/reviews`} style={{ width: 'fit-content'}}>
                      <StarRating rating={storeRating? storeRating : 0} />
                    </a>
                </StoreWrapper>

            </InfosWrapper>

            <CardsHolder>
                <div className="aboutToday">
                    <div className="titleHolder">
                        <p className="titleAbout">Sobre seu negócio hoje:</p>
                        <MdOutlineKeyboardDoubleArrowRight size={24} color="#00A650"/>
                    </div>
                    <div className="aboutContent">
                      <div className="upperInfo">
                          <div>
                              <p className="upperSubtitle">Valor recebido:</p>
                              <p className="valueStand">R$ {Math.trunc(totalRevenue)}</p>
                            </div>
                      </div>
                      <div className="lowerInfo">
                        <div>
                          <p className="lowerSubtitle">Número de pedidos:</p>
                          <div className="ordersHolder">
                            <img className="deliveryImg" src={deliveryImage} alt="Número de pedidos" />
                            <div>
                              <p className="orderNumber">{totalOrders <= 20 ? totalOrders : "+20"}</p>
                              <p>pedidos</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="orderStatus">
                    <p className="titleStatus">Status dos pedidos</p>
                    <div className="buttonsHolder">
                        <button onClick={() => navigate("/shopkeeper/orders")}><MdOutlinePendingActions size={56} color="#EB1212"/>Solicitações</button>
                        <button onClick={() => navigate("/shopkeeper/orders")}><AiOutlineReload size={56} color="#F2EA27"/>Em Andamento</button>
                        <button onClick={() => navigate("/shopkeeper/orders")}><BsBagCheck size={56} color="#00A650" />Finalizados</button>
                    </div>
                </div>
            </CardsHolder>

            <div className="mostSoldHolder">
              <p className="mostSoldTitle">Mais pedidos</p>
              <div className="productsGrid">
                {renderProductCards()}
              </div>
              <div className="clientsButtonHolder">
                <button className="clientsReviewButton" onClick={() => navigate(`/store/${getUser().user_id}/reviews`)}><BsPlusLg fontSize={'1.25rem'} color="#CC0000"/> Avaliações dos clientes</button>
              </div>
            </div>


            

        </ContainerLojista>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default HomeLojista;
