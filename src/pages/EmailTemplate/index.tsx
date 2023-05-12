import React from "react";
import Button from "../../components/Button/Button";
import {
  FooterContent,
  FooterContainer,
  Redefinition,
  ButtonContainer,
  RedefinitionContainer,
  MainHeader,
  HeaderP,
  LogoCima,
  HeaderContainer,
  LinkEmail,
} from "./style";

import LogoImg from "../../assets/logoText.svg";

interface Props {
  name: string;
}

const EmailTemplate: React.FC<Props> = ({ name }) => (
  <div>
    <HeaderContainer>
      <MainHeader>
        <LogoCima src={LogoImg}></LogoCima>
        <HeaderP>Redefinição de senha</HeaderP>
      </MainHeader>
    </HeaderContainer>
    <RedefinitionContainer>
      <Redefinition>
        <h1>
          Olá <strong>{name}</strong>!
        </h1>
        <p>Para redefinir sua senha clique no botão abaixo</p>
        <ButtonContainer>
          <Button as="a" href="/forgetPass" type="red">
            Redefinir Senha
          </Button>
        </ButtonContainer>
        <p>Se o botão acima não funcionar:</p>
        <LinkEmail>
          <a href="aaaaaaaaaaaaa.com/aaaaaaaaaaaaaaaa">Clique aqui</a>
        </LinkEmail>
        <p>Se você não solicitou a redefinição de senha, ignore este e-mail.</p>
      </Redefinition>
    </RedefinitionContainer>
    <FooterContainer>
      <FooterContent>
        <p>
          Okeo. Endereço Lorem ipsum dolor sit, amet consectetur adipisicing
          elit.
        </p>
        <p>
          © Okeo. Todos os direitos reservados.
          <a href="/Politica">Política de privacidade</a>
        </p>
        <p>Este é um e-mail automático. Não responda a este e-mail</p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          ex hic quo id excepturi ullam voluptate facilis, natus dolor earum
          corporis doloremque cum in molestiae, beatae voluptatem non suscipit
          asperiores.
        </p>
      </FooterContent>
    </FooterContainer>
  </div>
);

export default EmailTemplate;
