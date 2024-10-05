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
interface AdicionalComponentProps {
    adicional: Adicional;
    onUpdateAdicional: (updatedAdicional: Adicional) => void;
}

const AdicionalComponent: React.FC<AdicionalComponentProps> = ({ adicional, onUpdateAdicional }) => {
    //estado modal
    const [isModalOpen, setIsModalOpen] = useState(false);
    //controle de edição dos complementos
    const [editedAdicional, setEditedAdicional] = useState<Adicional>(adicional);  

    const handleOpenModal = () => {
        setEditedAdicional(adicional); // Load the current adicional info
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
    const [adicionais, setAdicionais] = useState<Adicional[]>([]);
    const [storeName, setStoreName] = useState('');
    const [categories, setCategories] = useState<{
        parentCategoryId: string; label: string; value: string 
}[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<{ label: string; value: string } | null>(null);
    const [subCategories, setSubCategories] = useState<{ label: string; value: string }[]>([]); 
    const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null); 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isImportModalOpen, setIsImportModalOpen] = useState(false);
    const [importSelectedCategory, setImportSelectedCategory] = useState<string | null>(null);
    const [importFilteredSubCategories, setImportFilteredSubCategories] = useState<{ label: string; value: string }[]>([]);
    const [importSelectedSubCategory, setImportSelectedSubCategory] = useState<string | null>(null);
    const [importSelectedProduct, setImportSelectedProduct] = useState<string | null>(null);

    const [newAdicional, setNewAdicional] = useState<Adicional>({
        id: Date.now(),  // ID unico pra cada adicional (não sei se é o melhor método, mas funciona)
        name: '',
        optional: true,
        description: null,
        quantity: null,
        price: 0.0,
    });

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
        console.log("Uploaded Image: ", imageFile);
    };
    

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0.0);

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
    
    

    const handleAddAdicional = (adicional: Adicional) => {
        setAdicionais((prevAdicionais) => [...prevAdicionais, adicional]);
    };

    const handleUpdateAdicional = (updatedAdicional: Adicional) => {
        setAdicionais((prevAdicionais) =>
            prevAdicionais.map((adicional) =>
                adicional.id === updatedAdicional.id ? updatedAdicional : adicional
            )
        );
    };

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

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const user = getUser().user_id;  

        const imageSrc = uploadedImage ? uploadedImage : Default;

        const formattedOutput = {
            name: nome || "",
            price: preco,
            quantity: null,
            minQuantity: null,
            maxQuantity: null,
            description: descricao || "",
            image: imageSrc,
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
            }))
        };

        console.log(JSON.stringify(formattedOutput, null, 2));

        await api.post(`product`, formattedOutput, {
            headers: {
                "Authorization": `Bearer ${getToken()}`,
                "Content-Type": "application/json"
            },
        })
        .then((response) => {
            console.log("Product created successfully:", response.data);
        })
        .catch((error) => {
            console.error("Error creating product:", error.response?.data || error.message);
        });
    
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
                        <ImageUpload defaultImageSrc={Default} onImageUpload={handleImageUpload} />
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
                            <Select 
                                title="Categoria" 
                                options={categories} 
                                onCategorySelect={handleImportMainCategorySelect} 
                            />

                            {importSelectedCategory && (
                                <Select 
                                    title="Sub-categoria" 
                                    options={importFilteredSubCategories} 
                                    onCategorySelect={handleImportSubCategorySelect} 
                                />
                            )}

                            {importSelectedSubCategory && (
                                <Select 
                                    title="Produto" 
                                    options={importFilteredSubCategories}
                                    onCategorySelect={handleImportProductSelect} 
                                />
                            )}

                            <button type="button" onClick={handleCloseImportModal} className="saveAdicional">
                                Fechar
                            </button>
                        </form>
                    </div>
                </ModalPopup>
            )}


            <Footer />
        </>
    );
}

export default RegisterProduct;