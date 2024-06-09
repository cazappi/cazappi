import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Chat, MessageRole } from "../../components/ChatCard";
import { FormEvent, useEffect, useState } from "react";
import ChatMessage from "../../components/ChatMessage";
import { db } from "../../App";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import NoImage from "../../assets/no-image-icon.png";

const MinhaConversaCliente = () => {
  const { chatId } = useParams();

  const [chat, setChat] = useState<Chat>({} as Chat);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function fetchChat() {
      const chatRef = doc(db, "conversations", chatId!);
      const chatSnap = await getDoc(chatRef);

      if (chatSnap.exists()) {
        const data = chatSnap.data();
        const chatData: Chat = {
          id: data.id,
          messages: data.messages.map((message: any) => ({
            id: message.id,
            text: message.text,
            updatedAt: message.updatedAt.toDate(),
            role: message.role,
          })),
          orderDate: data.orderDate.toDate(),
        };
        setChat(chatData);
      } else {
        console.log("No such document!");
      }
    }

    fetchChat();
  }, [chatId]);

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    return `${day}/${month}`;
  };

  const formattedDate = chat?.orderDate ? formatDate(chat.orderDate) : "";

  const handleSubmitMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (message.trim() === "") {
      setMessage("");
      return;
    }

    const newMessage = {
      id: uuidv4(),
      text: message,
      updatedAt: new Date(),
      role: MessageRole.client, // Ajustado para client
    };

    const chatRef = doc(db, "conversations", chatId!);

    await updateDoc(chatRef, {
      messages: arrayUnion(newMessage),
    });

    const chatSnap = await getDoc(chatRef);
    if (chatSnap.exists()) {
      const data = chatSnap.data();
      const updatedChat: Chat = {
        id: data.id,
        messages: data.messages.map((message: any) => ({
          id: message.id,
          text: message.text,
          updatedAt: message.updatedAt.toDate(),
          role: message.role,
        })),
        orderDate: data.orderDate.toDate(),
      };
      setChat(updatedChat);
    }

    setMessage("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header transparent={false} />
      <div className="w-full flex flex-col items-center p-6 h-[80vh]">
        <div className="w-[71.42%] max-w-[800px] flex flex-col items-center gap-6 h-full">
          <div className="flex flex-row gap-4 items-center">
            <img
              width={43}
              height={41}
              src={chat.storeImagePerfil ?? NoImage}
              alt={chat.storeName ? chat.storeName + " logo" : "Store logo"}
              className="rounded-[56px]"
            />
            <h1 className="text-2xl leading-7">{chat.storeName}</h1>
          </div>
          <div className="w-full bg-PRIMARY h-[2px]"></div>
          <div className="w-[47.875%] flex flex-col items-center gap-6">
            <p className="text-[#909090] font-normal text-[14px] leading-3 flex flex-row gap-2 items-center">
              {formattedDate.split(" ")[0] && (
                <span>{formattedDate.split(" ")[0]}</span>
              )}
              <span className="w-1 h-1 inline-block rounded-full border-[#909090] border-solid border-[3px]"></span>
              <span>Pedido {chatId}</span>
            </p>
            <p className="min-w-[320px] px-6 py-3 text-sm font-normal w-[85.37%] text-[#909090] bg-[#FEFEFE] text-center border-solid border-PRIMARY border-2 rounded-lg">
              Esse chat será finalizado juntamente com a finalizacao do seu
              pedido
            </p>
          </div>
          <ul className="flex flex-col grow w-full overflow-y-auto">
            {chat?.messages &&
              chat.messages.map((message) => {
                return (
                  <li className="w-full flex flex-col" key={message.id}>
                    <ChatMessage
                      text={message.text}
                      updatedAt={message.updatedAt}
                      role={message.role}
                      user={MessageRole.client}
                    />
                  </li>
                );
              })}
          </ul>
          <form onSubmit={handleSubmitMessage} className="flex flex-col w-full">
            <input
              className="bg-[#EEEEEE] rounded-lg"
              type="text"
              name="user-message-input"
              id="user-message-input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Digite algum texto"
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhaConversaCliente;
