import React from 'react';
import { HEADER, LOGOIMAGE, LINK, FLEXROW, FLEXCOLUMN, BUTTON } from './style';
import logoText from '../../assets/logoText.svg';
import logoImg from '../../assets/logoImg.png';
import cellphonesHome from '../../assets/cellphonesHome.png';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';

const Home = () => {
  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <HEADER>
        <LOGOIMAGE src={logoText} alt="logo" />
        <FLEXROW style={{
          width: "max(30%, 320px)"
        }}>
          <LINK href="">Home</LINK>
          <LINK href="">Quem somos</LINK>
          <LINK href="">Login</LINK>
          <LINK href="">Cadastre-se</LINK>
        </FLEXROW>
      </HEADER>

      {/* ----------------------- Container ----------------------- */}
      <FLEXCOLUMN style={{
        marginTop: rh(78),
        marginBottom: rh(54)
      }}>
        <FLEXROW style={{
          width: rw(1299), 
          justifyContent: 'initial'
        }}>
          <img src={cellphonesHome} alt="" style={{
            width: rw(539)
          }}/>
          <div style={{
            fontSize: rf(24), 
            marginLeft: rw(41), 
            width: rw(569)
          }}>
            Cazzapi é um app de delivery inovador, que busca atender principalmente aos pequenos negocios
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum rutrum justo a pellentesque. Aenean vel sem a mi ornare luctus a quis erat. Nullam porttitor efficitur dictum. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum rutrum justo a pellentesque. Aenean vel sem a mi ornare luctus a quis erat. Nullam porttitor efficitur dictum. Lorem ipsum dolor sit amet.
          </div>
        </FLEXROW>
        <FLEXROW style={{
          width: rw(1099)
        }}>
          <FLEXCOLUMN style={{
            width: rw(569)
          }}>
            <div style={{
              fontSize: rf(32), 
              textAlign: "center", 
              marginBottom: rh(120
            )}}>
              Tem um estabelecimento comercial e ficou interessado no Cazzapi?
            </div>
            <BUTTON>Registre-se agora</BUTTON>
          </FLEXCOLUMN>
          <img src={logoImg} alt="" style={{
            width: rw(436)
          }}/>
        </FLEXROW>
      </FLEXCOLUMN>
          
      {/* ----------------------- FOOTER ----------------------- */}    
      <FLEXCOLUMN style={{
        backgroundColor: THEME.COLORS.PRIMARY,
        paddingTop: rh(16),
        paddingBottom: rh(16)

      }}>
        <LOGOIMAGE src={logoText} alt="logo" style={{
          width: rw(200),
          marginBottom: "10px",
          padding: 0
        }}/>
        <FLEXROW style={{
          width: "136px"
        }}>
          <a href=""><Icon icon="mdi:instagram" width={24} style={{
            color: THEME.COLORS.WHITE
          }}/></a>
          <a href=""><Icon icon="mdi:linkedin" width={24} style={{
            color: THEME.COLORS.WHITE
          }}/></a>
          <a href=""><Icon icon="ic:baseline-whatsapp" width={24} style={{
            color: THEME.COLORS.WHITE
          }}/></a>
          <a href=""><Icon icon="ic:baseline-call" width={24} style={{
            color: THEME.COLORS.WHITE
          }}/></a>
        </FLEXROW>
        <div style={{
          marginBottom: "10px"
        }}>
          <a href="" style={{
            fontSize: rf(20),
            color: THEME.COLORS.WHITE,
            textDecoration: "none"
          }}>
            Política de privacidade | 
          </a>
          <a href="" style={{
            fontSize: rf(20),
            color: THEME.COLORS.WHITE,
            textDecoration: "none",
            marginLeft: "2px"
          }}>
            Termos de uso
          </a>
        </div>
        <div style={{
          fontSize: rf(20),
          color: THEME.COLORS.WHITE,
        }}>
          © 2023. MSE Cazzapi - Delivery app | Desenvolvido por CATI Jr.
        </div>
      </FLEXCOLUMN>
    </div>

  );
};

export default Home;