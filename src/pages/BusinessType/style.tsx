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

export const RADIO = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    accent-color: ${THEME.COLORS.PRIMARY};
    cursor: pointer;
    outline: none;
    margin-top: 0;
    margin-left: 0;
    margin-right: ${rw(16)};
    box-shadow: -1.69545px 1.69545px 1.69545px rgba(0, 0, 0, 0.25); 
    &:checked{
        box-shadow: none;
        border: 10px solid ${THEME.COLORS.ERROR};
    }
    @media (max-width: 710px) {
        width: 14px;
        height: 14px;
        &:checked{
            border: 4px solid ${THEME.COLORS.ERROR};
        }
    }
`;

export const Input1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1.5rem 2rem;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #bb2649;
  border-radius: 10px;
  margin-bottom: 2vh;
`;

export const Input2 = styled.div`
  display: flex;
  align-items: center;
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
