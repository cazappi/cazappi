import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ClientAddSpecificAddress from "../ClientAddresses/ClientAddSpecificAddress";
import { AddressContainer } from "../OrderResumeLojista/style";
import motoboy from "../../assets/motoboy.png";
import burgerClient from "../../assets/burgerClient.png";
import pizzaIcon from "../../assets/pizza_icon_home.png";
import pizzaGlutenFree from "../../assets/cliente_home_pizza_gluten_free.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { getIdToken } from "firebase/auth";
import AddressSelector from "../../components/AdressSelector";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import store from "../../redux/store";



export default function HomeCliente() {
    const [nearStores, setNearStores] = useState<any>();
    const [selectedAddress, setSelectedAddress] = useState<any>(null);
    const [activeFilter, setActiveFilter] = useState<'rating' | 'distance' | 'pickup' | 'latest'>('rating');
    const [originalStores, setOriginalStores] = useState<any>(null);

    // Efeito para buscar lojas próximas quando o endereço selecionado mudar
    useEffect(() => {
        const fetchStores = async () => {
            if (!selectedAddress) {
                setNearStores(null);
                setOriginalStores(null);
                return;
            }

            try {
                const response = await api.get('/nearStores?lat=-22.0158774&long=-47.8874275', {
                    headers: {
                        Authorization: `Bearer ${getToken()}`,
                    },
                });

                let stores = {...response.data}
                stores.store = [...response.data.store].sort((a, b) => b.rating - a.rating);
                setOriginalStores(stores);
                applyFilter('rating', response.data); // filtro padrão (rating)
                
            } catch (error) {
                setNearStores(null);
                setOriginalStores(null);
                console.error('Erro ao buscar lojas próximas:', error);
            }
        };

        fetchStores();
    }, [selectedAddress]);

    const applyFilter = (filterType: 'rating' | 'distance' | 'pickup' | 'latest', storesData = originalStores) => {
        if (!storesData) return;

        let filteredStores = { ...storesData };
        
        switch(filterType) {
            case 'rating':
                filteredStores.store = [...storesData.store].sort((a, b) => b.rating - a.rating);
                break;
            case 'distance':
                filteredStores.store = [...storesData.store].sort((a, b) => a.distance - b.distance);
                break;
            case 'pickup':
                filteredStores.store = storesData.store.filter((store: { pickup: any; }) => store.pickup);
                break;
            case 'latest':
                // A implementar
       
                break;
            default:
                break;
        }

        setNearStores(filteredStores);
        setActiveFilter(filterType);
    };

    // Callback para atualizar o endereço selecionado
    const handleAddressSelect = (address: any) => {
        setSelectedAddress(address);
    };


    const navItems = [
        { text: "Inicio", link: "/" },
        { text: "Restaurantes", link: "/restaurantes" },
        { text: "Mercados", link: "/mercados" },
        { text: "Bebidas", link: "/bebidas" },
        { text: "Farmácias", link: "/farmacias" },
    ];


    return (
        <>
            <Header transparent={false}></Header>
            <AddressSelector onAddressSelect={handleAddressSelect}></AddressSelector>
            <nav className="bg-[#EB1212] h-[80px]">
                <ul className="w-full h-full flex justify-center items-center text-white cursor-pointer gap-4">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="border px-[16px] py-[4px] rounded-md h-fit"
                        >
                            <a href={item.link}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className="relative w-full h-[300px]">
                <img
                    src={motoboy}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-96 transform -translate-y-1/2 text-white drop-shadow-lg">
                    <h1 className="text-4xl mb-2">
                        Lojas com <br></br>{" "}
                        <span className="text-bold">entrega grátis!</span>
                    </h1>
                </div>
            </div>

            <div className="relative w-full mt-8">
                <img
                    src={burgerClient}
                    alt="Second Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white/30 backdrop-blur-md rounded-lg p-4 h-[60%]">
                    
                  <div className="h-full flex flex-col gap-4 items-center justify-center px-[50px]">
                  {originalStores && <h2 className="text-white text-4xl text-center">Melhor avaliadas</h2>}  
                        {originalStores ? <>
                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView={Math.min(originalStores.store.length, 4)}
                            navigation
                            pagination={{ clickable: true }}
                            loop={originalStores.store.length > 4}
                            className="w-full"
                            style={{ display: "block" }}
                            centerInsufficientSlides={true}
                        >
                            {originalStores.store.map((item: any) => (
                                <SwiperSlide key={item.shopkeeperId}>
                                    <div className="p-4 flex items-center justify-center border rounded-md text-center m-2 min-h-[150px]">
                                        <div className="flex flex-col items-center justify-center">
                                            <img
                                                src={item.imageBanner}
                                                className="rounded-full p-2 object-cover aspect-square"
                                                alt={item.name}
                                                width={100}
                                                height={100}
                                            />
                                            <div className="flex gap-2 items-center">
                                                <p className="text-white font-bold no-wrap">{item.name}</p>
                                                <span className="flex items-center gap-1">
                                                    <FaStar className="text-[#FF0000]"></FaStar>
                                                    <p className="text-white font-bold">{item.rating}</p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper> </> : <h1 className="text-white text-4xl">Nenhuma loja encontrada próxima ao seu endereço</h1>}
                    </div>
                </div>
            </div>

            <div className="relative w-full h-[300px] mt-8">
                <img
                    src={pizzaGlutenFree}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 w-full h-[calc(100%-100px)] text-white bg-white/30 backdrop-blur-md flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <span className="text-4xl mb-4 text-center mt-10">Lojas</span>
                        <div className="flex gap-4">
                            <button 
                                className={`border rounded-lg px-[11px] py-[4px] flex items-center gap-1 `}
                                onClick={() => applyFilter('distance')}
                            >
                                Distância
                                {activeFilter === 'distance' ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            <button 
                                className={`border rounded-lg px-[11px] py-[4px] flex items-center gap-1 `}
                                onClick={() => applyFilter('pickup')}
                            >
                                Para retirar
                                {activeFilter === 'pickup' ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                            <button 
                                className={`border rounded-lg px-[11px] py-[4px] flex items-center gap-1 `}
                                onClick={() => applyFilter('latest')}
                            >
                                Últimas lojas
                                {activeFilter === 'latest' ? <FaChevronUp /> : <FaChevronDown />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 py-10 bg-white h-max flex justify-center items-start bg-white/10 backdrop-blur-md flex-col gap-8 mx-auto ">
                {nearStores ? nearStores.store.map((item:any, index:number) => (
                    <div key={index} className="flex gap-4 items-center w-full">
                        <img
                            src={item.imageBanner}
                            width={100}
                            className="rounded-full object-cover aspect-square"
                            height={100}
                            alt=""
                        />
                        <div className="flex justify-between w-full">
                            <div className="flex flex-col text-black">
                                <h2 className="font-bold">{item.name}</h2>
                                <p>23 a 30 min - R$3,99</p>
                            </div>

                            <div>
                                <svg
                                    className="w-6 h-6 text-red-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )) : <div className="flex justify-center text-center w-full"><h4 className="text-black ">Nenhuma loja encontrada próxima ao seu endereço</h4></div>}
            </div>

            <Footer></Footer>
        </>
    );
}
