import { useState } from "react";
import MessageIcon from "../../assets/message_icon.svg";
import ArrowIcon from "../../assets/right_arrow_icon.svg";
import { Link } from "react-router-dom";

interface ChatProps {
  id: string;
}

interface ChatCardProps {
  chat: ChatProps;
  selected?: boolean;
  onClick?: (chatId: string) => void;
}

const ChatCard = ({
  chat,
  selected = false,
  onClick = () => {},
}: ChatCardProps) => {
  return (
    <Link
      to={"#paginasecreta"}
      onClick={() => onClick(chat.id)}
      className={`flex flex-col w-full hover:opacity-60 ${
        selected ? "border-PRIMARY" : "border-[#909090]"
      } border-solid rounded-lg border-2 p-3 gap-3 relative`}
    >
      <h3
        className={`font-medium text-sm leading-4 ${
          selected ? "text-PRIMARY" : ""
        }`}
      >
        Pedido #1
      </h3>
      <div className="flex flex-row gap-2 items-center w-[44.75%] cursor-pointer">
        <img src={MessageIcon} alt="Message icon" className="w-4 h-4" />
        <p className="font-normal text-xs text-[#909090] w-[84.35%] overflow-hidden whitespace-nowrap text-ellipsis">
          Meu pedido está atrasado, gostaria de obter informações sobre o
          andamento da entrega.
        </p>
        <img src={ArrowIcon} alt="Arrow icon" className="w-6 h-6" />
      </div>
      <div className="absolute right-4 top-2">
        <p className="text-[#909090] font-normal text-[12px] leading-3 flex flex-row gap-2 items-center">
          <span>27/02</span>
          <span className="w-1 h-1 inline-block rounded-full border-[#909090] border-solid border-[3px]"></span>
          <span>19:00</span>
        </p>
      </div>
    </Link>
  );
};

export default ChatCard;
