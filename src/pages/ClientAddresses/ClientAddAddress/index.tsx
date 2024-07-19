import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ArrowBack from "../../../assets/arrow_back.svg";
import SearchIcon from "../../../assets/search_icon.svg";
import CloseIcon from "../../../assets/close.svg";
import { useEffect, useState } from "react";
import LocationIcon from "../../../assets/location_on.svg";
import AddressNotFoundIcon from "../../../assets/address_not_found.svg";
import axios from "axios";

const API_KEY = "SUA_CHAVE_API_AQUI";

const ClientAddAddress = () => {
  const [searchText, setSearchText] = useState("");
  const [addresses, setAddresses] = useState<any[]>([]);

  useEffect(() => {
    if (searchText) {
      const fetchAddresses = async () => {
        try {
          const response = await axios.get(
            `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&key=${API_KEY}&components=country:br`
          );
          const addressData = response.data.predictions.map((prediction: any) => ({
            id: prediction.place_id,
            description: prediction.description
          }));
          setAddresses(addressData);
        } catch (error) {
          console.error("Error fetching addresses:", error);
          setAddresses([]);
        }
      };

      fetchAddresses();
    } else {
      setAddresses([]);
    }
  }, [searchText]);

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header transparent={false} />
      <main className="flex flex-grow flex-col gap-4 py-[100px] w-[76%] self-center">
        <Link className="flex flex-row gap-2 items-center text-PRIMARY font-medium w-fit" to="/client/address">
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
          <img src={CloseIcon} alt="Limpar" className="cursor-pointer hidden sm:block" onClick={() => setSearchText("")} />
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
                    <img src={LocationIcon} alt="Localização" width={40} height={40} />
                  </div>
                  <div className="flex flex-col justify-center items-start text-[#909090]">
                    <span>{address.description}</span>
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
