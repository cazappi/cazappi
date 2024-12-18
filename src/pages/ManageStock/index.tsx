import { useState, useEffect } from "react";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import Footer from "../../components/Footer/Footer";
import api from "../../services/api";
import { getToken } from "../../utils/get-cookie";
import { getUser } from "../../utils/user-token-request";
import { PageWrapper, DoubleArrowIcon, ItensList } from "./styles";
import ItemStockList from "../../components/ItemStockList";

function ManageStock() {
    const [products, setProducts] = useState<any[] | null>(null);

    async function getStoreItens() {
        await api.get(`store/${getUser().user_id}`, {
            headers: {
                "Authorization": `Bearer ${getToken()}`
            }
        }).then((response) => {
            setProducts(response.data.store[0].products);
        }).catch((err) => {
            alert("ops! ocorreu um erro: " + err);
        });
    }

    useEffect(() => {
        getStoreItens();
    }, []);

    return (
        <>
            <HeaderLojista transparent={false} />
            <PageWrapper>
                <h1>Gerenciar estoque</h1>
                <hr />
                <p className="path">Gerenciar produtos <DoubleArrowIcon />
                    <p style={{ fontWeight: 'bold' }}>Gerenciar estoque</p>
                </p>

                <ItensList>
                    {products?.map((product) => (
                        <ItemStockList key={product.id} product={product} />
                    ))}
                </ItensList>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default ManageStock;