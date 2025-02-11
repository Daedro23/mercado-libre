import React from 'react';
import styled from 'styled-components';
import shipping from '@/assets/shipping.png'
import CustomButton from '../button/Button';
import { ProductDetailProps } from '../../services/interfaceProductDetails';
import { formatCurrency } from '../../utils/FormatCurrency';
import Typography from '../Typography/Typography';
import { formatDescription } from '../../utils/formatDescription';

const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.white};
    padding: 24px 24px;
    margin-top: 24px;
`;

const ProductImage = styled.img`
    max-width: 600px;
    max-height: 450px;
    border-radius: 8px;
    @media (max-width: 768px) {
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
    width: 50%; 
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

const DetailsImg = styled.div`
    width: 60%;
    text-align-last: center;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const DetailsMain = styled.div`
    width: 40%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;
const DescriptionTitle = styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
    margin-top: 12%;
`;

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {

    const handleClick = () => {
        alert('Comprado')
      };

    return (
        <DetailContainer>
            <InfoMain>
                <DetailsImg>
                    <ProductImage src={product.picture} alt={product.title} />
                </DetailsImg>
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
            {product.description ? ( <Description dangerouslySetInnerHTML={{ __html: formatDescription(product.description) }} />) : 'Producto sin descripción'}
        </DetailContainer>
    );
};

export default ProductDetail;
