import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import { useEffect, useState } from "react";
import sanduiche from '../../assets/sanduiche.png';
import Slider from "react-slick";
import { AddImg } from "../../components/ImageUpload/style";
import { FaPen } from "react-icons/fa";
import { THEME } from "../../theme";
import { responsiveHeight } from "../../utils/responsive-functions";
import { FLEXROW } from "../Politica/style";
import { MdOutlineGrade, MdOutlineKeyboardDoubleArrowRight, MdOutlinePendingActions } from "react-icons/md";
import { IoMdArrowBack, IoMdSearch } from "react-icons/io";
import { BsChevronLeft, BsChevronRight, BsPlusLg } from "react-icons/bs";
import { AiOutlineReload } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import { BackButton, BannerImage, BannerWrapper, CardsHolder, ContainerLojista, Image, InfosWrapper, ItemCard, SearchInput, StoreWrapper, TEXT } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { string } from "yup";
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
        emptyIcon={<StarBorder fontSize="inherit" style={{ color: '#FF0000' }} />}
        icon={<Star fontSize="inherit" style={{ color: '#FF0000' }} />}
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

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  categories: Category[];
  complements: Complement[];
}

interface Category {
  id: string | number;
  name: string;
  storeName: string | null;
}

interface Complement {
  id: number;
  name: string;
  description: string;
  optional: boolean;
  price: number;
}
  
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <ItemCard>
        <div className="leftContent">
          {/* Imagem */}
          <img className="productImage" src={sanduiche} alt={product.name} />
          <div className="titleDescription">
            {/* nome */}
            <p className="title">{product.name}</p>
            <p className="description">{product.description}</p>
          </div>
        </div>
        <div className="rightContent">
          <button className="optionsButton">
            <BsPlusLg size={'1rem'} />
          </button>
          <p className="price">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </ItemCard>
    </>
  );
};

const NextArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => (
  <div onClick={onClick} style={{ display: 'block', position: 'absolute', right: '-25px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
    <BsChevronRight size={24} color="#000" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => (
  <div onClick={onClick} style={{ display: 'block', position: 'absolute', left: '-25px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}>
    <BsChevronLeft size={24} color="#000" />
  </div>
);
  
const Store = () => {
    const { idDaLoja } = useParams<{ idDaLoja: string }>();

    const navigate = useNavigate();
    const [storeName, setStoreName] = useState('');
    const [serviceRadius, setServiceRadius] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [storeType, setStoreType] = useState('');
    const [storeRating, setStoreRating] = useState(0);
    const [openingTime, setOpeningTime] = useState<Schedule>(schedule);
    const [closingTime, setClosingTime] = useState<Schedule>(schedule);
    const getCurrentDate = (): string => {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      
      return `${year}-${month}-${day}`;
    };
    const [products, setProducts] = useState<Product[]>([]);
    const [searchVisible, setSearchVisible] = useState(false); // Controla a visibilidade do campo de busca
    const [searchTerm, setSearchTerm] = useState(''); // Guarda o termo da busca
  

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
      nextArrow: <NextArrow />, // Custom next arrow
      prevArrow: <PrevArrow />, // Custom prev arrow  
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
        
    async function getUserData() {
      await api
      .get(`store/${idDaLoja}`, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log('------------------');

        console.log(response.data.store[0].products);
        setProducts(response.data.store[0].products);
  
        setDeliveryFee(response.data.store[0].deliveryFee);
        setServiceRadius(response.data.store[0].serviceRadius);
        setStoreRating(response.data.store[0].rating);
        setOpeningTime(response.data.store[0].schedule[0].openingTime);
        setClosingTime(response.data.store[0].schedule[0].closingTime);
        setStoreName(response.data.store[0].name);
        setImageSrc(response.data.store.imagePerfil || Default);
        setBannerSrc(response.data.store.imageBanner || bannerDefault);
        setStoreType(response.data.store[0].category);
      })
      .catch((err) => {
        clearToken();
        console.error(err);
      });
    }

    useEffect(() => {
        console.log('Id da loja pego na url: ' + idDaLoja);
        getUserData();
        console.log("oiiii " + storeType)
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
      return products && products.length > 0
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        : <p>Nenhum produto disponível</p>;
    };

    const renderProductsCarousel = (products: Product[]) => {
      return (
        <Slider {...settings}>
          {products.map((product) => (
            <div className="productHolder" key={product.id}>
              <img className="productImage" src={sanduiche} alt={product.name} />
              <div>
                <p className="productName">{product.name}</p>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
            </div>
          ))}
        </Slider>
      );
    };

  //Funções de busca
  // Mostra o input para busca
  const handleSearchClick = () => {
    if (searchVisible) {
      setSearchTerm(''); // Limpa a busca quando for fechada
    }
    setSearchVisible((prev) => !prev); // Muda o estado de visibilidade
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filtra os produtos de acordo com o termo de busca
  const renderFilteredProducts = (searchTerm: string) => {
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts.length > 0 ? (
      filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <p>Nenhum produto encontrado para esta busca.</p>
    );
  };

            
    return (
        <>        
        {/* ----------------------- HEADER ----------------------- */}
        <HeaderLojista transparent={false}/>
        {/* BANNER IMAGE */}
        <BannerWrapper>
          <BannerImage src={bannerSrc} alt="Banner" />
        </BannerWrapper>

        <BackButton> <IoMdArrowBack /> voltar </BackButton>

        <ContainerLojista>
            <InfosWrapper>
                {/* IMAGE PROFILE */}
                <button className="imgButton" onClick={() => navigate("/profilelojista")}>
                  <Image src={imageSrc} alt="Perfil"/>
                </button>

                <StoreWrapper>
                    <p className="storeName">{storeName}</p>
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
                    </div>
                    <div className="deliveryInfo">
                    <p className="storeAbout">
                      Entrega - {serviceRadius.toLocaleString('pt-BR')}km
                    </p>

                    {/* !! Lembrar de editar o tempo de entrega, placeholder !!*/}
                    <p className="storeAbout">
                      23 a 30min - R${deliveryFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                    </div>
                    <div className="ratingSearch">
                      <a href={`/store/${idDaLoja}/reviews`} className="ratingNumber">
                        <StarRating rating={storeRating? storeRating : 0} />
                        {storeRating ? <p className="storeAbout">{storeRating.toFixed(1)}</p> : <p className="storeAbout">0,0</p>}
                      </a>
                      <div className="searchContainer" style={{ display: 'flex', gap: '0.5rem' }}>
                        {searchVisible && (
                          <SearchInput
                            type="text"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Buscar produtos"
                          />
                        )}
                        <button onClick={handleSearchClick} style={{ background: 'none', border: 'none' }}>
                          <IoMdSearch fontSize={'1.5rem'} color="#909090" />
                        </button>
                      </div>
                    </div>
                </StoreWrapper>
            </InfosWrapper>

            {/* ----------------------- PRODUTOS ----------------------- */}
            {/* Se a loja for de categoria restaurante, renderiza os produtos em cards, senão, nos carroséis */}
            {storeType === 'restaurant' ? (
              <CardsHolder>
                {searchTerm ? renderFilteredProducts(searchTerm) : renderProductCards()}
              </CardsHolder>
            ) : (
              <div className="carouselHolder">
                {searchTerm ? renderFilteredProducts(searchTerm) : renderProductsCarousel(products)}
              </div>
            )}
        </ContainerLojista>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default Store;
