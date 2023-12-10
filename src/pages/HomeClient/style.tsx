import exp from "constants";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
`;

export const Endereco = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #909090;
    border-style: solid;
    border-width: 1px;
    border-radius: 25px;
    width: 70%;
`;

export const ParagrafoEndereco = styled.p`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;

`;

export const Notify = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30%;
`;

export const ParagrafoNotify = styled.p`
    font-family: Roboto;
    font-size: 20px;
    font-weight: 500;
    color: #EB1212;

`;

export const SubHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubHeaderContainer1 = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SubHeaderContainer2 = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const FilterContainer = styled.div`
    width: 100%
    display: flex;
    justify-content: left;
    align-items: left; 
    margin: 5vh 0vh;
`;

export const Titulo = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 36px;
`;

export const Imagens = styled.div`
    width: 100%;
    display: flex;
    margin: 5vh 0vh;
    justify-content: space-evenly;
    align-items: center;
`;

export const ImagemTela = styled.img`
    border-radius: 25px;
`;

export const ImgEsquerda = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;
export const ImgDireita = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const ParImg = styled.p`
    font-size: 28px;
    font-family: 'Roboto', sans-serif;
`;

export const ListaLojas = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 5vh; 3vh;

`;

export const ListaLojasContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 3vh 0;
`;


export {};