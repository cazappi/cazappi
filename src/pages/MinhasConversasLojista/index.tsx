import ChatCard, { MessageRole } from "../../components/ChatCard";
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
            {Array.from([
              {
                id: "1",
                messages: [
                  {
                    id: "1",
                    text: "Meu pedido está atrasado, gostaria de obter informações sobre o andamento da entrega. (1)",
                    updatedAt: new Date(),
                    role: MessageRole.CLIENT,
                  },
                  {
                    id: "2",
                    text: "Problema seu! (1)",
                    updatedAt: new Date(),
                    role: MessageRole.SHOPKEEPER,
                  },

                ],
                orderDate: new Date(),
              },
              {
                id: "2",
                messages: [
                  {
                    id: "3",
                    text: "Meu pedido está atrasado, gostaria de obter informações sobre o andamento da entrega. (2)",
                    updatedAt: new Date(),
                    role: MessageRole.CLIENT,
                  },
                  {
                    id: "4",
                    text: "Problema seu! (2)",
                    updatedAt: new Date(),
                    role: MessageRole.SHOPKEEPER,
                  },
                ],
                orderDate: new Date(),
              },
            ]).map((item) => {
              return (
                <li key={item.id}>
                  {<ChatCard chat={item} />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhasConversasLojista;
