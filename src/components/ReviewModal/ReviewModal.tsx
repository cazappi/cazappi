import React, { useState } from 'react';
import { BsStar, BsXLg, BsFillStarFill } from 'react-icons/bs';
import { Button, Container, FundoModal, Label, Stars, TextArea, TitleClose } from './style';

interface ReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (ratingProduct: number, ratingShop: number, comment: string) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ isOpen, onClose, onSubmit }) => {
    // passagem de avaliação do produto e estabelecimento
    const [ratingProduct, setRatingProduct] = useState(0);
    const [ratingShop, setRatingShop] = useState(0);
    const [hoverRatingProduct, setHoverRatingProduct] = useState(0);
    const [hoverRatingShop, setHoverRatingShop] = useState(0);
    const [comment, setComment] = useState('');

    if (!isOpen) {
        return null;
    }

    const handleStarClick = (index: number, type: string) => {
        type === 'product'? setRatingProduct(index) : setRatingShop(index);
    };

    const handleStarMouseOver = (index: number, type: string) => {
        type === 'product'? setHoverRatingProduct(index) : setHoverRatingShop(index);
    };

    const handleStarMouseOut = (type: string) => {
        type === 'product'? setHoverRatingProduct(0) : setHoverRatingShop(0);
    };

    const handleSubmit = () => {
        if(ratingProduct && ratingShop){
            onSubmit(ratingProduct, ratingShop, comment);
            onClose();
        }
        else{
            if(ratingProduct === 0){
                alert("Avalie o produto");
            }
            else{
                alert("Avalie o estabelecimento");
            }
        }
    };

    const handleClose = () => {
        setHoverRatingProduct(0);
        setHoverRatingShop(0);
        setRatingShop(0);
        setRatingProduct(0);
        setComment('');
        onClose();
    };

    return (
        <FundoModal>
            <Container>
                <TitleClose>
                    <button onClick={handleClose}><BsXLg/></button>
                    <span> Avaliar pedido </span>
                </TitleClose>
                <div>
                    <p>Como você avaliaria o produto recebido?</p>
                    <Stars>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div
                                key={index}
                                onClick={() => handleStarClick(index, 'product')}
                                onMouseOver={() => handleStarMouseOver(index, 'product')}
                                onMouseOut={() => handleStarMouseOut('product')}
                            >
                                {index <= (hoverRatingProduct || ratingProduct) ? (
                                <BsFillStarFill className="filled" />
                                ) : (
                                <BsStar className="empty" />
                                )}
                          </div>
                        ))}
                    </Stars>
                </div>
                <div>
                    <p>Como você avaliaria o serviço do estabelecimento?</p>
                    <Label>(qualidade de embalagem, cuidado no preparo...)</Label>
                    <Stars>
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div
                                key={index}
                                onClick={() => handleStarClick(index, 'shop')}
                                onMouseOver={() => handleStarMouseOver(index, 'shop')}
                                onMouseOut={() => handleStarMouseOut('shop')}
                            >
                                {index <= (hoverRatingShop || ratingShop) ? (
                                <BsFillStarFill className="filled" />
                                ) : (
                                <BsStar className="empty" />
                                )}
                            </div>
                        ))}
                </Stars>
                </div>
                <div>
                    <p>Gostaria de acrescentar algo sobre sua experiência?</p>
                    <TextArea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Escreva um pouco sobre sua experiência..."
                    />
                </div>
                <Button onClick={handleSubmit}>Avaliar</Button>
            </Container>
        </FundoModal>
    );
};

export default ReviewModal;
