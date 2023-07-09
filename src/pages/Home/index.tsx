import React, { useState } from 'react';
import { FLEXROW, FLEXCOLUMN, TEXT, TEXTINT, IMAGE, REGISTER, SPACE } from './style';
import padariaImage from '../../assets/padariaImage.png';
import verdurasImage from '../../assets/verdurasImage.png';
import pizzaImage from '../../assets/pizzaImage.png';
import mercadoImage from '../../assets/mercadoImage.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel from '../../components/Carousel/Carousel';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const videoURL = "https://www.youtube.com/embed/yLgbyeFHd6k";

  const handleOptionChange = (option: number) => {
    setSelectedOption(option);
  };

  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header handleOptionChange={handleOptionChange} />

      {/* ----------------------- Content ----------------------- */}
      {/* ------- Carousel ------- */}
      <Carousel optionChange={selectedOption} />

      {/* ------- Second section ------- */}
      <section className="flex flex-col items-center justify-center py-5">

        <div className="text-3xl my-10">Aqui você encontra!</div>

        <div className="italic text-center w-3/5 mb-10">
          O Cazappi é uma empresa brasileira de tecnologia que oferece soluções de comércio de alimentos
          para que pessoas e empresas possam comprar, vender, pagar, anunciar e entregar produtos por meio
          da internet.
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-center md:my-10">
          <div className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={padariaImage} alt="pães" />
            </div>
            <div>Uma padaria completa com doces, pães e bolos.</div>
          </div>
          <div className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={verdurasImage} alt="verduras" />
            </div>
            <div>Todos os tipos de verduras, legumes e frutas.</div>
          </div>
          <div className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={pizzaImage} alt="pizza" />
            </div>
            <div>Variedade de lanches, pizzas e porções.</div>
          </div>
          <div className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={mercadoImage} alt="mercado" />
            </div>
            <div>Um mercado completo ao seu lado.</div>
          </div>
        </div>

      </section>

      {/* ------- Video section ------- */}

      <section className="flex flex-col items-center justify-center py-5">
        <div className="text-3xl my-10">Quem somos</div>
        <div  className="bg-SECONDARY w-full h-full flex flex-row items-center justify-center">
          <div className="w-1/2 h-full flex items-center justify-center text-WHITE text-xl md:text-4xl text-center">Assista ao VÍDEO e entenda melhor!</div>
          <div className='videoWrapper w-1/2 rounded-ss-3xl'>
            <iframe className="rounded-ss-3xl w-full h-96" src={videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </section>

          
      {/* ----------------------- FOOTER ----------------------- */}    
      <Footer />
    </>

  );
};

export default Home;