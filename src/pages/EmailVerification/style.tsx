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

export const Section = styled.section`
  height: 69.2vh;
  display: flex;
  justify-items: center;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
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
  margin-top: 12vh;
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
  color: #bb2649;
  font-weight: bolder;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  text-align: center;
`;

export const ContainerBody = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const Paragraph = styled.p`
  width: 537px;
  font-size: 30px;
  margin-left: 30px;
  margin: 0;
  text-align: center;
`;
