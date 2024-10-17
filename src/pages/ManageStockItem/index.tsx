import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { PageWrapper, DoubleArrowIcon, BannerImg, LessButton, MoreButton } from "./styles";

function ManageStockItem() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const { product } = location.state || {};

    const [minQuantity, setMinQuantity] = useState<number | null>(product.minQuantity ? parseInt(product.minQuantity, 10) : null);
    const [maxQuantity, setMaxQuantity] = useState<number | null>(product.maxQuantity ? parseInt(product.maxQuantity, 10) : null);
    const [quantity, setQuantity] = useState<number>(product.quantity ? parseInt(product.quantity, 10) : 0);

    const handleMinQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinQuantity(Number(event.target.value));  // Converte o valor para número
    };

    const handleMaxQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxQuantity(Number(event.target.value));
    };

    const handleIncreaseQuantity = () => {
        if (quantity < (maxQuantity || 0)) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > (minQuantity || 0)) {
            setQuantity(quantity - 1);
        }
    };

    const handleCancel = () => {
        navigate('/profileLojista/gerenciarProdutos/gerenciarEstoque');
    };

    const searchCategoryId = (product: any) => {
        for (let i = 0; i < product.categories.length; i++) {
            if (product.categories[i].parentCategoryId === null) {
                return product.categories[i].id;
            }
        }
    }

    const handleConfirm = () => {

        let newProduct = {
            name: product.name,
            image: product.image,
            description: product.description,
            price: product.price,
            quantity: quantity,
            minQuantity: minQuantity,
            maxQuantity: maxQuantity,
            storeName: product.storeName,
            shopkeeperId: product.shopkeeperId,
            categoryId: searchCategoryId(product),
        }


        api.put(`product/${id}`,
            newProduct,
            {
                headers: {
                    "Authorization": `Bearer ${getToken()}`,
                }
            }
        ).then((response) => {
            navigate('/profileLojista/gerenciarProdutos/gerenciarEstoque');
        }).catch((err) => {
            alert("Ops! Ocorreu um erro: " + err)
        });
    }

    return (
        <>
            <Header transparent={false} />
            <PageWrapper>
                <h1>{product.name}</h1>
                <hr className="nameHr" />
                <div className="path">
                    <p>Gerenciar produtos </p>
                    <DoubleArrowIcon />
                    <p style={{ fontWeight: 'bold' }}>Gerenciar estoque</p>
                    <DoubleArrowIcon style={{ fontWeight: 'bold' }} />
                    <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                </div>

                <BannerImg src={product.image} alt={product.name} />

                <div className="estoque">
                    <p className="estoqueTitle">Estoque</p>
                    <div className="minMaxInput">
                        <p>Mínimo</p>
                        <input
                            type="number"
                            value={minQuantity !== null ? minQuantity : ''}
                            onChange={handleMinQuantityChange}
                            placeholder={minQuantity === null ? '' : undefined}
                        />
                    </div>
                    <div className="minMaxInput">
                        <p>Máximo</p>
                        <input
                            type="number"
                            value={maxQuantity !== null ? maxQuantity : ''}
                            onChange={handleMaxQuantityChange}
                            placeholder={maxQuantity === null ? '' : undefined}
                        />
                    </div>
                </div>

                <div className="qtdDisponivel">
                    <p className="estoqueTitle">Quantidade disponível</p>
                    <div className="moreLessButton">
                        <LessButton onClick={handleDecreaseQuantity} />
                        <p>{quantity}</p>
                        <MoreButton onClick={handleIncreaseQuantity} />
                    </div>
                </div>

                <div className="buttons">
                    <button className="descarte" onClick={handleCancel}>Descartar alteração</button>
                    <button className="confirmar" onClick={handleConfirm}>Confirmar</button>
                </div>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default ManageStockItem;
