import { useParams } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import ProductDetail from '../../components/productDetail/ProductDetail';
import { useFetchProductDetails } from '../../services/useFetchProductDetails';
import { useHead } from '../../components/Head/Head';
import Error from '../../components/Error/Error';
import Loading from '../../components/loading/Loading';
import { useEffect } from 'react';

const Description: React.FC = () => {
    const { setHead } = useHead();
    useEffect(() => {
        setHead("Detalles del producto | Mercado Libre");
      }, [setHead]);
    const { id } = useParams();
    
    const { product, breadcrumbs, error } = useFetchProductDetails(id); 

    if (error) {
        return <Error error={error} />;
    }

    return (
      <>
          {breadcrumbs.length > 0 && <Breadcrumb categories={breadcrumbs} />}
          {product ? (
              <ProductDetail product={product} /> 
          ) : (
              <Loading/>
          )}
      </>
  );
};

export default Description;
