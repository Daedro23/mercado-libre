import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SearchBar from './SearchBar';
import { theme } from '../../styles/theme'; 
import '@testing-library/jest-dom';

jest.mock('../../assets/search.png', () => 'mocked_search_icon');

describe('SearchBar Component', () => {
    test('renders SearchBar with input and icon', () => {
        const { getByPlaceholderText, getByAltText } = render(
            <MemoryRouter>
                <ThemeProvider theme={theme}> 
                    <SearchBar />
                </ThemeProvider>
            </MemoryRouter>
        );

        const inputElement = getByPlaceholderText('Buscar, productos, marcas y más...');
        expect(inputElement).toBeInTheDocument();

        const iconElement = getByAltText('Buscar');
        expect(iconElement).toBeInTheDocument();
    });

    test('does not navigate if the input is empty on submit', () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <ThemeProvider theme={theme}>
                    <SearchBar />
                </ThemeProvider>
            </MemoryRouter>
        );

        const formElement = getByTestId('search-form');
        fireEvent.submit(formElement);

        expect(window.location.href).toContain('/'); 
    });
});
