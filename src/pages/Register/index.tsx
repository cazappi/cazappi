import React, { useState, useEffect, Children } from 'react';
import padariaImage from '../../assets/padariaImage.png';
import verdurasImage from '../../assets/verdurasImage.png';
import pizzaImage from '../../assets/pizzaImage.png';
import mercadoImage from '../../assets/mercadoImage.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carousel3 from '../../assets/Carousel3.png';
import Cadastro from '../../components/Cadastro/Cadastro';
import Plus from '../../assets/Plus.svg'
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { collapse } from '@material-tailwind/react';
import Animation from '../../components/Animation/Animation';
import textsFields from './questions';

const Register = () => {
  const videoURL = "https://www.youtube.com/embed/yLgbyeFHd6k";
  const [collapsed, setCollapsed] = useState([-1])

  const handleCollapse = (value: number) => {
    setCollapsed((prevCollapsed) => {
      const index = prevCollapsed.indexOf(value);
      if (index === -1) {
        return [...prevCollapsed, value];
      } else {
        const updatedCollapsed = [...prevCollapsed];
        updatedCollapsed.splice(index, 1);
        return updatedCollapsed;
      }
    });
  };

  const questions = () => {
    return (
      <>
      {textsFields.map((element: [string, string | string[]], index: number) => (
        <div key={index}>
          <div className="flex">
            <p className="mt-5 font-semibold">{element[0]}</p>
            <button className="text-SECONDARY rounded-full flex justify-center items-center ml-auto" onClick={() => handleCollapse(index)}>
              <div className="bg-GRAY_600 text-base font-bold rounded-full w-4 h-4 flex justify-center items-center">+</div>
            </button>
          </div>
          <p className="my-5 italic text-BLACK">
            {collapsed.indexOf(index) === -1 ? "" : 
              (typeof element[1] === "string" ? (<Animation className="" type="spawn">{element[1]}</Animation>) : 
              (
                <ol>
                  {element[1].map((item: string, subIndex: number) => (
                    <li key={subIndex}>
                      <Animation className="" type="spawn">{item}</Animation>
                    </li>
                  ))}
                </ol>
              ))
            }
          </p>
          {index != textsFields.length - 1 ? (<hr className="border-black" />) : ""}
        </div>
      ))}
    </>
    )
  }


  return (
    <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}/>

      {/* ----------------------- Content ----------------------- */}
      {/* ------- Carousel ------- */}

      <div className="relative h-[70vh] md:h-[100vh] w-full" id="section3">
        <img
          src={Carousel3}
          alt="3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 justify-between flex flex-row h-full w-full bg-gradient-to-r pt-8 from-BLACK/70 to-BLACK/5 px-10">
          <Animation type="fromLeft" className="text-WHITE">
            <div className="text-4xl text-left mb-20">
              Alcance o sucesso pessoal<br />e profissional vendendo<br />os seus produtos
            </div>
            <div className="text-left text-5xl italic">Cadastre-se já!</div>
          </Animation>

          <Cadastro></Cadastro>
        </div>
      </div>
      {/* ------- Second section ------- */}

      <div className="flex flex-col items-center justify-center mb-24 w-full mt-36 p-2">
        <Animation className="w-full md:w-2/3 flex flex-col justify-center items-center my-24  text-center">
          <div className="flex flex-col justify-center w-2/3">
            <Animation className='p-2 w-2/3 text-center text-BLACK bg-YELLOW rounded-2xl font-medium text-xl md:text-3xl'>Cadastre e tenha</Animation>
            <Animation className='p-2 ml-5 text-BLACK text-center bg-YELLOW rounded-2xl text-base md:text-xl'>a maior plataforma on-line de vendas</Animation>
          </div>
        </Animation>
        <Animation className="w-4/5 flex flex-col md:flex-row items-center justify-between">
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center"> 
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Fica a sua escolha<br />entregar ou o cliente retira</div>
          </Animation>
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Crie e realize, suas vendas<br />irão crescer com o Cazzapi</div>
          </Animation>
          <Animation className="w-64 h-64 my-4 md:my-0 border p-2 shadow-lg flex flex-col items-center">
            <img src="caminho/para/imagem.jpg" alt="Imagem" className="w-full h-1/2 bg-BLACK" />
            <div className="text-center h-1/2 flex items-center justify-center">Liberdade financeira,<br />satisfação e motivação<br />você só encontra aqui</div>
          </Animation>
        </Animation>
      </div>

      {/* ------- fourth section ------- */}

      <div id="comofunciona" className="flex justify-center">
        <span className='mx-4 text-xl md:text-3xl'>Como Funciona!</span>
      </div>

      <div className='flex items-center justify-center'>
        <div className="container  mx-auto p-10 max-w-screen-lg bg-grey rounded-3xl">
          <div className='bg-FUNCTION rounded-3xl shadow p-12'>
            {questions()}
          </div>
        </div>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </>

  );
};

export default Register;