import styled from "styled-components";
import { THEME } from "../../theme/index";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";

export const Section = styled.section`
  height: 67vh;
`;

export const Title = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  color: #bb2649;
  text-align: center;
  margin-top: 5vh;
  margin-bottom: 1vh;
`;

export const LineContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LineImg = styled.img`
  width: 40%;
  margin-bottom: 1vh;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 5vh;
`;

export const Forms = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  row-gap: 10px;
`;

export const RadioInput = styled.input`
  accent-color: #bb2626;
  border: 2px solid #bb2649;
  outline-color: none;
  width: 32px;
  height: 32px;
  margin-right: 20px;
  vertical-align: middle;
`;

export const Input1 = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #bb2649;
  border-radius: 10px;
  margin-bottom: 2vh;
`;

export const Input2 = styled.div`
  background-color: white;
  padding: 1.5rem 2rem;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #bb2649;
  border-radius: 10px;
  margin-bottom: 3vh;
`;

export const Line = styled.img`
  width: 40%;
  margin-bottom: 1vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
