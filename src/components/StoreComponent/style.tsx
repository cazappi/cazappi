import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;W
`;

export const Loja = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-shadow: -10px 10px 3px 0px rgba(0, 0, 0, 0.1), /* Sombra principal à esquerda e abaixo */
                1px 0px 3px 0px rgba(0, 0, 0, 0.05), /* Sombra sutil à direita */
                0px -1px 3px 0px rgba(0, 0, 0, 0.05); /* Sombra sutil acima */
    border-radius: 25px;
    width: 30%;
`;

export const Img = styled.img`
    width: 100px;    
    height: 100px; 
    border-radius: 50%;
    object-fit: cover;

`;

export const Par = styled.p`
    font-size: 24;
    font-family: 'Roboto', sans-serif;
    margin: 0 3vh;
    width: 40%;
`;

export const Fav = styled.img`
    width: 20%;
`;

export const Imagem = styled.div`
    width: 40%
`;


