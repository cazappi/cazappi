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
import Input from '../../components/Input/Input';


const RegisterShop = () => {
    const navigate = useNavigate();
    const styleGroup = {
        input: "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black"
    }

    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
            <div className='w-full flex flex-col items-center justify-center my-14'>
                <div className='text-4xl w-3/5 text-center text-PRIMARY text-center font-bold'>Cadastro de loja</div>
                <div className='my-6 w-3/5 bg-PRIMARY h-[2px]'></div>
                <div className='text-lg mb-6 w-3/5 text-black font-medium text-center'>Cadastre-se e desfrute do nosso sistema de vendas!</div>

                <div className='w-3/5'>
                    <div className='w-1/2 mb-6'>
                        <label className='text-base mb-5' htmlFor="capa-input">Selecionar imagem de capa</label>
                        <Input className='iconOn' type='file' id="capa-input"></Input>
                    </div>
                    <div className='w-1/2 mb-6'>
                        <label className='text-base mb-5' htmlFor="profile-input">Selecionar imagem de perfil</label>
                        <Input className='iconOn' type='file' id="profile-input"></Input>
                    </div>

                    <div className='w-full mb-6'>
                        <label htmlFor="">Informe a localização do seu negócio</label>

                        <div className='mb-2'>
                            <Input className='iconOn' type='text' placeholder='CEP'></Input>
                        </div>

                        <div className='flex w-full flex-col md:flex-row justify-between mb-2'>
                            <div className='md:w-3/12'>
                                <Input className='iconOn' type='text' placeholder='Estado'></Input>
                            </div>
                            <div className='md:w-8/12'>
                                <Input className='iconOn'   type='text' placeholder='Cidade'></Input>
                            </div>
                        </div>

                        <div className='mb-2'>
                            <Input className='iconOn' type='text' placeholder='Bairro'></Input>
                        </div>

                        <div className='flex w-full flex-col md:flex-row justify-between mb-2'>
                            <div className='md:w-8/12'>
                                <Input className='iconOn' type='text' placeholder='Rua'></Input>
                            </div>
                            <div className='md:w-3/12'>
                                <Input className='iconOn'   type='number' placeholder='Número'></Input>
                            </div>
                        </div>

                        <div className=''>
                            <Input className='iconOn' type='text' placeholder='Complemento'></Input>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    )
}

export default RegisterShop;