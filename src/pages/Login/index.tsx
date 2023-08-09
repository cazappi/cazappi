import React from "react";
import { useDispatch } from "react-redux";
import { tokenBackend, tokenFirebase } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logoImgWithoutCircles.png";
import { THEME } from "../../theme/index";
import { Icon } from "@iconify-icon/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import Input from "../../components/Input/Input";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithCustomToken } from "firebase/auth";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  const styleGroup = {
    input:
      "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black",
  };

  //integracao para fazer o login e salvar o token com Redux
  //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
  const loginHook = (values: LoginValues) => {
    api
      .post("/login", {
        email: "julio@gmail.com",
        password: "123456",
      })
      .then(async (response) => {
        const tokenFromApi = response.data.token;

        // função que pega o token no firebase
        await signInWithCustomToken(auth, tokenFromApi)
          .then(async (userCredential) => {
            // Signed in
            const token_firebase = await userCredential.user.getIdToken();
            dispatch(tokenFirebase(token_firebase));
            dispatch(tokenBackend(tokenFromApi));
            document.cookie = `token_firebase=${token_firebase}`;
          })
          .catch((error) => {
            console.log("erro");
            const errorCode = error.code;
            const errorMessage = error.message;
            // ...
          });
      })
      .catch((err) => {
        console.log("Erro" + err);
      });
  };
  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}
      <div className="w-full flex flex-col items-center justify-center my-14">
        <div className="mb-24 text-4xl text-PRIMARY text-center font-bold">
          Bem vindo(a) de volta
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={loginHook}
        >
          {({ values, handleChange }) => (
            <Form className="flex flex-col w-1/5 min-w-[250px] justify-center items-center">
              <div className="flex mb-24 flex-col w-full justify-center">
                <div className="mb-6 flex flex-col">
                  <label className="text-xl mb-1 text-black" htmlFor="email">
                    E-mail ou usuário
                  </label>
                  <Input
                    placeholder="email@email.com"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-1 flex flex-col">
                  <label className="text-xl mb-1 text-black" htmlFor="password">
                    Senha
                  </label>
                  <Input
                    placeholder="**********"
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="text-sm">
                  Esqueceu a senha?
                  <a href="/resetpass" className="text-PRIMARY">
                    Alterar senha
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl"
              >
                Entrar
              </button>
              <a href="/register">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    navigate("/register");
                  }}
                  className="bg-transparent border-SECONDARY border-[1px] text-SECONDARY p-3 px-10 rounded-3xl text-base md:text-xl hover:scale-105 duration-200 hover:shadow-2xl"
                >
                  Registrar outra conta
                </button>
              </a>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
