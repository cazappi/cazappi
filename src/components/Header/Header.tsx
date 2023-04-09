import React from "react";
import { HEADER, LOGOIMAGE, FLEXROW, LINK } from "./style";
import logoText from '../../assets/logoText.png';

const Header: React.FC = () => {
  return (
    <HEADER>
      <LOGOIMAGE src={logoText} alt="logo" />
      <FLEXROW style={{
        width: "max(30%, 320px)"
      }}>
        <LINK href="">Home</LINK>
        <LINK href="">Quem somos</LINK>
        <LINK href="/login">Login</LINK>
        <LINK href="">Cadastre-se</LINK>
      </FLEXROW>
    </HEADER>
  );
};

export default Header;
