import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Carousel1 from '../../assets/Carousel1.png';
import Carousel2 from '../../assets/Carousel2.png';
import { Icon } from '@iconify-icon/react';
import { Carousel as Car } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cadastro from "../Cadastro/Cadastro";

const Carousel: React.FC = () => {


    return ( 
        <div className="z-0">
            <Car className="h-[70vh] md:h-[100vh]" showThumbs={false} showStatus={false}>

                {/* ------------------------ PRIMEIRO CAROUSEL ------------------------ */}
                <div className="relative h-[70vh] md:h-[100vh] w-full" id="section1">
                    <img
                    src={Carousel1}
                    alt="1"
                    className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col justify-between pb-32 h-full w-full place-items-center bg-gradient-to-b from-BLACK/70 to-BLACK/5 pt-10 md:pt-48">
                        <div className="text-center text-3xl md:text-5xl font-bold w-3/5 text-WHITE">
                            Tudo em um único lugar na palma das suas mãos!
                        </div>
                        <div className="flex justify-center items-center md:flex-row-reverse md:justify-start w-3/5">
                        <a href="/register"><button className="bg-PRIMARY text-WHITE p-5 rounded-lg text-xl">Cadastre-se</button></a>
                        </div>
                    </div>
                </div>

                {/* ------------------------ SEGUNDO CAROUSEL ------------------------ */}
                <div className="relative h-[70vh] md:h-[100vh] w-full" id="section2">
                    <img
                    src={Carousel2}
                    alt="2"
                    className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-between pb-32 md:items-end h-full w-full bg-gradient-to-l from-BLACK/70 to-BLACK/5 pt-10 md:pt-48 md:pr-40">
                        <div className="flex flex-col items-end text-3xl md:text-5xl font-bold w-4/5 text-WHITE">
                            <div className="text-center">
                                Coloque o seu produto no Cazappi
                                <br></br>tenha mais visibilidade
                            </div>
                        </div>
                        <div className="flex justify-center items-center md:flex-row-reverse md:justify-start w-3/5">
                            <a href="/register"><button className="bg-PRIMARY text-WHITE p-5 rounded-lg text-xl">Cadastre-se</button></a>
                        </div>
                    </div>
                </div>
            </Car>
        </div>
    );
};

export default Carousel;
