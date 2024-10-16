import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import { getUser } from '../../utils/user-token-request';
import { getToken } from "../../utils/get-cookie";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfileIcon from "../../assets/profileLojista.png";
import {
  PageWrapper,
  ContentWrapper,
  LocationIcon,
  SearchIcon,
  CloseIcon,
  FilterIcon,
  StarIcon,
  SearchWrapper,
  ClockIcon
} from './styles';

function Search() {
  const [categories, setCategories] = useState<any>([]);
  const [nearStores, setNearStores] = useState<any>([]);
  const [user, setUser] = useState<any>();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState<number>();
  const [search, setSearch] = useState<string>('');
  const [type, setType] = useState<'lojas' | 'produtos'>('lojas');
  const navigate = useNavigate();

  async function getCategories() {
    api.get('/category', {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }).then(response => {
      setCategories(response.data);
    }).catch(error => {
      alert('Ops! ocorreu um erro: ' + error);
    });
  }

  async function getAddresses() {
    const tempUser = getUser();
    api.get(`/user/${tempUser.user_id}/addresses`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    }).then(response => {
      setAddresses(response.data.addresses);
      setUser(tempUser);
    }).catch(error => {
      alert('Ops! ocorreu um erro: ' + error);
    });
  }

  async function getNearStores() {
    api.get(`/nearStores?lat=-22.014084860157908&long=-47.89230032883634`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    }).then(response => {
      setNearStores(response.data.store);
    }).catch(error => {
      alert('Ops! ocorreu um erro: ' + error);
    });
  }

  useEffect(() => {
    getCategories();
    getAddresses();
    getNearStores();
  }, []);

  const translation: any = {
    restaurant: 'Restaurante',
    supermarket: 'Supermercado',
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    if (selectedValue === "-2") {
      navigate('/');
    } else {
      setSelectedAddress(parseInt(selectedValue));
    }
  };

  let content = <></>;

  // Renderização condicional com base no tipo e busca
  if (search === '') {
    content = (
      <>
        {categories.map((category: any, index: number) => (
          <div key={index} className="category">
            <p>{category.name}</p>
          </div>
        ))}
      </>
    );
  } else if (type === 'lojas') {

    // Filtrar lojas com base na busca
    const filteredStores = nearStores.filter((store: any) =>
      store.name.toLowerCase().includes(search.toLowerCase())

    );
    content = (
      <>
        {filteredStores.map((store: any, index: number) => (
          <div key={index} className="store">
            <img src={ProfileIcon} alt="" />
            <div className="storeInfo">
              <section>
                <p style={{ fontWeight: 'bold' }}>{store.name}</p>
                {store.rating !== null ? (
                  <p style={{ display: "flex", gap: "5px" }}><StarIcon /> {store.rating}</p>
                ) : (
                  <></>
                )}
              </section>
              <p>{translation[store.category]}</p>
              <p style={{ display: "flex", alignItems: "center", gap: '5px' }}>
                <ClockIcon /> 23 a 30min - R$ {store.deliveryFee.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  }

  return (
    <PageWrapper>
      <Header transparent={false} />
      <ContentWrapper>
        <div className="adressInput">
          <p>
            <LocationIcon />
            <select onChange={handleSelectChange}>
              {addresses.length > 0 ? (
                addresses.map((address, index) => (
                  <option key={index} value={index}>
                    {address}
                  </option>
                ))
              ) : (
                <option value="-1">Nenhum endereço cadastrado</option>
              )}
              <option value="-2">Adicionar novo endereço</option>
            </select>
          </p>
        </div>
        <div className="searchBar">
          <SearchIcon />
          <input
            type="text"
            placeholder="Busque por uma loja"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <CloseIcon onClick={() => setSearch('')} />
        </div>

        <div className="type">
          <section className={type === 'lojas' ? 'active' : ''} onClick={() => setType('lojas')}>
            <p>LOJAS</p>
            <hr className={type === 'lojas' ? 'active' : ''} />
          </section>
          <section className={type === 'produtos' ? 'active' : ''} onClick={() => setType('produtos')}>
            <p>PRODUTOS</p>
            <hr className={type === 'produtos' ? 'active' : ''} />
          </section>
        </div>
        <div className="filter">
          <section>
            <p>Filtros</p>
            <FilterIcon />
          </section>
          <section>
            <p>Distância</p>
            <FilterIcon />
          </section>
          <section>
            <p>Cidade</p>
            <FilterIcon />
          </section>
        </div>
        <SearchWrapper>
          {content}
        </SearchWrapper>
      </ContentWrapper>
      <Footer />
    </PageWrapper>
  );
}

export default Search;
