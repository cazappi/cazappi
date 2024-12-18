import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { responsiveWidth as rw, responsiveHeight as rh, responsiveFontSize as rf} from '../../utils/responsive-functions';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";
import PulseLoader from "react-spinners/PulseLoader";
import { THEME } from "../../theme";
import { getToken } from "../../utils/get-cookie";
import { clearToken } from "../../utils/clear-cookie";
import { BsChevronDoubleRight, BsThreeDotsVertical, BsPlus, BsGeoAltFill} from 'react-icons/bs';
import { AtualPage, Center, InfoPage, NoWrap, RedLine, Titulo } from "../RegisterProduct/style";
import { Container, INPUT, InputsWrapper, TEXT, Title } from "../SignUp/style";
import { AddCard, Card, CardNumbers, FlexEnd, InfosCard, InfosWrapper, MoreOptions } from "../BagPagment/style";
import { DatasWrapper, Data, NewAddress, Addresses, Span, ModifyAdress} from "./style";
import { ActionButton } from "../EditProduct/style";
import EditingAdress from "../../components/EditingAdress";
import RoleButtons from "../../components/RoleButtons";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import Schedule from "../../components/Schedule";

interface userProps {
  user: {
    email: string,
    id: string,
    document: string,
    documentType: string,
    role: string,
    name: string,
    confirmedEmail: boolean,
    isUserDeleted: boolean,
    image: string
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
          thur: string;
          fri: string;
          sat: string;
          sun: string;
        }
        closingTime: {
          mon: string;
          tue: string;
          wed: string;
          thur: string;
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
      complement: null
    }]
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

  // Imagem e banner da loja para pré-visualização
  const [imageSrc, setImageSrc] = useState('');
  const [bannerSrc, setBannerSrc] = useState('');

  // Imagem e banner da loja para atualização
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [bannerFile, setBannerFile] = useState<File | null>(null);
  const [addresses, setAddresses] = useState([
    {
      id: 0,
      city: '',
      state: '',
      street: '',
      zipCode: '',
      number: '',
      district: '',
      complement: ''
    },
  ]);

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
        // Salva informações em userData
        setUserData(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        }
      });
  }

  // Requisição das informações do lojista
  async function getStoreData() {
    if (userData?.user.role !== "client") {
      api.get(`store/${getUser().user_id}`, {
        headers: {
          "Authorization": `Bearer ${getToken()}`
        }
      })
        .then((response) => {
          // Guarda as informações em store e exibe a imagem e banner da loja
          setStore(response.data);
          if (!pf)
            setImageSrc(store?.store[0].imagePerfil || '');
            setBannerSrc(store?.store[0].imageBanner || '');
            setSchedule(response.data.store[0]?.schedule);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            clearToken();
            navigate("/unauthorized");
          }
        });
      }
  }

  async function getAddressesData() {
    api.get(`user/addresses`, {
      headers: {
        "Authorization": `Bearer ${getToken()}`
      }
    })
      .then((response) => {
        setAddresses(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          clearToken();
          navigate("/unauthorized");
        }
      });
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
    getAddressesData();
    if (userData && userData.user.role !== "client") {
      getStoreData();
    }
    setLoading(false);
    if (userData) {
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
    const { name, value } = e.target;
    // cliente
    if (pf) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
    // lojista
    else {
      setFormDataLoja((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const userUpdate = async () => {
    const updatesClient = {
      id: userData?.user.id,
      email: formData.email,
      document: formData.documento,
      documentType: (formData.documento.length === 11? 'cpf' : 'cnpj'),
      role: userData?.user.role,
      name: formData.nome,
      confirmedEmail: true, // não possui lógica de confirmação ainda
      isUserDeleted: false,
      image: '',
    };
    // imprimindo informações do objeto
    console.log(updatesClient)
    try {
      await api.put(`/user`, updatesClient, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      });
      alert("Dados do usuário atualizados com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar dados do usuário:", err);
      alert("Erro ao salvar dados do usuário.");
    }
  }

  const storeUpdate = async () => {
    const updatesLoja = {
      store: {
        accountNumber: store?.store[0].accountNumber,
        accountType: store?.store[0].accountType,
        agency: store?.store[0].agency,
        category: store?.store[0].category,
        delivery: store?.store[0].delivery,
        deliveryFee: 1, // ainda de forma constante
        document: formDataLoja.documentoComercio,
        documentType: formDataLoja.documentoComercio.length === 11 ? 'cpf' : 'cnpj',
        name: formDataLoja.nomeComercio,
        pickup: store?.store[0].pickup,
        pix: store?.store[0].pix,
        rating: 5, // tambem está de forma constante por enquanto
        serviceRadius: store?.store[0].serviceRadius,
        status: "open", // necessita comparação entre hora atual e hora de funcionamento (schedule)
        subCategory: store?.store[0].subCategory,
        schedule: schedule
      },
      address:
        [{
          city: "São Carlos",
          state: "SP",
          street: "Av. São Carlos",
          zipCode: "13566330",
          number: "3594",
          district: "Vila Costa do Sol",
          complement: null
        }],
      storeToUpdate: {
        shopkeeperId: userData?.user.id,
        name: store?.store[0].name,
      }
    };
    console.log(updatesLoja);
    try {
      await api.put(`/store`, updatesLoja, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      });
      alert("Dados da loja atualizados com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar dados da loja:", err);
      alert("Erro ao salvar dados da loja.");
    }
  }

  const createAddress = async () => {
    const newAddress = {
      city: "São Mateus" ,
      state: "São Martnis",
      street: "Maj. José Macedo",
      zipCode: "13560145",
      number: "243",
      district: "Interior",
      complement: "Apenas um dodoi",
      storeName: null,
      storeOwnerId: null,
      shopkeeperUserId: userData?.user.id,
      clientId: null,
    };
    try {
      await api.post(`user/address`, newAddress, {
        headers: {
          "Authorization": `Bearer ${getToken()}`,
        },
      });
      alert("Dados de endereço adicionados com sucesso!");
    } catch (err) {
      console.error("Erro ao atualizar dados do usuário:", err);
      alert("Erro ao salvar dados do usuário.");
    }
  }

  const imageUpdate = async (type: string) => {
    const formData = new FormData();
    const file = type === 'banner'? bannerFile : imageFile;
    if (file) {
      formData.append('file', file);
    }
    try {
      const response = await api.post(`storage/store/${type}/${userData?.user.id}/${store?.store[0].name}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          "Authorization": `Bearer ${getToken()}`,
        },
      });
      console.log('Sucesso:', response.data);
      alert('Imagem atualizada com sucesso');
    } catch (error) {
      console.error('Erro:', error);
    }
  }

  // Ao clicar em salvar, atualizar informações dos dados do usuário e da imagem de perfil
  const handleSubmit = async () => {
    // pf ? userUpdate() : storeUpdate();
    // imageUpdate('perfil');
    // imageUpdate('banner');
    //  console.log(store?.store[0]?.schedule[0]);
    createAddress();
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
  { label: 'CEP', type: 'text', name: 'CEP', placeholder: '00000-000' },
];

// Informações de endereço
const [isAddingNewAddress, setIsAddingNewAddress] = useState(false);
const [editingIndex, setEditingIndex] = useState<number | null>(null);

// PUXADO DA INTEGRAÇÃO DIRETO NO COMPONENTE EDITINGADRESS
const [editedAddresses, setEditedAddresses] = useState([
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
]);

const handleEditClick = (index: number) => {
  setEditingIndex(index); // Coloca o endereço no modo de edição
};

// Aqui o endereço é adicionado no nosso objeto, que será utilizado para atualizar na integração (editedAdresses)
const handleAddNewAddress = () => {
  // criando novo endereço
  const newAdress = {
    id: editedAddresses.length + 1,
    city: '',
    state: '',
    street: '',
    zipCode: '',
    number: '',
    district: '',
    complement: '',
  }
  // adicionando ele em nosso objeto
  setEditedAddresses([...editedAddresses, newAdress]);
  // definindo nosso novo endereço como modo de edição
  setEditingIndex(editedAddresses.length);
  // acionando modo de adição de endereço
  setIsAddingNewAddress(true);
};

// para salvar o novo endereço atualizado no nosso objeto de endereço
const handleSaveClick = (updatedAddress: typeof editedAddresses[0]) => {
  // recebe os nossos endereços guardados
  const updatedAddresses = [...editedAddresses];
  // se o endereço que está em modo de edição não for nulo
  if (editingIndex !== null) {
    // o endereço que estiver em modo de edição é atualizado para o endereço editado. 
    updatedAddresses[editingIndex] = updatedAddress;
  } 
  // atualiza os endereços com todos atualizados
  setEditedAddresses(updatedAddresses);

  // volta à página comum
  setEditingIndex(null);
  setIsAddingNewAddress(false);
};

// função para cancelar a adição de um novo endereço
const handleCancel = () => {
  // Salva a alteração e retorna ao modo de visualização
  setEditingIndex(null);
  setIsAddingNewAddress(false);
  // retira o último adicionado (endereço vazio que seria editado)
  setEditedAddresses((prev) => prev.slice(0, -1));
};

// Delete do endereço selecionado
const handleDeleteAddress = (index: number) => {
  setEditedAddresses((prev) => prev.filter(address => address.id !== index));
};

// Agenda de horários
const initialSchedule = Array.isArray(store?.store[0]?.schedule[0]) && store? store.store[0].schedule[0] : [{
  openingTime: {
    sun: '00h00',
    mon: '00h00',
    tue: '00h00',
    wed: '00h00',
    thur: '00h00',
    fri: '00h00',
    sat: '00h00',
  },
  closingTime: {
    sun: '00h00',
    mon: '00h00',
    tue: '00h00',
    wed: '00h00',
    thur: '00h00',
    fri: '00h00',
    sat: '00h00',
  },
}];
const [schedule, setSchedule] = useState(initialSchedule);

// Atualização da agenda quando ocorre mudanças
const handleScheduleChange = (
  day: string,
  type: 'openingTime' | 'closingTime',
  value: string
) => {
  setSchedule((prev) => {
    if (!Array.isArray(prev)) return prev;

    const updatedSchedule = [...prev];
    updatedSchedule[0] = {
      ...updatedSchedule[0],
      [type]: {
        ...updatedSchedule[0][type],
        [day]: value,
      },
    };
    return updatedSchedule;
  });
};

// verificação da role do usuário
const [pf, setPF] = useState(true)

function changeType(pf: boolean) {
  console.log(pf);
  setPF(pf);
}

const dadosCondicionais = pf ? campoDadosCliente : campoDadosLoja;
return (
  <>
  {/* Espera carregar e verifica se o usuário foi coletado antes de exibir a tela */}
  {!loading && userData ? (
    <>
    {/* ----------------------- HEADER ----------------------- */}
    <Header transparent={false}></Header>

    {/* Título */}
    <Center>
      <Titulo>{editingIndex == null ? 'Gerenciar Dados' : isAddingNewAddress ? 'Adicionar Endereço ' : 'Editar Endereço'}</Titulo>
      <RedLine />
    </Center>

    {/* perfil >> gerenciar dados */}
    <InfoPage style={{ marginBottom: 0 }}>
      <NoWrap>Perfil</NoWrap>
      <BsChevronDoubleRight />
      <AtualPage>Gerenciar dados</AtualPage>
    </InfoPage>

    <Center>
      {/* Botões meu perfil / meu negócio */} 
      <RoleButtons
        isActive={pf} 
        onChangeType={(value) => changeType(value)}
        leftLabel="Meu perfil"
        rightLabel="Meu negócio"
        disableRight={userData?.user.role === 'client'}
      />
        
      {/* Tela de edição e adição de endereços */}
      {editingIndex !== null ? (
        <EditingAdress              
          address={editedAddresses[editingIndex]}
          onSave={handleSaveClick}
          onCancel={handleCancel}
          adding={isAddingNewAddress}
        />
      ) :
      (
        <>
        {!pf && (
          <>
          {/* BANNER DA LOJA */}
          <ImageUpload
            defaultImageSrc={bannerSrc}
            onChange={(newSrc, file) => {setBannerSrc(newSrc); setBannerFile(file)}}
            altText="Banner da Loja"
            inputId="banner"
          />

          <Center>
          {/* Imagem da loja */}
          <ImageUpload
            defaultImageSrc={imageSrc}
            onChange={(newSrc, file) => {setImageSrc(newSrc); setImageFile(file)}}
            altText="Perfil da Loja"
            inputId="perfil"
            type="profile"
          />
          </Center>
        </>
        )}

        {/* Container de informações */}
        <DatasWrapper>
          {/* Dados pessoais */}
          <Data>
            <TEXT style={{ fontWeight: 500 }}>Dados {pf ? 'Pessoais' : 'Empresariais'}</TEXT>
            <Container style={{ width: '100%' }}>
              {/* Inputs de dados */}
              {dadosCondicionais.map(({ label, type, name, placeholder }) => (
                <div key={name} style={{ width: '100%' }}>
                  <InputsWrapper>
                    <TEXT style={{ fontWeight: 400 }}>{label}</TEXT>
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

          {/* Endereço de entrega ou comercial */}
          <Data style={{ marginLeft: rw(15) }}>
            <TEXT style={{ fontWeight: 500 }}>Endereço {pf ? 'de entrega' : 'comercial'}</TEXT>
            {pf && (
              <NewAddress onClick={handleAddNewAddress}>
                <span>Adicionar Novo Endereço De Entrega</span>
              </NewAddress>
            )}
            {/* Endereços cadastrados */}
            <div style={{ overflow: 'auto', height: '60%' }}>
              {editedAddresses.map((address, index) => (
                <Addresses>
                  {/* Rua, número */}
                  <Span>
                    <BsGeoAltFill style={{ marginRight: rw(6) }} />
                    <span>{`${address.street}, ${address.number}`}</span>
                  </Span>
                  {/* Cep, Cidade, Estado */}
                  <Span>
                    <BsGeoAltFill style={{ marginRight: rw(6) }} />
                    <span>{`${address.zipCode}, ${address.city}, ${address.state}`}</span>
                  </Span>
                  {/* Complemento, Bairro */}
                  <Span>
                    <BsGeoAltFill style={{ marginRight: rw(6) }} />
                    <span>{`${address.complement}, ${address.district}`}</span>
                  </Span>
                  {/* Botões alterar e excluir endereço */}
                  <ModifyAdress>
                    <span style={{ cursor: 'pointer', marginRight: '20px' }} onClick={() => handleEditClick(index)}>Alterar</span>
                    <span style={{ marginRight: '20px' }}>|</span>
                    <span style={{ cursor: 'pointer' }} onClick={() => handleDeleteAddress(address.id)}>Excluir</span>
                  </ModifyAdress>
                </Addresses>
              ))}
            </div>
          </Data>
        </DatasWrapper>

        {/* AGENDA DE HORÁRIOS DE FUNCIONAMENTO */}
        {!pf && (
          <Schedule
          scheduleData={schedule[0]}
          onChange={handleScheduleChange}
          />
        )}
        
        {/* Cartões */
          pf && (
            <TEXT style={{ fontWeight: 500 }}>Cartões</TEXT>
          )}
        {pf && cards.length > 0 ? (
          <>
            {cards.map((card) => (
              <Card style={{ cursor: 'default' }} key={card.id} isActive={false}>
                <InfosWrapper>
                  <img style={{ width: rw(50) }} src={card.image} alt="cardImg" />
                  <InfosCard>
                    <span>{card.proprietario} • {card.type} </span>
                    <CardNumbers isActive={false}> •••• {card.numbers.slice(-4)} </CardNumbers> {/* **** ultimos 4 numeros */}
                  </InfosCard>
                </InfosWrapper>
                {/*  FALTA MODAL, MAIS OPÇÕES (:) */}
                <MoreOptions style={{ cursor: 'pointer' }} isActive={false}> <BsThreeDotsVertical /> </MoreOptions>
              </Card>
            ))}
          </>
        ) : null}
        {pf && (
          <FlexEnd>
            {/* FALTA MODAL - ADICIONAR CARTÃO */}
            <AddCard style={{ color: 'black' }}> <BsPlus /> <NoWrap> Adicionar cartão </NoWrap> </AddCard>
          </FlexEnd>
        )}
        {/* Botão Salvar */}
        <ActionButton style={{ marginBottom: rh(40) }} onClick={handleSubmit}> Salvar </ActionButton>
      </>
      )
      }
    </Center>
    {/* ----------------------- FOOTER ----------------------- */}
    <Footer />
    </>
  ) :
  (
    // Carregamento de tela
    <PulseLoader style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} color={THEME.COLORS.PRIMARY} />
  )}
  </>
);
};

export default GerenciarDadosCadastrais;