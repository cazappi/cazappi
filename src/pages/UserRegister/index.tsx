import { useState } from "react";
import { useDispatch } from "react-redux";
import { tokenBackend, tokenFirebase } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import Input from "../../components/Input/Input";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { Icon } from "@iconify-icon/react";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";

interface RegisterValues {
    name: string;
    document: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsOfUse: boolean;
}

const registrationSchema = Yup.object().shape({
    name: Yup.string().required("Campo obrigatório"),
    document: Yup.string()
        .required("Campo obrigatório")
        .test("cpfOrCnpj", "CPF ou CNPJ inválido", (value) =>
            cpf.isValid(value + "")
        ),
    email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
    password: Yup.string()
        .required("Campo obrigatório")
        .min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: Yup.string()
        .required("Campo obrigatório")
        .oneOf([Yup.ref("password")], "As senhas não conferem"),
    termsOfUse: Yup.boolean().oneOf(
        [true],
        "Você deve aceitar os termos de uso para continuar"
    ),
});

const UserRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = getAuth();
    const [errorAcc, setErrorAcc] = useState(false);
    const [pf, setPF] = useState(true)

    const styleGroup = {
        btnStyle: {
            selected: "flex flex-row items-center justify-center shadow-md w-64 py-6 rounded-lg text-BLACK border-2 border-SECONDARY",
            unselected: "flex flex-row items-center justify-center shadow-md w-64 py-6 rounded-lg text-gray-400"
        },
        iconStyle: {
            selected: "mr-3 text-SECONDARY",
            unselected: "mr-3 text-gray-200"
        },
        error: "mt-2 text-ERROR"
    }

    //integracao para fazer o login e salvar o token com Redux
    //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
    const registerHook = (values: RegisterValues) => {
        // api
        //     .post("/register", {
        //         email: values.email,
        //         password: values.password,
        //     })
        //     .then(async (response) => {
        //         const tokenFromApi = response.data.token;

        //         // função que pega o token no firebase
        //         await signInWithCustomToken(auth, tokenFromApi)
        //             .then(async (userCredential) => {
        //                 // Signed in
        //                 const token_firebase = await userCredential.user.getIdToken();
        //                 dispatch(tokenFirebase(token_firebase));
        //                 dispatch(tokenBackend(tokenFromApi));
        //                 localStorage.setItem("token_firebase", token_firebase);
        //                 setErrorAcc(false);
        //                 navigate("/profile");
        //             })
        //             .catch((error) => {
        //                 console.log("erro");
        //                 const errorMessage = error.message;
        //                 throw new Error(errorMessage);
        //             });
        //     })
        //     .catch((err) => {
        //         console.log("Erro" + err);
        //         setErrorAcc(true);
        //     });
    };

    return (
        <div>
            {/* ----------------------- HEADER ----------------------- */}
            <Header transparent={false}></Header>

            {/* ----------------------- Container ----------------------- */}
            <div className="w-full flex flex-col items-center justify-center my-10">
                <div className="mb-12 text-4xl text-PRIMARY text-center font-bold">
                    Crie sua conta
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center mb-8">
                    <button onClick={() => { setPF(true) }} className={(pf ? styleGroup.btnStyle.selected : styleGroup.btnStyle.unselected) + " mr-0 mb-4 sm:mr-8 sm:mb-0"}>
                        <Icon icon="material-symbols:person" width={26} className={pf ? styleGroup.iconStyle.selected : styleGroup.iconStyle.unselected} />
                        Pessoa física
                    </button>
                    <button onClick={() => { setPF(false) }} className={!pf ? styleGroup.btnStyle.selected : styleGroup.btnStyle.unselected}>
                        <Icon icon="ic:round-business-center" width={26} className={!pf ? styleGroup.iconStyle.selected : styleGroup.iconStyle.unselected} />
                        Pessoa jurídica
                    </button>
                </div>

                <Formik
                    initialValues={{
                        name: "",
                        document: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        termsOfUse: false
                    }}
                    validationSchema={registrationSchema}
                    onSubmit={registerHook}
                >
                    {({ values, handleChange }) => (
                        <Form className="flex flex-col w-1/5 min-w-[250px] justify-center items-center">
                            <div className="flex mb-8 flex-col w-full justify-center">
                                <div className="mb-6 flex flex-col">
                                    <label className="text-xl mb-1 text-black" htmlFor="name">
                                        Nome
                                    </label>
                                    <Input
                                        placeholder="Seu nome"
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        className={styleGroup.error}
                                        name="name"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-6 flex flex-col">
                                    <label className="text-xl mb-1 text-black" htmlFor="document">
                                        {pf ? "CPF" : "CNPJ"}
                                    </label>
                                    <Input
                                        placeholder="123.456.789-10"
                                        type="text"
                                        name="document"
                                        value={values.document}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        className={styleGroup.error}
                                        name="document"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-6 flex flex-col">
                                    <label className="text-xl mb-1 text-black" htmlFor="email">
                                        E-mail
                                    </label>
                                    <Input
                                        placeholder="seuemail@dominio.com"
                                        type="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        className={styleGroup.error}
                                        name="email"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-6 flex flex-col">
                                    <label className="text-xl mb-1 text-black" htmlFor="password">
                                        Senha
                                    </label>
                                    <Input
                                        placeholder="********"
                                        type="password"
                                        name="password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        className={styleGroup.error}
                                        name="password"
                                        component="div"
                                    />
                                </div>
                                <div className="mb-6 flex flex-col">
                                    <label className="text-xl mb-1 text-black" htmlFor="confirmPassword">
                                        Confirmar senha
                                    </label>
                                    <Input
                                        placeholder="********"
                                        type="password"
                                        name="confirmPassword"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    <ErrorMessage
                                        className={styleGroup.error}
                                        name="confirmPassword"
                                        component="div"
                                    />
                                </div>
                                <div className="flex flex-row items-center justify-center md:w-full">
                                    <input
                                        type="checkbox"
                                        name="termsOfUse"
                                        checked={values.termsOfUse}
                                        className="mr-2 border-PRIMARY checked:bg-PRIMARY checked:decoration-transparent"
                                        onChange={handleChange}
                                    />
                                    <div>
                                        Eu aceito o uso dos meus dados de acordo com a 
                                        <a href="" className="font-bold"> Declaração de Privacidade </a>
                                        e aceito os 
                                        <a href="" className="font-bold"> Termos e Condições</a>.
                                    </div>
                                </div>
                                <ErrorMessage
                                    className={styleGroup.error}
                                    name="termsOfUse"
                                    component="div"
                                />
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    className="flex items-center justify-center bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl"
                                >
                                    Avançar
                                    <Icon icon="fluent-mdl2:forward" width={18} className="text-white ml-4" />
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>

            {/* ----------------------- FOOTER ----------------------- */}
            <Footer />
        </div>
    );
};

export default UserRegister;
