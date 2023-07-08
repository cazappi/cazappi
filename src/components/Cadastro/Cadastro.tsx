import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
// import { HEADER, LOGOIMAGE, OPTIONS, LINK, OPT, BACK } from "./style";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logoText from '../../assets/logoText.svg';
import { Icon } from '@iconify-icon/react';



const Cadastro: React.FC = () => {
  

  return ( 
    <div className="flex flex-col items-center justify-center w-96 px-5 bg-gradient-to-b from-BLACK/90 to-BLACK/10 rounded-3xl text-WHITE text-xs">
        <img src="" alt="" />
        <div className="mb-4">Cadastre-se e seja vendedor!</div>
        <div className="flex flex-row justify-around items-center w-5/6">
            <button className="bg-WHITE flex flex-row items-center justify-center text-GRAY_600 rounded-xl p-3">
                <Icon icon="ic:round-person" className="text-lg mr-2"></Icon>
                <div>Pessoa física</div>
            </button>
            <button className="bg-WHITE flex flex-row items-center justify-center text-GRAY_600 rounded-xl p-3">
                <Icon icon="mingcute:briefcase-fill" className="text-lg mr-2"></Icon>
                <div>Pessoa jurídica</div>
            </button>
        </div>
        <form className="flex flex-col items-center justify-center" action="">
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">Estado</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="text" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">Cidade</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="text" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">Nome</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="text" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">CPF</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="text" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">E-mail</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="text" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">Senha</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="password" />
            </div>
            <div className="w-72 my-2">
                <div className="ml-2 w-full text-left">Confirmar senha</div>
                <input className="w-full rounded-2xl h-8 bg-GRAY_600" type="password" />
            </div>
            <div className="flex flex-row items-center justify-center">
                <input type="checkbox" />
                <div>Eu aceito o uso dos meus dados de acordo com a Declaração de Privacidade e aceito os Termos e Condições.</div>
            </div>
            <button className="bg-PRIMARY text-WHITE p-3 rounded-lg text-xl m-4">Cadastre-se</button>
        </form>
    </div>
  );
};

export default Cadastro;
