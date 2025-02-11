import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Description from './Description';
import { useFetchProductDetails } from '../../services/useFetchProductDetails';
import { useHead } from '../../components/Head/Head';

jest.mock('../../services/useFetchProductDetails');
jest.mock('../../components/breadcrumb/Breadcrumb', () => () => <div>Mock Breadcrumb</div>);
jest.mock('../../components/productDetail/ProductDetail', () => () => <div>Mock Product Detail</div>);
jest.mock('../../components/Error/Error', () => ({ error }: { error: { message: string; status?: number }}) => (
  <><div>Error: {error.message}</div><div>Error: {error.status}</div></>
));
  
jest.mock('../../components/loading/Loading', () => () => <div>Loading...</div>);
jest.mock('../../components/Head/Head', () => ({
  useHead: jest.fn(),
}));
describe('Description Component', () => {
  const mockUseHead = useHead as jest.Mock;
  const mockUseFetchProductDetails = useFetchProductDetails as jest.Mock;

  mockUseHead.mockReturnValue({
    setHead: jest.fn(),
  });

  it('renders Loading component while fetching product details', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: null,
      breadcrumbs: [],
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/product/MLA123456']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    // Verifica que el componente Loading esté en el documento
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders product detail when product is fetched', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: { id: 'MLA123456', title: 'Mock Product' },
      breadcrumbs: ['Category 1', 'Category 2'],
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/product/MLA123456']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Product Detail')).toBeInTheDocument();
    expect(screen.getByText('Mock Breadcrumb')).toBeInTheDocument();
  });

  it('renders error message if there is an error', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: null,
      breadcrumbs: [],
      error: { message: 'An error occurred', status: 404 }
    });

    render(
      <MemoryRouter initialEntries={['/product/MLA123456']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Error: An error occurred/)).toBeInTheDocument();
    expect(screen.getByText(/Error: 404/)).toBeInTheDocument();
  });

  it('renders breadcrumbs when available', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: { id: 'MLA123456', title: 'Mock Product' },
      breadcrumbs: ['Category 1', 'Category 2'],
      error: null,
    });

    render(
      <MemoryRouter initialEntries={['/product/MLA123456']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Mock Breadcrumb')).toBeInTheDocument();
  });

  it('calls setHead with the correct title when products are fetched', () => {
    mockUseFetchProductDetails.mockReturnValue({
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
          <Route path="/results" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    expect(setHeadMock).toHaveBeenCalledWith('Detalles del producto | Mercado Libre');
  });

});
