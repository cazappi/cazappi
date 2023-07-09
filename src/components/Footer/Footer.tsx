import React from "react";
// import { LOGOIMAGE, FLEXROW, FLEXCOLUMN, TEXT, LINK } from "./style";
import logoBranca from '../../assets/logoBranca.svg';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Icon } from '@iconify-icon/react';

const Footer: React.FC = () => {
  return (
    <div className="bg-GRAY_600 text-WHITE flex flex-col items-center justify-center py-10">
      <div className="flex flex-row justify-between text-xs md:text-sm w-11/12 md:w-2/3">
        <div className="flex flex-col mb-10">
          <img src={logoBranca} alt="" className="w-36 md:w-auto" />
          <a href="">Fale com a gente</a>
          <a href="">Termos de uso</a>
          <a href="">Privacidade</a>
          <a href="">Aplicativo</a>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-bold">Conheça mais</div>
          <a href="">Cadastre-se</a>
          <a href="">Como funciona</a>
          <a href="">Quem somos</a>
        </div>
        <div className="text-4xl flex flex-col">
          <div className="text-lg font-bold">Social</div>
          <Icon icon="mdi:instagram"></Icon>
          <Icon icon="mdi:youtube"></Icon>
        </div>
      </div>
      <div className="flex flex-row">
        <a className="mr-1">Política de privacidade</a>
        | 
        <a className="ml-1">Termos de uso</a>
      </div>
      <div className="w-5/6 text-center flex items-center justify-center">
        ©. MSE Cazappi - Delivery app | Desenvolvido por CATI Jr.
      </div>
    </div>
  );
};

export default Footer;
