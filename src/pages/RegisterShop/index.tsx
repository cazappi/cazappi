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
                <div className='text-4xl w-4/5 text-center text-PRIMARY text-center font-bold'>Cadastro de loja</div>
                <div className='my-6 w-4/5 bg-PRIMARY h-[2px]'></div>
                <div className='text-lg mb-6 w-4/5 text-black font-medium text-center'>Cadastre-se e desfrute do nosso sistema de vendas!</div>


            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    )
}

export default RegisterShop;