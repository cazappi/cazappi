import React, { useState, useEffect } from "react";
import { THEME } from "../../theme/index";
// import { HEADER, LOGOIMAGE, OPTIONS, LINK, OPT, BACK } from "./style";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import logoText from "../../assets/logoText.svg";
import { Icon } from "@iconify-icon/react";
import api from "../../services/api";
import miniLogo from "../../assets/miniLogo.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { cpf } from "cpf-cnpj-validator";
import "./Cadastro.css";

interface RegistrationValues {
  name: string;
  document: string;
  email: string;
  password: string;
  confirmPassword: string;
  state: string;
  city: string;
  termsOfUse: boolean;
}

const registrationSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  document: Yup.string()
    .required("Campo obrigatório")
    .test("cpfOrCnpj", "CPF ou CNPJ inválido", (value) => true),
  email: Yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: Yup.string()
    .required("Campo obrigatório")
    .min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "As senhas não conferem"
  ),
  state: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  termsOfUse: Yup.boolean(),
  //.oneOf([true], 'Você deve aceitar os termos de uso para continuar'),
});

const Cadastro: React.FC = () => {
  const [typeAccount, setTypeAccount] = useState(true); // Se true, é CPF. Se false, é CNPJ

  const handleDocumentTypeChange = (value: React.SetStateAction<boolean>) => {
    setTypeAccount(value);
  };

  const handleSubmit = (values: RegistrationValues) => {
    api
      .post("/landPage/user", {
        city: values.city,
        state: values.state,
        name: values.name,
        document: values.document,
        documentType: typeAccount ? "cpf" : "cnpj",
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log("Adicionado com sucesso usuário!");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    // Aqui você pode enviar os dados para o servidor ou realizar outras ações com os valores preenchidos.
    console.log(values);
  };

  const styleGroup = {
    fieldGroup: "w-4/5 my-4 relative",
    fieldText: "font-semibold top-0 left-0 input-label",
    field: "bg-GRAY_600 w-full p-[8px] md:p-[10px] input-input",

    typeButtonSelected:
      "bg-WHITE flex flex-row items-center justify-center text-GRAY_600 rounded-xl p-2 md:p-3 buttonSelected mb-2 md:mb-0",
    typeButton:
      "bg-GRAY_600 flex flex-row items-center justify-center text-WHITE rounded-xl p-2 md:p-3 button mb-2 md:mb-0",

    error: "mt-2 text-ERROR",
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Após adicionar o cliente, precisamos adicionar um endereço com a cidade e estado dele pelo ID dele (criado)!
  };
  return (
    <div className="flex mt-5 md:mt-0 flex-col items-center w-full md:w-2/5 max-w-md h-fit p-3 justify-center bg-BLACK from-BLACK/90 to-BLACK/10 rounded-3xl text-WHITE text-xs">
      <img src={miniLogo} alt="" className="my-2" />
      <div className="mb-4">Cadastre-se e seja vendedor!</div>
      <div className="flex flex-col md:flex-row justify-around items-center md:w-5/6">
        <button
          onClick={() => {
            handleDocumentTypeChange(true);
          }}
          className={
            typeAccount ? styleGroup.typeButtonSelected : styleGroup.typeButton
          }
        >
          <Icon icon="ic:round-person" className="text-lg mr-1 md:mr-2"></Icon>
          <div>Pessoa física</div>
        </button>
        <button
          onClick={() => {
            handleDocumentTypeChange(false);
          }}
          className={
            typeAccount ? styleGroup.typeButton : styleGroup.typeButtonSelected
          }
        >
          <Icon
            icon="mingcute:briefcase-fill"
            className="text-lg mr-1 md:mr-2"
          ></Icon>
          <div>Pessoa jurídica</div>
        </button>
      </div>
      <Formik
        initialValues={{
          name: "",
          document: "",
          email: "",
          password: "",
          confirmPassword: "",
          state: "",
          city: "",
          termsOfUse: false,
        }}
        validationSchema={registrationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <Form className="flex flex-col items-center justify-center mt-4">
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="text"
                name="state"
                value={values.state}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>Estado</label>
              <ErrorMessage
                className={styleGroup.error}
                name="state"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="text"
                name="city"
                value={values.city}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>Cidade</label>
              <ErrorMessage
                className={styleGroup.error}
                name="city"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>Nome</label>
              <ErrorMessage
                className={styleGroup.error}
                name="name"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="text"
                name="document"
                value={values.document}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>
                {typeAccount ? "CPF:" : "CNPJ:"}
              </label>
              <ErrorMessage
                className={styleGroup.error}
                name="document"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>E-mail</label>
              <ErrorMessage
                className={styleGroup.error}
                name="email"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>Senha</label>
              <ErrorMessage
                className={styleGroup.error}
                name="password"
                component="div"
              />
            </div>
            <div className={styleGroup.fieldGroup}>
              <input
                className={styleGroup.field}
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <label className={styleGroup.fieldText}>Confirmar senha</label>
              <ErrorMessage
                className={styleGroup.error}
                name="confirmPassword"
                component="div"
              />
            </div>
            <div className="flex flex-row items-center justify-center p-5">
              <input
                type="checkbox"
                name="termsOfUse"
                className="mr-1 border-PRIMARY checked:bg-PRIMARY checked:decoration-transparent"
              />
              <div>
                Eu aceito o uso dos meus dados de acordo com a Declaração de
                Privacidade e aceito os Termos e Condições.
              </div>
              <ErrorMessage
                className={styleGroup.error}
                name="termsOfUse"
                component="div"
              />
            </div>
            <button
              className="bg-PRIMARY text-WHITE p-3 rounded-lg text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl"
              type="submit"
            >
              Cadastre-se
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cadastro;
