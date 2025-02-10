import React from 'react';
import { Product } from '../../services/interface'; 
import styled from 'styled-components';
import { formatCurrency } from '../../utils/FormatCurrency';
import shipping from '@/assets/shipping.png'
import { useNavigate } from 'react-router-dom';


interface ProductListProps {
  products: Product[]; 
}

const Container = styled.article`
    max-width: 1280px;
    margin: 2% auto;
    background: ${({ theme }) => theme.colors.white};
`;

const ProductListContainer = styled.div`
    display: flex;
    padding: 30px 40px;
    position: relative;
    cursor: pointer;
    
    &::after {
        content: '';
        display: block;
        width: 95%;
        height: 1px;
        opacity: 0.2;
        background: ${({ theme }) => theme.colors.black};
        position: absolute;
        bottom: 0;
        left: 2%;
    }
    &:last-child::after {
        display: none; 
    }
    @media (max-width: 768px) {
        padding: 30px 8px;
    }
`;

const ImgProductContainer = styled.div`
    display: flex;
`;

const ImgProduct = styled.img`
    weight: 200px;
    height: 200px;
`;

const Detail = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin-left: 15px;
`;

const Price = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.large};
    margin: 0;
    margin-right: 10px;
`;

const ImgShipping = styled.img`
    width: 20px;
    height: 20px;
    align-self: center;
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    margin: 0;
`;

const ProductList: React.FC<ProductListProps> = ({ products }) => {

    const navigate = useNavigate(); 

    const handleProductClick = (id: string) => {
      navigate(`/items/${id}`);
    };

  return (
    <Container>
        {products.map(product => (
            <ProductListContainer key={product.id} onClick={() => handleProductClick(product.id)}>
                <ImgProduct src={product.thumbnail} alt={product.title} />  
                <Detail>
                    <ImgProductContainer>
                        <Price>${formatCurrency(product.price)}</Price> 
                        {product.shipping.free_shipping && <ImgShipping src={shipping} />}
                    </ImgProductContainer>
                    <Title>{product.title}</Title>
                </Detail>
            </ProductListContainer>
        ))}
    </Container>
  );
};

export default ProductList;
