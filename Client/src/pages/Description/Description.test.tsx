import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Description from './Description';
import { useFetchProductDetails } from '../../services/useFetchProductDetails';

jest.mock('../../services/useFetchProductDetails');
jest.mock('../../components/Head/Head', () => () => <title>Mock Title</title>);
jest.mock('../../components/breadcrumb/Breadcrumb', () => () => <div>Mock Breadcrumb</div>);
jest.mock('../../components/productDetail/ProductDetail', () => () => <div>Mock Product Detail</div>);
jest.mock('../../components/Error/Error', () => ({ errorMessage }: { errorMessage: string }) => (
    <div>Error: {errorMessage}</div>
  ));
  
jest.mock('../../components/loading/Loading', () => () => <div>Loading...</div>);

describe('Description Component', () => {
  const mockUseFetchProductDetails = useFetchProductDetails as jest.Mock;

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
    expect(screen.getByText('Mock Title')).toBeInTheDocument();
  });

  it('renders error message if there is an error', () => {
    mockUseFetchProductDetails.mockReturnValue({
      product: null,
      breadcrumbs: [],
      error: 'An error occurred',
    });

    render(
      <MemoryRouter initialEntries={['/product/MLA123456']}>
        <Routes>
          <Route path="/product/:id" element={<Description />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
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
});
