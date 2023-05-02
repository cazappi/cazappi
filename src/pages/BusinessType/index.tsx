import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  Section,
  Title,
  Line,
  Paragraph,
  Forms,
  Form,
  Input1,
  RadioInput,
  Input2,
  LineContainer,
  ButtonContainer,
} from "./style";
import LineImg from "../../assets/Line.svg";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import Button from "../../components/Button/Button";

const BusinessType = () => {
  return (
    <div>
      <Header />

      <Section>
        <Title>Tipo de negócio do restaurante</Title>
        <LineContainer>
          <Line src={LineImg} alt="Line" />
        </LineContainer>
        <Paragraph>
          Informe o tipo de negócio em que seu restaurante se enquadra
        </Paragraph>

        <Forms>
          <Form>
            <Input1>
              <RadioInput
                type="radio"
                id="MEI"
                name="tipo_negocio"
                value="MEI"
              />
              <label htmlFor="MEI">MEI (Microempreendedor individual)</label>
              <br />
            </Input1>
            <Input2>
              <RadioInput type="radio" id="ME" name="tipo_negocio" value="ME" />
              <label htmlFor="ME">ME (Microempresa) e outros</label>
              <br />
            </Input2>
          </Form>
        </Forms>
        <ButtonContainer>
          <Button as="a" href="/DataBank" type="red">
            Continuar
          </Button>
        </ButtonContainer>
      </Section>

      <Footer />
    </div>
  );
};

export default BusinessType;
