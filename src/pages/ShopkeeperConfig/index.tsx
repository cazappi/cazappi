import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import FinishIcon from "../../assets/finish_icon.svg";
import LogoutIcon from "../../assets/logout_icon.svg";
import NotebookIcon from "../../assets/notebook_icon.svg";
import BellIcon from "../../assets/bell_icon.svg";
import ArrowIcon from "../../assets/right_arrow_icon.svg";
import { clearToken } from "../../utils/clear-cookie";
import { Link } from "react-router-dom";

const configOptions = [
  {
    option: "Gerenciamento de notificações",
    icon: BellIcon,
    to: "/shopkeeper/notifications",
    handleOption: () => {},
  },
  {
    option: "Termos de uso",
    icon: NotebookIcon,
    to: "/shopkeeper/terms",
    handleOption: () => {},
  },
  {
    option: "Termos de pagamento",
    icon: NotebookIcon,
    to: "/shopkeeper/payments",
    handleOption: () => {},
  },
  {
    option: "Sair dessa conta",
    icon: LogoutIcon,
    to: "/login",
    handleOption: () => {
      clearToken();
    },
  },
  {
    option: "Encerrar operações",
    icon: FinishIcon,
    to: "/shopkeeper/finish",
    handleOption: () => {},
  },
];

const ShopkeeperConfig = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />
      <div className="w-full flex flex-col items-center grow p-6 min-h-[80vh]">
        <main className="w-[71.42%] min-w-80 max-w-[800px] flex flex-col items-center justify-center gap-2">
          <h1 className="text-PRIMARY font-medium text-[30px] sm:text-[4.28vw] leading-[56px] mb-4">
            Configurações
          </h1>
          <div className="w-full bg-PRIMARY h-[2px]"></div>
          <ul className="flex w-full flex-col">
            {configOptions.map((option) => (
              <li
                key={option.option}
                onClick={option.handleOption}
                className="flex flex-row gap-2 p-6 border-solid border-b-2 border-[#909090] text-[#909090] cursor-pointer hover:text-PRIMARY hover:border-PRIMARY transition-all duration-300 ease-in-out"
              >
                <Link to={option.to} className="w-full flex flex-row gap-2">
                  <div className="w-full flex flex-row gap-2">
                    <img
                      src={option.icon}
                      alt={option.option}
                      width={24}
                      height={24}
                    />
                    <h1 className="font-medium">{option.option}</h1>
                  </div>
                  <img
                    src={ArrowIcon}
                    alt="Arrow icon"
                    className="w-6 h-6 self-end"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default ShopkeeperConfig;
