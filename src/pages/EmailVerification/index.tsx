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
  api
    .get(`/user/email/${token}`)
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
      <Header />

      <Section className="py-56">
        <H1>
          <strong>Pronto!</strong>
        </H1>
        <br />
        <ContainerBody>
          <LogoContainer>
            <img src={EmailLogo} alt="Email-logo" />
          </LogoContainer>
          <ContainerParagraph>
            <Paragraph>
              <strong>Email verificado com sucesso!</strong>
            </Paragraph>
            <Paragraph>
              Tudo pronto para montar seu negócio online pelo Cazzapi
            </Paragraph>
          </ContainerParagraph>
          {/*container-paragraph*/}
        </ContainerBody>
        {/*container-body*/}
        <LoginContainer>
          <Button as="a" href="/login" type="red">
            Fazer Login
          </Button>
        </LoginContainer>
        {/*login-container*/}
      </Section>

      <Footer />
    </div>
  );
};

export default EmailVerification;
