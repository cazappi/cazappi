import React, { useState, useEffect, Children } from "react";
import { useDispatch } from "react-redux";
import { tokenBackend, tokenFirebase } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import {
  LOGOIMAGE,
  LINK,
  FLEXROW,
  FLEXCOLUMN,
  TITLE,
  CONTAINER,
  INPUTTEXT,
} from "./style";
import logoImg from "../../assets/logoImgWithoutCircles.png";
import { THEME } from "../../theme/index";
import { Icon } from "@iconify-icon/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import api from "../../services/api";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import { getAuth, signInWithCustomToken } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();

  //integracao para fazer o login e salvar o token com Redux
  //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
  const loginHook = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("teste");
    api
      .post("/login", {
        email: "julo@gmail.com",
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
            // navegar para outra tela após salvar o TOKEN
            navigate("/exemploToken");
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

      {/* ----------------------- Container ----------------------- */}
      <CONTAINER>
        <TITLE
          style={{
            marginBottom: rh(90),
          }}
        >
          Bem vindo(a) de volta
        </TITLE>
        <LOGOIMAGE
          src={logoImg}
          style={{
            marginBottom: rh(55),
          }}
        ></LOGOIMAGE>
        <form action="">
          <FLEXCOLUMN>
            <div
              style={{
                marginBottom: rh(31),
              }}
            >
              <INPUTTEXT
                type="normal"
                style={{
                  marginBottom: rh(17),
                }}
              >
                E-mail ou usuário
              </INPUTTEXT>
              <Input type="text" placeholder="email@email.com" />
            </div>
            <div
              style={{
                marginBottom: rh(59),
              }}
            >
              <INPUTTEXT
                type="normal"
                style={{
                  marginBottom: rh(17),
                }}
              >
                Senha
              </INPUTTEXT>
              <Input type="password" placeholder="**********" />
              <INPUTTEXT
                type="forget"
                style={{
                  marginTop: rh(7),
                }}
              >
                Esqueceu a senha? <LINK href="/forgetPass">Alterar senha</LINK>
              </INPUTTEXT>
            </div>
            <FLEXCOLUMN
              style={{
                marginBottom: rh(94),
              }}
            >
              <Button
                as="a"
                type="red"
                style={{
                  marginBottom: rh(26),
                }}
              >
                Entrar
              </Button>
              <Button as="a" type="white" href="/SignUp">
                Registrar outra conta
              </Button>
              <button
                className="bg-PRIMARY text-WHITE p-3 rounded-lg text-xl m-4"
                onClick={loginHook}
              >
                Entrar
              </button>
            </FLEXCOLUMN>
          </FLEXCOLUMN>
        </form>
      </CONTAINER>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </div>
  );
};

export default Login;
