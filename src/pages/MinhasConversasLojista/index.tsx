import { useState } from "react";
import ChatCard from "../../components/ChatCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const MinhasConversasLojista = () => {
  return (
    <div className="min-h-screen w-full flex flex-col overflow-x-hidden">
      <Header transparent={false} />
      <div className="w-full flex flex-col items-center grow p-6 min-h-[80vh]">
        <div className="w-[71.42%] min-w-80 max-w-[800px] flex flex-col items-center justify-center gap-6">
          <h1 className="text-PRIMARY font-medium text-[30px] sm:text-[4.28vw] leading-[56px]">
            Minhas Conversas
          </h1>
          <div className="w-full bg-PRIMARY h-[2px]"></div>
          <ul className="flex w-full flex-col gap-6">
            {Array.from([{ id: "1" }, { id: "2" }]).map((chat) => {
              return <li key={chat.id}>{<ChatCard chat={chat} />}</li>;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhasConversasLojista;
