import React, { useState } from "react";
// import { HEADER, LOGOIMAGE, OPTIONS, LINK, OPT, BACK } from "./style";
import logoText from "../../assets/logoText.svg";
import { getUser } from "../../utils/user-token-request";
import { clearToken } from "../../utils/clear-cookie";
import { FaShoppingBag } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

interface HeaderProps {
  transparent: Boolean;
}

const Header: React.FC<HeaderProps> = ({ transparent }) => {
  const [responsive, setResponsive] = useState(false);
  const isAuthenticated = getUser().user_id;

  const styleGroup = {
    headerTransparent:
      "bg-gradient-to-b from-black to-transparent text-white flex md:fixed w-full top-0 z-10",
    headerWhite: "bg-WHITE text-black flex w-full z-10",
    options:
      "hover:text-PRIMARY hover:scale-110 my-2 hover:shadow-blue-gray-900 duration-300",
    button:
      "w-24 h-8 my-2 bg-transparent border border-red-500 rounded-full justify-center items-center flex duration-200 hover:shadow-2xl hover:scale-110",
  };

  const changeResponsive = (value: boolean) => {
    setResponsive(value);
  };

  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 920) {
        changeResponsive(false);
      } else {
        changeResponsive(true);
      }
    }
    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);
    window.addEventListener("scroll", handleResize);
    window.addEventListener("focus", handleResize);
    window.addEventListener("mousemove", handleResize);
  });

  return (
    <div
      className={
        transparent ? styleGroup.headerTransparent : styleGroup.headerWhite
      }
    >
      {responsive ? (
        <div className="w-full h-auto py-7 justify-center items-center flex flex-col">
          <a href="/" className="w-56 py-2">
            <img src={logoText} alt="logo" className="w-56"></img>
          </a>
          <div className="w-full flex-col items-center justify-center text-xl md:flex-row px-10 py-2 text-base inline-flex justify-between">
            <a href="/" className={styleGroup.options}>
              Home
            </a>
            <a href="/register/#comofunciona" className={styleGroup.options}>
              Como funciona
            </a>
            <a href="/#quemsomos" className={styleGroup.options}>
              Quem somos
            </a>
      
      
          </div>
          {isAuthenticated ? (
            <div className="flex items-center">
              <a href="/profile" className={`${styleGroup.options} mr-10`}>
                <FaShoppingBag color='red'/>
              </a>
              <a href="/profile" className={`${styleGroup.options} mr-10`}>
                <GoPersonFill color='red' /> 
              </a>
              <a href="/">
                <button className={styleGroup.button} onClick={clearToken}>
                  <div className="text-red-500 text-xl font-bold">Logout</div>
                </button>
              </a>
            </div>
          ) : (
            <div className="flex items-center">

     
            <a href="/">
              <button className={styleGroup.button} onClick={clearToken}>
                <div className="text-red-500 text-xl font-bold">Login</div>
              </button>
            </a>
          </div>
          )}
        </div>
      ) : (
        <div className="w-full h-24 px-8 py-7 justify-between items-center inline-flex">
          <a href="/" className="w-56 h-9">
            <img src={logoText} alt="logo" className="w-56"></img>
          </a>
          <div className="w-2/5 flex text-xl justify-between">
            <a href="/" className={styleGroup.options}>
              Home
            </a>
            <a href="/register/#comofunciona" className={styleGroup.options}>
              Como funciona
            </a>
            <a href="/#quemsomos" className={styleGroup.options}>
              Quem somos
            </a>
   
          </div>
          {isAuthenticated ? (
            <div className="flex items-center">
              <a href="/profile" className={`${styleGroup.options} mr-10`}>
                <FaShoppingBag color='red' size={24}/>
              </a>
              <a href="/profile" className={`${styleGroup.options} mr-10`}>
                <GoPersonFill color='red' size={24}/> 
              </a>
              <a href="/">
                <button className={styleGroup.button} onClick={clearToken}>
                  <div className="text-red-500 text-xl font-bold">Logout</div>
                </button>
              </a>
            </div>
          ) : (
            <div className="flex items-center">

            <a href="/Login">
              <button className={styleGroup.button} onClick={clearToken}>
                <div className="text-red-500 text-xl font-bold">Login</div>
              </button>
            </a>
          </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;
