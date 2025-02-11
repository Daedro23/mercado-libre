import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import ProductDetail from './ProductDetail'; 
import { theme } from '../../styles/theme';

const mockProduct = {
    id: 'MLA123456',
    picture: 'http://example.com/image.jpg',
    title: 'Producto de prueba',
    condition: 'nuevo',
    price: { amount: 1000, decimals: 100, currency: 'ARS' },
    free_shipping: true,
    description: 'Descripción del producto de prueba',
};

describe('<ProductDetail />', () => {
    it('debe renderizar el componente con la información del producto', () => {
        render(
            <ThemeProvider theme={theme}>
                <ProductDetail product={mockProduct} />
            </ThemeProvider>
        );

        expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

        const formattedPrice = '$1.000'; 
        expect(screen.getByText(formattedPrice)).toBeInTheDocument();

        expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

        expect(screen.getByText(mockProduct.condition)).toBeInTheDocument();

        expect(screen.getByAltText('Envío gratis')).toBeInTheDocument();
    });

    it('debe manejar el clic en el botón de compra', () => {
        const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});

        render(
            <ThemeProvider theme={theme}>
                <ProductDetail product={mockProduct} />
            </ThemeProvider>
        );

        const buyButton = screen.getByText('Comprar');
        fireEvent.click(buyButton);

        expect(alertSpy).toHaveBeenCalledWith('Comprado');

        alertSpy.mockRestore(); 
    });
});
