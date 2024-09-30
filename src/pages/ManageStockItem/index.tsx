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
    console.log('produto: ', product);

    const [minQuantity, setMinQuantity] = useState<number>(parseInt(product.minQuantity, 10) || 0);
    const [maxQuantity, setMaxQuantity] = useState<number>(parseInt(product.maxQuantity, 10) || 0);
    const [quantity, setQuantity] = useState<number>(parseInt(product.quantity, 10) || 0);

    const handleMinQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinQuantity(Number(event.target.value));  // Converte o valor para número
    };

    const handleMaxQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMaxQuantity(Number(event.target.value));
    };

    const handleIncreaseQuantity = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (quantity > minQuantity) {
            setQuantity(quantity - 1);
        }
    };

    const handleCancel = () => {
        navigate('/profileLojista/gerenciarProdutos/gerenciarEstoque');
    };

    const handleConfirm = () => {

        product.minQuantity = minQuantity;
        product.maxQuantity = maxQuantity;
        product.quantity = quantity;

        let newProduct = {
            product
        }

        console.log('new produto: ', newProduct);

        api.put(`product/${id}`,
            newProduct,
            {
                headers: {
                    "Authorization": `Bearer ${getToken()}`,
                }
            }
        ).then((response) => {
            console.log('resposta: ', response);
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
                            value={minQuantity}
                            onChange={handleMinQuantityChange}
                        />
                    </div>
                    <div className="minMaxInput">
                        <p>Máximo</p>
                        <input
                            type="number"
                            value={maxQuantity}
                            onChange={handleMaxQuantityChange}
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
