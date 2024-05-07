import styled from 'styled-components';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

  import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
  import { IconBaseProps } from 'react-icons/lib';
  import { IoCheckboxOutline } from "react-icons/io5";
  import { MdCheckBoxOutlineBlank } from "react-icons/md";

  interface SelectedStyledProps extends IconBaseProps {
    selected: boolean;
  }


export const MainContainer = styled.div`
  display: flex;

  padding-bottom: 100px; /* Adiciona espaço para o rodapé */
  flex-direction: column;
  

`;


export const DrawText = styled.span`
  font-family: Inter;
  font-size: 24px
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  padding-top: 40px;
  padding-left: ${rw(290)};


`;

export const ContainerBox = styled.div`
    width: ${rw(860)};
    height: 100px;
    padding: 10px 32px 0px 32px;
    border-radius: 8px;
    border: 1px solid #909090;
    display: flex; 
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start; 


`;

export const RetirarLoja = styled.div`
  display: flex;
  
  flex-direction: row;
  

`;

export const ReceberEntrega = styled.div`
  display: flex;
 
  flex-direction: row;
  

`;




export const Option = styled.div`
  display: flex;
  padding-bottom: 10px; /* Adiciona espaço para o rodapé */
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  color: ${(props: SelectedStyledProps) => (props.selected ? '#00FF00' : '#909090')};

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: #00FF00;
  }
`;

export const OptionText = styled.span`
  margin-left: 10px;
  color: ${(props: SelectedStyledProps) => (props.selected ? '#00FF00' : '#909090')};
`;

export const OptionSelector = styled(({ selected, ...props }) =>
  selected ? <IoCheckboxOutline {...props} /> : <MdCheckBoxOutlineBlank {...props} />
)`
  color: ${(props: SelectedStyledProps) => (props.selected ? '#00FF00' : '#909090')};
  margin-right: 10px;
  font-size: 24px;
`;

export const AddressText = styled.span`
  font-family: Inter;
  font-size: 24px
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  padding-top: 40px;
  padding-left: ${rw(290)};


`;

export const AdressContainer1 = styled.div`
    width: ${rw(860)};
    height: auto;
    padding: 0px 13px;
    border-radius: 8px;
   
    display: flex; 
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 0 auto;
    margin-top: 20px;
    flex-direction: column;
    align-items: flex-start; 
    background-color: black;

`;

export const StreetText = styled.span`
  margin-top: 13px;
  margin-left: 10px;
  color: white;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700
`;

export const NeibText = styled.span`
  margin-left: 10px;
  color: white;
  margin-bottom: 13px;
  font-family: Inter;
  font-size: 14px;
`;

export const CopyButton = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 300;
  line-height: 15px;
  



`;
export const CopyContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  cursor: pointer;
  color: #0095E1;
  width: ${rw(860)};
  align-items: center;
  justify-content: flex-end; 
  text-align: center; /* Ajuste de texto centralizado */
  margin: 0 auto;
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