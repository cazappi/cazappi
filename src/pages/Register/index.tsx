import React, { useState, useEffect, Children  } from 'react';
import padariaImage from '../../assets/padariaImage.png';
import verdurasImage from '../../assets/verdurasImage.png';
import pizzaImage from '../../assets/pizzaImage.png';
import mercadoImage from '../../assets/mercadoImage.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel3 from '../../assets/Carousel3.png';
import Cadastro from '../../components/Cadastro/Cadastro';
import Plus from '../../assets/Plus.svg'
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

      <div className="flex justify-between mx-20 my-10">
        <div className="w-64 h-64 border shadow-lg flex flex-col justify-between mx-20">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-auto"/>
            <span className="text-center">Fica a sua escolha<br/>entregar ou o cliente retira</span>
        </div>
        <div className="w-64 h-64 border shadow-lg flex flex-col justify-between">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-auto"/>
            <span className="text-center">Crie e realize, suas vendas<br/>irão crescer com o Cazzapi</span>
        </div>
        <div className="w-64 h-64 border shadow-lg flex flex-col justify-between mx-20">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-auto"/>
            <span className="text-center">Liberdade financeira,<br/>satisfação e motivação<br/>você só encontra aqui</span>
        </div>
      </div>


      <div className="flex justify-center">
          <span className='mx-4 text-xl md:text-3xl'>Como Funciona!</span>
      </div>

      {/* ------- fourth section ------- */}
      <div className='flex items-center justify-center'>
        <div className="container  mx-auto p-10 max-w-screen-lg bg-grey rounded-16">
          <div className='min-h-screen bg-FUNCTION rounded shadow p-12'>
            <p className="my-5">O que é o Cazzapi?</p>
            <hr className='border-black'/>
            <p className="my-5">Como é a venda pelo Cazzapi?</p>
            <hr className='border-black'/>
            <p className="my-5">Como é o processo de se cadastrar no Cazzapi?</p>
            <hr className='border-black'/>
            <p className="my-5">Quais requisitos para loja ser publicada no Cazzapi?</p>
            <hr className='border-black'/>
            <p className="my-5">Por que eu deveria estar no Cazzapi?</p>
            <hr className='border-black'/>
            <p className="my-5">Quanto custa para publicar minha loja e quanto tempo posso demorar para vender?</p>
            <hr className='border-black'/>
            <p className="my-5">Como é processado o pedido?</p>
            <hr className='border-black'/>
            <p className="my-5">Como é feita a entrega do produto?</p>
            <hr className='border-black'/>
            <p className="my-5">Como e quanto eu recebo pelas minhas vendas?</p>
            <hr className='border-black'/>
            <p className="my-5">Qual a área de atuação que a minha loja poderá atingir?</p>
            <hr className='border-black'/>
            <p className="my-5">Quais produtos posso vender?</p>
            <hr className='border-black'/>
            <p className="my-5">Quais formas de pagamento são aceitas no Cazzapi?</p>
          </div>
        </div>
      </div>

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