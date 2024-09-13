import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  responsiveWidth as rw,
  responsiveHeight as rh,
  responsiveFontSize as rf
} from '../../utils/responsive-functions';
import { Icon } from "@iconify-icon/react";
import BannerDefault from '../../assets/bannerexample.png'
import Default from '../../assets/userProfile.png'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import PulseLoader from "react-spinners/PulseLoader";
import { THEME } from "../../theme";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { BsChevronDoubleRight, BsFillPencilFill, BsThreeDotsVertical, BsPlus, BsGeoAltFill} from 'react-icons/bs';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from "../RegisterProduct/style";
import { FLEXROW } from "../Politica/style";
import { Container, INPUT, InputsWrapper, TEXT } from "../SignUp/style";
import { IconEdit, Image } from "../ProfileClient/style";
import { AddImg } from "../../components/ImageUpload/style";
import { AddCard, Card, CardNumbers, FlexEnd, InfosCard, InfosWrapper, MoreOptions } from "../BagPagment/style";
import { ActionButton } from "../ProductView/style";
import { DatasWrapper, Data, NewAddress, Addresses, Span, ModifyAdress, ButtonRole, BannerImage, EditImgContainer, IconEditBanner, ScheduleContainer, ScheduleTitle, ScheduleList, ScheduleHeader, HeaderColumn, ScheduleItem, ItemColumn, TimeSelect } from "./style";
import { BannerWrapper } from "../ProfileLojista/style";

interface userProps{
    user:{
      email: string,
      id: string,
      document: string,
      documentType: string,
      role: string,
      name: string,
      confirmedEmail: boolean,
      isUserDeleted: boolean,
      image : string
    }
}
interface storeProps {
  store: [{
    name: string,
    agency: string,
    accountType: string,
    accountNumber: string,
    pix: number,
    category: number,
    subCategory: number,
    delivery: boolean,
    pickup: boolean,
    serviceRadius: number,
    imagePerfil: string,
    imageBanner: string,
    document: string,
    documentType: string,
    schedule: 
    [
      {
        openingTime: {
          mon: string;
          tue: string;
          wed: string;
          thu: string;
          fri: string;
          sat: string;
          sun: string;
        }
        closingTime: {
          mon: string;
          tue: string;
          wed: string;
          thu: string;
          fri: string;
          sat: string;
          sun: string;
        };
      }
    ],
    Address: [{
      city: string,
      state: string,
      street: string,
      zipCode: string,
      number: string,
      district: string,
      complement: null}]
  }]
}

