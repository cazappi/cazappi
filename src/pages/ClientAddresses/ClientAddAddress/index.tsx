import { Link, useNavigate } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import ArrowBack from "../../../assets/arrow_back.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../services/api";
import { getToken } from "../../../utils/get-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const addressSchema = z.object({
  cep: z.string().length(8),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string(),
  street: z.string().optional(),
  number: z.string(),
  complement: z.string().optional(),
});

type AddressForm = z.infer<typeof addressSchema>;

const ClientAddAddress = () => {
  const [states, setStates] = useState<
    { id: string; nome: string; sigla: string }[]
  >([]);
  const [cities, setCities] = useState<{ id: string; nome: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<AddressForm>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      cep: "",
      state: "",
      city: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "",
    },
  });

  const cep = watch("cep");
  const state = watch("state");
  const [isCepValid, setIsCepValid] = useState(false);

  useEffect(() => {
    axios
      .get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((response) => {
        setStates(response.data);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  useEffect(() => {
    if (cep && cep.length === 8) {
      axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const data = response.data;
          setValue("state", data.uf);
          setValue("city", data.localidade);
          setValue("neighborhood", data.bairro);
          setValue("street", data.logradouro);
          setIsCepValid(true);
        })
        .catch((error) => {
          console.error("Error fetching address:", error);
          reset({
            state: "",
            city: "",
            neighborhood: "",
            street: "",
          });
          setIsCepValid(false);
        });
    } else {
      setIsCepValid(false);
    }
  }, [cep, setValue, reset]);

  useEffect(() => {
    if (state) {
      axios
        .get(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${state}/municipios`
        )
        .then((response) => {
          setCities(response.data);
        })
        .catch((error) => {
          console.error("Error fetching cities:", error);
        });
    } else {
      setCities([]);
    }
  }, [state]);

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    setValue("cep", onlyNumbers);
  };

  const onSubmit = async (data: AddressForm) => {
    const payload = {
      city: data.city,
      state: data.state,
      street: data.street || null,
      zipCode: data.cep,
      number: data.number,
      district: data.neighborhood,
      complement: data.complement || null,
      storeName: null,
      storeOwnerId: null,
      shopkeeperUserId: null,
    };

    setIsLoading(true);
    try {
      const response = await api.post("/user/address", payload, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log("Address created successfully:", response.data);
      toast.success("Endereço adicionado com sucesso!");
      setTimeout(() => {
        navigate("/client/address");
      }, 3000); // 3 segundos de atraso para mostrar o toast antes de redirecionar
    } catch (error) {
      console.error("Error creating address:", error);
      toast.error("Erro ao adicionar o endereço. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full">
      <Header transparent={false} />
      <ToastContainer position="bottom-right"/>
      <main className="flex flex-grow justify-center items-center py-[100px]">
        <form
          className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Link
            className="flex flex-row gap-2 items-center text-PRIMARY font-medium w-fit mb-4"
            to="/client/address"
          >
            <img src={ArrowBack} alt="Voltar" />
            <span>Voltar</span>
          </Link>

          <div className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="cep"
                className="block text-sm font-medium text-gray-700"
              >
                CEP
              </label>
              <Controller
                name="cep"
                control={control}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    value={field.value}
                    onChange={(e) => {
                      handleCepChange(e);
                      field.onChange(e);
                    }}
                    placeholder="Digite o CEP"
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2`}
                  />
                )}
              />
              {errors.cep && (
                <span className="text-red-500 text-sm">
                  {errors.cep.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                Estado
              </label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    disabled={isCepValid}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                      isCepValid ? "cursor-not-allowed bg-gray-100" : ""
                    }`}
                  >
                    <option value="">Selecione o estado</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.sigla}>
                        {state.nome}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.state && (
                <span className="text-red-500 text-sm">
                  {errors.state.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                Cidade
              </label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    disabled={isCepValid || !state}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                      isCepValid || !state
                        ? "cursor-not-allowed bg-gray-100"
                        : ""
                    }`}
                  >
                    <option value="">Selecione a cidade</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.nome}>
                        {city.nome}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.city && (
                <span className="text-red-500 text-sm">
                  {errors.city.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="neighborhood"
                className="block text-sm font-medium text-gray-700"
              >
                Bairro
              </label>
              <Controller
                name="neighborhood"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    disabled={isCepValid}
                    placeholder="Digite o bairro"
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                      isCepValid ? "cursor-not-allowed bg-gray-100" : ""
                    }`}
                  />
                )}
              />
              {errors.neighborhood && (
                <span className="text-red-500 text-sm">
                  {errors.neighborhood.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Rua
              </label>
              <Controller
                name="street"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    disabled={isCepValid}
                    placeholder="Digite a rua"
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 ${
                      isCepValid ? "cursor-not-allowed bg-gray-100" : ""
                    }`}
                  />
                )}
              />
              {errors.street && (
                <span className="text-red-500 text-sm">
                  {errors.street.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="number"
                className="block text-sm font-medium text-gray-700"
              >
                Número
              </label>
              <Controller
                name="number"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Digite o número"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                )}
              />
              {errors.number && (
                <span className="text-red-500 text-sm">
                  {errors.number.message}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="complement"
                className="block text-sm font-medium text-gray-700"
              >
                Complemento
              </label>
              <Controller
                name="complement"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    placeholder="Digite o complemento (opcional)"
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                  />
                )}
              />
            </div>

            <button
              type="submit"
              className={`mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition ${
                isLoading ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  ></path>
                </svg>
              ) : (
                "Enviar"
              )}
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default ClientAddAddress;
