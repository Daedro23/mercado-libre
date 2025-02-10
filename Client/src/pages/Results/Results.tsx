import { useSearchParams  } from 'react-router-dom';
import { useFetchProducts } from '../../services/useFetchProduct';
import ProductList from '../../components/productList/ProductList';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import { useHead } from '../../components/Head/Head';
import Error from '../../components/Error/Error';
import { useEffect } from 'react';

const Results: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search');
  const { setTitle } = useHead();
  const { products, breadcrumbs, error } = useFetchProducts(query);
  
  useEffect(() => {
    setTitle(`Resultados de ${query || "tu búsqueda"} | Mercado Libre`);
  }, [query, setTitle]);

  if (error) {
    return <Error errorMessage={error} />; 
  }

  return (
    <>
      { breadcrumbs.length > 0 &&<Breadcrumb categories={breadcrumbs} /> }
      { products.length > 0 && <ProductList products={products} /> }
    </>
  );
};

export default Results;
