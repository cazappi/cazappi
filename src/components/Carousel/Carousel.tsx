import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import Carousel1 from '../../assets/Carousel1.png';
import Carousel2 from '../../assets/Carousel2.png';
import Carousel3 from '../../assets/Carousel3.png';
import { Icon } from '@iconify-icon/react';
import { Carousel as Car } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Cadastro from "../Cadastro/Cadastro";

interface CarouselProps {
    optionChange: number;
}

const Carousel: React.FC<CarouselProps> = ({ optionChange }) => {
    const [selectedOption, setSelectedOption] = useState(0);

    const handleOptionChange = (option: number) => {
        setSelectedOption(option);
    };

    React.useEffect(() => {
        handleOptionChange(optionChange);
    }, [optionChange])


    return ( 
        <div className="z-0">
            <Car className="h-[70vh] md:h-[100vh]" showThumbs={false} showStatus={false} selectedItem={selectedOption}>

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
                            <button onClick={() => {handleOptionChange(2)}} className="bg-PRIMARY text-WHITE p-5 rounded-lg text-xl">Cadastre-se</button>
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
                            <button onClick={() => {handleOptionChange(2)}} className="bg-PRIMARY text-WHITE p-5 rounded-lg text-xl">Cadastre-se</button>
                        </div>
                    </div>
                </div>

                {/* ------------------------ TERCEIRO CAROUSEL ------------------------ */}
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
            </Car>
        </div>
    );
};

export default Carousel;
