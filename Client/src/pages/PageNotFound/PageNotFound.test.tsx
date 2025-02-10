import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; 
import PageNotFound from './PageNotFound';
import '@testing-library/jest-dom'; 

jest.mock('@/assets/notFound.svg', () => 'mocked_notFound.svg'); 

describe('PageNotFound Component', () => {
  test('renders PageNotFound component with image, text, and link', () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter> 
        <PageNotFound />
      </BrowserRouter>
    );

    const imageElement = getByAltText('Page Not Found');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'mocked_notFound.svg');

    const largeText = getByText('La página a la que intentas ingresar no existe');
    expect(largeText).toBeInTheDocument();

    const smallText = getByText('Revisa posibles errores de tipeo o');
    expect(smallText).toBeInTheDocument();

    const linkElement = getByText('vuelve al inicio').closest('a');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
