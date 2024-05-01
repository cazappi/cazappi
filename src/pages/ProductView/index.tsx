import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import Lanche from "../../assets/sanduiche.png"
import Observacao from "../../assets/icon_observacao.png"
import { ActionButton, Button, ComplementTitle, Container, OptionInfos, Bold, ProductImage, JustifyBetween, ProductPrice, ProductTitle, Center, ProductOriginalPrice, Observations, ObsNameIcon, ObsImage, ComplementQuantity, ComplementPrice, Quantity } from './style';

interface Option {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

interface Complement {
    id: number;
    title: string;
    options: Option[];
}

interface Product {
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    observations: string;
    complements: Complement[];
}

function ProductView() {
    const navigate = useNavigate();
    const testProduct: Product = {
      name: "Sanduíche natural",
      description: "Pão italiano, queijo prato, tomate, ovo, alface e rúcula",
      price: 22,
      discount: 4,
      image: Lanche,
      observations: '',
      complements: [
        {
          id: 1,
          title: "Itens Adicionais",
          options: [
            { id: 1, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
            { id: 2, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
            { id: 3, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
            { id: 4, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
            { id: 5, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
            { id: 6, name: "Bacon crispy", description: "farofa de bacon crocante", price: 3, quantity: 0 },
          ]
        },
        {
          id: 2,
          title: "Bebida para acompanhar",
          options: [
              { id: 1, name: "Coca-cola", description: "lata 350ml", price: 3.5, quantity: 0 }
          ]
        },
      ]
    };

    const [product, setProduct] = useState(testProduct); // utilizar propriedades
    const [productTotalPrice, setProductTotalPrice] = useState<number>(0); // calcular o valor junto com os complementos
    const [productCurrentPrice, setProductCurrentPrice] = useState<number>(0); // exibir o valor original em caso de desconto.
    const [observations, setObservations] = useState<string>(''); // atualizar a caixa de observações

    useEffect(() => {
        calculateProductTotalPrice();
    }, [product]);

    function handleAddProductToCart() {
      // Não está adicionando no carrinho!
        console.log("Add to cart", product);
    }

    function handleAddItem(complementsId: number, optionId: number) {
        const newProduct = { ...product };
        const complement = newProduct.complements.find(c => c.id === complementsId);
        if (complement) {
            const option = complement.options.find(o => o.id === optionId);
            if (option) {
                option.quantity++; // aumentando a quantidade do complemento
                setProduct(newProduct);
                calculateProductTotalPrice(); // calcula o novo valor total
            }
        }
    }

    function handleSubtractItem(complementsId: number, optionId: number) {
        const newProduct = { ...product };
        const complement = newProduct.complements.find(c => c.id === complementsId);
        if (complement) {
            const option = complement.options.find(o => o.id === optionId);
            if (option && option.quantity > 0) {
                option.quantity--; // diminui a quantidade do complemento
                setProduct(newProduct);
                calculateProductTotalPrice(); // calcula o novo valor total
            }
        }
    }

    function calculateProductTotalPrice() {
      let total = product.price - product.discount; // tira o valor do desconto.
      setProductCurrentPrice(total); // muda o valor atual do produto
      product.complements.forEach(complement => {
        complement.options.forEach(option => {
          total += option.price * option.quantity; // para cada complemento, adicione ao valor total seu preço * a quantidade do complemento adicionada.
        });
      });
      setProductTotalPrice(total); // atualiza o valor total
    }

    function FormattedPrice(valor:number){
      const formattedPrice = valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }); // arruma o valor a ser exibido no formato 0,00
      return formattedPrice;
    }

    return (
      <>
        {/* ----------------------- HEADER ----------------------- */}
        <Header transparent={false} />

        {/* ----------------------- CONTEUDO ----------------------- */}
        <ProductImage src={testProduct.image} alt={testProduct.description}/>
        <Container>
          <ProductTitle>{product.name}</ProductTitle>
          <JustifyBetween> 
            {/* informações do produto */}
            <p>{product.description}</p>
            <ProductPrice>
              R$ {FormattedPrice(productCurrentPrice)}
              {product.discount!==0 && <ProductOriginalPrice>R$ {FormattedPrice(product.price)}</ProductOriginalPrice>}
            </ProductPrice>
          </JustifyBetween>

          <div className="complements">
            {product.complements.map(complement => (
              <div key={complement.id}>
                <ComplementTitle><Bold>{complement.title}</Bold></ComplementTitle>
                {complement.options.map(option => (
                  <OptionInfos key={option.id}>
                    {/* Informações das opções de complemento */}
                    <JustifyBetween>
                      <Bold>{option.name}</Bold>
                      <ComplementPrice>
                        <span>{FormattedPrice(option.price)}</span>
                        {option.quantity == 0 && // só o botão de adicionar sem borda
                          <Button onClick={() => handleAddItem(complement.id, option.id)}>+</Button>
                        }
                        {option.quantity > 0 && // botões de adicionar e subtrair com borda
                          <ComplementQuantity>
                            <Button onClick={() => handleSubtractItem(complement.id, option.id)}>-</Button>
                            <Quantity>{option.quantity}</Quantity>
                            <Button onClick={() => handleAddItem(complement.id, option.id)}>+</Button>
                          </ComplementQuantity>
                        }
                      </ComplementPrice>
                    </JustifyBetween>
                    <span>{option.description}</span>
                    <hr/> 
                  </OptionInfos>
                ))}
              </div>
            ))}
          </div>
          <div>
            {/* Observações do pedido */}
            <ObsNameIcon>
              <ObsImage src={Observacao}/>
                Observações
            </ObsNameIcon>
            <Observations value={observations} onChange={e => setObservations(e.target.value)} />
          </div>
          <Center>
            <ActionButton onClick={handleAddProductToCart}>Adicionar R$ {FormattedPrice(productTotalPrice)}</ActionButton>
          </Center>
        </Container>
        {/* ----------------------- FOOTER ----------------------- */}
        <Footer />
      </>
    );
}

export default ProductView;
