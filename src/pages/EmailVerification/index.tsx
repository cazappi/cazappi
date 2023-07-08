import React from "react";
import {
  Section,
  LoginContainer,
  H1,
  ContainerBody,
  ContainerParagraph,
  Paragraph,
} from "./style";
import Button from "../../components/Button/Button";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import EmailLogo from "../../assets/Email-logo.svg";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";

const EmailVerification = () => {
  return (
    <div>
      <Section>
        <H1>
          <strong>Pronto!</strong>
        </H1>
        <br />
        <ContainerBody>
          <div>
            <img src={EmailLogo} alt="Email-logo" />
          </div>
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
