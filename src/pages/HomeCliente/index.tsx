import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ClientAddSpecificAddress from "../ClientAddresses/ClientAddSpecificAddress"
import { AddressContainer } from "../OrderResumeLojista/style"
import motoboy from "../../assets/motoboy.png"
import burgerClient from "../../assets/burgerClient.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"

export default function HomeCliente()
{
    const navItems = [
        { text: "Inicio", link: "/" },
        { text: "Restaurantes", link: "/restaurantes" },
        { text: "Mercados", link: "/mercados" },
        { text: "Bebidas", link: "/bebidas" },
        { text: "Farmácias", link: "/farmacias" },
      ];

    // Itens do carrossel
    const carouselItems = [
        { id: 1, text: "Promoção 1", description: "Desconto de 20%!" },
        { id: 2, text: "Promoção 2", description: "Frete grátis!" },
        { id: 3, text: "Promoção 3", description: "Compre 1, leve 2!" },
    ];


    return (
        <>
        <Header transparent={false}></Header>
        <nav className="bg-[#EB1212] h-[80px]">
            <ul className="w-full h-full flex justify-center items-center text-white cursor-pointer gap-4">
                {navItems.map((item, index) => (
                    <li key={index} className="border px-[16px] py-[4px] rounded-md h-fit">
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
            <h1 className="text-4xl mb-2">Lojas com  <br></br> <span className="text-bold">entrega grátis!</span></h1>
            </div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-lg bg-gray-200 bg-opacity-80 rounded-lg p-4">
        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
            {carouselItems.map((item) => (
            <div key={item.id} className="p-4 text-center">
                <h2 className="text-xl font-semibold text-gray-800">{item.text}</h2>
                <p className="text-gray-600">{item.description}</p>
            </div>
            ))}
        </Slider>
        </div>

        <Footer></Footer>
        </>

   )
}