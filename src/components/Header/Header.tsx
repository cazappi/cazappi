import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
// import { HEADER, LOGOIMAGE, OPTIONS, LINK, OPT, BACK } from "./style";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logoText from '../../assets/logoText.svg';
import { Icon } from '@iconify-icon/react';

const Header: React.FC = () => {
  const [responsive, setResponsive] = useState(false);

  const changeResponsive = (value: boolean) => {
    setResponsive(value);
  }

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 920){
        changeResponsive(false);
      } else {
        changeResponsive(true);
      }
    }
    window.addEventListener('resize', handleResize)
    window.addEventListener('load', handleResize)
  })

  return ( 
    <div className="bg-gradient-to-b from-BLACKT to-transparent flex md:fixed w-full top-0 z-10">
      {(responsive) ?
          <div className="w-full h-auto py-7 justify-center items-center flex flex-col">
          <a href="/" className="w-56 py-2">
            <img src={logoText} alt="logo" className="w-56"></img>
          </a>
          <div className="w-full px-10 py-2 text-base inline-flex justify-between">
            <a href="/" className="text-white font-black">Home</a>
            <a href="/" className="text-white font-black">Como funciona</a>
            <a href="/#quemsomos" className="text-white font-black">Quem somos</a>
          </div>
          <button className="w-24 h-8 my-2 bg-SECONDARY rounded-lg justify-center items-center flex">
            <div className="text-white text-base font-bold">Login</div>
          </button>
        </div>
        :
        <div className="w-full h-24 px-8 py-7 justify-between items-center inline-flex">
          <a href="/" className="w-56 h-9">
            <img src={logoText} alt="logo" className="w-56"></img>
          </a>
          <div className="w-1/3 flex text-xl justify-between">
            <a href="/" className="text-white font-black">Home</a>
            <a href="/" className="text-white font-black">Como funciona</a>
            <a href="/#quemsomos" className="text-white font-black">Quem somos</a>
          </div>
          <button className="w-24 h-8 bg-SECONDARY rounded-lg justify-center items-center flex">
            <a href="/">
              <div className="text-white text-xl font-bold">Login</div>
            </a>
          </button>
        </div>
      }
    </div>
  );
};

export default Header;
