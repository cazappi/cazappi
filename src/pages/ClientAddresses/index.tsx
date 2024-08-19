import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LocationIcon from "../../assets/location_on.svg";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

export interface ClientAddress {
  id: string;
  city: string;
  state: string;
  street: string | null;
  zipCode: string | null;
  district: string | null;
  complement: string | null;
  number: string | null;
}

const ClientAddresses = () => {
  const user = getUser();
  const userId = user.user_id;

  const [addresses, setAddresses] = useState<ClientAddress[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserAddresses = async () => {
      try {
        const response = await api.get(`/user/${userId}/addresses`, {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        });
        setAddresses(response.data.addresses);
      } catch (error) {
        console.error("Error fetching user addresses: ", error);
      }
    };

    fetchUserAddresses();
  }, [userId]);

  const handleAddressClick = (address: ClientAddress) => {
    navigate("/BagWithDraw", { state: { address, selectedOption: "ReceberEntrega" } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />
      <main className="flex flex-grow flex-col gap-4 justify-center items-center px-[20px] sm:px-[100px] py-[100px]">
        <ul className="w-full sm:w-[90%] flex flex-col gap-4">
          {addresses.map((address) => (
            <li
              key={address.id}
              className="cursor-pointer w-full flex flex-row gap-6 hover:border-PRIMARY border-2 border-solid border-transparent transition-all duration-500 rounded-2xl px-6 py-4"
              onClick={() => handleAddressClick(address)}
            >
              <img src={LocationIcon} alt="" width={40} height={40} />
              <div className="flex flex-col justify-center items-start text-[#909090]">
                <span className="text-lg font-semibold text-black">
                  {address.street}, {address.number}
                </span>
                <span>
                  {address.district}, {address.city} - {address.state}
                </span>
                <span>{address.complement}</span>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to={"/client/address/add"}
          className="duration-500 cursor-pointer text-PRIMARY border-solid border-2 border-PRIMARY rounded-2xl px-6 py-2 font-medium text-sm hover:bg-PRIMARY hover:text-[white] transition-all"
        >
          Adicionar endereço
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default ClientAddresses;
