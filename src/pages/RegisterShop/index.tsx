import React, { useState, useEffect, Children } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/logoImgWithoutCircles.png";
import { THEME } from "../../theme/index";
import { Icon } from "@iconify-icon/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import profilebg from "../../assets/profilebg.png";
import mapExample from "../../assets/mapExample.png";
import profileExample from "../../assets/profileExample.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { url } from "inspector";
import Input from "../../components/Input/Input";
import InputFile from "../../components/Input/InputFile";

const RegisterShop = () => {
  const navigate = useNavigate();
  const styleGroup = {
    input:
      "bg-GRAY_300 w-full p-[8px] border-none md:p-[10px] rounded-3xl outline-none text-black",
  };
  const dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  let hours = ["00h00"];
  for (let i = 1; i < 24; i++) {
    if (i < 10) hours = [...hours, `0${i}h00`];
    else hours = [...hours, `${i}h00`];
  }

  return (
    <div>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* ----------------------- Container ----------------------- */}
      <div className="w-full flex flex-col items-center justify-center mt-10 mb-14 md:my-14">
        <div className="text-4xl w-4/5 md:w-3/5 text-center text-PRIMARY font-bold">
          Cadastro de loja
        </div>
        <div className="my-6 w-3/5 bg-PRIMARY h-[2px]"></div>
        <div className="text-lg mb-6 w-3/5 text-black font-medium text-center">
          Cadastre-se e desfrute do nosso sistema de vendas!
        </div>

        <div className="w-4/5 md:w-3/5">
          <div className="md:w-1/2 mb-6">
            <label className="text-base mb-5" htmlFor="capa-input">
              Selecionar imagem de capa
            </label>
            {/* <Input className='iconOn' type='file' id="capa-input"></Input> */}
            <InputFile className="iconOn"></InputFile>
          </div>
          <div className="md:w-1/2 mb-6">
            <label className="text-base mb-5" htmlFor="profile-input">
              Selecionar imagem de perfil
            </label>
            {/* <Input className='iconOn' type='file' id="profile-input"></Input> */}
            <InputFile className="iconOn"></InputFile>
          </div>

          <div className="w-full mb-6">
            <label htmlFor="">Informe a localização do seu negócio</label>

            <div className="mb-2">
              <Input className="iconOn" type="text" placeholder="CEP"></Input>
            </div>

            <div className="flex w-full flex-col md:flex-row justify-between mb-2">
              <div className="mb-2 md:mb-0 md:w-3/12">
                <Input
                  className="iconOn"
                  type="text"
                  placeholder="Estado"
                ></Input>
              </div>
              <div className="md:w-8/12">
                <Input
                  className="iconOn"
                  type="text"
                  placeholder="Cidade"
                ></Input>
              </div>
            </div>

            <div className="mb-2">
              <Input
                className="iconOn"
                type="text"
                placeholder="Bairro"
              ></Input>
            </div>

            <div className="flex w-full flex-col md:flex-row justify-between mb-2">
              <div className="mb-2 md:mb-0 md:w-8/12">
                <Input className="iconOn" type="text" placeholder="Rua"></Input>
              </div>
              <div className="md:w-3/12">
                <Input
                  className="iconOn"
                  type="number"
                  placeholder="Número"
                ></Input>
              </div>
            </div>

            <div className="">
              <Input
                className="iconOn"
                type="text"
                placeholder="Complemento"
              ></Input>
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
              {dias.map((element) => (
                <tr className="text-GRAY_600 text-center">
                  <td className="mb-2">{element}</td>
                  <td className="">
                    <select
                      className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2"
                      name={`${element}HoraInicio`}
                      id={`${element}HoraInicio`}
                    >
                      {hours.map((element) => (
                        <option key={element} value={element}>
                          {element}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="">
                    <select
                      className="border-none bg-GRAY_300 px-2 py-1 rounded-lg mb-2"
                      name={`${element}HoraFim`}
                      id={`${element}HoraFim`}
                    >
                      {hours.map((element) => (
                        <option key={element} value={element}>
                          {element}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>

      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
    </div>
  );
};

export default RegisterShop;
