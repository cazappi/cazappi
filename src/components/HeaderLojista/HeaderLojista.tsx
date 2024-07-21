import React, { useState } from "react";
import logoText from "../../assets/logoText.svg";
import { getUser } from "../../utils/user-token-request";
import { clearToken } from "../../utils/clear-cookie";
import '@fortawesome/fontawesome-free/css/all.css';
import { Bold, GreenIcon, RedIcon, MenuOptions, OptionButton, Ml, MenuMoreOptions, Relative} from "./style";
import ProfileIcon from "../../assets/profileIcon.png"
import { BsClipboardData, BsPerson, BsFileText, BsChatLeft, BsGear, BsQuestionCircle } from 'react-icons/bs';
// AS ROTAS DA HEADER ESTÃO COMO AS ROTAS DA HEADER COMUM, POIS NÃO ACHEI O DIRECIONAMENTO DELAS! DEPOIS DE DESENVOLVIDAS, ADICIONAR AS ROTAS PARA AS TELAS CORRETAS!

interface HeaderProps {
  transparent: Boolean;
}

const HeaderLojista: React.FC<HeaderProps> = ({ transparent }) => {

  const menuItems = [
    {
      label: "Gerenciar Dados",
      icon: <BsPerson />,
      subMenuItems: [
        { label: "Dados Cadastrais", icon: <BsPerson /> },
        { label: "Dados Bancários", icon: <BsFileText /> },
        { label: "Alternar Loja", icon: <BsChatLeft /> },
        { label: "Políticas", icon: <BsQuestionCircle /> },
      ],
    },
    {
      label: "Gerenciar Produtos",
      icon: <BsFileText />,
      subMenuItems: [
        { label: "Produtos Já Cadastrados", icon: <BsPerson /> },
        { label: "Cadastrar Novo Produto", icon: <BsFileText /> },
        { label: "Gerenciar Estoque", icon: <BsChatLeft /> },
        { label: "Gerenciar Adicionais", icon: <BsQuestionCircle /> },
      ],
    },
    { label: "Relatórios de Venda", icon: <BsClipboardData /> },
    { label: "Minhas Conversas", icon: <BsChatLeft /> },
    { label: "Configurações", icon: <BsGear /> },
    { label: "Ajuda", icon: <BsQuestionCircle /> },
  ];
  

  const [responsive, setResponsive] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [subMenu, setSubMenu] = useState("");
  const isAuthenticated = getUser().user_id;

  const mudarMenu = () => {
    setSubMenu("");
    setMenuAberto(!menuAberto);
  };

  const mudarSubMenu = (option:string) => {
    setSubMenu(option === subMenu ? "" : option);
  }; 

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
        // RESPONSIVE = TRUE
        <div className="w-full h-auto py-7 justify-center items-center flex flex-col">
          {/* logo cazappi */}
          <a href="/" className="w-56 py-2">
            <img src={logoText} alt="logo" className="w-56"></img>
          </a>

          {/* Rotas Inicio, Produtos e Pedidos */}
          <div className="w-full flex-col items-center justify-center text-xl md:flex-row px-10 py-2 text-base inline-flex justify-between">
            <div>
                <a href="/" className={styleGroup.options}>
                    <GreenIcon className="fas fa-home green"></GreenIcon>
                    <Bold>Início</Bold>
                </a>
            </div>
            <div>
                <a href="/register/#comofunciona" className={styleGroup.options}> 
                    <GreenIcon className="fas fa-search green"></GreenIcon>
                    <Bold>Produtos</Bold>
                </a>
            </div>
            <div>
                <a href="/#quemsomos" className={styleGroup.options}> 
                    <GreenIcon className="fas fa-list-alt green"></GreenIcon>
                    <Bold>Pedidos</Bold>
                </a>
            </div>
          </div>

          {/* isAuthenticated */ true ? (
            <Relative>
              {/* icone PROFILE - lOGADO */}
              <button className="hover:shadow-2xl hover:scale-110" onClick={mudarMenu}>
                <RedIcon src={ProfileIcon}></RedIcon>
              </button>
              {menuAberto && (
                <MenuOptions>
                  {/* Itens do Menu principal */}
                  {menuItems.map((item) => (
                  <OptionButton key={item.label} onClick={() => mudarSubMenu(item.label)}>
                    {item.icon}
                    <Ml>{item.label}</Ml>
                  </OptionButton>
                  ))}
                  {/* Itens do SubMenu (Gerenciar Dados e Produtos) */}
                  <Relative>
                    {subMenu && (
                      <MenuMoreOptions>
                        {/* Caso tenha um subMenu */}
                        {menuItems.find((menuItem) => menuItem.label === subMenu)?.subMenuItems?.map(
                          (subItem) => (
                            <OptionButton key={subItem.label}>
                              {subItem.icon}
                              <Ml>{subItem.label}</Ml>
                            </OptionButton>
                        ))}
                      </MenuMoreOptions>
                    )}
                  </Relative>
                </MenuOptions>
              )}
            </Relative>
          ) : (
            // Botão de Login - DESLOGADO
            <div className="flex items-center">
                <a href="/">
                    <button className={styleGroup.button} onClick={clearToken}>
                        <div className="text-red-500 text-xl font-bold">Login</div>
                    </button>
                </a>
            </div>
          )}
        </div>
      )
        :
      (
        // RESPONSIVE = FALSE
        <div className="w-full h-24 px-8 py-7 justify-between items-center inline-flex">
            {/* logo Cazappi */}
            <a href="/" className="w-56 h-9">
            <img src={logoText} alt="logo" className="w-56"></img>
            </a>
            {/* Rotas Inicio, Produtos e Pedidos */}
            <div className="w-2/5 flex text-xl justify-between">
            <div>
                <a href="/" className={styleGroup.options}>
                    <GreenIcon className="fas fa-home green"/>
                    <Bold>Início</Bold>
                </a>
            </div>
            <div>
                <a href="/register/#comofunciona" className={styleGroup.options}> 
                    <GreenIcon className="fas fa-search green"/>
                    <Bold>Produtos</Bold>
                </a>
            </div>
            <div>
                <a href="/#quemsomos" className={styleGroup.options}> 
                    <GreenIcon className="fas fa-list-alt green"/>
                    <Bold>Pedidos</Bold>
                </a>
            </div>
        </div>
        {/* isAuthenticated */ true ? 
            (  
              <Relative>
                {/* icone PROFILE - lOGADO */}
                <button className="hover:shadow-2xl hover:scale-110" onClick={mudarMenu}>
                  <RedIcon src={ProfileIcon}></RedIcon>
                </button>
                {menuAberto && (
                  <MenuOptions>
                  {/* Itens do Menu principal */}
                    {menuItems.map((item) => (
                    <OptionButton key={item.label} onClick={() => mudarSubMenu(item.label)}>
                      {item.icon}
                      <Ml>{item.label}</Ml>
                    </OptionButton>
                    ))}
                      {subMenu && (
                        <MenuMoreOptions>
                        {/* Itens do subMenu */}
                          {menuItems.find((menuItem) => menuItem.label === subMenu)?.subMenuItems?.map(
                            (subItem) => (
                              <OptionButton key={subItem.label}>
                                {subItem.icon}
                                <Ml>{subItem.label}</Ml>
                              </OptionButton>
                          ))}
                        </MenuMoreOptions>
                      )}
                  </MenuOptions>
                )}
              </Relative>
            ) 
        : 
            (
                // Botão de Login - DESLOGADO
                <div className="flex items-center">
                    <a href="/">
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

export default HeaderLojista;
