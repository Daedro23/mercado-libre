import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom'; 
import Results from './Results'; 
import { useFetchProducts } from '../../services/useFetchProduct';

jest.mock('../../services/useFetchProduct');
jest.mock('../../components/Head/Head', () => () => <title>Mock Title</title>);
jest.mock('../../components/breadcrumb/Breadcrumb', () => () => <div>Mock Breadcrumb</div>);
jest.mock('../../components/productList/ProductList', () => () => <div>Mock Product List</div>);
jest.mock('../../components/Error/Error', () => ({ errorMessage }: { errorMessage: string }) => (
  <div>Error: {errorMessage}</div>
));

describe('Results Component', () => {
  const mockUseFetchProducts = useFetchProducts as jest.Mock;

  it('renders product list when products are fetched', () => {
    mockUseFetchProducts.mockReturnValue({
      products: [{ id: 'MLA123456', title: 'Mock Product' }],
      breadcrumbs: ['Category 1', 'Category 2'],
      error: null,
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
      error: 'An error occurred',
    });

    render(
      <MemoryRouter initialEntries={['/results?search=phone']}>
        <Routes>
          <Route path="/results" element={<Results />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Error: An error occurred')).toBeInTheDocument();
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
});
