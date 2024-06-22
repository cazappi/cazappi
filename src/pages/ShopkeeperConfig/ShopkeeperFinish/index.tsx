import { useState, useEffect } from "react";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";

const ShopkeeperFinish = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [stores, setStores] = useState([]);
  const [userData, setUserData] = useState({ token: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && stores.length <= 0) {
        try {
          const userData = await user.getIdTokenResult();
          setUserData(userData);
          const userId = userData.claims.user_id;

          const storesResponse = await api.get(`/store/${userId}`, {
            headers: { Authorization: `Bearer ${userData.token}` },
          });
          const stores = storesResponse.data.store;
          setStores(stores);
        } catch (error) {
          console.log(error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleDeleteStore = async () => {
    const firstStore: any = stores[0];
    const firstStoreName = firstStore.name;
    console.log(firstStoreName);
    try {
      await api.delete(`/store/${firstStoreName}`, {
        headers: { Authorization: `Bearer ${userData.token}` },
      });
      setIsModalOpened(false);
      navigate("/shopkeeper/config");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div
        className={`min-h-screen flex flex-col ${
          isModalOpened ? "opacity-50" : ""
        }`}
      >
        <Header transparent={false} />
        <div className="w-full flex flex-col items-center grow p-6 min-h-[80vh]">
          <main className="w-[71.42%] min-w-80 max-w-[800px] flex flex-col items-center justify-center gap-2">
            <h1 className="text-PRIMARY font-medium text-[30px] sm:text-[4.28vw] leading-[56px] mb-4">
              Encerrar Operações
            </h1>
            <div className="w-full bg-PRIMARY h-[2px] mb-6"></div>
            <div className="flex w-[80%] flex-col gap-6">
              <h2 className="text-PRIMARY text-xl font-medium">Fechar Loja</h2>
              <p>
                Ao encerrar o funcionamento de sua loja você ainda poderá usar o
                Cazappi como um cliente
              </p>
              <button
                onClick={() => setIsModalOpened(true)}
                className="self-center rounded-2xl w-fit text-PRIMARY text-sm text-bold bg-white p-2 border-solid border-2 border-[var(--text-PRIMARY)]"
              >
                Terminar Operações
              </button>
            </div>
          </main>
        </div>

        <Footer />
      </div>
      {isModalOpened && (
        <div className="min-w-[290px] flex flex-col gap-8 bg-white p-7 border-solid border-2 border-[#909090] rounded-lg fixed top-[50vh] left-[50vw] translate-x-[-50%] translate-y-[-50%] z-[100] opacity-100">
          <p className="">
            Tem certeza que deseja{" "}
            <strong className="text-PRIMARY">desativar</strong> sua loja?
          </p>
          <div className="flex flex-row self-center w-[45%] justify-between">
            <button
              onClick={() => setIsModalOpened(false)}
              className="transition-all duration-300 ease-in-out p-3 rounded-xl hover:bg-[#909090] hover:text-[#FFFFFF]"
            >
              Não
            </button>
            <button
              onClick={handleDeleteStore}
              className="transition-all duration-300 ease-in-out p-3 rounded-xl hover:bg-[#909090] hover:text-[#FFFFFF]"
            >
              Sim
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShopkeeperFinish;
