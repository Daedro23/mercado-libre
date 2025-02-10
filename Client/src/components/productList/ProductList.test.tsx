import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import ProductList from './ProductList'; 
import { Product } from '../../services/interface';
import { ThemeProvider } from 'styled-components'; 
import { theme } from '../../styles/theme'; 

const mockProducts: Product[] = [
    {
        address: "123 Calle Falsa",
        id: "MLA123456",
        title: "Producto de prueba",
        condition: "new",
        thumbnail_id: "123456789",
        catalog_product_id: "789123",
        listing_type_id: "gold_special",
        sanitized_title: "Producto de prueba",
        permalink: "https://www.mercadolibre.com.ar/producto",
        buying_mode: "buy_it_now",
        site_id: "MLA",
        category_id: "MLA1234",
        domain_id: "MLA-DOMAIN",
        thumbnail: "https://http2.mlstatic.com/D_123456789.jpg",
        currency_id: "ARS",
        order_backend: 1,
        price: 1000,
        original_price: 1200,
        sale_price: {
            price_id: "SP123",
            amount: 950,
            conditions: {
                eligible: true,
                context_restrictions: [],
                start_time: "2024-01-01T00:00:00Z",
                end_time: "2024-12-31T23:59:59Z"
            },
            currency_id: "ARS",
            exchange_rate: null,
            payment_method_prices: [],
            payment_method_type: "credit_card",
            regular_amount: 1200,
            type: "sale",
            metadata: {
                campaign_discount_percentage: 20,
                discount_meli_amount: 250,
                funding_mode: "campaign",
                promotion_id: "PROMO123",
                promotion_type: "discount",
                variation: "default",
                campaign_end_date: "2024-12-31T23:59:59Z",
                campaign_id: "1234",
                experiment_id: "5678",
                order_item_price: 1000,
            }
        },
        available_quantity: 5,
        official_store_id: null,
        use_thumbnail_id: true,
        accepts_mercadopago: true,
        shipping: {
            store_pick_up: false,
            free_shipping: true,
            logistic_type: "fulfillment",
            mode: "me2",
            tags: ["fast_shipping"],
            benefits: null,
            promise: null,
            shipping_score: 95,
        },
        stop_time: "2025-01-01T00:00:00Z",
        seller: {
            id: 12345678,
            nickname: "Vendedor de prueba",
        },
        attributes: [
            {
                id: "COLOR",
                name: "Color",
                value_id: "COLOR123",
                value_name: "Rojo",
                attribute_group_id: "OTHERS",
                attribute_group_name: "Otros",
                value_struct: null,
                values: [{
                    id: "COLOR123",
                    name: "Rojo",
                    struct: null,
                    source: 1
                }],
                source: 1,
                value_type: "string"
            }
        ],
        installments: {
            quantity: 12,
            amount: 100,
            rate: 0,
            currency_id: "ARS",
            metadata: {
                meliplus_installments: true,
                additional_bank_interest: false,
            }
        },
        catalog_listing: false,
        discounts: null,
        promotions: [],
        inventory_id: "INVENTORY123"
    }
];

const MockProductList = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <ProductList products={mockProducts} />
    </BrowserRouter>
  </ThemeProvider>
);

describe('ProductList Component', () => {
  it('renders product titles, prices, and images', () => {
    render(<MockProductList />);

    expect(screen.getByText('Producto de prueba')).toBeInTheDocument();

    expect(screen.getByText('$1.000')).toBeInTheDocument(); 

    expect(screen.getByAltText('Producto de prueba')).toBeInTheDocument();
  });

});
