import React, { useState, useEffect } from "react";
import {
  MainContainer,
  DrawText,
  ContainerBox,
  RetirarLoja,
  ReceberEntrega,
  Option,
  OptionSelector,
  OptionText,
  AddressText,
  AdressContainer1,
  StreetText,
  NeibText,
  CopyButton,
  CopyContainer,
  ContinueButton,
  TimeAndPriceContainer,
  EstimatedTimeContainer,
  WithDrawPrice,
} from "./style";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import L from "leaflet"; // Importe a biblioteca Leaflet
import "leaflet/dist/leaflet.css"; // Importe o CSS padrão do Leaflet
import { Icon } from "leaflet"; // Importe o ícone Leaflet
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf,
} from "../../utils/responsive-functions";
import iconUrl from "../../assets/marker.png";
import { FaRegCopy } from "react-icons/fa";
import { Link } from "react-router-dom";
import RightArrowIcon from "../../assets/right_arrow_icon.svg";

const BagWithDraw = () => {
  const [selectedOption, setSelectedOption] = useState("RetirarNaLoja");

  // Define o ícone personalizado
  const customIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  interface OptionProps {
    selected: boolean;
    onClick: () => void;
  }

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const RetirarNaLoja = ({ selected, onClick }: OptionProps) => (
    <Option selected={selected} onClick={onClick}>
      <OptionSelector selected={selected} />
      <OptionText selected={selected}>Retirar na loja</OptionText>
    </Option>
  );

  // Componente para Receber Entrega
  const ReceberEntrega = ({ selected, onClick }: OptionProps) => (
    <Option selected={selected} onClick={onClick}>
      <OptionSelector selected={selected} />
      <OptionText selected={selected}>Receber por entrega</OptionText>
    </Option>
  );

  const copyAddressToClipboard = () => {
    const address =
      "Rua Dom Pedro IV, 1714\nSetor Monte Alto, Senador Canedo - GO";
    navigator.clipboard.writeText(address);
  };

  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}

      <MainContainer>
        <DrawText>Modo de Retirada</DrawText>
        <ContainerBox>
          <RetirarNaLoja
            selected={selectedOption === "RetirarNaLoja"}
            onClick={() => handleOptionChange("RetirarNaLoja")}
          />
          <ReceberEntrega
            selected={selectedOption === "ReceberEntrega"}
            onClick={() => handleOptionChange("ReceberEntrega")}
          />
        </ContainerBox>

        <AddressText>
          {selectedOption === "RetirarNaLoja"
            ? "Endereço"
            : "Endereço de entrega"}
        </AddressText>
        <Link
          to={
            selectedOption === "ReceberEntrega"
              ? "/client/address"
              : "/BagWithDraw"
          }
        >
          <AdressContainer1 delivery={selectedOption === "ReceberEntrega"}>
            <div className="flex flex-col justify-start">
              <StreetText>Rua Dom Pedro IV, 1714</StreetText>
              <NeibText>Setor Monte Alto, Senador Canedo - GO</NeibText>
            </div>
            {selectedOption === "ReceberEntrega" && (
              <img
                alt=""
                src={RightArrowIcon}
                width={30}
                height={30}
                style={{ fill: "#FEFEFE" }}
              />
            )}
          </AdressContainer1>
        </Link>

        {selectedOption === "RetirarNaLoja" && (
          <>
            <MapContainer
              center={[-22.000515, -47.892866]}
              zoom={13}
              style={{
                height: "147px",
                width: `${rw(860)}`,
                margin: "60px auto 0 auto",
              }}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[-22.000515, -47.892866]} icon={customIcon}>
                <Popup>
                  Rua Dom Pedro IV, 1714
                  <br />
                  Setor Monte Alto, Senador Canedo - GO
                </Popup>
              </Marker>
            </MapContainer>

            <CopyContainer>
              <FaRegCopy style={{ marginRight: "5px" }} />
              <CopyButton onClick={copyAddressToClipboard}>
                Copiar endereço
              </CopyButton>
            </CopyContainer>
          </>
        )}
        {selectedOption === "ReceberEntrega" && (
          <>
            <TimeAndPriceContainer>
              <EstimatedTimeContainer>
                <span>Tempo estimado</span>
                <span>30 - 40 min</span>
              </EstimatedTimeContainer>
              <WithDrawPrice>
                <span>Valor da entrega</span>
                <span>R$ 4,99</span>
              </WithDrawPrice>
            </TimeAndPriceContainer>
          </>
        )}

        {/*TODO: Alterar aqui a rota para a pagina que deve mandar*/}
        <Link to={"/BagWithDraw"}>
          <ContinueButton>Continuar</ContinueButton>
        </Link>
      </MainContainer>

      {/* ----------------------- FOOTER ----------------------- */}

      <Footer />
    </div>
  );
};

export default BagWithDraw;
