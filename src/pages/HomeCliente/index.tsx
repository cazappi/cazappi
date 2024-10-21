import padariaImage from "../../assets/padariaImage.png";
import verdurasImage from "../../assets/verdurasImage.png";
import pizzaImage from "../../assets/pizzaImage.png";
import mercadoImage from "../../assets/mercadoImage.png";
import promoImage from "../../assets/image_home.png";
import motoImage from "../../assets/moto_image.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { MdShoppingBag } from "react-icons/md";
import Carousel from "../../components/Carousel/Carousel";
import Animation from "../../components/Animation/Animation";
import { Container, Image, OptionButton } from "./styles";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { useEffect, useState } from "react";

type Store = {
  name: string;
  shopkeeperId: string;
  category: string;
  delivery: boolean;
  deliveryFee: number;
  pickup: boolean;
  status: string;
  imagePerfilUrl?: string;
};

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  return (
      <div>
          {store.imagePerfilUrl && (
              <img
                  src={store.imagePerfilUrl}
                  alt={`${store.name} profile`}
              />
          )}
          <h2>{store.name}</h2>
          <button>Like</button>
      </div>
  );
};

interface RenderStoresProps {
  stores: Store[];
  category: string;
  delivery: boolean;
  pickup: boolean;
}

const RenderStores: React.FC<RenderStoresProps> = ({ stores, category, delivery, pickup }) => {
  const filteredStores = stores.filter(
      (store) =>
          store.category === category &&
          store.delivery === delivery &&
          store.pickup === pickup
  );

  return (
      <div>
          {filteredStores.map((store) => (
              <StoreCard key={store.shopkeeperId} store={store} />
          ))}
      </div>
  );
};



const HomeCliente = () => {
  const [stores, setStores] = useState<Store[]>([]);

  async function getNearStores(lat: number, long: number) {
      try {
          const response = await api.get(`/nearStores`, {
              headers: {
                  Authorization: `Bearer ${getToken()}`,
              },
              params: { lat, long },
          });

          const storesWithImages = await Promise.all(
              response.data.store.map(async (store: any) => {
                  const imagePerfilUrl = await getStoreImage(store.shopkeeperId, store.name);
                  return {
                      name: store.name,
                      shopkeeperId: store.shopkeeperId,
                      category: store.category,
                      delivery: store.delivery,
                      deliveryFee: store.deliveryFee,
                      pickup: store.pickup,
                      status: store.status,
                      imagePerfilUrl,
                  };
              })
          );

          setStores(storesWithImages);
      } catch (err) {
          alert("erro: " + err);
      }
  }

  async function getStoreImage(shopkeeperId: string, imageName: string): Promise<string> {
      try {
          const response = await api.get(`/storage/store/perfil/${shopkeeperId}/${imageName}`, {
              headers: {
                  Authorization: `Bearer ${getToken()}`,
              },
          });
          console.log(response);
          return response.config.url || ""; // Use the requested URL as the image source
      } catch (err) {
          console.error(`nao carregou a imagem do ${shopkeeperId}: `, err);
          return ""; // Return empty string if there's an error
      }
  }

  useEffect(() => {
      const latitude = -22.014119673306396;
      const longitude = -47.892305693254514;
      getNearStores(latitude, longitude);
  }, []);



  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false} />

      {/* ----------------------- Content ----------------------- */}
      <Container>
        <div className="searchItems">
        <div className="searchBarHolder">
            <IoLocationSharp size={'1.1875rem'} />
            <label htmlFor="search">Pesquisar</label>
            <input id="search" type="text" placeholder="Pesquisar" />
        </div>
          <div className="buttonsHolder">
            <button>
              <FaBell size={'1.421875rem'} />
              Notificações
            </button>
            <button>
              <MdShoppingBag size={'1.458125rem'} />
              Minha Sacola
            </button>
          </div>
        </div>
        <div className="pageOptions">
          <OptionButton>Início</OptionButton>
          <OptionButton>Restaurantes</OptionButton>
          <OptionButton>Mercados</OptionButton>
           {/* Botão de bebidas não funcional ainda, ver depois :p*/}
          <OptionButton>Bebidas</OptionButton>
        </div>
        <div className="firstSection">
          <div className="pageTitle">
            <p className="title">Para você economizar</p>
          </div>
          <div className="optionsClick">
            <div className="leftImage">
              <Image src={promoImage} alt="Promoções" />
              <p className="imageSubtitle">Promoções</p>
            </div>
            <div className="rightImage">
              <Image src={motoImage} alt="Entrega Grátis" />
              <p className="imageSubtitle">Entrega grátis</p>
            </div>
          </div>
        </div>
        <div className="secondSection">
          <div className="title">Lojas</div>
          <div className="storeOptions">
            <OptionButton>Distância</OptionButton>
            <OptionButton>Para retirar</OptionButton>
            <OptionButton>Entrega</OptionButton>
          </div>
          <div className="storesWrapper">
            <RenderStores stores={stores} category="restaurant" delivery={true} pickup={false} />
          </div>
        </div>
      </Container>
      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>
  );
};

export default HomeCliente;
