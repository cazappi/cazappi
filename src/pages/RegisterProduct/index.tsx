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

const Categorias = [
    { value: 'cat1', label: 'Categoria 1' },
    { value: 'cat2', label: 'Categoria 2' },
    { value: 'cat3', label: 'Categoria 3' },
];
  
interface Adicional {
    id: number;  // Add a unique ID for each Adicional
    name: string;
    optional: boolean;
    description: string;
    quantity: number;
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

    // Open modal with current adicional data
    const handleOpenModal = () => {
        setEditedAdicional(adicional); // Load the current adicional info
        setIsModalOpen(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // Handle input changes in the modal
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedAdicional((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,  // Ensure price is a number
        }));
    };

    // Submit form and update adicional
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent form from refreshing the page
        console.log("Form Submitted", editedAdicional);  // Debugging line to check if form submission is being caught
        onUpdateAdicional(editedAdicional);  // Update only the specific Adicional
        handleCloseModal();  // Close modal after update
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
            {/* Input for Nome */}
            <InputDesktopLojista
                label="Nome"
                name="name"
                value={editedAdicional.name}
                onChange={handleInputChange}
                required
            />

            {/* Input for Descrição */}
            <InputDesktopLojista
                label="Descrição"
                name="description"
                value={editedAdicional.description}
                onChange={handleInputChange}
                required
            />

            {/* Input for Preço */}
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

            {/* Submit Button */}
            <button onClick={handleFormSubmit} className='saveAdicional'>Salvar</button> {/* Replace submit with onClick */}
        </div>
    </div>
)}
        </div>
    );
};


function RegisterProduct() {
    const [adicionais, setAdicionais] = useState<Adicional[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAdicional, setNewAdicional] = useState<Adicional>({
        id: Date.now(),  // Unique ID
        name: '',
        optional: true,
        description: '',
        quantity: 1,
        price: 0.0,
    });

    //controle de imagem do produto
    const [uploadedImage, setUploadedImage] = useState<File | null>(null);

    // Handle image upload
    const handleImageUpload = (imageFile: File | null) => {
        setUploadedImage(imageFile);
        console.log("Uploaded Image: ", imageFile);
    };
    

    // Inputs for Nome, Descrição, Preço in the main form
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState(0.0);

    // Function to open modal for adding a new "Adicional"
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Function to close modal
    const handleCloseModal = () => {
        setIsModalOpen(false);
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
                key={adicional.id}  // Use id as key for better performance
                adicional={adicional}
                onUpdateAdicional={handleUpdateAdicional}
            />
        ));
    };

    // Handle input changes for Nome, Descrição, Preço in the main form
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

    // Handle input changes for Nome, Descrição, Preço in the modal form
    const handleModalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setNewAdicional((prev) => ({
            ...prev,
            [name]: name === 'price' ? parseFloat(value) : value,  // Ensure price is a number
        }));
    };

    // Handle form submission for the main form
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    
        // If there's an uploaded image, get its name or path; if not, use the default image
        const imageSrc = uploadedImage ? uploadedImage : Default;
    
        const formattedOutput = {
            name: nome,  // From input
            price: preco,  // From input
            quantity: 50,  // Constant value
            minQuantity: 8,  // Constant value
            maxQuantity: 150,  // Constant value
            description: descricao,  // From input
            image: imageSrc,  // Use uploaded image file name or the Default image
            category: "Pizza",  // Constant value
            subCategory: "Pizza Salgada",  // Constant value
            storeName: "LojaMVOG",  // Constant value
            shopkeeperId: "27e769ce-d55f-4580-96f0-f8dc25a17484",  // Constant value
            complements: adicionais.map(adicional => ({
                name: adicional.name,
                optional: adicional.optional,
                description: adicional.description,
                quantity: adicional.quantity,
                price: adicional.price
            }))
        };
    
        console.log(formattedOutput);
    };
        
    // Handle form submission for the modal form
    const handleModalFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleAddAdicional(newAdicional);  // Add the new Adicional
        handleCloseModal();  // Close the modal

        // Reset new Adicional
        setNewAdicional({
            id: Date.now(),
            name: '',
            optional: true,
            description: '',
            quantity: 1,
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
                            required
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
                        {/* ARRUMAR AQUI */}
                        <Select title='Categoria' options={Categorias} />
                        <p className='additionalsTitle'>Complementos</p>

                        {/* Render adicional components */}
                        {renderAdicionais(adicionais)}

                        {/* Button to open the modal */}
                        <div className='buttonsHolder'>
                            <div className='sizeHelper'>
                                <button type="button" onClick={handleOpenModal} className='newAdditional'>
                                    Cadastrar novo complemento
                                </button>
                                <button type="button" className='importAdditionals'>Importar complementos</button>
                            </div>
                        </div>
                    </Container>

                    {/* Submit Button */}
                    <ActionButton type="submit">Adicionar</ActionButton>
                </Center>
            </form>

            {/* Modal for adding a new "Adicional" */}
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
                                value={newAdicional.description}
                                onChange={handleModalInputChange}
                                required
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

            <Footer />
        </>
    );
}

export default RegisterProduct;