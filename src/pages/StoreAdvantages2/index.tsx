import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Flecha from "../../assets/arrow_back.svg"
import { useNavigate } from 'react-router-dom';
import { Container, Voltar, TituloDiv, Politica, ContentContainer, TituloContent, LetraContent, Hr, CheckboxContainer, CheckboxInput, CheckboxLabel, StyledCheckbox, HiddenCheckbox, Enviar } from "./style"


const StoreAdvantages2: React.FC = () => {

        interface StyledCheckboxProps {
            checked: boolean;
        }

        const [isChecked, setIsChecked] = useState(false);

        const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        };

        const handleSubmit = () => {
            alert('Formulário enviado!');
          };

        return (
        <div>
            <Header transparent={false}/>
            <Container>
                <Voltar>
                    <a href="/"><img src={Flecha} /></a>
                </Voltar>

                <TituloDiv>
                    <Politica>Nossa política</Politica>
                </TituloDiv>

                <ContentContainer>
                    <TituloContent>Política de venda</TituloContent>
                    <LetraContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid hic repellat accusantium repellendus veniam quaerat odit beatae numquam? Voluptatum, aperiam? Quaerat ipsam velit, odit praesentium dolorum iusto commodi maxime nam ratione sapiente laboriosam, ad totam iure fugit repellat nisi earum qui! Saepe cupiditate suscipit, sapiente voluptatem quos reiciendis dolore consequatur odit, quidem magni eligendi repellendus blanditiis quod atque, doloremque dolorem? Ut, eum qui? </LetraContent>
                </ContentContainer>

                <ContentContainer>
                    <TituloContent>Política de venda</TituloContent>
                    <LetraContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid hic repellat accusantium repellendus veniam quaerat odit beatae numquam? Voluptatum, aperiam? Quaerat ipsam velit, odit praesentium dolorum iusto commodi maxime nam ratione sapiente laboriosam, ad totam iure fugit repellat nisi earum qui! Saepe cupiditate suscipit, sapiente voluptatem quos reiciendis dolore consequatur odit, quidem magni eligendi repellendus blanditiis quod atque, doloremque dolorem? Ut, eum qui? </LetraContent>
                </ContentContainer>

                <ContentContainer>
                    <TituloContent>Política de venda</TituloContent>
                    <LetraContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid hic repellat accusantium repellendus veniam quaerat odit beatae numquam? Voluptatum, aperiam? Quaerat ipsam velit, odit praesentium dolorum iusto commodi maxime nam ratione sapiente laboriosam, ad totam iure fugit repellat nisi earum qui! Saepe cupiditate suscipit, sapiente voluptatem quos reiciendis dolore consequatur odit, quidem magni eligendi repellendus blanditiis quod atque, doloremque dolorem? Ut, eum qui? </LetraContent>
                </ContentContainer>

                <ContentContainer>
                    <TituloContent>Política de venda</TituloContent>
                    <LetraContent>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid hic repellat accusantium repellendus veniam quaerat odit beatae numquam? Voluptatum, aperiam? Quaerat ipsam velit, odit praesentium dolorum iusto commodi maxime nam ratione sapiente laboriosam, ad totam iure fugit repellat nisi earum qui! Saepe cupiditate suscipit, sapiente voluptatem quos reiciendis dolore consequatur odit, quidem magni eligendi repellendus blanditiis quod atque, doloremque dolorem? Ut, eum qui? </LetraContent>
                </ContentContainer>

                <Hr />

                <CheckboxContainer>
                    <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
                    <StyledCheckbox checked={isChecked} />
                        <CheckboxLabel>Declaro que li e aceito as Condições de Venda e Pagamento, e tenho ciência das boas práticas para o varejo.</CheckboxLabel>
                </CheckboxContainer>

                <Enviar onClick={handleSubmit} disabled={!isChecked}>Confirmar assinatura</Enviar>
            </Container>

            <Footer />
        </div>
    );
};

export default StoreAdvantages2;