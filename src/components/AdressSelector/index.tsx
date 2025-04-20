import { useState, useEffect } from 'react';
import api from '../../services/api'; // Sua instância do Axios ou cliente HTTP
import Header from '../Header/Header'; // Seu componente Header existente
import { getUser } from '../../utils/user-token-request';
import { getToken } from '../../utils/get-cookie';
import { FaMapMarkerAlt } from "react-icons/fa";



const AddressSelector: React.FC<{onAddressSelect: (address: any) => void}> = ({onAddressSelect}) => {
    const [userAdresses, setUserAdresses] = useState<any>([]);
    const [selectedAddress, setSelectedAddress] = useState<any>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Busca os endereços do usuário
    useEffect(() => {
        const userId = getUser().user_id

        const fetchUserAdresses = async () => {
            if (!userId) {
                setError('ID do usuário não disponível.');
                return;
            }

            try {
                const response = await api.get(`/user/${userId}/addresses`, {
                    headers: {
                        Authorization: `Bearer ${getToken()}`, // Substitua por sua função getToken()
                    },
                });
                setUserAdresses(response.data);
                // Define o primeiro endereço como padrão, se disponível
                if (response.data.length > 0) {
                    setSelectedAddress(response.data[0]);
                    onAddressSelect(response.data[0])
                }
            } catch (error) {
                setError('Erro ao buscar endereços do usuário.');
                console.error('Erro ao buscar endereços:', error);
                setUserAdresses([]);
            }
        };

        fetchUserAdresses();
    }, []);

    // Função para alternar o dropdown
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Função para selecionar um endereço
    const selectAddress = (address: any) => {
        setSelectedAddress(address);
        onAddressSelect(address)
        setIsDropdownOpen(false);
    };

    return (
        <div>
            {/* Mecanismo de seleção de endereços */}
            <div className="p-4">
                {error ? (
                    <div className="text-[#EB1212] text-center">{error}</div>
                ) : userAdresses?.addresses?.length === 0 ? (
                    <div className="text-gray-600 text-center">Nenhum endereço encontrado</div>
                ) : (
                    <div className="relative max-w-md mx-auto">
                        
                        <button
                            onClick={toggleDropdown}
                            className="w-full bg-white text-[#EB1212] px-4 py-2 flex items-center gap-2 justify-center"
                        >
                            <FaMapMarkerAlt></FaMapMarkerAlt>
                            {selectedAddress ? (
                                <span>
                                    {selectedAddress.street}, {selectedAddress.number}, {selectedAddress.city}
                                </span>
                            ) : (
                                <span>Selecionar endereço</span>
                            )}

                        </button>
                        {isDropdownOpen && (
                            <ul className="absolute z-10 bg-white w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto border border-gray-200">
                                {userAdresses?.addresses?.map((address: any, index: number) => (
                                    <li
                                        key={index}
                                        onClick={() => selectAddress(address)}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-800"
                                    >
                                        {address.street}, {address.number}, {address.city}, {address.state}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddressSelector;