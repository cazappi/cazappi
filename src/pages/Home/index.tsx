import React from 'react';
import { FLEXROW, FLEXCOLUMN, TEXT, TEXTINT, IMAGE, REGISTER, SPACE } from './style';
import logoImg from '../../assets/logoImg.png';
import cellphonesHome from '../../assets/cellphonesHome.png';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const Home = () => {
  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header />

      {/* ----------------------- Container ----------------------- */}
      <div>
        <FLEXCOLUMN style={{
          marginTop: rh(78),
          marginBottom: rh(54)
        }}>
          <FLEXROW style={{
            width: rw(1299),
          }}>
            <IMAGE src={cellphonesHome} alt=""/>
            <TEXT>
              Cazzapi é um app de delivery inovador, que busca atender principalmente aos pequenos negocios
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum rutrum justo a pellentesque. Aenean vel sem a mi ornare luctus a quis erat. Nullam porttitor efficitur dictum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum rutrum justo a pellentesque. Aenean vel sem a mi ornare luctus a quis erat. Nullam porttitor efficitur dictum. Lorem ipsum dolor sit amet.
            </TEXT>
          </FLEXROW>
          <REGISTER style={{
            width: rw(1099)
          }}>
            <FLEXCOLUMN style={{
              width: rw(569)
            }}>
              <TEXTINT>
                Tem um estabelecimento comercial e ficou interessado no Cazzapi?
              </TEXTINT>
              <SPACE>
                <Button as="a" type="home">Registre-se agora</Button>
              </SPACE>

            </FLEXCOLUMN>
            <IMAGE src={logoImg} alt=""/>
          </REGISTER>
        </FLEXCOLUMN>
      </div>
          
      {/* ----------------------- FOOTER ----------------------- */}    
      <Footer />
    </div>

  );
};

export default Home;