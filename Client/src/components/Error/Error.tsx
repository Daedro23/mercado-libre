import { Link } from 'react-router-dom';
import NotFoundImage from '@/assets/notFound.svg';
import styled from 'styled-components';
import Typography from '../../components/Typography/Typography';

const IconNotFound = styled.img`
    width: 300px;
    height: 300px;
`;

const ContainerNotFound = styled.div`
    text-align: center;
`;

interface ErrorProps {
    error: {
        message: string;
        status?: number;
    };
}

const Error: React.FC<ErrorProps> = ({ error }) => {
    const status = error?.status ?? 'Desconocido';
    const message = error?.message ?? 'Algo salió mal, por favor inténtelo más tarde.';
    
    return (
      <ContainerNotFound>
          <IconNotFound src={NotFoundImage} alt="Error" />
          <Typography size="xlarge">Error {status}</Typography>
          <Typography size="small">{message}</Typography>
          <Typography size="small">
              Vuelva a intentar más tarde o <Link to="/">vuelva al inicio</Link>
          </Typography>
      </ContainerNotFound>
    );
  };
  
export default Error;