interface CardType {
  id: number;
  image: string;
  proprietario: string;
  type: string;
  numbers: string;
}
const GerenciarDadosCadastrais = () => {
  const [store, setStore] = useState<storeProps | null>(null);
  const [userData, setUserData] = useState<userProps | null>(null);
  
  // Dados do usuário
  const [formData, setFormData] = useState({
    nome: '',
    documento: '',
    email: '',
    phone: '',
  });
  
  // Dados da loja
  const [formDataLoja, setFormDataLoja] = useState({
    nomeComercio: '',
    documentoComercio: '',
    CEP: '',
  });

  // Confirmação de login
  const [loading, setLoading] = useState(true);

  // Imagem de perfil
  const [imageSrc, setImageSrc] = useState('');
  const [bannerSrc, setBannerSrc] = useState('');
  const navigate = useNavigate();

  // Requisição das informações do usuário
  async function getUserData() {
    await api
      .get(`user/${getUser().user_id}`, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        // Salva informações em userData e a exibe a imagem de perfil
        setUserData(response.data);
        setImageSrc(response.data?.user?.image || Default);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        }
      });
  }

  // Requisição das informações do lojista
  async function getStoreData(){
    if(userData?.user.role !== "client"){
      api.get(`store/${getUser().user_id}`, {
        headers: {
          "Authorization": `Bearer ${getToken()}`
        }
      })
      .then((response) => {
        // Guarda as informações em store e exibe a imagem e banner da loja
        setStore(response.data);
        if(!pf)
          setImageSrc(response.data.imageProfile || Default);
        setBannerSrc(response.data.imageBanner || BannerDefault);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        }
      });
    }
  }

  useEffect(() => {
    // Ao entrar na tela, busca usuário
    const fetchData = async () => {
      setLoading(true);
      await getUserData();
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    // Ao encontrar usuário, tenta encontrar loja (caso houver) e seta informações do usuário nos campos de dados
    if (userData && userData.user.role !== "client") {
      getStoreData();
    }
    setLoading(false);
    if(userData){
      setFormData({
        nome: userData.user.name,
        documento: userData.user.document,
        email: userData.user.email,
        phone: '',
      });
    }
  }, [userData]);
  useEffect(() => {
    // Ao encontrar loja, seta informações da loja nos campos de dados
    if (store) {
      setFormDataLoja({
        nomeComercio: store.store[0].name,
        documentoComercio: store.store[0].document,
        CEP: '',
      });
      setPF(false);
    }
  }, [store]);
 
  // Atualizando informações dos campos de dados do usuário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value} = e.target;
    if(pf){
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
    else{
      setFormDataLoja((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  
  // Função de alteração da imagem
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
    const reader = new FileReader();
    reader.onload = () => {
        const newImageSrc = reader.result as string;
        setImageSrc(newImageSrc);
    };
    reader.readAsDataURL(file);
    }
  };

  // Função de alteração da imagem do banner
  const handleBannerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const newBannerSrc = reader.result as string;
        setBannerSrc(newBannerSrc);
      };
      reader.readAsDataURL(file);
    }
  };

  // Ao clicar em salvar, atualizar informações dos dados do usuário e da imagem de perfil
  const handleSubmit = async () => {
    // ajuda para fazer o put
    console.log(userData?.user);
    console.log(formData);
    console.log(store?.store);
    console.log(formDataLoja);
    if(pf){
      const updates = {
        email: formData.email,
        document: formData.documento,
        name: formData.nome,
        image: imageSrc, 
        // falta phone, como coloco ele se não existia antes para ser atualizado?
      };
    }
    else{
      const updates = {
        name: formDataLoja.nomeComercio,
        document: formDataLoja.documentoComercio,
        // CEP: formDataLoja.CEP,
        image: imageSrc, 
        // falta CEP, como coloco ele se não existia antes para ser atualizado?
      };
    }
  };

  // Tradução dos dias da semana para a schedule
  const daysMap: { [key: string]: 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun' } = {
    Dom: 'sun',
    Seg: 'mon',
    Ter: 'tue',
    Qua: 'wed',
    Qui: 'thu',
    Sex: 'fri',
    Sáb: 'sat',
  };
  
  const cards: CardType[] = [
    // Get all user credit cards? como guarda essa informação
    {
      id: 1,
      image: 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/BR-PT/mcbc_refeicao-rev_84px.png', 
      // Bandeira do cartão
      proprietario: 'Your Name',
      type: 'Crédito',
      numbers: '9568'
    },
    {
      id: 2,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCsZg16ImZEEpz3t_QlBtxvFjYUej92jx-wA&s',
      proprietario: 'Another Name',
      type: 'Crédito',
      numbers: '1234 9568'
    },
  ];

  // Informações para o .map dos inputs de usuário
  const campoDadosCliente = [
    { label: 'Nome', type: 'text', name: 'nome', placeholder: 'Seu Nome' },
    { label: 'CPF ou CNPJ', type: 'text', name: 'documento', placeholder: '123.456.789-10' },
    { label: 'E-mail', type: 'text', name: 'email', placeholder: 'seuemail@email.com' },
    { label: 'Telefone', type: 'text', name: 'phone', placeholder: '+55 ddd 00000-0000' },
  ];
  const campoDadosLoja = [
    { label: 'Nome do Comércio', type: 'text', name: 'nomeComercio', placeholder: 'Seu Nome' },
    { label: 'CPF ou CNPJ', type: 'text', name: 'documentoComercio', placeholder: '123.456.789-10' },
    { label: 'CEP', type: 'text', name: 'CEP', placeholder: 'seuemail@email.com' },
  ];

  // Endereços cadastrados do usuário
  const addresses = [
    // Get address? nao encontrei no postman
    {
      id: 1,
      city: 'São Carlos',
      state: 'São Paulo',
      street: '7 de Setembro',
      zipCode: '13560-270',
      number: '2111',
      district: 'Centro',
      complement: 'Apto 45'
    },
  ];
  
  // verificação da role do usuário
  const [pf, setPF] = useState(true)
  function changeType(pf: boolean) {
    console.log(pf);
    setPF(pf);
  }

  const dadosCondicionais = pf? campoDadosCliente : campoDadosLoja;
  return (
    <>
    {/* Espera carregar e verifica se o usuário foi coletado antes de exibir a tela */}
    {!loading && userData? (
      <>
      {/* ----------------------- HEADER ----------------------- */}
      <Header transparent={false}></Header>

      {/* Título */}
      <Center>
        <Titulo>Gerenciar Dados</Titulo>
        <RedLine/>
      </Center>

      {/* perfil >> gerenciar dados */}
      <InfoPage style={{marginBottom: 0}}>
        <NoWrap>Perfil</NoWrap>
        <BsChevronDoubleRight/>
        <AtualPage>Gerenciar dados</AtualPage>
      </InfoPage>

      {/* Botões meu perfil / meu negócio */}
      <Center>
        <FLEXROW style={{width: '100%'}}>
          {/* Meu perfil (pf=true) */}
          <ButtonRole style={{marginRight: rw(10)}} isActive={pf} onClick={() => pf? null : changeType(true)}>
            <Icon icon="material-symbols:person" width={rw(30)} style={{
              color: pf ? '#32cf15': THEME.COLORS.GRAY_300,
              marginRight: "10px"
            }}/>
            Meu perfil
          </ButtonRole>

          {/* meu negócio (pf=false) */}
          <ButtonRole style={{marginLeft: rw(10)}} isActive={!pf} onClick={() => pf? (userData.user.role == 'client'? alert('Clientes não tem negócio') : changeType(false)) : null}>
            <Icon icon="ic:round-business-center" width={rw(30)} style={{
              color: pf? THEME.COLORS.GRAY_300 : '#32cf15',
              marginRight: "10px"
            }}/>
            Meu negócio
          </ButtonRole>
        </FLEXROW>

        {/* BANNER DA LOJA */}
        {!pf && (
          <BannerWrapper style={{marginBottom: rh(50)}}>
            <BannerImage src={bannerSrc} alt="Banner da Loja" />
            <EditImgContainer>
              <AddImg id="banner-upload" type="file" accept="image/*" onChange={handleBannerChange} />
              <IconEditBanner htmlFor="banner-upload"><BsFillPencilFill /></IconEditBanner>
            </EditImgContainer>
          </BannerWrapper>
        )}

        {/* Imagem de perfil */}
        <div style={{marginBottom: rh(60)}}>
          <Image src={imageSrc} alt="Perfil"/>
          <EditImgContainer>
            <AddImg id="selecao-arquivo" type="file" accept="image/*" onChange={handleImageChange} />
            <IconEdit htmlFor='selecao-arquivo'><BsFillPencilFill/></IconEdit>
          </EditImgContainer>
        </div>
        
        {/* Container de informações */}
        <DatasWrapper>

          {/* Dados pessoais */}
          <Data>
            <TEXT style={{fontWeight: 500}}>Dados {pf? 'Pessoais' : 'Empresariais'}</TEXT>
            <Container style={{width: '100%'}}>
              {/* Inputs de dados */}
              {dadosCondicionais.map(({ label, type, name, placeholder }) => (
                <div key={name} style={{ width: '100%' }}>
                  <InputsWrapper>
                    <TEXT style={{fontWeight: 400}}>{label}</TEXT>
                    <INPUT
                      type={type}
                      name={name}
                      placeholder={placeholder}
                      value={pf
                        ? formData[name as keyof typeof formData] 
                        : formDataLoja[name as keyof typeof formDataLoja] as string}
                      onChange={handleChange}
                    />
                  </InputsWrapper>
                </div>
              ))}
            </Container>
          </Data>

          {/* Endereço de entrega */}
          <Data style={{marginLeft: rw(15)}}>
            <TEXT style={{fontWeight: 500}}>Endereço {pf? 'de entrega' : 'comercial'}</TEXT>
            {pf && (
              <NewAddress>
                <span>Adicionar Novo Endereço De Entrega</span>
              </NewAddress>
            )}
            {/* Endereços cadastrados */}
            <div>
              {addresses.map((address) => (
                <Addresses>
                {/* Rua, número */}
                <Span>
                  <BsGeoAltFill style={{marginRight: rw(6)}}/>
                  <span>{`${address.street}, ${address.number}`}</span>
                </Span>
                {/* Cep, Cidade, Estado */}
                <Span>
                  <BsGeoAltFill style={{marginRight: rw(6)}}/>
                  <span>{`${address.zipCode}, ${address.city}, ${address.state}`}</span>
                </Span>
                {/* Complemento, Bairro */}
                <Span>
                  <BsGeoAltFill style={{marginRight: rw(6)}}/>
                  <span>{`${address.complement}, ${address.district}`}</span>
                </Span>

                {/* Botões alterar e excluir endereço */}
                <ModifyAdress>
                  <span style={{cursor: 'pointer', marginRight: '20px'}}>Alterar</span>
                  <span style={{marginRight: '20px'}}>|</span>
                  <span style={{cursor: 'pointer'}}>Excluir</span>
                </ModifyAdress>
                </Addresses>
              ))}
            </div>
          </Data>
        </DatasWrapper>

        {/* AGENDA DE HORÁRIOS DE FUNCIONAMENTO */}
        {!pf && (
            <ScheduleContainer>
              <ScheduleTitle>Horário de Funcionamento</ScheduleTitle>

              <ScheduleList>
                {/* Títulos da tabela */}
                <ScheduleHeader>
                  <HeaderColumn>Dia</HeaderColumn>
                  <HeaderColumn>Horário Início</HeaderColumn>
                  <HeaderColumn>Horário Fim</HeaderColumn>
                </ScheduleHeader>

                {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map((dia) => {
                  const day = daysMap[dia]; // traduzindo

                  // Horários de abertura e fechamento
                  const openingTime = store?.store[0]?.schedule[0]?.openingTime[day] || '00h00';
                  const closingTime = store?.store[0]?.schedule[0]?.closingTime[day] || '00h00';

                  return (
                    <ScheduleItem key={day}>
                      {/* Seg, Ter, Quar... */}
                      <ItemColumn>{dia}</ItemColumn>
                      {/* Horário de Abertura */}
                      <ItemColumn>
                        <TimeSelect defaultValue={openingTime}>
                          {/* 24 horas */}
                          {Array.from({ length: 24 }, (_, i) => (
                            <option key={i} value={`${i.toString().padStart(2, '0')}h00`}>
                              {`${i.toString().padStart(2, '0')}h00`}
                            </option>
                          ))}
                        </TimeSelect>
                      </ItemColumn>
                      {/* Horário de Fechamento */}
                      <ItemColumn>
                        <TimeSelect defaultValue={closingTime}>
                          {Array.from({ length: 24 }, (_, i) => (
                            <option key={i} value={`${i.toString().padStart(2, '0')}h00`}>
                              {`${i.toString().padStart(2, '0')}h00`}
                            </option>
                          ))}
                        </TimeSelect>
                      </ItemColumn>
                    </ScheduleItem>
                  );
                })}
              </ScheduleList>
            </ScheduleContainer>
        )}

        {/* Cartões */
        pf && (
          <TEXT style={{fontWeight: 500}}>Cartões</TEXT>
        )}
        {pf && cards.length > 0 ?(
          <>
          {cards.map((card) => (
            <Card style={{cursor: 'default'}} key={card.id} isActive={false}>
              <InfosWrapper>
                <img style={{width: rw(50)}} src={card.image} alt="cardImg"/>
                <InfosCard>
                  <span>{card.proprietario} • {card.type} </span>
                  <CardNumbers isActive={false}> •••• {card.numbers.slice(-4)} </CardNumbers> {/* **** ultimos 4 numeros */}
                </InfosCard>
              </InfosWrapper>
              {/*  FALTA MODAL, MAIS OPÇÕES (:) */}
              <MoreOptions style={{cursor: 'pointer'}} isActive={false}> <BsThreeDotsVertical/> </MoreOptions>
            </Card>
          ))}
          </>
        ): null}
        {pf && (
          <FlexEnd>
            {/* FALTA MODAL - ADICIONAR CARTÃO */}
            <AddCard style={{color: 'black'}}> <BsPlus/> <NoWrap> Adicionar cartão </NoWrap> </AddCard>
          </FlexEnd>
        )}
        
        {/* Botão Salvar */}
        <ActionButton style={{marginBottom: rh(40)}} onClick={handleSubmit}> Salvar </ActionButton>
      </Center>
      {/* ----------------------- FOOTER ----------------------- */}
      <Footer />
      </>
    ) : (
      <PulseLoader style={{width: '100%', height:'100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} color={THEME.COLORS.PRIMARY} />
    )}
    </>
  );
};

export default GerenciarDadosCadastrais;