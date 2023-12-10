import styled from "styled-components";

const breakpoints = {
    mobile: '320px',
    tablet: '790px',
    desktop: '1024px',
  };

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
`;

export const Voltar = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    width: 90%;
    margin-top: 3vh;
`;

export const TituloDiv = styled.div`
    display: flex;
    justidy-content: center;
    align-items: center;
    margin: 2vh 0;
`;

export const Politica = styled.p`
    font-size: 36px;
    font-weught: 400;
    color: #EB1212;

    @media (min-width: ${breakpoints.mobile}) {
        font-size: 30px;
      }
      
      @media (min-width: ${breakpoints.tablet}) {
        font-size: 34px;
      }
    
      @media (min-width: ${breakpoints.desktop}){
        font-size: 36px;       
      }
`;

export const ContentContainer = styled.div`
    display: flex
    justify-content: left;
    align-itens: left;
    margin: 2vh 0;
    width: 90%;
`;

export const TituloContent = styled.p`
    font-size: 28px;
    font-weight: bold;
    color: #1E1E1E;
    font-family: 'Inter';

    @media (min-width: ${breakpoints.mobile}) {
        font-size: 26px;
      }
      
      @media (min-width: ${breakpoints.tablet}) {
        font-size: 28px;
      }
    
      @media (min-width: ${breakpoints.desktop}){
        font-size: 28px;;
        font-weight: bold;
      }
`;

export const LetraContent = styled.p`
    font-size: 22px;
    font-family: 'Inter';
    color: #1E1E1E;
    font-weight: 400;

    @media (min-width: ${breakpoints.mobile}) {
        font-size: 22px;
      }
      
      @media (min-width: ${breakpoints.tablet}) {
        font-size: 22px;
      }
    
      @media (min-width: ${breakpoints.desktop}){
        font-size: 22px;       
      }
`;

export const Hr = styled.hr`
    width: 80%;
    border: 0;
    height: 1px;
    background-color: #000;
    margin: 2vh 0;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 3vh;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
`;

export const CheckboxLabel = styled.p`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #000000

  @media (min-width: ${breakpoints.mobile}) {
    font-size: 15px;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (min-width: ${breakpoints.desktop}){
    font-size: 24px;
    font-family: 'Roboto';
    font-weight: bold;
    color: #000000
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  position: absolute;
`;

interface StyledCheckboxProps {
  checked: boolean;
}

export const StyledCheckbox = styled.div<StyledCheckboxProps>`
  display: inline-block;

  min-width: 30px;
  min-height: 30px;
  background: ${props => (props.checked ? 'red' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: 2px solid red;
  margin: 0 2vh;
  position: relative; // Necessário para posicionar o pseudo-elemento corretamente

  ::after {
    content: '✔'; // Símbolo de check
    font-size: 20px; // Tamanho do símbolo
    color: white; // Cor do símbolo
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  // Exibindo o pseudo-elemento quando o checkbox está marcado
  ${props => props.checked && `
    ::after {
      opacity: 1;
    }
  `}

`;

export const Enviar = styled.button`

  background-color: #39FF14;
  width: 300px;
  height: 60px;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  font-weight: 400;
  font-size: 24px;
  display: flex;
  position: relative; // Necessário para a sombra interna
  overflow: hidden; // Mantém a sombra interna dentro do botão
  color: white;
  box-shadow: inset 0 4px 4px -2px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition-duration: 0.3s;
  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
    color: black;
  }

  margin: 3vh 0;
`;
