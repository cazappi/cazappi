import React, { useEffect, useState } from "react";
import {
  Container,
  AtualPage,
  Center,
  InfoPage,
  NoWrap,
  RedLine,
  Titulo,
  LoadingCenter,
} from "./styles";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import Footer from "../../components/Footer/Footer";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import sanduiche from "../../assets/sanduiche.png";
import MonthlyRevenueGraph from "../../components/MonthlyRevenueGraph";
import { useNavigate } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { getToken } from "../../utils/get-cookie";
import api from "../../services/api";
import { getUser } from "../../utils/user-token-request";

// Types
export interface ProductDetails {
    id: string;
    name: string;
    description: string;
    image: string;
    category: string;
    subCategory: string;
    quantity_sold: number;
    average_rating: number;
  }
  
  export interface MonthRevenue {
    month: number;
    year: number;
    revenue: number;
  }
  
  export interface Report {
    storeName: string;
    shopkeeperId: string;
    totalRevenue: number;
    totalOrders: number;
    mostSellingProducts: ProductDetails[];
    period: "annually";
    monthlyRevenues: MonthRevenue[];
  }
export interface ReportResponse {
    report: Report;
  }  

const ShopkeeperReports: React.FC = () => {
    const navigate = useNavigate();
    const [reportData, setReportData] = useState<ReportResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
  
    const fetchStoreNameAndReport = async () => {
        try {
          const userId = getUser().user_id;
    
          const storeResponse = await api.get(`/store/${userId}`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          });
    
          const storeName = storeResponse.data.store[0].name;
          const reportResponse = await api.get(`/store/${storeName}/report`, {
            headers: {
              Authorization: `Bearer ${getToken()}`,
            },
          });
          console.log(reportResponse.data);
          setReportData(reportResponse.data);
        } catch (error) {
          console.error("Error fetching store or report data:", error);
          alert("Ops! Ocorreu um erro ao carregar os dados.");
        } finally {
          setLoading(false);
        }
      };
    
      useEffect(() => {
        fetchStoreNameAndReport();
      }, []);
        
      const { totalRevenue, totalOrders, mostSellingProducts, monthlyRevenues } =
      reportData?.report || { totalRevenue: 0, totalOrders: 0, mostSellingProducts: [], monthlyRevenues: [] };

      if (!reportData) {
        return (
            <LoadingCenter>
                <HeaderLojista transparent={false} />
                <Center>
                    <Titulo>Relatório de Vendas</Titulo>
                    <RedLine />
                </Center>
                <InfoPage>
                    <NoWrap>Perfil</NoWrap>
                    <BsChevronDoubleRight />
                    <AtualPage>Relatório de Vendas</AtualPage>
                </InfoPage>

                Carregando dados...
            </LoadingCenter>
        );
      }
      
      return (
    <>
        <HeaderLojista transparent={false} />
            <Center>
                <Titulo>Relatório de Vendas</Titulo>
                <RedLine />
            </Center>
            <InfoPage>
                <NoWrap>Perfil</NoWrap>
                <BsChevronDoubleRight />
                <AtualPage>Relatório de Vendas</AtualPage>
            </InfoPage>
        <Center>
            <div className="stats">
                <p>Estatisticas</p>
                <IoFilterSharp color="#32cc13" size={18}/>
            </div>
            <div className="valuesHolder">
                <div className="infoWrapper">
                    <p className="infoTitle">Faturamento Total</p>
                    <div className="valueWrapper">
                        <p>R$ {totalRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                    </div>
                    <p className="lowerTitle">Faturamento Mensal</p>
                </div>
                <div className="infoWrapper">
                    <p className="infoTitle">Total de Pedidos</p>
                    <div className="valueWrapper">
                        <p>{totalOrders}</p>
                    </div>
                    <p className="lowerTitle">Principais vendas</p>
                </div>
            </div>
            <div className="revenueAndSales">
                <div className="monthlyRevenue">
                    <MonthlyRevenueGraph monthlyRevenues={reportData.report.monthlyRevenues} />
                </div>
                <div className="mostSellingProducts">
                    <div className="products">
                        {reportData.report.mostSellingProducts
                        .sort((a, b) => b.quantity_sold - a.quantity_sold)
                        .slice(0, 3)
                        .map((product) => (
                            <div key={product.id} className="product">
                            <img src={product.image} alt={product.name} />
                            <div className="productInfo">
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        {i < Math.floor(product.average_rating) ? (
                                        <FaStar color="rgba(242, 189, 0, 1)" size={16} />
                                        ) : i < Math.ceil(product.average_rating) ? (
                                        <FaStarHalfAlt color="rgba(242, 189, 0, 1)" size={16} />
                                        ) : (
                                        <FaRegStar color="rgba(242, 189, 0, 1)" size={16} />
                                        )}
                                    </span>
                                    ))}
                                </div>
                                <p className="productName">{product.name}</p>
                                <p className="productSales">Nro. vendas: {product.quantity_sold}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button className="ratingsButton" onClick={() => navigate("/profileLojista/relatorioVendas/avaliacoes")}>Avaliações dos Clientes</button>
        </Center>

        <Footer />
    </>
  );
};

export default ShopkeeperReports;
