import React from 'react';
import { LOGOIMAGE, LINK, EMAIL, IMAGE, FLEXROW, FLEXCOLUMN, TITLE, GROUP, DIVTEXT, DIVTEXTMAIN } from './style';
import logoText from '../../assets/logoText.svg';
import { useNavigate } from "react-router-dom"
import mailImg from '../../assets/mail.svg';
import logoImg from '../../assets/logoImg.png';
import cellphonesHome from '../../assets/cellphonesHome.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const MailConfirmation = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
            <div className='flex flex-col items-center justify-center mt-20 mb-14'>
                <div className='mb-24 text-4xl text-PRIMARY text-center font-bold'>Quase lá</div>
                <div className='flex flex-col md:flex-row items-center justify-between content-center'>
                    <img className='w-1/3 mb-6 md:m-0 text-PRIMARY' src={mailImg} alt=""/>
                    <div className='flex flex-col text-2xl ml-11'>
                        Enviamos uma confirmação para 
                        <strong>caz*****@gmail.com</strong> 
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-10 mt-20'>
                    <div className='flex flex-col text-xl text-center mb-12'>
                        Confirme seu e-mail para acessar sua conta pela primeira vez
                    </div>
                    <button onClick={(event) => {event.preventDefault(); navigate('/login')}} className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl">Fazer Login</button>
                    <div className='flex flex-row items-center justify-center text-xl mt-4'>
                        Não recebeu o e-mail?
                        <a className='font-semibold text-PRIMARY ml-1 hover:opacity-80 cursor-pointer'>
                            Enviar novamente
                        </a>
                    </div>
                </div>

            </div>


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer></Footer>
        </div>

    );
};

export default MailConfirmation;