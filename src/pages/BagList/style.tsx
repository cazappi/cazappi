import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

  import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
  
  export const CONTAINER = styled.div`
  width: ${rw(860)};
  height: 50px;
  padding: 0px 32px;
  border-radius: 8px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Preenche a altura da tela inteira */
  padding-bottom: 100px; /* Adiciona espaço para o rodapé */
`;

export const Image = styled.img`
  width: 42px; /* Largura relativa à largura do contêiner pai */
 /* Altura ajustada automaticamente para manter a proporção */
 /* Largura máxima para garantir que a imagem não fique muito grande */
  margin-right: 12px; /* Espaçamento entre a imagem e o texto */
  border-radius: 50%;
`;

export const TitleText = styled.span`
  font-family: Inter;
  font-size: 24px
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  margin-left: ${rw(60)};


`;

export const CustomDiv = styled.div`
  width: ${rw(860)};
  display: flex;
  justify-content: space-between;
  position: relative; 
  padding-top:  ${rh(40)}; /* Adicionado padding-top de 20px */
  margin: 0 auto; /* Centraliza horizontalmente */
`;



export const Text1 = styled.span`
    font-family: Roboto;
    font-size: 16px
    font-weight: 400;
    line-height: 18.75px;
    text-align: center;

`;

export const Text2 = styled.span`
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    line-height: 18.75px;
    text-align: left;
    color: #FF0000;
    cursor: pointer;
`;
export const ListItemContainer = styled.div`

    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 12px; /* Ajuste conforme necessário */
    border-bottom: 1px solid #ccc; /* Adicione uma borda inferior */
    width: ${rw(860)};
    height: auto;
    gap: 8px;
    
  


`;

export const ListItemText = styled.span`
  color: #333; /* Cor do texto */
`;

export const ListContainer = styled.div`

    overflow-y: auto; /* Adicione uma barra de rolagem vertical quando necessário */
    width: ${rw(860)};
    margin: 0 auto;
    margin-bottom: ${rh(100)}; 


   

`;

export const ItemImage = styled.img`
  width: 50px; /* Largura relativa à largura do contêiner pai */
  height: auto; /* Altura ajustada automaticamente para manter a proporção */
  margin-right: 12px; /* Espaçamento entre a imagem e o texto */
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center; 
  flex-grow: 1; /* Ocupa todo o espaço disponível */
`;

export const ItemName = styled.div`
  font-weight: bold;
  display: block; /* Torna o ItemName um elemento de bloco */
  text-align: left; /* Alinha o texto à esquerda */
`;

export const ItemPrice = styled.div`
  color: #888; /* Cor do texto do preço */
  display: block; /* Torna o ItemPrice um elemento de bloco */
  text-align: left; /* Alinha o texto à esquerda */
  margin-top: 4px; /* Adiciona um espaço entre o ItemName e o ItemPrice */
`;


export const ItemQuantity = styled.div`
  color: #888; /* Cor do texto da quantidade */
  display: flex;
  align-items: center;
  margin-left: auto
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 15px;
  background-color: red;
  border-radius: 50%;
  top: 1.13px;
  left: 1.13px;
  width: 15.75px;
  height: 15.75px;
`;

export const QuantityValue = styled.div`
  margin: 0 8px;
`;

export const MinusIcon = styled(AiFillMinusCircle)`
color: #ff0000;
  cursor: pointer;
`;

export const PlusIcon = styled(AiFillPlusCircle)`
color: #ff0000;
  cursor: pointer;
`;
export const AddItens = styled.a`
    width: ${rw(860)};
    height: ${rh(24)};
    padding: 20px 0px 20px 0px;
    gap: 8px;
    border-radius: 8px 0px 0px 0px;
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
`;

export const TextAddItens = styled.div`
    font-family: Roboto;
    font-size:  15px;
    font-weight: 400;
    line-height: 16.41px;
    text-align: center;
    color: #FF0000;
    display: flex;
    align-items: center;
    margin-left: auto
 
`;
export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: ${rh(40)};
    max-height: 800px; /* Alterado para max-height para limitar a altura */
  
`;
export const SummaryText = styled.div`
  width: ${rw(328)};
  font-family: Inter;
  font-size:  15px;
  font-weight: 500;
  line-height: 18.15px;
  text-align: left;
`;

export const InfoBox = styled.div`
  width: ${rw(860)};
  height: auto; /* Ajusta a altura de acordo com o conteúdo */
  padding: 8px 0px 0px 0px;
  border-radius: 8px;
  margin-top:  ${rh(50)};
  box-shadow: 0px 1px 8px 0px #00000029;
  background-color: white; /* Cor de fundo do box */
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between; /* Espaça os elementos dentro da linha */
  width: 100%; /* Ajusta a largura para ocupar todo o espaço disponível */
  height: 17px;
  gap: 0px;
  font-family: Inter;
  font-size: 15px;
  font-weight: 400;
  line-height: 16.94px;
  text-align: left;
  margin-bottom: 8px; /* Adiciona espaçamento entre as linhas */
`;

export const TotalPaymentInfo = styled.div`
  width: ${rw(860)};
  height: fit-content; /* Ajusta a altura de acordo com o conteúdo */
  padding: 8px 0px; /* Adiciona padding interno para o conteúdo */
  gap: 0px;
  border-top: 1px solid #ccc; /* Adiciona borda superior */
  display: flex;
  justify-content: space-between; /* Espaça os elementos */

  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: left;
  color: #39FF14; /* Cor do texto */
`;
export const ContinueButton = styled.button`
  width: fit-content; /* Ajusta a largura ao conteúdo */
  height: 33px; /* Altura fixa */
  padding: 8px 32px; /* Adiciona padding interno */
  gap: 8px;
  border-radius: 16px; /* Simplificado para aplicar a mesma borda em todos os lados */
  background: linear-gradient(0deg, #39FF14, #39FF14),
              linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  font-family: Inter;
  font-size: 16px;
  font-weight: 500;
  line-height: 19.36px;
  text-align: center;
  color: white; /* Cor do texto */
  cursor: pointer;
  border: none; /* Remove a borda */
  outline: none; /* Remove o contorno ao focar */
  margin-top: 40px;
  align-items: center;
  display: block; /* Exibir como bloco para ocupar a largura total disponível */
  margin-left: auto; /* Alinha horizontalmente */
  margin-right: auto; /* Alinha horizontalmente */
 
 
`;