import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Carousel1 from '../../assets/Carousel1.png';
import Carousel2 from '../../assets/Carousel2.png';
import { Icon } from '@iconify-icon/react';
import { Carousel as Car } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cadastro from "../Cadastro/Cadastro";
import Animation from "../Animation/Animation";

const Carousel: React.FC = () => {
    const styleGroup = {
        button: "bg-ERROR text-WHITE p-5 rounded-lg text-xl hover:scale-110 duration-200 hover:shadow-2xl",
    }

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
                        <Animation type="fromTop" className="text-center text-3xl md:text-5xl font-bold w-3/5 text-WHITE">
                            Tudo em um único lugar na palma das suas mãos!
                        </Animation>
                        <Animation type="fromRight" className="flex justify-center items-center md:flex-row-reverse md:justify-start w-3/5">
                        <a href="/register"><button className={styleGroup.button}>Cadastre-se</button></a>
                        </Animation>
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
                        <Animation type="fromRight" className="flex flex-col items-end text-3xl md:text-5xl font-bold w-4/5 text-WHITE">
                            <div className="text-center">
                                Coloque o seu produto no Cazappi
                                <br></br>tenha mais visibilidade
                            </div>
                        </Animation>
                        <Animation type="fromRight" className="flex justify-center items-center md:flex-row-reverse md:justify-start w-3/5">
                            <a href="/register"><button className={styleGroup.button}>Cadastre-se</button></a>
                        </Animation>
                    </div>
                </div>
            </Car>
        </div>
    );
};

export default Carousel;
