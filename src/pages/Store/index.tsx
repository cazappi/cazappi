import Footer from "../../components/Footer/Footer";
import Default from '../../assets/userProfile.png'
import noProductImage from '../../assets/noProductImage.svg'
import { useEffect, useState } from "react";
import sanduiche from '../../assets/sanduiche.png';
import Slider from "react-slick";
import { IoMdArrowBack, IoMdSearch } from "react-icons/io";
import { BsChevronLeft, BsChevronRight, BsPlusLg } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import { BackButton, Banner, BannerImage, BannerWrapper, CardsHolder, ContainerLojista, FilteredCardsDiv, Image, InfosWrapper, ItemCard, ProfileImage, SearchInput, StoreInfoWrapper, StoreWrapper, TEXT } from "./style";
import bannerDefault from '../../assets/bannerexample.png'
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, clearCart, StoreInfo } from '../../redux/reducers/cartSlice';
import { string } from "yup";
import { Star, StarBorder, StarHalf } from '@mui/icons-material';
import { Box, Rating, Typography } from '@mui/material';
import { RootState } from '../../redux/store';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal';
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

export const useAddToCart = () => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart.storeInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, store: StoreInfo) => {
    if (!cartStore || cartStore.shopkeeperId === store.shopkeeperId) {
      dispatch(addItem({ product, store }));
    } else {
      setSelectedProduct(product);
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    if (selectedProduct && cartStore) {
      dispatch(clearCart());
      dispatch(addItem({ product: selectedProduct, store: cartStore }));
      setIsModalOpen(false);
      setSelectedProduct(null);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return {
    handleAddToCart,
    handleConfirm,
    handleCancel,
    isModalOpen,
    selectedProduct,
  };
};

const isValidImage = (url: string) => url.startsWith('https://storage.googleapis.com');

const ProductCard: React.FC<{ product: Product; store: StoreInfo }> = ({ product, store }) => {
  const dispatch = useDispatch();
  const cartStore = useSelector((state: RootState) => state.cart.storeInfo);

  const { handleAddToCart, handleConfirm, handleCancel, isModalOpen } = useAddToCart();


  return (
    <>
      <ItemCard>
        <div className="leftContent">
          {/* Imagem */}
          <img 
            className="productImage" 
            src={isValidImage(product.image) ? product.image : noProductImage} 
            alt={product.name} 
            onError={(e) => (e.currentTarget.src = noProductImage)} />
          <div className="titleDescription">
            {/* nome */}
            <p className="title">{product.name}</p>
            <p className="description">{product.description}</p>
          </div>
        </div>
        <div className="rightContent">
          <button className="addButton" onClick={() => handleAddToCart(product, store)}>
            <BsPlusLg size={'1rem'} />
          </button>
          <p className="price">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </p>
        </div>
      </ItemCard>

      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />

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

    const [storeInfo, setStoreInfo] = useState<StoreInfo | null>(null);

    const [storeName, setStoreName] = useState('');
    const [serviceRadius, setServiceRadius] = useState(0);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [storeType, setStoreType] = useState('');
    const [storeRating, setStoreRating] = useState(0);
    const [openingTime, setOpeningTime] = useState<Schedule>(schedule);
    const [closingTime, setClosingTime] = useState<Schedule>(schedule);
    const [categories, setCategories] = useState<{ parentCategoryId: string; label: string; value: string }[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [searchVisible, setSearchVisible] = useState(false); // Controla a visibilidade do campo de busca
    const [searchTerm, setSearchTerm] = useState(''); // Guarda o termo da busca
    // código das configs dos carrosséis :p
    const getSliderSettings = (productCount: number) => ({
      dots: false,
      infinite: productCount > 5,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: Math.min(productCount, 5),
      nextArrow: productCount > 5 ? <NextArrow /> : null,
      prevArrow: productCount > 5 ? <PrevArrow /> : null,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: Math.min(productCount, 2),
            slidesToScroll: Math.min(productCount, 2),
            nextArrow: productCount > 2 ? <NextArrow /> : null,
            prevArrow: productCount > 2 ? <PrevArrow /> : null,    
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: null,
            prevArrow: null,    
          },
        },
      ],
    });
            
    async function getUserData() {
      await api
      .get(`store/${idDaLoja}`, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        setProducts(response.data.store[0].products);

        console.log(response.data.store[0]);


        const store = response.data.store[0];
        console.log(store);
        setStoreInfo({
          name: store.name,
          image: store.imagePerfil,
          shopkeeperId: store.shopkeeperId,
          deliveryFee: store.deliveryFee,
          pickup: store.pickup,
          delivery: store.delivery,
        });
    
  
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

      //aproveita a viagem pra ja pegar as categorias de produtos neee :p
      await api.get(`category`, {
        headers: {
            "Authorization": `Bearer ${getToken()}`
        }
      }).then((response) => {
          // console.log(response.data);
          const formattedCategories = response.data.map((category: any) => ({
              label: category.name,
              value: category.id.toString(),
              parentCategoryId: category.parentCategoryId,
          }));
          setCategories(formattedCategories);
      }).catch((err) => {
          alert("Ops! Ocorreu um erro: " + err);
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
      if (!storeInfo) return null;

      return products.length > 0
        ? products.map((product) => (
            <ProductCard key={product.id} product={product} store={storeInfo} />
          ))
        : <p>Nenhum produto disponível</p>;
    };

    interface ProductsCarouselProps {
      products: Product[];
      categoryName: string;
      settings: any;
      storeInfo: StoreInfo;
    }
        
    const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products, categoryName, settings, storeInfo }) => {
      const { handleAddToCart, handleConfirm, handleCancel, isModalOpen } = useAddToCart();    
      return (
        <div>
          <p className="sliderTitle">{categoryName}</p>
          <Slider {...settings}>
            {products.map((product) => (
              <div className="productHolder" key={product.id}>
                <div className="upperInfo">
                  <img
                    className="productImage"
                    src={isValidImage(product.image) ? product.image : noProductImage}
                    alt={product.name}
                    onError={(e) => (e.currentTarget.src = noProductImage)}
                  />
                  <button
                    className="addButton"
                    onClick={() => handleAddToCart(product, storeInfo)}
                  >
                    <BsPlusLg size={'1rem'} />
                  </button>
                </div>
                <div className="productInfo">
                  <div>
                    <p className="productName">{product.name}</p>
                    <p className="productDescription">{product.description}</p>
                  </div>
                  <p className="productPrice">
                    {product.price.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
    
          <ConfirmModal isOpen={isModalOpen} onConfirm={handleConfirm} onCancel={handleCancel} />
        </div>
      );
    };

    const groupProductsByCategory = (products: Product[]) => {
      return products.reduce((acc: { [key: string]: Product[] }, product) => {
        product.categories.forEach((category) => {
          if (!acc[category.name]) {
            acc[category.name] = [];
          }
          acc[category.name].push(product);
        });
        return acc;
      }, {});
    };
    
    const groupedProducts = groupProductsByCategory(products);
          
  // Funções de busca
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
    if (!storeInfo) return null; // Ensure storeInfo is available

    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredProducts.length > 0 ? (
      <FilteredCardsDiv>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} store={storeInfo}/>
        ))}
      </FilteredCardsDiv>
    ) : (
      <p>Nenhum produto encontrado para esta busca.</p>
    );
  };
            
    return (
        <>        
        {/* ----------------------- HEADER ----------------------- */}
        <Header transparent={false}/>
        {/* BANNER IMAGE */}
        <BannerWrapper>
          <Banner src={bannerSrc}>
            <StoreInfoWrapper>
              <div className="storeDetails">
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
              </div>
              <ProfileImage src={imageSrc} alt="Perfil" />
            </StoreInfoWrapper>
          </Banner>
        </BannerWrapper>

        <BackButton onClick={() => navigate("/home")}> <IoMdArrowBack /> voltar </BackButton>

        <ContainerLojista>
            <InfosWrapper>
                {/* IMAGE PROFILE */}
                {/* <Image className="profileImage" src={imageSrc} alt="Perfil"/> */}

                <StoreWrapper>
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
            {storeInfo && (
              storeType !== 'restaurant' ? (
                <CardsHolder>
                  {searchTerm ? renderFilteredProducts(searchTerm) : renderProductCards()}
                </CardsHolder>
              ) : (
                <div className="carouselHolder">
                  {searchTerm 
                    ? renderFilteredProducts(searchTerm) 
                    : Object.entries(groupProductsByCategory(products)).map(([categoryName, filteredProducts]) => (
                        <ProductsCarousel
                          key={categoryName}
                          products={filteredProducts}
                          categoryName={categoryName}
                          settings={getSliderSettings(filteredProducts.length)}
                          storeInfo={storeInfo!}
                        />
                      ))
                  }
                </div>
              )
            )}
        </ContainerLojista>


        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
        </>
    );
};

export default Store;
