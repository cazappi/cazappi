import React, { useState, useEffect, Children  } from 'react';
import padariaImage from '../../assets/padariaImage.png';
import verdurasImage from '../../assets/verdurasImage.png';
import pizzaImage from '../../assets/pizzaImage.png';
import mercadoImage from '../../assets/mercadoImage.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel3 from '../../assets/Carousel3.png';
import Cadastro from '../../components/Cadastro/Cadastro';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Register = () => {
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



  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ----------------------- Content ----------------------- */}
      {/* ------- Carousel ------- */}

      <div className="relative h-[70vh] md:h-[100vh] w-full" id="section3">
        <img
        src={Carousel3}
        alt="3"
        className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 justify-between flex flex-row h-full w-full bg-gradient-to-r from-BLACK/70 to-BLACK/5 pt-56 md:pt-36 px-10">
            <div className="text-WHITE">
                <div className="text-4xl text-left mb-20">
                    Alcance o sucesso pessoal<br />e profissional vendendo<br />os seus produtos
                </div> 
                <div className="text-left text-5xl italic">Cadastre-se já!</div>
            </div>
            
            <Cadastro></Cadastro>
        </div>
      </div>

      {/* ------- Second section ------- */}
      

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

export default Register;