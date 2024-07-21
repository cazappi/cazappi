import { useEffect, useState } from "react";
import ChatCard, { Chat, MessageRole } from "../../components/ChatCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { getUser } from "../../utils/user-token-request";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { useNavigate } from "react-router-dom";

import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  where,
} from "firebase/firestore";
import { db } from "../../App";

interface ChatOrder {
  id: string;
  orderDate: Date;
}

const MinhasConversasLojista = () => {
  const shopkeeper = getUser();
  const [shopkeeperChats, setShopkeeperChats] = useState<Chat[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const storesResponse = await api.get(`store/${shopkeeper.user_id}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        const storeNames = storesResponse.data.store.map(
          (store: { name: string }) => store.name
        );

        const orderPromises = storeNames.map(async (storeName: string) => {
          const ordersResponse = await api.get(`/order/store/${storeName}`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          });
          return ordersResponse.data.map(
            (order: { id: string; moment: Date }) => ({
              id: order.id,
              orderDate: order.moment,
            })
          );
        });

        const orderArrays = await Promise.all(orderPromises);
        const allOrders = orderArrays.flat();

        // Ordenar os pedidos pela propriedade "moment"
        const sortedOrders = allOrders.sort(
          (a, b) => new Date(a.moment).getTime() - new Date(b.moment).getTime()
        );


        // Fetch conversations from Firestore
        const fetchConversations = async (orders: ChatOrder[]) => {
          const chatPromises = orders.map(async (order) => {
            const q = query(
              collection(db, "conversations"),
              where("id", "==", String(order.id)),
              orderBy("orderDate", "desc"),
              limit(1)
            );
            return new Promise<Chat | null>((resolve, reject) => {
              onSnapshot(q, (querySnapshot) => {
                if (querySnapshot.empty) {
                  resolve(null);
                } else {
                  querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    const chat: Chat = {
                      id: data.id,
                      messages: data.messages.map((message: any) => ({
                        id: message.id,
                        text: message.text,
                        updatedAt: message.updatedAt.toDate(),
                        role: message.role,
                      })),
                      orderDate: data.orderDate.toDate(),
                    };
                    resolve(chat);
                  });
                }
              }, reject);
            });
          });

          const chats = await Promise.all(chatPromises);
          setShopkeeperChats(chats.filter((chat) => chat !== null) as Chat[]);
        };

        fetchConversations(sortedOrders);
      } catch (err: any) {
        if (err.response && err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        } else {
          console.error("Erro ao buscar pedidos e/ou chats:", err);
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
            {shopkeeperChats.map((chat) => (
              <li key={chat.id}>
                <ChatCard chat={chat} role={MessageRole.shopkeeper} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhasConversasLojista;
