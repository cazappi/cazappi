import styled from "styled-components";
import { THEME } from "../../theme/index";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";

export const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }
`;

export const LogoContainer = styled.div`
    display: flex;
    @media (max-width: 750px) {
      justify-content: center;
    }
`;

export const Section = styled.section`
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

`;

export const EmailImage = styled.img`
  width: 200px;
  height: 200px

`;

export const Ready = styled.h2`
  margin-bottom: 8vh;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 42px;
  text-align: center;
  justify-items: top;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const LoginButton = styled.button`
  background-color: #bb2649;
  color: white;
  border: none;
  border-radius: 32px;
  width: 20vh;
  height: 5vh;
  font-size: 20px;
  font-weight: 700;
`;

export const H1 = styled.h1`
  color: #FF0000;
  font-weight: bolder;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 36px;
  text-align: center;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5vh;
  margin-bottom: 5vh;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Paragraph = styled.p`
  width: 537px;
  font-size: 22px;
  margin-left: 30px;
  margin: 0;
  text-align: center;
`;

export const Button = styled.button`
  border: none;
  text-decoration: none;
  border-radius: 32px;
  padding: ${rh(10)} 30.5px;
  min-height: ${rh(64)};
  min-width: ${rw(100)};
  font-weight: bold;
  font-size: ${rf(20)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  };
  background-color: #39FF14;
  color: white;
  `;