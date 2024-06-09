import { useEffect, useState } from "react";
import ChatCard, { Chat, MessageRole } from "../../components/ChatCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
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
  name: string;
  shopkeeperId: string;
}

const MinhasConversasCliente = () => {
  const [clientChats, setClientChats] = useState<Chat[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      try {
        // Buscando pedidos do cliente
        const ordersResponse = await api.get(`/order`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });

        const orders = ordersResponse.data.map((order: { id: string; moment: Date; shopkeeperId: string }) => ({
          id: order.id,
          orderDate: order.moment,
          shopkeeperId: order.shopkeeperId,
        }));

        // Ordenar os pedidos pela propriedade "orderDate"
        const sortedOrders = orders.sort((a: any, b: any) => new Date(a.orderDate).getTime() - new Date(b.orderDate).getTime());

        // Recuperando as lojas
        const shopkeeperIds = Array.from(new Set(orders.map((order: any) => order.shopkeeperId)));

        const storePromises = shopkeeperIds.map(async (shopkeeperId) => {
          const storeResponse = await api.get(`/store/${shopkeeperId}`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          });
          return storeResponse.data;
        });

        const stores = await Promise.all(storePromises);
        const storeMap = new Map(stores.map(store => [store.id, { name: store.name, imagePerfil: store.imagePerfil }]));

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
                      storeName: storeMap.get(order.shopkeeperId)?.name,
                      storeImagePerfil: storeMap.get(order.shopkeeperId)?.imagePerfil,
                    };
                    resolve(chat);
                  });
                }
              }, reject);
            });
          });

          const chats = await Promise.all(chatPromises);
          setClientChats(chats.filter((chat) => chat !== null) as Chat[]);
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
            {clientChats.map((chat) => (
              <li key={chat.id}>
                <ChatCard chat={chat} role={MessageRole.client} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MinhasConversasCliente;
