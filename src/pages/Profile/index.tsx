import React, { useState, useEffect, Children } from 'react';
import { useDispatch } from "react-redux";
import { loginSuccess } from '../../redux/actions/authActions';
import { useNavigate } from "react-router-dom"
import logoImg from '../../assets/logoImgWithoutCircles.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from '../../services/api';
import profilebg from '../../assets/profilebg.png'
import mapExample from '../../assets/mapExample.png'
import profileExample from '../../assets/profileExample.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { url } from 'inspector';

const Profile = () => {
    const navigate = useNavigate();
    const styleGroup = {
        input: "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black"
    }

    //integracao para fazer o login e salvar o token com Redux
    //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")

    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
            <div className='w-full flex flex-col items-center justify-center my-14'>
                <div className='text-4xl w-4/5 text-center text-PRIMARY text-center font-bold'>Configurações de perfil</div>
                <div className='my-6 w-4/5 bg-PRIMARY h-[2px]'></div>
                <div className='text-lg mb-6 w-4/5 text-black font-medium text-center'>Personalize seu negócio para deixa-lo mais atrativo</div>

                <div className="self-stretch overflow-hidden flex flex-col md:flex-row items-center justify-center gap-[100px] text-base ">
                    <div className="relative rounded-3xl box-border w-[350px] h-[620px] overflow-hidden shrink-0 border-PRIMARY border-2">
                        <img
                            className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[432px] h-[131px] object-cover"
                            alt=""
                            src={profilebg}
                        />
                        <a href="" className="absolute top-[116px] left-[279.5px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center">
                            <Icon icon="mdi:pencil" width={20}
                                className="text-WHITE"
                            />
                        </a>
                        <img
                            className="absolute top-[111px] left-[34px] rounded-full object-cover"
                            alt=""
                            src={profileExample}
                        />
                        <a href="" className="absolute top-[209px] left-[279.5px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center">
                            <Icon icon="mdi:pencil" width={20}
                                className="text-WHITE"
                            />
                        </a>
                        <a href="" className="absolute top-[132px] left-[99px] rounded-full bg-PRIMARY w-[29px] flex flex-row p-1 box-border items-center justify-center">
                        <Icon icon="mdi:pencil" width={20}
                                className="text-WHITE"
                            />
                        </a>
                        <div className="absolute top-[219px] left-[12px] leading-[20px]">{`Nome fantasia `}</div>
                        <div className="absolute top-[269.5px] left-[15px] box-border w-11/12 h-px border-t-[1px] border-solid border-gray-600" />
                    </div>
                    <div className="w-[350px] h-[620px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[10px] text-[12px] text-black-100 font-roboto-16-500">
                        <div className="self-stretch rounded-3xl overflow-hidden flex flex-row flex-wrap pt-6 px-0 pb-0 items-center justify-center gap-[72px] border-PRIMARY border-2">
                            <div className="relative leading-[20px] flex items-center w-[229px] shrink-0">
                                <span className="[line-break:anywhere] w-full">
                                    <p className="m-0">
                                        <b>Rua Dom Pedro IV, 1714</b>
                                    </p>
                                    <p className="m-0">Setor Monte Alto, Senador Canedo - GO</p>
                                </span>
                            </div>
                            <a href="" className="rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center">
                                <Icon icon="mdi:pencil" width={20}
                                    className="text-WHITE"
                                />
                            </a>
                            <div className="relative rounded-t-none rounded-b-xl bg-white w-[350px] h-[149px] overflow-hidden shrink-0">
                                <div className="absolute top-[-194px] left-[-33px] w-[500px] h-[500px]" />
                                <img
                                    className="absolute top-[0px] left-[0px] object-cover"
                                    alt=""
                                    src={mapExample}
                                />
                            </div>
                        </div>
                        <div className="self-stretch flex-1 rounded-3xl overflow-hidden flex flex-col p-6 items-center justify-center text-base text-black-200 font-text border-PRIMARY border-2">
                            <div className="relative w-[313px] h-[265px]">
                                <div className="absolute top-[0px] left-[0px] text-xl font-medium">
                                    Horário de funcionamento
                                </div>
                                <div className="absolute top-[42px] left-[16px] flex flex-col items-center justify-start gap-[10px] text-base">
                                    <b className="relative">{`seg `}</b>
                                    <b className="relative">ter</b>
                                    <b className="relative">{`qua `}</b>
                                    <b className="relative">{`qui `}</b>
                                    <b className="relative">{`sex `}</b>
                                    <b className="relative">{`sab `}</b>
                                    <b className="relative">{`dom `}</b>
                                </div>
                                <div className="absolute top-[38px] left-[103px] flex flex-col items-center justify-start gap-[10px] font-roboto-16-500">
                                    <div className="relative font-medium">fechado</div>
                                    <div className="relative font-medium">11:00-18:00</div>
                                    <div className="relative font-medium">11:00-18:00</div>
                                    <div className="relative font-medium">{`11:00-18:00 `}</div>
                                    <div className="relative font-medium">{`11:00-18:00 `}</div>
                                    <div className="relative font-medium">{`11:00-18:00 `}</div>
                                    <div className="relative font-medium">{`11:00-18:00 `}</div>
                                </div>
                                <a href="" className="absolute top-[0px] left-[283px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center">
                                <Icon icon="mdi:pencil" width={20}
                                    className="text-WHITE"
                                />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    )
}

export default Profile;