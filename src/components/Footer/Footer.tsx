import React from "react";
import { LOGOIMAGE, FLEXROW, FLEXCOLUMN, TEXT, LINK } from "./style";
import logoText from '../../assets/logoText.png';
import { THEME } from '../../theme/index';
import {responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf } from '../../utils/responsive-functions';
import { Icon } from '@iconify-icon/react';

const Footer: React.FC = () => {
  return (
    <div style={{
      paddingTop: "9rem"
    }}>
      <FLEXCOLUMN style={{
        backgroundColor: THEME.COLORS.PRIMARY,
        paddingTop: rh(16),
        paddingBottom: rh(16)
      }}>
        <LOGOIMAGE src={logoText} alt="logo" style={{
          width: "min(${rw(200)}, 50px)",
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
          <LINK href="" style={{
            
          }}>
            Política de privacidade | 
          </LINK>
          <LINK href="" style={{
            marginLeft: "2px",
          }}>
            Termos de uso
          </LINK>
        </div>
        <TEXT>
          © 2023. MSE Cazzapi - Delivery app | Desenvolvido por CATI Jr.
        </TEXT>
      </FLEXCOLUMN>
    </div>
  );
};

export default Footer;
