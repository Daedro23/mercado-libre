import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Results from './Results'; 
import { useFetchProducts } from '../../services/useFetchProduct';
import { useHead } from '../../components/Head/Head';

jest.mock('../../services/useFetchProduct');
jest.mock('../../components/breadcrumb/Breadcrumb', () => () => <div>Mock Breadcrumb</div>);
jest.mock('../../components/productList/ProductList', () => () => <div>Mock Product List</div>);
jest.mock('../../components/Error/Error', () => ({ error }: { error: { message: string; status?: number }}) => (
  <><div>Error: {error.message}</div><div>Error: {error.status}</div></>
));

jest.mock('../../components/Head/Head', () => ({
  useHead: jest.fn(),
}));

describe('Results Component', () => {
  const mockUseFetchProducts = useFetchProducts as jest.Mock;
  const mockUseHead = useHead as jest.Mock;

  it('renders product list when products are fetched', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [{ id: 'MLA123456', title: 'Mock Product' }],
      breadcrumbs: ['Category 1', 'Category 2'],
      error: null,
    });

    // Mock de `useHead` para devolver `setHead` correctamente
    mockUseHead.mockReturnValue({
      setHead: jest.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/results?search=phone']}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Breadcrumb')).toBeInTheDocument();
    expect(screen.getByText('Mock Product List')).toBeInTheDocument();
  });

  it('renders error message if there is an error', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [],
      breadcrumbs: [],
      error: { message: 'An error occurred', status: 404 }
    });
  
    render(
      <MemoryRouter initialEntries={['/results?search=phone']}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Error: An error occurred/)).toBeInTheDocument();
    expect(screen.getByText(/Error: 404/)).toBeInTheDocument();
  });

  it('renders without breadcrumbs or products when no results are found', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [],
      breadcrumbs: [],
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/results?search=unknown']}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.queryByText('Mock Breadcrumb')).not.toBeInTheDocument();
    expect(screen.queryByText('Mock Product List')).not.toBeInTheDocument();
    
    expect(screen.queryByText('Error:')).not.toBeInTheDocument();
  });

  it('calls setHead with the correct title when products are fetched', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [{ id: 'MLA123456', title: 'Mock Product' }],
      breadcrumbs: ['Category 1', 'Category 2'],
      error: null,
    });

    const setHeadMock = jest.fn();
    mockUseHead.mockReturnValue({
      setHead: setHeadMock,
    });

    render(
      <MemoryRouter initialEntries={['/results?search=phone']}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(setHeadMock).toHaveBeenCalledWith('Resultados de phone | Mercado Libre');
  });
});
