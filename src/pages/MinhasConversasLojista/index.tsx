import { useEffect, useState } from "react";
import ChatCard, { Chat, MessageRole } from "../../components/ChatCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getUser } from "../../utils/user-token-request";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { useNavigate } from "react-router-dom";

const MinhasConversasLojista = () => {
  // const shopkeeperId = "bfe944a9-6ca1-4f4d-b0e9-0c762c0ed019";
  const shopkeeper = getUser();
  const [shopkeeperChats, setShopkeeperChats] = useState<Chat[]>([]);
  const [shopkeeperOrders, setShopkeeperOrders] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const storesResponse = await api.get(`store/${shopkeeper.user_id}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        console.log(storesResponse.data)
        const storeNames = storesResponse.data.store.map((store: { name: string }) => store.name);
  
        const orderPromises = storeNames.map(async (storeName: string) => {
          const ordersResponse = await api.get(`/order/store/${storeName}`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          });
          console.log("orders: ");
          console.log(ordersResponse.data);
          return ordersResponse.data.map((order: { id: string, moment: Date }) => ({
            id: order.id,
            moment: order.moment
          }));
        });
  
        const orderArrays = await Promise.all(orderPromises);
        const allOrders = orderArrays.flat();
  
        // Ordenar os pedidos pela propriedade "moment"
        const sortedOrders = allOrders.sort((a, b) => new Date(a.moment).getTime() - new Date(b.moment).getTime());
  
        // Extrair apenas os ids dos pedidos ordenados
        const sortedOrderIds = sortedOrders.map(order => order.id);
  
        console.log(sortedOrderIds);
        setShopkeeperOrders(sortedOrderIds);
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        } else {
          console.error("Erro ao buscar pedidos:", err);
        }
      }
    };
  
    getOrders();
  }, []);

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
              return <li key={item.id}>{<ChatCard chat={item} />}</li>;
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhasConversasLojista;
