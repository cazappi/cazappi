import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import profilebg from "../../assets/profilebg.png";
import profileExample from "../../assets/profileExample.png";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";
import { getUser } from "../../utils/user-token-request";

interface ShopRegistrationValues {
  name: string;
  capa: File | undefined;
  profile: File | undefined;
  cep: string;
  state: string;
  city: string;
  bairro: string;
  street: string;
  number: string;
  complement: string;
  opSeg: string;
  opTer: string;
  opQua: string;
  opQui: string;
  opSex: string;
  opSab: string;
  opDom: string;
  clSeg: string;
  clTer: string;
  clQua: string;
  clQui: string;
  clSex: string;
  clSab: string;
  clDom: string;
}

const MAX_FILE_SIZE = 10240000; //10 Mb
const validFileExtensions: Record<string, string[]> = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};
function isValidFileType(
  file: File | null | undefined,
  fileType: string
): boolean {
  return (
    file !== null &&
    file !== undefined &&
    validFileExtensions[fileType].indexOf(
      file.name.split(".").pop() as string
    ) > -1
  );
}

const shopRegistrationSchema = Yup.object().shape({
  name: Yup.string().required("Campo obrigatório"),
  // capa: Yup.mixed()
  //   .test("is-valid-type", "Imagem não é de formato válido", function (value) {
  //     return isValidFileType(value as File, "image");
  //   })
  //   .test("is-valid-size", "Tamanho máximo da imagem: 10 Mb", function (value) {
  //     return value && (value as File).size <= MAX_FILE_SIZE;
  //   }),
  // profile: Yup.mixed()
  //   .test("is-valid-type", "Imagem não é de formato válido", function (value) {
  //     console.log(value);
  //     return isValidFileType(value as File, "image");
  //   })
  //   .test("is-valid-size", "Tamanho máximo da imagem: 10 Mb", function (value) {
  //     return value && (value as File).size <= MAX_FILE_SIZE;
  //   }),

  cep: Yup.string()
    .required("Campo obrigatório")
    .test("is-valid-cep", "Invalid CEP format", function (value) {
      if (!value) return true; // Allow empty values to be handled by "required" validation

      const cepRegex = /^[0-9]{5}-?[0-9]{3}$/; // Regex pattern for valid CEP formats

      return cepRegex.test(value);
    }),
  state: Yup.string().required("Campo obrigatório"),
  city: Yup.string().required("Campo obrigatório"),
  bairro: Yup.string().required("Campo obrigatório"),
  street: Yup.string().required("Campo obrigatório"),
  number: Yup.string().required("Campo obrigatório"),
  complement: Yup.string(),
});

