import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LocationIcon from "../../assets/location_on.svg";
import MyLocationIcon from "../../assets/my_location.svg";
import { getUser } from "../../utils/user-token-request";
import { getToken } from "../../utils/get-cookie";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

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

//FIXME: Usando apenas de exemplo, apagar depois e mudar o state pra começar com um array vazio em vez desse aqui
export const clientAddressesMock: ClientAddress[] = [
  {
    id: "1",
    city: "São Paulo",
    state: "SP",
    street: "Avenida Paulista",
    zipCode: "01311-200",
    district: "Bela Vista",
    complement: "Apt 101",
    number: "1578",
  },
  {
    id: "2",
    city: "Rio de Janeiro",
    state: "RJ",
    street: "Rua Visconde de Pirajá",
    zipCode: "22410-000",
    district: "Ipanema",
    complement: "Sala 202",
    number: "500",
  },
];

const ClientAddresses = () => {
  const user = getUser();
  const userId = user.user_id;

  //FIXME: Iniciar com array vazio
  const [addresses, setAddresses] =
    useState<ClientAddress[]>(clientAddressesMock);

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

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />
      <main className="flex flex-grow flex-col gap-4 justify-center items-center px-[20px] sm:px-[100px] py-[100px]">
        <ul className="w-full sm:w-[90%] flex flex-col gap-4">
          <li className="cursor-pointer w-full flex flex-row gap-6 hover:border-PRIMARY border-2 border-solid border-transparent transition-all duration-500 rounded-2xl px-6 py-4">
            <img src={MyLocationIcon} alt="" width={40} height={40} />

            {/*FIXME: Pegar a loc do usuario*/}
            <div className="flex flex-col justify-center items-start text-[#909090]">
              <span className="text-lg font-semibold text-black">
                Minha localização
              </span>
              <span>Rua Dom Pedro IV, 1714</span>
              <span>Setor Monte Alto, Senador Canedo - GO</span>
              <span>Complemento</span>
            </div>
          </li>

          {addresses.map((address) => (
            <li
              key={address.id}
              className="cursor-pointer w-full flex flex-row gap-6 hover:border-PRIMARY border-2 border-solid border-transparent transition-all duration-500 rounded-2xl px-6 py-4"
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
