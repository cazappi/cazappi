import React, { useState, useEffect } from "react";
import { THEME } from '../../theme/index';
import { HEADER, LOGOIMAGE, OPTIONS, LINK, OPT, BACK } from "./style";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import logoText from '../../assets/logoText.png';
import { Icon } from '@iconify-icon/react';

const Header: React.FC = () => {
  const [showOptions, setShowOptions] = useState(true);

  const changeShowOptions = () => {
    setShowOptions(!showOptions);
  }

  useEffect(() => {
    if(showOptions && document.body.clientWidth <= 620){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  });

  React.useEffect(() => {
    function handleResize() {
      if(window.innerWidth > 710){
        if(!showOptions){
          changeShowOptions();
          document.body.style.overflow = "scroll";
        }
      } else {
        if(showOptions){
          changeShowOptions();
          document.body.style.overflow = "scroll";
        }
      }
      
    }
    window.addEventListener('resize', handleResize)
  })

  return (
    <HEADER>
      <a href="/">
        <LOGOIMAGE src={logoText} alt="logo"></LOGOIMAGE>
      </a>
      <OPT onClick={changeShowOptions}>
          {showOptions ?
            <Icon icon="ic:round-close" width={24} style={{
              color: THEME.COLORS.WHITE,
            }}/>
            :
            <Icon icon="mdi:hamburger-menu" width={24} style={{
              color: THEME.COLORS.WHITE,
            }}/> 
          }
      </OPT>
      {(showOptions) ?
      <BACK onClick={changeShowOptions}></BACK>
      :
      <div style={{display: "none"}}></div>
      }

      {(showOptions) ?
        <OPTIONS>
          <LINK href="/">Home</LINK>
          <LINK href="/Advertising">Quem somos</LINK>
          <LINK href="/login">Login</LINK>
          <LINK href="/SignUp">Cadastre-se</LINK>
        </OPTIONS>
        :
        <div style={{display: "none"}}></div>
      }
      
    </HEADER>
  );
};

export default Header;
