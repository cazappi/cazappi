import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from "../../components/Footer/Footer";
import HeaderLojista from '../../components/HeaderLojista/HeaderLojista';
import { ActionButton, AtualPage, Center, InfoPage, Container, NoWrap, RedLine, Titulo, ModalPopup} from './style';
import InputDesktopLojista from '../../components/InputDesktopLojista/InputDesktopLojista';
import Select from '../../components/Select/Select';
import { RiPencilFill } from "react-icons/ri";
import ImageUpload from '../../components/ImageUpload/ImageUpload';
import { BsChevronDoubleRight } from 'react-icons/bs';
import Default from '../../assets/imgDefault.png'
import { getToken } from '../../utils/get-cookie';
import { getUser } from "../../utils/user-token-request";
import api from '../../services/api';
  
interface Adicional {
    id: number;
    name: string;
    optional: boolean;
    description: string | null;
    quantity: number | null;
    price: number;
}

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    categories: { id: number; name: string }[];
    complements: Adicional[];
}

interface AdicionalComponentProps {
    adicional: Adicional;
    onUpdateAdicional: (updatedAdicional: Adicional) => void;
}

// Component para mostrar/permitir editar cada complemento
const AdicionalComponent: React.FC<AdicionalComponentProps> = ({ adicional, onUpdateAdicional }) => {
    //estado modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    //controle de edição dos complementos
    const [editedAdicional, setEditedAdicional] = useState<Adicional>(adicional);  

    const handleOpenModal = () => {
        setEditedAdicional(adicional);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedAdicional((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        onUpdateAdicional(editedAdicional);  
        handleCloseModal();  
    };

    return (
        <div className='adicionalWrapper'>
            <div className='adicionalInfo'>
                <p className='label'>{adicional.name}</p>
                <p className='subtitle'>{adicional.description}</p>
            </div>
            <div className='adicionalPrice'>
                <p className='price'>R$ {adicional.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                <button className='editButton' onClick={handleOpenModal}>
                    <RiPencilFill className='buttonIcon' />
                </button>
            </div>

            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <InputDesktopLojista
                            label="Nome"
                            name="name"
                            value={editedAdicional.name}
                            onChange={handleInputChange}
                            required
                        />

                        <InputDesktopLojista
                            label="Descrição"
                            name="description"
                            value={editedAdicional.description || ''}
                            onChange={handleInputChange}
                        />

                        <InputDesktopLojista
                            label="Preço"
                            name="price"
                            value={editedAdicional.price.toString()}
                            onChange={handleInputChange}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                        />

                        <button onClick={handleFormSubmit} className='saveAdicional'>Salvar</button>
                    </div>
                </div>
            )}
        </div>
    );
};


function RegisterProduct() {
    const [adicionais, setAdicionais] = useState<Adicional[]>([]); // Lista de complementos
    const [storeName, setStoreName] = useState('');

    // Categorias e subcategorias para os Selects (Testar quando tivermos subcategorias no backend)
    const [categories, setCategories] = useState<{ parentCategoryId: string; label: string; value: string }[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; value: string } | null>(null);
    const [subCategories, setSubCategories] = useState<{ label: string; value: string }[]>([]); 
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null); 
    
    // modais
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    
    // Importação de complementos
    const [importSelectedCategory, setImportSelectedCategory] = useState<string | null>(null);
    const [importFilteredSubCategories, setImportFilteredSubCategories] = useState<{ label: string; value: string }[]>([]);
    const [importSelectedSubCategory, setImportSelectedSubCategory] = useState<string | null>(null);
    const [importedProducts, setImportedProducts] = useState<Product[]>([]);
    const [importSelectedProduct, setImportSelectedProduct] = useState<string | null>(null);
    const [productsLoaded, setProductsLoaded] = useState(false);  // Flag pra marcar se os produtos já foram carregados

    const navigate = useNavigate();

    const [newAdicional, setNewAdicional] = useState<Adicional>({
        id: Date.now(),  // ID unico pra cada adicional (não sei se é o melhor método, mas funciona :p)
        name: '',
        optional: true,
        description: null,
        quantity: null,
        price: 0.0,
    });

    // Função para buscar as categorias e subcategorias do lojista, além do nome da loja, já aproveitando a viagem
    async function getCategories() {
        await api.get(`category`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        }).then((response) => {
            const formattedCategories = response.data.map((category: any) => ({
                label: category.name,
                value: category.id.toString(),
                parentCategoryId: category.parentCategoryId,
            }));
            setCategories(formattedCategories);
        }).catch((err) => {
            alert("Ops! Ocorreu um erro: " + err);
        });
        
        await api.get(`store/${getUser().user_id}`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        }).then((response) => {
            setStoreName(response.data.store[0].name);
        }).catch((err) => {
            alert("erro: " + err);
        });
    }

    useEffect(() => {
        getCategories();
    }, []);

    // 'tentativa' de função pra pegar as subcategorias da categoria selecionada (testar quando tivermos subcategorias no backend)
    async function getSubCategories(categoryId: string) {
        await api.get(`category`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`,
            },
        })
        .then((response) => {
            const filteredSubCategories = response.data
                .filter((subcategory: any) => subcategory.parentCategoryId === categoryId)
                .map((subcategory: any) => ({
                    label: subcategory.name,  
                    value: subcategory.id.toString(),  
                }));
            setSubCategories(filteredSubCategories);  
        })
        .catch((err) => {
            alert("Ops! Ocorreu um erro: " + err);
        });
    }

    const [uploadedImage, setUploadedImage] = useState<File | null>(null);

    const handleImageUpload = (imageFile: File | null) => {
        setUploadedImage(imageFile);
    };
    
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0.0);

    // funções para abrir e fechar os modais de adição e importação de complementos
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenImportModal = () => {
        setIsImportModalOpen(true);
    };
    
    const handleCloseImportModal = () => {
        setImportedProducts([]);
        setImportSelectedProduct(null);
        setIsImportModalOpen(false);        
        setIsImportModalOpen(false);
    };

    const handleImportMainCategorySelect = (selectedValue: string) => {
        const selectedCategory = categories.find(category => category.value === selectedValue);
        
        if (selectedCategory) {
            setImportSelectedCategory(selectedValue);
            const subCategories = categories.filter(category => category.parentCategoryId === selectedValue);
            setImportFilteredSubCategories(subCategories);
        }
    };
        
    const handleImportSubCategorySelect = (selectedValue: string) => {
        setImportSelectedSubCategory(selectedValue);
    };
    
    const handleImportProductSelect = (selectedValue: string) => {
        setImportSelectedProduct(selectedValue);
    };

    //função para filtrar os produtos de acordo com a categoria e subcategoria selecionadas na importação
    const filteredProducts = importedProducts.filter(product => {
        const productCategoryId = product.categories[0].id;

        const isCategoryMatch = productCategoryId === parseInt(importSelectedCategory || '');

        // Olhar também a subcategoria
        const isSubCategoryMatch = importSelectedSubCategory
            ? productCategoryId === parseInt(importSelectedSubCategory)
            : true;

        return isCategoryMatch && isSubCategoryMatch;
    });

    //função para adicionar os complementos do produto importado
    const handleAddComplements = () => {
        const selectedProduct = importedProducts.find(product => product.id === importSelectedProduct);

        if (selectedProduct && selectedProduct.complements.length > 0) {
            const mappedComplements: Adicional[] = selectedProduct.complements.map((complement: Adicional) => ({
                id: Date.now(),
                name: complement.name,
                optional: complement.optional,
                description: complement.description,
                quantity: complement.quantity,
                price: complement.price,
            }));

            setAdicionais((prevAdicionais) => [...prevAdicionais, ...mappedComplements]);

            setImportedProducts([]);
            setImportSelectedProduct(null);
            setIsImportModalOpen(false);
        }
    };


    useEffect(() => {
        // Chama a API para buscar os produtos da categoria/subcategoria selecionada se a categoria (ou ambas) foram escolhidas
        if (importSelectedCategory) {
            const getProducts = async () => {
                try {
                    const response = await api.get(`product/${storeName}/${getUser().user_id}`, { 
                        headers: {
                            "Authorization": `Bearer ${getToken()}`
                        }
                    });
                    console.log(response.data);
                    setImportedProducts(response.data);
                } catch (error) {
                    alert("erro: " + error);
                } finally {
                    setProductsLoaded(true);
                }
            };

            getProducts();
        }
    }, [importSelectedCategory, importSelectedSubCategory, storeName]);

    
    //adicionar novo complemento
    const handleAddAdicional = (adicional: Adicional) => {
        setAdicionais((prevAdicionais) => [...prevAdicionais, adicional]);
    };

    //editar complemento
    const handleUpdateAdicional = (updatedAdicional: Adicional) => {
        setAdicionais((prevAdicionais) =>
            prevAdicionais.map((adicional) =>
                adicional.id === updatedAdicional.id ? updatedAdicional : adicional
            )
        );
    };

    //renderizar os complementos na tela
    const renderAdicionais = (adicionais: Adicional[]) => {
        return adicionais.map((adicional, index) => (
            <AdicionalComponent
                key={adicional.id}
                adicional={adicional}
                onUpdateAdicional={handleUpdateAdicional}
            />
        ));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        switch (name) {
            case 'nome':
                setNome(value);
                break;
            case 'descricao':
                setDescricao(value);
                break;
            case 'preco':
                setPreco(parseFloat(value));
                break;
            default:
                break;
        }
    };

    const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewAdicional((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,
        }));
    };

    const handleCategorySelect = (selectedValue: string) => {
        const selectedCategory = categories.find((category) => category.value === selectedValue);
        if (selectedCategory) {
            setSelectedCategory(selectedCategory);

            getSubCategories(selectedCategory.value); 
        }
    };

    const handleSubCategorySelect = (selectedValue: string) => {
        setSelectedSubCategory(selectedValue);
    };

    //função para adicionar o produto, de fato
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        //se não tiver imagem, não deixa adicionar >:(
        if (!uploadedImage) {
            alert('Selecione uma imagem para o produto.');
            return;
        }

        if (!selectedCategory) {
            alert('Selecione uma categoria para o produto.');
            return;
        }
    

        const user = getUser().user_id;  

        const formattedOutput = {
            name: nome || "",
            price: preco,
            quantity: null,
            minQuantity: null,
            maxQuantity: null,
            description: descricao || "",
            image: "imagem",
            category: selectedCategory ? selectedCategory.label : "",
            subCategory: selectedSubCategory ? selectedSubCategory : "",
            storeName: storeName || "",
            shopkeeperId: user,
            complements: adicionais.map(adicional => ({
                name: adicional.name || "",
                optional: adicional.optional,
                description: adicional.description || "",
                quantity: adicional.quantity || 1,
                price: adicional.price,
            })),
            categoryId: selectedCategory ? parseFloat(selectedCategory.value) : null,
        };

        // veja aqui como que o objeto formattedOutput está estruturado
        // console.log(JSON.stringify(formattedOutput, null, 2));

        try {
            const productResponse = await api.post(`product`, formattedOutput, {
                headers: {
                    "Authorization": `Bearer ${getToken()}`,
                    "Content-Type": "application/json"
                },
            });
    
            const productId = productResponse.data.id; 
    
            if (uploadedImage) {
                const formData = new FormData();
                formData.append('file', uploadedImage);    
                const imageResponse = await api.post(`/storage/product/productImage/${productId}`, formData, {
                    headers: {
                        "Authorization": `Bearer ${getToken()}`,
                        "Content-Type": "multipart/form-data"
                    },
                });
                
                // Se a imagem for enviada com sucesso, ver a resposta aqui:
                // console.log("Image upload response:", imageResponse.data);
            }
    
            // Navegar para os produtos depois de adicionar o novo produto
            navigate('/profileLojista/gerenciarProdutos/produtos');
        } catch (error) {
            const err = error as any;
            console.log("Erro:" + err.response?.data || err.message);
            console.error("Detalhes do erro:", err);
        }
        
    };
        
    const handleModalFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddAdicional(newAdicional);
        handleCloseModal();

        setNewAdicional({
            id: Date.now(),
            name: '',
            optional: true,
            description: null,
            quantity: null,
            price: 0.0,
        });
    };

    return (
        <>
            <HeaderLojista transparent={false}></HeaderLojista>
            <Center>
                <Titulo>Cadastrar Novo Produto</Titulo>
                <RedLine />
            </Center>
            <InfoPage>
                <NoWrap>Gerenciar Produtos</NoWrap>
                <BsChevronDoubleRight />
                <AtualPage>Cadastrar novo produto</AtualPage>
            </InfoPage>

            <form onSubmit={handleFormSubmit}>
                <Center>
                    <Container>
                        <ImageUpload defaultImageSrc={Default} onImageUpload={handleImageUpload}/>
                        <InputDesktopLojista
                            label="Nome"
                            name="nome"
                            value={nome}
                            onChange={handleInputChange}
                            required
                        />
                        <InputDesktopLojista
                            label="Descrição"
                            name="descricao"
                            value={descricao}
                            onChange={handleInputChange}
                        />
                        <InputDesktopLojista
                            label="Preço"
                            name="preco"
                            value={preco.toString()}
                            onChange={handleInputChange}
                            type="number"
                            min="0.01"
                            step="0.01"
                            required
                        />
                        <Select title="Categoria" options={categories} onCategorySelect={handleCategorySelect} />
                        {selectedCategory && (
                            <Select title="Subcategoria" options={subCategories} onCategorySelect={handleSubCategorySelect} />
                        )}

                        <p className='additionalsTitle'>Complementos</p>

                        {renderAdicionais(adicionais)}

                        <div className='buttonsHolder'>
                            <div className='sizeHelper'>
                                <button type="button" onClick={handleOpenModal} className='newAdditional'>
                                    Cadastrar novo complemento
                                </button>
                                <button type="button" onClick={handleOpenImportModal} className='importAdditionals'>
                                    Importar complementos
                                </button>
                            </div>
                        </div>
                    </Container>

                    <ActionButton type="submit">Adicionar</ActionButton>
                </Center>
            </form>

            {isModalOpen && (
                <ModalPopup onClick={handleCloseModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <form onSubmit={handleModalFormSubmit}>
                            <InputDesktopLojista
                                label="Nome"
                                name="name"
                                value={newAdicional.name}
                                onChange={handleModalInputChange}
                                required
                            />
                            <InputDesktopLojista
                                label="Descrição"
                                name="description"
                                value={newAdicional.description || ''}
                                onChange={handleModalInputChange}
                            />
                            <InputDesktopLojista
                                label="Preço"
                                name="price"
                                value={newAdicional.price.toString()}
                                onChange={handleModalInputChange}
                                type="number"
                                min="0.01"
                                step="0.01"
                                required
                            />
                            <button type="submit" className="addAdicional">Adicionar Complemento</button>
                        </form>
                    </div>
                </ModalPopup>
            )}

            {isImportModalOpen && (
                <ModalPopup onClick={handleCloseImportModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <form>
                            <div className="selectWrapper">
                                <Select 
                                    title="Categoria" 
                                    options={categories} 
                                    onCategorySelect={handleImportMainCategorySelect}
                                />
                            </div>

                            {importSelectedCategory && (
                                <div className="selectWrapper">
                                    <Select 
                                        title="Sub-categoria" 
                                        options={importFilteredSubCategories} 
                                        onCategorySelect={handleImportSubCategorySelect} 
                                    />
                                </div>
                            )}

                            {importSelectedSubCategory && (
                                <div className="selectWrapper">
                                    <Select 
                                        title="Produto" 
                                        options={importFilteredSubCategories}
                                        onCategorySelect={handleImportProductSelect} 
                                    />
                                </div>
                            )}

                            {productsLoaded && (  // Só ver os produtos depois de carregados
                                filteredProducts.length > 0 ? (
                                    <div className="selectWrapper">
                                        <Select 
                                            title="Produtos" 
                                            options={filteredProducts.map(product => ({ value: product.id, label: product.name }))}
                                            onCategorySelect={handleImportProductSelect} 
                                        />
                                    </div>
                                ) : (  // Se nenhum produto for encontrado com isso, mostrar mensagem
                                    <p className='noProducts'>Nenhum produto encontrado.</p>
                                )
                            )}

                            {importSelectedProduct && (
                                <button type="button" onClick={handleAddComplements} className="addComplements">
                                    Importar
                                </button>
                            )}
                        </form>
                    </div>
                </ModalPopup>
            )}


            <Footer />
        </>
    );
}

export default RegisterProduct;