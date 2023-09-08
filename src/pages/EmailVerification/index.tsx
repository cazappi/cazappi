import react, { useEffect } from "react";
import {
  Section,
  LoginContainer,
  H1,
  ContainerBody,
  ContainerParagraph,
  Paragraph,
  Button,
  LogoContainer
} from "./style";
import axios from "axios";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EmailLogo from "../../assets/Email-logo.svg";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const verifyUser = (token: string) => {
  //console.log(token);
  api
    .post(`/landPage/email/${token}`)
    .then((response) => {
      console.log("Verificação concluida com sucesso" + response.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const EmailVerification = () => {
  const { token } = useParams();

  useEffect(() => {
    verifyUser(token ? token : '');
  }, []);

  return (
    <div>
      <Header transparent={false} />

      <div className="w-full flex flex-col items-center justify-center my-10 md:my-14">
        <div className='text-4xl text-PRIMARY text-center font-bold'>Pronto</div>
        <div className="flex flex-col items-center justify-center md:flex-row m-14 md:my-36">
          <div className="flex items-center justify-center mb-5 md:mb-0 md:h-auto">
            <img src={EmailLogo} className="md:h-auto h-24" alt="Email-logo" />
          </div>
          <div className="flex flex-col md:ml-8 w-4/5 md:w-1/2 justify-center text-center">
            <div className="w-full text-lg md:text-2xl text-center">
              <strong>Email verificado com sucesso!</strong>
            </div>
            <div className="w-full text-lg md:text-2xl text-center">
              Tudo pronto para montar seu negócio online pelo Cazzapi
            </div>
          </div>
          {/*container-paragraph*/}
        </div>
        {/*container-body*/}
        <a href="/login" className="mb-14 md:mb-28">
          <button className="bg-SECONDARY text-WHITE p-3 px-10 rounded-3xl text-base md:text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl">Fazer login</button>
        </a>
        {/*login-container*/}
      </div>

      <Footer />
    </div>
  );
};

export default EmailVerification;
