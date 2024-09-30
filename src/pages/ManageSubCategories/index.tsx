import { useEffect, useState, useRef, FormEvent } from "react";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { PageWrapper, DoubleArrowIcon, PlusIcon, ModalOverlay, SubCategory, IconEdit } from "./styles";

function ManageSubCategories() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState(false); // Controle para o modal de edição
    const [categories, setCategories] = useState<any[]>([]);
    const [categorySelected, setCategorySelected] = useState<string>(); // Estado para categoria
    const [name, setName] = useState(""); // Estado para nome
    const [user, setUser] = useState<any>(); // Estado para usuário
    const [store, setStore] = useState<any>(); // Estado para loja
    const [subCategoryToEdit, setSubCategoryToEdit] = useState<any>(null); // Estado para a subcategoria a ser editada
    const modalRef = useRef<HTMLDivElement | null>(null); // Referência para o div do modal
    const formRef = useRef<HTMLFormElement | null>(null); // Referência para o form

    async function getCategories() {
        await api.get(`category`, {
            headers: {
                Authorization: `Bearer ${getToken()}`,
            },
        })
            .then((response) => {
                setCategories(response.data);
                setCategorySelected(response.data[0].id);
            })
            .catch((err) => {
                alert("ops! ocorreu um erro: " + err);
            });
    }

    async function getStore() {
        await api.get(`store/${getUser().user_id}`, {
            headers: { Authorization: `Bearer ${getToken()}` },
        })
            .then((response) => {
                setStore(response.data.store[0]);
            })
            .catch((err) => {
                alert("ops! ocorreu um erro: " + err);
            });
    }

    useEffect(() => {
        getCategories();
        setUser(getUser());
        getStore();
    }, []);

    const openModal = () => {
        setIsModalVisible(true);
    };

    const openEditModal = (subCategory: any) => {
        setSubCategoryToEdit(subCategory); // Armazenar a subcategoria que está sendo editada
        setName(subCategory.name); // Preencher o campo 'name' com o nome da subcategoria
        setIsEditModalVisible(true); // Abrir o modal de edição
    };

    const closeModal = () => {
        setIsModalVisible(false);
        setIsEditModalVisible(false);
        setName("");
        setSubCategoryToEdit(null);
    };

    // Função para capturar o envio do formulário (criação ou edição)
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (isModalVisible) {
            // Modal de criação

            let newSubCategory = {
                name: name,
                parentCategoryId: Number(categorySelected),
                storeName: store.name,
            };

            api.post(`category`, newSubCategory, {
                headers: { Authorization: `Bearer ${getToken()}` },
            })
                .then((response) => {
                    closeModal();
                    getCategories();
                })
                .catch((err) => {
                    alert("ops! ocorreu um erro: " + err);
                });
        } else if (isEditModalVisible && subCategoryToEdit) {
            // Modal de edição
            console.log(subCategoryToEdit);

            let editedSubCategory = {
                id: subCategoryToEdit.id,
                name: name,
            };

            api.put(`category`, editedSubCategory, {
                headers: { Authorization: `Bearer ${getToken()}` },
            })
                .then((response) => {
                    console.log(response);
                    closeModal();
                    getCategories();
                })
                .catch((err) => {
                    alert("ops! ocorreu um erro: " + err);
                });
        }
    };

    return (
        <>
            <HeaderLojista transparent={false} />
            <PageWrapper>
                <h1>Gerenciar sub-categorias</h1>
                <hr />
                <p className="path">
                    Gerenciar produtos <DoubleArrowIcon />
                    <p style={{ fontWeight: "bold" }}>Gerenciar sub-categorias</p>
                </p>

                <button className="createSub" onClick={openModal}>
                    Cadastrar sub-categoria <PlusIcon />
                </button>

                {categories.map((category) =>
                    category.subcategories && category.subcategories.length > 0 ? (
                        category.subcategories.map((subCategory: any) => (
                            <SubCategory key={subCategory.id}>
                                <hr />
                                <p className="info">
                                    {subCategory.name}
                                    <button
                                        className="editButton"
                                        onClick={() => openEditModal(subCategory)}
                                    >
                                        <IconEdit />
                                    </button>
                                </p>
                            </SubCategory>
                        ))
                    ) : (
                        <></>
                    )
                )}

                {/* Modal criação */}
                {isModalVisible && (
                    <ModalOverlay ref={modalRef}>
                        <form className="modal-content" ref={formRef} onSubmit={handleSubmit}>
                            <label htmlFor="categoria">Categoria</label>
                            <select
                                id="categoria"
                                value={categorySelected}
                                onChange={(e) => setCategorySelected(e.target.value)}
                            >
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite aqui"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <div className="buttons">
                                <button type="button" className="cancel-btn" onClick={closeModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className="register-btn">
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </ModalOverlay>
                )}

                {/* Modal edição */}
                {isEditModalVisible && subCategoryToEdit && (
                    <ModalOverlay ref={modalRef}>
                        <form className="modal-content" ref={formRef} onSubmit={handleSubmit}>
                            <label htmlFor="categoria">Categoria</label>
                            <p>{categories.find((category) => category.id === categorySelected)?.name}</p> {/* Exibindo o nome da categoria atual */}

                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                placeholder="Digite aqui"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <div className="buttons">
                                <button type="button" className="cancel-btn" onClick={closeModal}>
                                    Cancelar
                                </button>
                                <button type="submit" className="register-btn">
                                    Editar
                                </button>
                            </div>
                        </form>
                    </ModalOverlay>
                )}
            </PageWrapper>
            <Footer />
        </>
    );
}

export default ManageSubCategories;
