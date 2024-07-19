import { useParams } from "react-router-dom";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { useEffect, useState } from "react";
import LocationIcon from "../../../assets/location_on.svg";
import axios from "axios";
import api from "../../../services/api";
import { getToken } from "../../../utils/get-cookie";

const API_KEY = "SUA_CHAVE_API_AQUI";

const ClientAddSpecificAddress = () => {
  const { addressId } = useParams();
  const [address, setAddress] = useState<any | null>(null);
  const [addressNumber, setAddressNumber] = useState<string>("");
  const [addressComplement, setAddressComplement] = useState<string>("");

  useEffect(() => {
    async function fetchAddressDetails() {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${addressId}&key=${API_KEY}`
        );
        const addressDetails = response.data.result;
        setAddress({
          id: addressDetails.place_id,
          street: addressDetails.address_components[1]?.long_name,
          number: addressDetails.address_components[0]?.long_name,
          district: addressDetails.address_components[2]?.long_name,
          city: addressDetails.address_components[3]?.long_name,
          state: addressDetails.address_components[5]?.short_name,
          complement: addressDetails.address_components[6]?.long_name,
        });
      } catch (error) {
        console.error("Error fetching address details:", error);
      }
    }
    fetchAddressDetails();
  }, [addressId]);

  const handleSubmitAddress = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const my_address = {
      ...address,
      number: addressNumber,
      complement: addressComplement,
    };
    try {
      const token = getToken();

      const response = await api.post("/user/address", my_address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 201) {
        console.log("Address created successfully", response.data);
      } else {
        console.error("Failed to create address", response.data);
      }
    } catch (error) {
      console.error("Error creating address", error);
    }
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
        <form
          className="flex flex-col gap-6 w-full"
          onSubmit={handleSubmitAddress}
        >
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
