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
    errorMessage: string; 
}

const Error: React.FC<ErrorProps> = ({ errorMessage }) => (
    <ContainerNotFound>
        <IconNotFound src={NotFoundImage} alt="Page Not Found" />
        <Typography size={'xlarge'}>{errorMessage}</Typography> 
        <Typography size={'small'}>
            Vuelva a intentar más tarde o <Link to='/'>vuelva al inicio</Link>
        </Typography>
    </ContainerNotFound>
);

export default Error;
