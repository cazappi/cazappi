import React from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Animation from '../../components/Animation/Animation';
import TextAdvantages from './howWork';

const StoreAdvantages = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            {/* Header */}
            <Header transparent={false}></Header>

            {/* Voltar */}
            <div className="w-full flex justify-center">
                <div className="w-[80%]">
                    <a href="/">
                        <Icon icon="material-symbols:arrow-back" className="text-2xl text-PRIMARY"></Icon>
                    </a>
                </div>
            </div>

            {/* Conteúdo */}
            <section className="w-full flex items-center justify-center mb-12">
                <div className="w-[80%] flex flex-col justify-center items-center">
                    <div className="text-4xl text-center items-center text-black font-bold mb-12">
                        Crie sua loja
                    </div>

                    <div className=" flex flex-col items-center gap-3 md:grid md:grid-cols-[6fr_1fr_1fr] w-full">
                        {/* Conteúdo da esquerda */}
                        <Animation type="fromLeft" className="flex items-start flex-col">
                            <div className="text-4xl text-center text-PRIMARY font-bold mb-8">
                                Como funciona
                            </div>

                            {
                                TextAdvantages.map((conteudo) => {
                                    return (
                                        <div className="flex items-center gap-3 mb-3">
                                            <Icon icon="fontisto:world-o" className="text-3xl text-black"></Icon>
                                            {conteudo}
                                        </div>
                                    );
                                })
                            }
                        </Animation>
                        <div></div>

                        {/* Barra direita */}
                        <Animation type="fromRight" className="h-20 md:h-full w-[80%] md:max-w-[120px] bg-ERROR flex flex-row md:flex-col items-center justify-evenly rounded-lg">
                            <Icon icon="solar:dollar-outline" className="text-5xl text-white"></Icon>
                            <Icon icon="ant-design:user-switch-outlined" className="text-5xl text-white"></Icon>
                            <Icon icon="bi:basket-fill" className="text-5xl text-white"></Icon>
                        </Animation>
                    </div>

                    <button onClick={(event) => {event.preventDefault(); navigate("/register");}} className="flex items-center w-44 justify-center bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 mt-12 hover:scale-105 duration-200 hover:shadow-2xl">
                        Criar Loja
                    </button>
                </div>
            </section>

            {/* Footer */}
            <Footer></Footer>
        </div>
    )
};

export default StoreAdvantages;
