import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify-icon/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import profilebg from "../../assets/profilebg.png";
import mapExample from "../../assets/mapExample.png";
import profileExample from "../../assets/profileExample.png";
import { getUser } from "../../utils/user-token-request";
import PulseLoader from "react-spinners/PulseLoader";
import { THEME } from "../../theme";

interface storeProps {
  store?: {
    name: string;
    imageBanner: string;
    imagePerfil: string;
    schedule: [
      {
        closingTime: {
          sun: string;
          mon: string;
          tue: string;
          wed: string;
          thu: string;
          fri: string;
          sat: string;
        };
        openingTime: {
          sun: string;
          mon: string;
          tue: string;
          wed: string;
          thu: string;
          fri: string;
          sat: string;
        };
      }
    ];
  };
  storeAddress?: {
    city: string;
    state: string;
    street: string;
    district: string;
  };
}

const Profile = () => {
  const [store, setStore] = useState<storeProps>({});
  const [hasShop, setHasShop] = useState<boolean>();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(async () => {
      await getStore();
      setLoading(false);
    }, 2000);
  }, []);

  //integracao para fazer o login e salvar o token com Redux
  //para pegar o token em outra tela, é necessário usar o useSelector e o RootState("../redux/types")
  async function getStore() {
    await api
      .get(`store/${getUser().user_id}`, {
        headers: {
          "Authorization": `Bearer ${document.cookie.split("=")[1]}`,
        },
      })
      .then((response) => {
        setStore(response.data);
        setHasShop(true);
        console.log(response.data);
      })
      .catch(() => {
        setHasShop(false);
      });
  }

  function capitalizeString(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  function formaterScheduleTime() {
    const schedule = store.store ? store.store?.schedule[0] : undefined;
    const time = [];

    if (schedule) {
      for (const key in schedule.closingTime) {
        if (schedule.closingTime.hasOwnProperty(key)) {
          const timeOp =
            schedule.closingTime[key as keyof typeof schedule.openingTime];
          const timeCl =
            schedule.closingTime[key as keyof typeof schedule.closingTime];

          time.push(timeOp + "-" + timeCl);
        }
      }
    }

    return time;
  }

  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}
      <div className="w-full flex flex-col items-center justify-center my-14">
        <div className="text-4xl w-4/5 text-center text-PRIMARY text-center font-bold">
          Configurações de perfil
        </div>
        <div className="my-6 w-4/5 bg-PRIMARY h-[2px]"></div>
        <div className="text-lg mb-6 w-4/5 text-black font-medium text-center">
          Personalize seu negócio para deixa-lo mais atrativo
        </div>

        {!loading && hasShop ? (
          <div className="self-stretch overflow-hidden flex flex-col md:flex-row items-center justify-center gap-[100px] text-base ">
            <div className="relative rounded-3xl box-border w-[350px] h-[620px] overflow-hidden shrink-0 border-PRIMARY border-2">
              <img
                className="absolute top-[0px] left-[0px] rounded-t-xl rounded-b-none w-[432px] h-[131px] object-cover"
                alt="imagem de capa da loja"
                src={
                  store.store && store.store.imageBanner
                    ? store.store.imageBanner
                    : profilebg
                }
              />
              <a
                href=""
                className="absolute top-[116px] left-[279.5px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center"
              >
                <Icon icon="mdi:pencil" width={20} className="text-WHITE" />
              </a>
              <img
                className="h-40 w-40 absolute top-[111px] left-[34px] rounded-full object-cover"
                alt="imagem de perfil da loja"
                src={
                  store.store && store.store.imagePerfil
                    ? store.store.imagePerfil
                    : profileExample
                }
              />
              <a
                href=""
                className="absolute top-[209px] left-[279.5px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center"
              >
                <Icon icon="mdi:pencil" width={20} className="text-WHITE" />
              </a>
              <a
                href=""
                className="absolute top-[132px] left-[99px] rounded-full bg-PRIMARY w-[29px] flex flex-row p-1 box-border items-center justify-center"
              >
                <Icon icon="mdi:pencil" width={20} className="text-WHITE" />
              </a>
              <div className="absolute top-[219px] left-[12px] leading-[20px]">
                {store.store?.name}
              </div>
              <div className="absolute top-[269.5px] left-[15px] box-border w-11/12 h-px border-t-[1px] border-solid border-gray-600" />
            </div>
            <div className="w-[350px] h-[620px] overflow-hidden shrink-0 flex flex-col items-center justify-center gap-[10px] text-[12px] text-black-100 font-roboto-16-500">
              <div className="self-stretch rounded-3xl overflow-hidden flex flex-row flex-wrap pt-6 px-0 pb-0 items-center justify-center gap-[72px] border-PRIMARY border-2">
                <div className="relative leading-[20px] flex items-center w-[229px] shrink-0">
                  <span className="[line-break:anywhere] w-full">
                    <p className="m-0">
                      <b>
                        {capitalizeString(store.storeAddress?.street ?? "")}
                      </b>
                    </p>
                    <p className="m-0">
                      {store.storeAddress
                        ? (store.storeAddress?.district
                            ? capitalizeString(
                                store.storeAddress?.district ?? ""
                              ) + ", "
                            : "") +
                          capitalizeString(store.storeAddress?.city) +
                          " - " +
                          store.storeAddress?.state.toUpperCase()
                        : ""}
                    </p>
                  </span>
                </div>
                <a
                  href=""
                  className="rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center"
                >
                  <Icon icon="mdi:pencil" width={20} className="text-WHITE" />
                </a>
                <div className="relative rounded-t-none rounded-b-xl bg-white w-[350px] h-[149px] overflow-hidden shrink-0">
                  <div className="absolute top-[-194px] left-[-33px] w-[500px] h-[500px]" />
                  <img
                    className="absolute top-[0px] left-[0px] object-cover"
                    alt=""
                    src={mapExample}
                  />
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-3xl overflow-hidden flex flex-col p-6 items-center justify-center text-base text-black-200 font-text border-PRIMARY border-2">
                <div className="relative w-[313px] h-[265px]">
                  <div className="absolute top-[0px] left-[0px] text-xl font-medium">
                    Horário de funcionamento
                  </div>
                  <div className="absolute top-[42px] left-[16px] flex flex-col items-center justify-start gap-[10px] text-base">
                    <b className="relative">{`seg `}</b>
                    <b className="relative">ter</b>
                    <b className="relative">{`qua `}</b>
                    <b className="relative">{`qui `}</b>
                    <b className="relative">{`sex `}</b>
                    <b className="relative">{`sab `}</b>
                    <b className="relative">{`dom `}</b>
                  </div>
                  <div className="absolute top-[38px] left-[103px] flex flex-col items-center justify-start gap-[10px] font-roboto-16-500">
                    {formaterScheduleTime().map((item) => (
                      <div className="relative font-medium">{item}</div>
                    ))}
                  </div>
                  <a
                    href=""
                    className="absolute top-[0px] left-[283px] rounded-full bg-PRIMARY flex flex-row p-1 items-center justify-center"
                  >
                    <Icon icon="mdi:pencil" width={20} className="text-WHITE" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : !loading && !hasShop ? (
          <a href="/registerShop" className="text-red-500 hover:text-red-700">
            Você ainda não possui uma loja, clique aqui para criar uma
          </a>
        ) : (
          <PulseLoader color={THEME.COLORS.PRIMARY} />
        )}
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </div>
  );
};

export default Profile;
