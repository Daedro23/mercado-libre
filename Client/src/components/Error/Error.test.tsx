import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import Error from './Error'; // Asegúrate de ajustar la ruta al componente

describe('Error Component', () => {
    test('renders error message', () => {
        const errorMessage = 'Ocurrió un error al cargar los datos.';
        
        render(
            <MemoryRouter>
                <Error errorMessage={errorMessage} />
            </MemoryRouter>
        );
        
        const errorText = screen.getByText(errorMessage);
        expect(errorText).toBeInTheDocument();
    });

    test('renders link to homepage', () => {
        render(
            <MemoryRouter>
                <Error errorMessage="Error." />
            </MemoryRouter>
        );
        
        const linkElement = screen.getByRole('link', { name: 'vuelva al inicio' });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    test('renders the correct alt text for the image', () => {
        render(
            <MemoryRouter>
                <Error errorMessage="Error." />
            </MemoryRouter>
        );
        
        const imageElement = screen.getByAltText('Page Not Found');
        expect(imageElement).toBeInTheDocument();
    });
});