const UpdateShop = () => {
  const location = useLocation();
  const shopData = location.state;
  const navigate = useNavigate();
  console.log(shopData);
  console.log(JSON.stringify(shopData.store.schedule[0].openingTime.mon));
  const styleGroup = {
    input:
      "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black",
    error: "mt-2 text-ERROR",
  };
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  let hours = ["00h00"];
  for (let i = 1; i < 24; i++) {
    if (i < 10) hours = [...hours, `0${i}h00`];
    else hours = [...hours, `${i}h00`];
  }

  function validFile(file: File) {
    const typeFile = file.type;
    const nameFile = file.name.split(".")[0];

    return {
      typeFile,
      nameFile,
    };
  }

  const handleSubmit = async (values: ShopRegistrationValues) => {
    let url_perfil = shopData.store.imagePerfil;
    let url_banner = shopData.store.imageBanner;

    if (values.capa && values.capa != shopData.store.imageBanner) {
      await api
        .post(`arquivo/bannerLoja/${values.name}`, values.capa, {
          headers: {
            Authorization: `${document.cookie.split("=")[1]}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          url_banner = response.data.Key;
        });
    }

    if (values.profile && values.profile != shopData.store.imagePerfil) {
      await api
        .post(`arquivo/perfilLoja/${values.name}`, values.profile, {
          headers: {
            Authorization: `${document.cookie.split("=")[1]}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          url_perfil = response.data.Key;
        });
    }

    api
      .put(
        "/store",
        {
          store: {
            shopkeeperId: getUser().user_id,
            name: values.name,
            agency: "123",
            accountType: "1234",
            accountNumber: "12345678911",
            pix: "pix@gmail.com",
            category: "Lanchonete",
            subCategory: "Pizza",
            serviceRadius: 2,
            imagePerfil: url_perfil,
            imageBanner: url_banner,
            schedule: [
              {
                openingTime: {
                  mon: values.opSeg,
                  tue: values.opTer,
                  wed: values.opQua,
                  thur: values.opQui,
                  fri: values.opSex,
                  sat: values.opSab,
                  sun: values.opDom,
                },
                closingTime: {
                  mon: values.clSeg,
                  tue: values.clTer,
                  wed: values.clQua,
                  thur: values.clQui,
                  fri: values.clSex,
                  sat: values.clSab,
                  sun: values.clDom,
                },
              },
            ],
            Address: [
              {
                city: values.city,
                state: values.state,
                street: values.street,
                zipCode: values.cep,
                number: values.number,
                district: values.bairro, //Usar "district" : null, para campos opcionais.
                complement: values.complement,
              },
            ],
          },
          storeToUpdate: {
            shopkeeperId: getUser().user_id, // Id do usuário
            name: JSON.stringify(shopData.store.name).slice(1, -1), // Nome da loja
          },
        },
        {
          headers: {
            Authorization: `${document.cookie.split("=")[1]}`,
          },
        }
      )
      .then((response) => {
        console.log("deu certo");
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-14 md:my-14">
        <div className="text-4xl w-4/5 md:w-3/5 text-center text-PRIMARY font-bold">
          Atualização de loja
        </div>
        <div className="my-6 w-3/5 bg-PRIMARY h-[2px]"></div>
        <div className="text-lg mb-6 w-3/5 text-black font-medium text-center">
          Cadastre-se e desfrute do nosso sistema de vendas!
        </div>

        <Formik
          initialValues={{
            name: JSON.stringify(shopData.store.name).slice(1, -1),
            capa: shopData.store.imageBanner,
            profile: shopData.store.imagePerfil,
            cep: JSON.stringify(shopData.storeAddress.zipCode).slice(1, -1),
            state: JSON.stringify(shopData.storeAddress.state).slice(1, -1),
            city: JSON.stringify(shopData.storeAddress.city).slice(1, -1),
            bairro: JSON.stringify(shopData.storeAddress.district).slice(1, -1),
            street: JSON.stringify(shopData.storeAddress.street).slice(1, -1),
            number: JSON.stringify(shopData.storeAddress.number).slice(1, -1),
            sameHoursOp: "",
            sameHoursCl: "",
            complement: shopData.storeAddress.complement
              ? JSON.stringify(shopData.storeAddress.complement).slice(1, -1)
              : "",
            opSeg: JSON.stringify(
              shopData.store.schedule[0].openingTime.mon
            ).slice(1, -1),
            opTer: JSON.stringify(
              shopData.store.schedule[0].openingTime.tue
            ).slice(1, -1),
            opQua: JSON.stringify(
              shopData.store.schedule[0].openingTime.wed
            ).slice(1, -1),
            opQui: JSON.stringify(
              shopData.store.schedule[0].openingTime.thur
            ).slice(1, -1),
            opSex: JSON.stringify(
              shopData.store.schedule[0].openingTime.fri
            ).slice(1, -1),
            opSab: JSON.stringify(
              shopData.store.schedule[0].openingTime.sat
            ).slice(1, -1),
            opDom: JSON.stringify(
              shopData.store.schedule[0].openingTime.sun
            ).slice(1, -1),
            clSeg: JSON.stringify(
              shopData.store.schedule[0].closingTime.mon
            ).slice(1, -1),
            clTer: JSON.stringify(
              shopData.store.schedule[0].closingTime.tue
            ).slice(1, -1),
            clQua: JSON.stringify(
              shopData.store.schedule[0].closingTime.wed
            ).slice(1, -1),
            clQui: JSON.stringify(
              shopData.store.schedule[0].closingTime.thur
            ).slice(1, -1),
            clSex: JSON.stringify(
              shopData.store.schedule[0].closingTime.fri
            ).slice(1, -1),
            clSab: JSON.stringify(
              shopData.store.schedule[0].closingTime.sat
            ).slice(1, -1),
            clDom: JSON.stringify(
              shopData.store.schedule[0].closingTime.sun
            ).slice(1, -1),
          }}
          validationSchema={shopRegistrationSchema}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit(values);
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="w-4/5 md:w-3/5">
              <div className="md:w-1/2 mb-6">
                <label className="text-base mb-5" htmlFor="capa-input">
                  Defina o nome da sua loja
                </label>

                <Input
                  className="iconOn"
                  type="text"
                  name="name"
                  value={values.name}
                  placeholder="Nome da loja"
                  onChange={handleChange}
                ></Input>
                <ErrorMessage
                  className={styleGroup.error}
                  name="name"
                  component="div"
                />
              </div>
              <div className="md:w-1/2 mb-6">
                <label className="text-base mb-5" htmlFor="capa-input">
                  Selecionar imagem de capa
                </label>
                <img className="w-[500px] h-auto my-4" src={
                  shopData.store && shopData.store.imageBanner
                    ? shopData.store.imageBanner
                    : profilebg
                }></img>

                <InputFile
                  className="iconOn"
                  name="capa"
                  placeholder="Capa"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files;
                    if (file) validFile(file[0]);

                    setFieldValue("capa", file ? file[0] : undefined);
                  }}
                ></InputFile>
                <ErrorMessage
                  name="capa"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="md:w-1/2 mb-6">
                <label className="text-base mb-5" htmlFor="profile-input">
                  Selecionar imagem de perfil
                </label>
                <img className="w-[200px] h-[200px] my-4 rounded-full" src={
                  shopData.store && shopData.store.imagePerfil
                    ? shopData.store.imagePerfil
                    : profileExample
                }></img>

                <InputFile
                  className="iconOn"
                  name="profile"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    const file = event.target.files;
                    if (file) validFile(file[0]);

                    setFieldValue("profile", file ? file[0] : undefined);
                  }}
                ></InputFile>
                <ErrorMessage
                  name="profile"
                  component="div"
                  className="error-message"
                />
              </div>

              <div className="w-full mb-6">
                <label htmlFor="">Informe a localização do seu negócio</label>

                <div className="mb-2">
                  <Input
                    className="iconOn"
                    type="text"
                    name="cep"
                    value={values.cep}
                    placeholder="CEP"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    className={styleGroup.error}
                    name="cep"
                    component="div"
                  />
                </div>

                <div className="flex w-full flex-col md:flex-row justify-between mb-2">
                  <div className="mb-2 md:mb-0 md:w-3/12">
                    <Input
                      className="iconOn"
                      type="text"
                      name="state"
                      value={values.state}
                      placeholder="Estado"
                      onChange={handleChange}
                    ></Input>
                    <ErrorMessage
                      className={styleGroup.error}
                      name="state"
                      component="div"
                    />
                  </div>
                  <div className="md:w-8/12">
                    <Input
                      className="iconOn"
                      type="text"
                      name="city"
                      value={values.city}
                      placeholder="Cidade"
                      onChange={handleChange}
                    ></Input>
                    <ErrorMessage
                      className={styleGroup.error}
                      name="city"
                      component="div"
                    />
                  </div>
                </div>

                <div className="mb-2">
                  <Input
                    className="iconOn"
                    type="text"
                    name="bairro"
                    value={values.bairro}
                    placeholder="Bairro"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    className={styleGroup.error}
                    name="bairro"
                    component="div"
                  />
                </div>

                <div className="flex w-full flex-col md:flex-row justify-between mb-2">
                  <div className="mb-2 md:mb-0 md:w-8/12">
                    <Input
                      className="iconOn"
                      type="text"
                      name="street"
                      value={values.street}
                      placeholder="Rua"
                      onChange={handleChange}
                    ></Input>
                    <ErrorMessage
                      className={styleGroup.error}
                      name="street"
                      component="div"
                    />
                  </div>
                  <div className="md:w-3/12">
                    <Input
                      className="iconOn"
                      type="text"
                      name="number"
                      value={values.number}
                      placeholder="Número"
                      onChange={handleChange}
                    ></Input>
                    <ErrorMessage
                      className={styleGroup.error}
                      name="number"
                      component="div"
                    />
                  </div>
                </div>

                <div className="">
                  <Input
                    className="iconOn"
                    type="text"
                    name="complement"
                    value={values.complement}
                    placeholder="Complemento"
                    onChange={handleChange}
                  ></Input>
                  <ErrorMessage
                    className={styleGroup.error}
                    name="complement"
                    component="div"
                  />
                </div>
              </div>
              <div>
                <label className="text-base" htmlFor="">
                  Informe o horário de funcionamento
                </label>
                <table className="w-full md:w-4/6">
                  <tr className="text-GRAY_600">
                    <th>Dia</th>
                    <th>Horário Início</th>
                    <th>Horário Fim</th>
                  </tr>
                  {dias.map((dia) => (
                    <tr key={dia} className="text-GRAY_600 text-center">
                      <td className="mb-2">{dia}</td>
                      <td className="">
                        <select
                          className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2"
                          name={`op${dia}`}
                          id={`${dia}HoraInicio`}
                          onChange={(e) =>
                            setFieldValue(`op${dia}`, e.target.value)
                          } // Use setFieldValue aqui
                          value={values[`op${dia}` as keyof typeof values]} // Passe o valor atual do Formik como value
                        >
                          {hours.map((hora) => (
                            <option key={hora} value={hora}>
                              {hora}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="">
                        <select
                          className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2"
                          name={`cl${dia}`}
                          id={`${dia}HoraFim`}
                          onChange={(e) =>
                            setFieldValue(`cl${dia}`, e.target.value)
                          } // Use setFieldValue aqui
                          value={values[`cl${dia}` as keyof typeof values]} // Use uma conversão explícita para keyof
                        >
                          {hours.map((hora) => (
                            <option key={hora} value={hora}>
                              {hora}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </table>
                <div className="mb-4">
                  <label className="text-base" htmlFor="sameHours">
                    Definir o mesmo horário para todos os dias:
                  </label>
                  <select 
                    className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2 w-32 ml-2"
                    name="sameHoursOp"
                    id="sameHoursOp"
                    onChange={(e) => {
                      const selectedHour = e.target.value;
                      // Define o mesmo horário para todos os dias
                      dias.forEach((dia) => {
                        setFieldValue(`op${dia}`, selectedHour);
                      });
                    }}
                  >
                    <option value="">Selecione um horário</option>
                    {hours.map((hora) => (
                      <option key={hora} value={hora}>
                        {hora}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2 w-32 ml-2"
                    name="sameHoursCl"
                    id="sameHoursCl"
                    onChange={(e) => {
                      const selectedHour = e.target.value;
                      // Define o mesmo horário para todos os dias
                      dias.forEach((dia) => {
                        setFieldValue(`cl${dia}`, selectedHour);
                      });
                    }}
                  >
                    <option value="">Selecione um horário</option>
                    {hours.map((hora) => (
                      <option key={hora} value={hora}>
                        {hora}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="bg-PRIMARY text-WHITE p-3 rounded-lg text-xl m-4 hover:scale-105 duration-200 hover:shadow-2xl"
                type="submit"
              >
                Salvar informações
              </button>
            </Form>
          )}
        </Formik>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </div>
  );
};

export default UpdateShop;
