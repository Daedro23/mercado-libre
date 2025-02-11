import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Error from './Error'; 

describe('Error Component', () => {
    test('renders error message', () => {
        const error = { message: 'Ocurrió un error al cargar los datos.', status: 500 };

        render(
            <MemoryRouter>
                <Error error={error} />
            </MemoryRouter>
        );

        const errorText = screen.getByText(error.message);
        expect(errorText).toBeInTheDocument();
    });

    test('renders link to homepage', () => {
        const error = { message: 'Error.', status: 500 };

        render(
            <MemoryRouter>
                <Error error={error} />
            </MemoryRouter>
        );
        
        const linkElement = screen.getByRole('link', { name: 'vuelva al inicio' });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', '/');
    });

    test('renders the correct alt text for the image', () => {
        const error = { message: 'Error.', status: 500 };

        render(
            <MemoryRouter>
                <Error error={error} />
            </MemoryRouter>
        );
        
        const imageElement = screen.getByAltText('Error');
        expect(imageElement).toBeInTheDocument();
    });
});
