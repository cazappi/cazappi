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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Input from '../../components/Input/Input';

interface resetPassValues {
    email: string;
}

const ResetPass = () => {
    const navigate = useNavigate();

    const styleGroup = {
        input: "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black"
    }

    //integracao para fazer o login e salvar o token com Redux
    //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
    const recoveryHook = (values: resetPassValues) => {
        console.log("teste");
        api
            .post('/recover', {
                email: values.email
            })
            .then(() => {
                navigate('/login');
            })
            .catch(err => {
                console.log("Erro" + err);
                navigate('/login');
            });
    };
    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
            <div className='w-full flex flex-col items-center justify-center my-14'>
                <div className='mb-1 text-4xl text-PRIMARY text-center font-bold'>Esqueceu sua senha?</div>
                <div className='mb-24 text-4xl text-PRIMARY text-center font-bold'>Redefina ela agora mesmo!</div>

                <Formik
                    initialValues={{
                        email: '',
                    }}
                    onSubmit={recoveryHook}
                >
                    {({ values, handleChange }) => (
                        <Form className="flex flex-col w-1/5 min-w-[250px] justify-center items-center">
                            <div className="flex mb-24 flex-col w-full justify-center">
                                <div className='mb-6 flex flex-col'>
                                    <label className='text-xl mb-1 text-black' htmlFor="email">E-mail ou usuário</label>
                                    <Input placeholder='email@email.com' className={styleGroup.input} type="email" name="email" value={values.email} onChange={handleChange} />
                                </div>
                            </div>
                            <button type='submit' className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl">Trocar senha</button>
                            <button onClick={(event) => {event.preventDefault(); navigate('/login')}} className="bg-transparent border-SECONDARY border-[1px] text-SECONDARY p-3 px-10 rounded-3xl text-base md:text-xl hover:scale-105 duration-200 hover:shadow-2xl">Voltar</button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}    
            <Footer />
        </div>
    )
}

export default ResetPass;