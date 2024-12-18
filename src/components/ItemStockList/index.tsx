import React from "react";
import { useNavigate } from "react-router-dom";
import { ItemWrapper, ImageStyled, IconEdit } from "./style";

function ItemStockList({ product }: any) {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate(`/profileLojista/gerenciarProdutos/gerenciarEstoque/${product.id}`, { state: { product } });
    };

    return (
        <ItemWrapper>
            <div className="productInfo">
                <ImageStyled src={product.image} />
                <div className="info">
                    <p className="title">{product.name}</p>
                    <p className="qtd">{product.quantity} itens disponíveis</p>
                </div>
            </div>
            <button className="editButton" onClick={handleEditClick}>
                <IconEdit />
            </button>
        </ItemWrapper>
    );
}

export default ItemStockList;