import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import { ThemeProvider } from 'styled-components';
import Navbar from './Navbar'; 
import { theme } from '../../styles/theme'; 

describe('<Navbar />', () => {
    it('debe renderizar el componente Logo y SearchBar', () => {
        const { getByLabelText } = render(
            <ThemeProvider theme={theme}>
                <MemoryRouter> 
                    <Navbar />
                </MemoryRouter>
            </ThemeProvider>
        );

        const logoElement = getByLabelText('Volver al inicio'); 
        expect(logoElement).toBeInTheDocument();

        const searchInput = document.querySelector('input[type="text"]');
        expect(searchInput).toBeInTheDocument();
    });
});
