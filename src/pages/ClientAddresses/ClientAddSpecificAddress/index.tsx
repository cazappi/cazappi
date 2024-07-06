import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import { ClientAddress, clientAddressesMock } from "..";
import LocationIcon from "../../../assets/location_on.svg";
import { getUser } from "../../../utils/user-token-request";
import { getToken } from "../../../utils/get-cookie";

const ClientAddSpecificAddress = () => {
  const { addressId } = useParams();

  const [address, setAddress] = useState<ClientAddress | null>(null);
  const [addressNumber, setAddressNumber] = useState<string>("");
  const [addressComplement, setAddressComplement] = useState<string>("");

  useEffect(() => {
    async function fetchAddress() {
      // FIXME: utilizar a api de endereços
      // const response = await fetch(`/api/addresses/${addressId}`);
      // const data = await response.json();
      // setAddress(data);

      //FIXME: utilizando mock por enquanto
      setAddress(clientAddressesMock[0]);
    }
    fetchAddress();
  }, []);

  const handleSubmitAddress = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implementar a função para salvar o endereço no backend
    const user = getUser();
    const my_address = {...address, number: addressNumber, complement: addressComplement };
    // bater na rota de criar endereço, passando o id do usuario e os dados do endereço

  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header transparent={false} />
      <main className="min-h-[80vh] flex flex-grow flex-col gap-4 items-center px-[20px] sm:px-[100px] py-[50px]">
        {address && (
          <div key={address.id} className=" w-full flex flex-row gap-6">
            <img src={LocationIcon} alt="" width={40} height={40} />
            <div className="flex flex-col justify-center items-start text-[#909090]">
              <span>
                {address.street}, {address.number}
              </span>
              <span>
                {address.district}, {address.city} - {address.state}
              </span>
              <span>{address.complement}</span>
            </div>
          </div>
        )}
        <form className="flex flex-col gap-6 w-full" onSubmit={(event) => handleSubmitAddress(event)}>
          <div className="flex flex-row justify-between items-center w-full bg-[#EEEEEE] px-4 py-2 rounded-lg">
            <input
              type="text"
              name="addressNumberInput"
              value={addressNumber}
              onChange={(e) => setAddressNumber(e.target.value)}
              className="border-none bg-transparent flex-grow"
              placeholder="Número do endereço"
              required
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full bg-[#EEEEEE] px-4 py-2 rounded-lg">
            <input
              type="text"
              name="addressComplementInput"
              value={addressComplement}
              onChange={(e) => setAddressComplement(e.target.value)}
              className="border-none bg-transparent flex-grow"
              placeholder="Complemento"
            />
          </div>
          <button
            type="submit"
            className="duration-500 cursor-pointer text-PRIMARY border-solid border-2 border-PRIMARY rounded-2xl px-6 py-2 font-medium text-sm hover:bg-PRIMARY hover:text-[white] transition-all w-fit self-center"
          >
            Adicionar endereço
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ClientAddSpecificAddress;
