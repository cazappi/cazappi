import React from "react";
// import { LOGOIMAGE, FLEXROW, FLEXCOLUMN, TEXT, LINK } from "./style";
import logoBranca from '../../assets/logoBranca.svg';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Icon } from '@iconify-icon/react';

const Footer: React.FC = () => {
  const styleGroup = {
    anchor: "hover:text-ERROR duration-200"
  }

  return (
    <div className="bg-GRAY_600 text-WHITE flex flex-col items-center justify-center py-10">
      <div className="flex flex-row justify-between text-xs md:text-sm w-11/12 md:w-2/3">
        <div className="flex flex-col mb-10">
          <img src={logoBranca} alt="" className="w-36 md:w-auto" />
          <a className={styleGroup.anchor} href="">Fale com a gente</a>
          <a className={styleGroup.anchor} href="">Termos de uso</a>
          <a className={styleGroup.anchor} href="">Privacidade</a>
          <a className={styleGroup.anchor} href="">Aplicativo</a>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold">Conheça mais</div>
          <a className={styleGroup.anchor} href="/register">Cadastre-se</a>
          <a className={styleGroup.anchor} href="">Como funciona</a>
          <a className={styleGroup.anchor} href="/#quemsomos">Quem somos</a>
        </div>
        <div className="text-4xl flex flex-col">
          <div className="text-lg font-bold">Social</div>
          <a href=""><Icon className={styleGroup.anchor} icon="mdi:instagram"></Icon></a>
          <a href=""><Icon className={styleGroup.anchor} icon="mdi:youtube"></Icon></a>
        </div>
      </div>
      <div className="flex flex-row">
        <a href="" className="mr-1 hover:text-ERROR duration-200">Política de privacidade</a>
        | 
        <a href="" className="ml-1 hover:text-ERROR duration-200">Termos de uso</a>
      </div>
      <div className="w-5/6 text-center flex items-center justify-center">
        ©. MSE Cazappi - Delivery app | Desenvolvido por CATI Jr.
      </div>
    </div>
  );
};

export default Footer;
