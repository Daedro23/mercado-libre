import { render } from '@testing-library/react';
import Home from './Home';
import '@testing-library/jest-dom'; 

jest.mock('../../assets/compras.svg', () => 'mocked_compras.svg'); 

describe('Home Component', () => {
  test('renders Home component with image and text', () => {
    const { getByAltText, getByText } = render(<Home />);

    const imageElement = getByAltText('Page Not Found');
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'mocked_compras.svg');

    const largeText = getByText('Empezá a buscar');
    expect(largeText).toBeInTheDocument();

    const smallText = getByText('Algo fascinante espera por vos');
    expect(smallText).toBeInTheDocument();
  });
});
