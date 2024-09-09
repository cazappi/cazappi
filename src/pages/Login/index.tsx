import { useState } from "react";
import { useDispatch } from "react-redux";
import { tokenBackend, tokenFirebase } from "../../redux/actions/authActions";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import Input from "../../components/Input/Input";
import { Formik, Form } from "formik";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";

interface LoginValues {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = getAuth();
  const [errorAcc, setErrorAcc] = useState(false);

  //integracao para fazer o login e salvar o token com Redux
  //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
  const loginHook = (values: LoginValues) => {
    api
      .post("/login", {
        email: values.email,
        password: values.password,
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
            localStorage.setItem("token_firebase", token_firebase);
            setErrorAcc(false);
            // Definir se é lojista ou cliente, se for lojist ProfileLojista, se for cliente ProfileClient
            api.get(`user/${getUser().user_id}`, {
              headers: {
                  "Authorization": `Bearer ${getToken()}`,
              },
            })
            .then((response) => {
              const role = response.data.user.role;
              if(role == "client"){
                navigate("/profileClient")
              }
              else if(role == "shopkeeper"){
                navigate("/profileLojista")
              }
              else if(role == "client_shopkeeper"){
                navigate("/profileLojista")
              }
            })
            .catch((error) => {
                console.error("Error fetching states:", error);
            });
          })
          .catch((error) => {
            console.log("erro");
            const errorMessage = error.message;
            throw new Error(errorMessage);
          });
      })
      .catch((err) => {
        console.log("Erro" + err);
        setErrorAcc(true);
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
                {errorAcc ? (
                  <div className="text-sm text-ERROR">
                    Usuário e/ou senha incorreto(s)
                  </div>
                ) : (
                  ""
                )}
                <div></div>
              </div>
              <button
                type="submit"
                className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl"
              >
                Entrar
              </button>
              <a href="/signUp">
                <button
                  onClick={(event) => {
                    event.preventDefault();
                    navigate("/signUp");
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

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </div>
  );
};

export default Login;
