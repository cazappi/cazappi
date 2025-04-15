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

export default function HomeCliente() {
  const navItems = [
    { text: "Inicio", link: "/" },
    { text: "Restaurantes", link: "/restaurantes" },
    { text: "Mercados", link: "/mercados" },
    { text: "Bebidas", link: "/bebidas" },
    { text: "Farmácias", link: "/farmacias" },
  ];

  // Itens do carrossel
  const carouselItems = [
    { id: 1, text: "Pizza Real", description: "Pizza Real" },
    { id: 2, text: "Pizza Real", description: "Pizza Real" },
    { id: 3, text: "Pizza Real", description: "Pizza Real" },
    { id: 4, text: "Pizza Real", description: "Pizza Real" },
    { id: 5, text: "Pizza Real", description: "Pizza Real" },
    { id: 6, text: "Pizza Real", description: "Pizza Real" },
  ];

  const lojas = [
    { id: 1, text: "Pizza Real", description: "Pizza, Lanche e Carne assada" },
    { id: 2, text: "Pizza Real", description: "Pizza, Lanche e Carne assada" },
    { id: 3, text: "Pizza Real", description: "Pizza, Lanche e Carne assada" },
  ];

  return (
    <>
      <Header transparent={false}></Header>
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
          <div className="h-full flex items-center justify-center px-[50px]">
            <Slider
              dots={false}
              infinite={true}
              variableWidth={false}
              centerMode={false}
              speed={500}
              slidesToShow={4}
              slidesToScroll={1}
              adaptiveHeight={false}
            >
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  style={{ minWidth: 150 }}
                  className="p-4 flex items-center justify-center border rounded-md text-center m-2"
                >
                  <div className="flex flex-col items-center justify-center min-h-[150px]">
                    <img
                      src={pizzaIcon}
                      width={50}
                      className="rounded-full"
                      height={50}
                      alt=""
                    />
                    <p className="text-white text-xl font-bold">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
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
              <button className="border rounded-lg px-[11px] py-[4px]">
                Distância
              </button>
              <button className="border rounded-lg px-[11px] py-[4px]">
                Para retirar
              </button>
              <button className="border rounded-lg px-[11px] py-[4px]">
                Últimas lojas
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 py-10 bg-white h-max flex justify-center items-start bg-white/10 backdrop-blur-md flex-col gap-8 mx-auto ">
        {lojas.map((item, index) => (
          <div key={index} className="flex gap-4 items-center w-full">
            <img
              src={pizzaIcon}
              width={70}
              className="rounded-full"
              height={60}
              alt=""
            />
            <div className="flex justify-between w-full">
            <div className="flex flex-col text-black">
              <h2 className="font-bold">{item.text}</h2>
              <p>{item.description}</p>
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
        ))}
      </div>

      <Footer></Footer>
    </>
  );
}
