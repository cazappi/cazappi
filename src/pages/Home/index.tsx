import React, { useState, useEffect, Children  } from 'react';
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
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  const videoURL = "https://www.youtube.com/embed/yLgbyeFHd6k";
  
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  }

  type Props = {
    className: string;
    children?: React.ReactNode;
  };

  const Animation = ({children, className}: Props) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
      if (inView) {
        control.start("visible");
      } 
    }, [control, inView]);

    return (
      <motion.div className={className} ref={ref} variants={boxVariant} initial="hidden" animate={control}>
        {children}
      </motion.div>
    )
  }

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

        <Animation className="text-3xl my-10">Aqui você encontra!</Animation>

        <Animation className="italic text-center w-3/5 mb-10">
          O Cazappi é uma empresa brasileira de tecnologia que oferece soluções de comércio de alimentos
          para que pessoas e empresas possam comprar, vender, pagar, anunciar e entregar produtos por meio
          da internet.
        </Animation>

        <div className="flex flex-col md:flex-row items-center justify-between text-center md:my-10">
          <Animation className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={padariaImage} alt="pães" />
            </div>
            <div>Uma padaria completa com doces, pães e bolos.</div>
          </Animation>
          <Animation className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={verdurasImage} alt="verduras" />
            </div>
            <div>Todos os tipos de verduras, legumes e frutas.</div>
          </Animation>
          <Animation className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={pizzaImage} alt="pizza" />
            </div>
            <div>Variedade de lanches, pizzas e porções.</div>
          </Animation>
          <Animation className="flex flex-col items-center justify-center my-10 md:my-0 w-2/3 md:w-1/5">
            <div className="h-36">
              <img src={mercadoImage} alt="mercado" />
            </div>
            <div>Um mercado completo ao seu lado.</div>
          </Animation>
        </div>

      </section>

      {/* ------- Video section ------- */}

      <section className="flex flex-col items-center justify-center pt-5">
        <Animation className="text-3xl my-10">Quem somos</Animation>
        <Animation  className="bg-SECONDARY w-full h-full flex flex-col md:flex-row items-center justify-center">
          <Animation className="w-5/6 h-24 md:w-1/2 md:h-full flex items-center justify-center text-WHITE text-xl md:text-4xl text-center">Assista ao VÍDEO e entenda melhor!</Animation>
          <Animation className='videoWrapper w-full md:w-1/2 rounded-ss-3xl'>
            <iframe className="rounded-ss-3xl w-full h-96 border-none" src={videoURL} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </Animation>
        </Animation>
      </section>

      {/* ------- Third section ------- */}

      <section className="text-center flex flex-col items-center justify-center w-full text-xl md:text-3xl">
        <Animation className="flex flex-col md:flex-row w-full">
          <Animation className="border-GRAY_600 border-2 w-full md:w-1/3 h-64 px-8 flex items-center justify-center">Quanto mais você vender, mais você ganha!</Animation>
          <Animation className="border-GRAY_600 border-2 w-full md:w-1/3 h-64 px-8 flex items-center justify-center">Plataforma de pagamento 100% segura.</Animation>
          <Animation className="border-GRAY_600 border-2 w-full md:w-1/3 h-64 px-8 flex items-center justify-center">Venda para toda sua região</Animation>
        </Animation>
        <Animation className="flex flex-col md:flex-row w-full">
          <Animation className="border-GRAY_600 border-2 w-full md:w-1/2 h-64 px-8 flex items-center justify-center">De forma simples e rápida cadastre seus produtos e acompanhe todo histórico de vendas, lucros, avaliações dos clientes.</Animation>
          <Animation className="border-GRAY_600 border-2 w-full md:w-1/2 h-64 px-8 flex items-center justify-center">Chegou a hora de faturar com o seu pão, doces caseiros, lanches e até mesmo montando uma mercearia em sua casa.</Animation>
        </Animation>
      </section>

      {/* ------- fourth section ------- */}

      <Animation className="w-full h-48 flex items-center justify-center">
        <button className="p-4 rounded-3xl bg-YELLOW text-xl md:text-3xl">
          Indique para um amigo!
        </button>
      </Animation>
          
      {/* ----------------------- FOOTER ----------------------- */}    
      <Footer />
    </>

  );
};

export default Home;