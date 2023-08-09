import React from 'react';
import logoImg from '../../assets/logoImgWithoutCircles.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

interface ForgotValues {
    password: string;
    confirmPassword: string;
}

const resetSchema = Yup.object().shape({
    password: Yup.string()
      .required('Campo obrigatório')
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'As senhas não conferem'),
});

const ForgetPass = () => {
    const styleGroup = {
        input: "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black",
        error: "mt-2 text-ERROR",
    }


    const resetHook = () => {
        // console.log("teste");
        // api
        //   .post('/login', {
        //     email: "jaksonhuangz@gmail.com",
        //     password: "123456",
        //   })
        //   .then(response => {
        //     const tokenFromApi = response.data;
    
        //     // Despacha a ação para salvar o token no estado global (Redux)
        //     dispatch(loginSuccess(tokenFromApi));
        //     console.log("Sucesso!" + tokenFromApi);

        //     //navegar para outra tela após salvar o TOKEN
        //     navigate("/forgetPass");
        //     })
        //   .catch(err => {
        //     console.log("Erro" + err);
        //     });
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
                        password: '',
                        confirmPassword: ''
                    }}
                    validationSchema={resetSchema}
                    onSubmit={resetHook}
                >
                    {({ values, handleChange }) => (
                        <Form className="flex flex-col w-1/5 min-w-[250px] justify-center items-center">
                            <div className="flex mb-24 flex-col w-full justify-center">
                                <div className='mb-6 flex flex-col'>
                                    <label className='text-xl mb-1 text-black' htmlFor="password">Nova senha</label>
                                    <input placeholder='**********' className={styleGroup.input} type="password" name="password" value={values.password} onChange={handleChange} />
                                    <ErrorMessage className={styleGroup.error} name="password" component="div" />
                                </div>
                                <div className='mb-1 flex flex-col'>
                                    <label className='text-xl mb-1 text-black' htmlFor="confirmPassword">Senha</label>
                                    <input placeholder='**********' className={styleGroup.input} type="password" name="confirmPassword" value={values.confirmPassword} onChange={handleChange} />
                                    <ErrorMessage className={styleGroup.error} name="confirmPassword" component="div" />
                                </div>
                            </div>
                            <button type='submit' className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl">Salvar senha</button>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}    
            <Footer />
        </div>
    )
}

export default ForgetPass;