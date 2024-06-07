import MessageIcon from "../../assets/message_icon.svg";
import ArrowIcon from "../../assets/right_arrow_icon.svg";
import { Link } from "react-router-dom";

export enum MessageRole {
  CLIENT,
  SHOPKEEPER,
}

export interface MessageProps {
    id: string;
    text: string;
    updatedAt: Date;
    role: MessageRole;
}

export interface Chat {
  id: string;
  messages: MessageProps[];
  orderDate: Date;
}

export interface ChatProps {
  chat: Chat;
}


const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  // const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month} ${hours}:${minutes}`;
};

const ChatCard = ({ chat }: ChatProps) => {
  const formattedDate = formatDate(chat.orderDate);

  return (
    <Link
      to={`/shopkeeper/order-chats/${chat.id}`}
      className={`group flex flex-col w-full hover:border-PRIMARY border-[#909090] border-solid rounded-lg border-2 p-3 gap-3 relative`}
    >
      <h3 className={`font-medium text-sm group-hover:text-PRIMARY leading-4`}>
        Pedido #{chat.id}
      </h3>
      <div className="flex flex-row gap-2 items-center w-[44.75%] cursor-pointer">
        <img src={MessageIcon} alt="Message icon" className="w-4 h-4" />
        <p className="font-normal text-xs text-[#909090] max-w-[84.35%] overflow-hidden whitespace-nowrap text-ellipsis">
          {chat.messages[chat.messages.length - 1].text}
        </p>
        <img src={ArrowIcon} alt="Arrow icon" className="w-6 h-6" />
      </div>
      <div className="absolute right-4 top-2">
        <p className="text-[#909090] font-normal text-[12px] leading-3 flex flex-row gap-2 items-center">
          {formattedDate.split(" ")[0] && (
            <span>{formattedDate.split(" ")[0]}</span>
          )}
          <span className="w-1 h-1 inline-block rounded-full border-[#909090] border-solid border-[3px]"></span>
          {formattedDate.split(" ")[1] && (
            <span>{formattedDate.split(" ")[1]}</span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default ChatCard;
