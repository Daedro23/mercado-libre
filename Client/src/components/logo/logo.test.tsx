import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; 
import Logo from './Logo'; 

describe('Navbar', () => {
  test('renders Navbar with Logo and SearchBar', () => {
    const { getByLabelText } = render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );

    const linkElement = getByLabelText('Volver al inicio');
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/');
  });
});
