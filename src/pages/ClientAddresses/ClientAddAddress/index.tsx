import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ArrowBack from "../../../assets/arrow_back.svg";
import SearchIcon from "../../../assets/search_icon.svg";
import CloseIcon from "../../../assets/close.svg";
import { useEffect, useState } from "react";
import { getUser } from "../../../utils/user-token-request";
import { ClientAddress, clientAddressesMock } from "..";
import api from "../../../services/api";
import { getToken } from "../../../utils/get-cookie";
import LocationIcon from "../../../assets/location_on.svg";
import AddressNotFoundIcon from "../../../assets/address_not_found.svg";

const ClientAddAddress = () => {
  const [searchText, setSearchText] = useState("");
  const user = getUser();
  const userId = user.user_id;

  const [addresses, setAddresses] = useState<ClientAddress[]>([]);

  useEffect(() => {
    const fetchUserAddresses = async () => {
      try {
        const response = await api.get(`/user/${userId}/address`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        console.log("Addresses retrieved: ");
        console.log(response.data);
        setAddresses(response.data);
      } catch (error) {
        console.error("Error fetching user addresses: ", error);
      }
    };

    fetchUserAddresses();
  }, [userId]);

  // FIXME: buscando os endereços do mock mas buscar do google depois
  useEffect(() => {
    if (searchText) {
      const filteredAddresses = clientAddressesMock.filter((address) => {
        return (
          address.city.toLowerCase().includes(searchText.toLowerCase()) ||
          address.state.toLowerCase().includes(searchText.toLowerCase()) ||
          address.street?.toLowerCase().includes(searchText.toLowerCase()) ||
          address.district?.toLowerCase().includes(searchText.toLowerCase())
        );
      });
      setAddresses(filteredAddresses);
    } else {
      setAddresses([]);
    }
  }, [searchText]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header transparent={false} />
      <main className="flex flex-grow flex-col gap-4 py-[100px] w-[76%] self-center">
        <Link
          className="flex flex-row gap-2 items-center text-PRIMARY font-medium w-fit"
          to="/client/address"
        >
          <img src={ArrowBack} alt="Voltar" />
          <span>Voltar</span>
        </Link>
        <div className="flex flex-row bg-[#EEEEEE] px-4 py-2 rounded-lg flex-wrap">
          <img src={SearchIcon} alt="Buscar" className="w-4 hidden sm:block" />
          <input
            type="text"
            name="searchAddress"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Busque por um endereço"
            className="flex-grow border-none bg-transparent"
          />
          <img
            src={CloseIcon}
            alt="Limpar"
            className="cursor-pointer hidden sm:block"
            onClick={() => setSearchText("")}
          />
        </div>

        {addresses && addresses.length > 0 && (
          <ul className="w-full flex flex-col gap-2 mt-2">
            {addresses.map((address) => (
              <li
                key={address.id}
                className="cursor-pointer w-full flex flex-row gap-6 hover:border-PRIMARY border-2 border-solid border-transparent transition-all duration-500 rounded-2xl px-6 py-4"
              >
                <Link to={`/client/address/add/${address.id}`} className="flex flex-row gap-6 w-full">
                  <div className="w-12 h-12 flex justify-center items-center">
                    <img
                      src={LocationIcon}
                      alt="Localização"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className="flex flex-col justify-center items-start text-[#909090]">
                    <span>
                      {address.street}, {address.number}
                    </span>
                    <span>
                      {address.district}, {address.city} - {address.state}
                    </span>
                    <span>{address.complement}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {addresses && addresses.length === 0 && (
          <div className="self-center text-gray-400 font-medium flex flex-col gap-2 mt-5 ">
            <img src={AddressNotFoundIcon} alt="" className="self-center" width={50} height={50} />
            <p>Endereço não encontrado</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ClientAddAddress;
