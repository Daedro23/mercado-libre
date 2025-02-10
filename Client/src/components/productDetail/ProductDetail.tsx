import React from 'react';
import styled from 'styled-components';
import shipping from '@/assets/shipping.png'
import CustomButton from '../button/Button';
import { ProductDetailProps } from '../../services/interfaceProductDetails';
import { formatCurrency } from '../../utils/FormatCurrency';
import Typography from '../Typography/Typography';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    padding: 8px 16px;
    margin-top: 24px;
`;

const ProductImage = styled.img`
    width: 600px;
    height: 450px;
    border-radius: 8px;
    @media (max-width: 768px) {
        width: 100%;
        height: 250px;
    }
`;

const Title = styled.h2`
    font-size: ${({ theme }) => theme.fontSizes.mediumLarge};
    margin: 10px 0;
`;

const ImgShipping = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 10px;
`;

const PriceTag = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.p`
    width: 60%; 
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const InfoMain = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: block;
    }
`;

const Condition = styled.div`
    display: flex;
    place-self: start;
    margin-right: 3%;
`;

const Shipping = styled.div`
    align-content: center;
`;

const DetailsMain = styled.div`
    width: 30%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const DescriptionTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-top: 8%;
`;

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

    const handleClick = () => {
        console.log('Comprado');
      };

    return (
        <DetailContainer>
            <InfoMain>
                <ProductImage src={product.picture} alt={product.title} />
                <DetailsMain>
                    <Condition>
                        <Typography size={'small'}>{product.condition}</Typography> 
                        {product.free_shipping && (
                            <Shipping>&nbsp; -<ImgShipping src={shipping} alt="Envío gratis" /></Shipping>
                        )}
                    </Condition>
                    <Title>{product.title}</Title>
                    <PriceTag>
                        ${formatCurrency(product.price.amount)} 
                    </PriceTag>
                    <CustomButton size="large" onClick={handleClick}>
                        Comprar
                    </CustomButton>
                </DetailsMain>
            </InfoMain>
            <DescriptionTitle>Descripción del producto</DescriptionTitle>           
            {product.description ? <Description>{product.description}</Description>: 'Producto sin descripción' }
        </DetailContainer>
    );
};

export default ProductDetail;
