import React from "react";
import {
  Container,
  AtualPage,
  Center,
  InfoPage,
  NoWrap,
  RedLine,
  Titulo,
} from "./styles";
import HeaderLojista from "../../components/HeaderLojista/HeaderLojista";
import Footer from "../../components/Footer/Footer";
import { BsChevronDoubleRight } from "react-icons/bs";
import { IoFilterSharp } from "react-icons/io5";
import sanduiche from "../../assets/sanduiche.png";
import MonthlyRevenueGraph from "../../components/MonthlyRevenueGraph";

// Type for ProductDetails
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
  
  // Type for MonthRevenue
  export interface MonthRevenue {
    month: number; // 1 for January, 2 for February, etc.
    year: number;
    revenue: number;
  }
  
  // Type for the Report
  export interface Report {
    storeName: string;
    shopkeeperId: string;
    totalRevenue: number;
    totalOrders: number;
    mostSellingProducts: ProductDetails[];
    period: "annually";
    monthlyRevenues: MonthRevenue[];
  }
  
  // Type for the API Response
  export interface ReportResponse {
    report: Report;
  }  

const ShopkeeperReports: React.FC = () => {

    const reportData: ReportResponse = {
        report: {
          storeName: "Minha Loja",
          shopkeeperId: "12345",
          totalRevenue: 15500000, // Total revenue in cents or reais
          totalOrders: 124512,
          mostSellingProducts: [
            {
              id: "1",
              name: "Pizza de Calabresa",
              description: "Sanduíche saudável com ingredientes frescos.",
              image: sanduiche,
              category: "Alimentos",
              subCategory: "Lanches",
              quantity_sold: 120,
              average_rating: 4.5,
            },
            {
              id: "2",
              name: "Pizza de Camarao",
              description: "Sanduíche saudável com ingredientes frescos.",
              image: sanduiche,
              category: "Alimentos",
              subCategory: "Lanches",
              quantity_sold: 110,
              average_rating: 4.5,
            },
            {
              id: "3",
              name: "Pizza de Sei la o que",
              description: "Sanduíche saudável com ingredientes frescos.",
              image: sanduiche,
              category: "Alimentos",
              subCategory: "Lanches",
              quantity_sold: 150,
              average_rating: 4.5,
            },
            {
              id: "3",
              name: "Pizza quu não aparece",
              description: "Sanduíche saudável com ingredientes frescos.",
              image: sanduiche,
              category: "Alimentos",
              subCategory: "Lanches",
              quantity_sold: 12,
              average_rating: 4.5,
            },
          ],
          period: "annually",
          monthlyRevenues: [
            { month: 1, year: 2025, revenue: 5000.00 },
            { month: 2, year: 2025, revenue: 4500.15 },
            { month: 3, year: 2025, revenue: 4500 },
            { month: 4, year: 2025, revenue: 4500 },
            { month: 5, year: 2025, revenue: 4500 },
            { month: 6, year: 2025, revenue: 4500 },
            { month: 7, year: 2025, revenue: 4500 },
            { month: 8, year: 2025, revenue: 4500 },
          ],
        },
      };
    
    const { totalRevenue, totalOrders } = reportData.report;
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
                <p>Estatistica</p>
                <IoFilterSharp />
            </div>
            <div className="valuesHolder">
                <div className="infoWrapper">
                    <p>Faturamento Total</p>
                    <div className="valueWrapper">
                        <p>R$ {totalRevenue.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                    </div>
                </div>
                <div className="infoWrapper">
                    <p>Total de Pedidos</p>
                    <div className="valueWrapper">
                        <p>124512</p>
                    </div>
                </div>
            </div>
            <div className="revenueAndSales">
                <div className="monthlyRevenue">
                    <p>Faturamento Mensal</p>
                    <MonthlyRevenueGraph monthlyRevenues={reportData.report.monthlyRevenues} />
                </div>
                <div className="mostSellingProducts">
                    <h2>Principais vendas</h2>
                    <div className="products">
                        {reportData.report.mostSellingProducts
                        .sort((a, b) => b.quantity_sold - a.quantity_sold) // Sort by quantity_sold in descending order
                        .slice(0, 3) // Take the top 3 products
                        .map((product) => (
                            <div key={product.id} className="product">
                            <img src={product.image} alt={product.name} />
                            <div className="productInfo">
                                <p>{product.average_rating.toFixed(1)}</p>
                                <p className="productName">{product.name}</p>
                                <p className="productSales">Nro. vendas: {product.quantity_sold}</p>
                            </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </Center>

        <Footer />
    </>
  );
};

export default ShopkeeperReports;
