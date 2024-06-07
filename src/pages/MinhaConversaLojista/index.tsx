import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Chat, MessageRole } from "../../components/ChatCard";
import { FormEvent, useEffect, useState } from "react";
import ChatMessage from "../../components/ChatMessage";

const MinhaConversaLojista = () => {
  const { chatId } = useParams();

  const [chat, setChat] = useState<Chat>({} as Chat);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function fetchChat() {
      //const response = await axios.get(`/chat/${chatId}`);
      //setChat(response.data);
      setChat({
        id: chatId!,
        messages: [
          {
            id: "1",
            text: "To com um problema aí na tua loja meu parceiro",
            updatedAt: new Date(),
            role: MessageRole.CLIENT,
          },
          {
            id: "2",
            text: "Problema seu paizão",
            updatedAt: new Date(),
            role: MessageRole.SHOPKEEPER,
          },
        ],
        orderDate: new Date(),
      });
    }

    fetchChat();
  }, [chatId]);

  const formatDate = (date: Date): string => {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");

    return `${day}/${month}`;
  };

  const formattedDate = chat?.orderDate ? formatDate(chat.orderDate) : "";

  const handleSubmitMessage = (e: FormEvent) => {
    e.preventDefault();
    setMessage("");
    console.log("submitted!");
  }


  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header transparent={false} />
      <div className="w-full flex flex-col items-center p-6 h-[80vh]">
        <div className="w-[71.42%] max-w-[800px] flex flex-col items-center gap-6 h-full">
          <h1 className="text-PRIMARY font-medium text-[30px] sm:text-[4.28vw] leading-[56px]">
            Pedido {chatId}
          </h1>
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

export default MinhaConversaLojista;
