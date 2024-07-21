import React, { useEffect, useState } from 'react';
import { LOGOIMAGE, TERMS, WRAP, FLEXROWTERMS, CHECK, LINK, TITLE, FLEXROW, FLEXCOLUMN, TEXT, INPUT, UNSELECTEDBUTTON, SELECTEDBUTTON } from './style';
import { THEME } from '../../theme/index';
import { Icon } from '@iconify-icon/react';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {
    responsiveWidth as rw,
    responsiveHeight as rh,
    responsiveFontSize as rf
} from '../../utils/responsive-functions';
import axios, { Axios } from 'axios';
import api from '../../services/api';


const SignUp = () => {

    const mostrarExemplo = true;

    /*
    const userSchema = z.object({
        email: z.string().email(),
        document: z.string().min(11).max(14),
        documentType: z.nativeEnum(DocumentTypes),
        name: z.string().min(1),
        password: z.string().min(4),
        confirmedEmail: z.boolean(),
        isUserDeleted: z.boolean(),
        image: z.string()
    })
    */
    const meuUsuario = {
        email: "viniciusogbr@gmail.com",
        document: "13241544523", 
        documentType: 'cpf',
        name: "ViniciusOG",
        password: "legal123",
        confirmedEmail: true,
        isUserDeleted: false,
        image: ""
    }


    /*
    shopkeeper: z.object({
          name: z.string().max(50),
          email: z.string().email(),
          document: z.string().min(1),
          documentType: z.nativeEnum(DocumentTypes),
          password: z.string().min(4),
          confirmedEmail: z.boolean().optional(),
          bank: z.string(),
          account: z.string(),
          agency: z.string()
        }),
        store: z.object({
          name: z.string().min(2).max(30).optional(),
          //agency: z.string().max(5).optional().nullable(),
          //accountType: z.string().max(4).optional().nullable(),
          //accountNumber: z.string().max(11).optional().nullable(),
          pix: z.string().optional().nullable(),
          category: z.nativeEnum(StoreCategory),
          subCategory: z.string().optional().nullable(),
          delivery: z.boolean(),
          deliveryFee: z.number(),
          //rating: z.number().nullable(),
          pickup: z.boolean(),
          serviceRadius: z.number().nullable(),
          //imagePerfil: z.string().nullable(),
          //imageBanner: z.string().nullable(),
          document: z.string().min(11).max(14),
          documentType: z.nativeEnum(DocumentTypes),
          schedule: z
            .array(
              z.object({
                openingTime: z.object({
                  mon: z.string(),
                  tue: z.string(),
                  wed: z.string(),
                  thur: z.string(),
                  fri: z.string(),
                  sat: z.string(),
                  sun: z.string()
                }),
                closingTime: z.object({
                  mon: z.string(),
                  tue: z.string(),
                  wed: z.string(),
                  thur: z.string(),
                  fri: z.string(),
                  sat: z.string(),
                  sun: z.string()
                })
              })
            )
            .or(z.array(z.any()).length(0)),
          address: z.optional(
            z.object({
              city: z.string(),
              state: z.string(),
              street: z.string().nullable(),
              zipCode: z.string().length(8).nullable(),
              number: z.string().nullable(),
              district: z.string().nullable(),
              complement: z.string().nullable()
            })
          )
    */

    const [pf, setPF] = useState(false)


    const informacoesSobreLoja = {
        shopkeeper: {
            name: "Maria6",
            email: "maria6@gmail.com",
            document: "74374356",
            documentType: "cpf",
            password: "legal123",
            confirmedEmail: true,
            bank: "Inter",
            account: "671194957",
            agency: "588"
        },
        store: {
            name: "LojaDaMaria6",
            pix: "pixlojadamaria6@gmail.com",
            category: "restaurant",
            subCategory: "",
            delivery: true,
            deliveryFee: 0,
            pickup: true,
            serviceRadius: 8,
            document: "12345321894345",
            documentType: 'cnpj',
            schedule: [{
                openingTime: {
                    mon: "00h00",
                    tue: "00h00",
                    wed: "00h00",
                    thur: "00h00",
                    fri: "00h00",
                    sat: "00h00",
                    sun: "00h00"
                },
                closingTime: {
                    mon: "00h00",
                    tue: "00h00",
                    wed: "00h00",
                    thur: "00h00",
                    fri: "00h00",
                    sat: "00h00",
                    sun: "00h00"
                }
            }],   
            address: {
                city: "São Carlos",
                state: "São Paulo",
                street: "Rua Padre Teixeira",
                zipCode: "13561207",
                number: "1913",
                district: "Centro",
                complement: ""
            }
        }
    }


    useEffect(() => {
        console.log("Abri a tela")

        const saveUser = async () => {
            const config = {
                headers: {
                    'Authorization': "",
                    'Content-Type': 'application/json'
                }
            }

            const dataClient = meuUsuario
            const dataShopkeeper = informacoesSobreLoja

            const urlClient = "/user?userRole=client"
            const urlShopkeeper = "/user?userRole=shopkeeper"

            // Criação de usuário cliente
            /* await api
                .post(urlClient, dataClient, config)
                .then((response) => {
                    console.log(response);
                }); */

            // Criação de usuário lojista (informações do lojista e da loja)
            await api
                .post(urlShopkeeper, dataShopkeeper, config)
                .then((response) => {
                    console.log(response);
                });
        }

        saveUser()
    }, [])

    return (
        mostrarExemplo ? <h1>Exemplo</h1> 
        : (<div>
            {/* ----------------------- HEADER ----------------------- */}

            {/* ----------------------- Container ----------------------- */}
            <FLEXCOLUMN style={{
                marginTop: rh(78),
                marginBottom: rh(84)
            }}>
                <TITLE>Crie sua conta</TITLE>
                <FLEXROW style={{
                    marginTop: rh(95),
                }}>
                    { 
                        pf ?
                            <SELECTEDBUTTON>
                                <Icon icon="material-symbols:person" width={26} style={{
                                    color: THEME.COLORS.PRIMARY,
                                    marginRight: "10px"
                                }}/>
                                Pessoa física
                            </SELECTEDBUTTON>
                            :
                            <UNSELECTEDBUTTON onClick={() => setPF(true)}>
                                <Icon icon="material-symbols:person" width={26} style={{
                                    color: THEME.COLORS.GRAY_300,
                                    marginRight: "10px"
                                }}/>
                                Pessoa física
                            </UNSELECTEDBUTTON>
                    }
                    <div style={{ width: rw(25) }}></div>
                    {
                        pf ?
                            <UNSELECTEDBUTTON onClick={() => setPF(false)}>
                                <Icon icon="ic:round-business-center" width={26} style={{
                                    color: THEME.COLORS.GRAY_300,
                                    marginRight: "10px"
                                }}/>
                                Pessoa Juridica
                            </UNSELECTEDBUTTON>
                            :
                            <SELECTEDBUTTON>
                                <Icon icon="ic:round-business-center" width={26} style={{
                                    color: THEME.COLORS.PRIMARY,
                                    marginRight: "10px"
                                }}/>
                                Pessoa Juridica
                            </SELECTEDBUTTON>
                    }
                </FLEXROW>
                <FLEXCOLUMN style={{
                    width: rw(569),
                    marginTop: rh(20),
                }}>
                    {pf &&
                        <WRAP>
                            <TEXT>
                                Nome Completo
                            </TEXT>
                            <Input type='text' placeholder='Seu Nome' />
                        </WRAP>
                    }
                    <WRAP>
                        <TEXT>
                            {pf ? "CPF" : "CNPJ" /* Change true to a variable */}
                        </TEXT>
                        <Input type="text" placeholder='123.456.789-10' />
                    </WRAP>

                    {pf &&
                        <WRAP>
                            <TEXT>
                                {"RG"}
                            </TEXT>
                            <Input type='text' placeholder='12.345.678-9' />
                        </WRAP>
                    }

                    {pf &&
                        <WRAP>
                            <TEXT>
                                {"Orgão Emissor"}
                            </TEXT>
                            <Input type='text' placeholder='texto' />
                        </WRAP>
                    }

                    <WRAP>
                        <TEXT>
                            {"E-mail"}
                        </TEXT>
                        <Input type="text" placeholder='seuemail@email.com' />
                    </WRAP>

                    <WRAP>
                        <TEXT>
                            {"Senha"}
                        </TEXT>
                        <Input type="password" placeholder='*************' />
                    </WRAP>

                    <WRAP>
                        <TEXT>
                            {"Confirmar senha"}
                        </TEXT>
                        <Input type="password" placeholder='*************' />
                    </WRAP>

                    <FLEXROWTERMS style={{
                        marginTop: rh(95)
                    }}>
                        <CHECK type='checkbox' />
                        <TERMS>
                            Eu aceito o uso dos meus dados de acordo com a Declaração de Privacidade e aceito os Termos e Condições.
                        </TERMS>
                    </FLEXROWTERMS>


                    <Button as="a" type="red" href="/Politica" style={{ marginTop: rh(150) }}>
                        <FLEXROW style = {{
                            justifyItems: 'center'
                        }}>
                            <div> Avançar </div>
                            <a href="" style={{
                                marginTop: rh(8),
                                marginLeft: rw(10)
                            }}><Icon icon="mdi:arrow-right" width={25} style={{
                                color: THEME.COLORS.WHITE
                            }} /></a>
                        </FLEXROW>
                    </Button>
                </FLEXCOLUMN>

            </FLEXCOLUMN>


            {/* ----------------------- FOOTER ----------------------- */}

            <Footer></Footer>
        </div>)
    
    );
};

export default SignUp;