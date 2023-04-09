import React from "react";
import { LOGOIMAGE, FLEXROW, FLEXCOLUMN } from "./style";
import logoText from '../../assets/logoText.png';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Icon } from '@iconify-icon/react';

const Footer: React.FC = () => {
  return (
    <footer>
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
    </footer>
  );
};

export default Footer;
