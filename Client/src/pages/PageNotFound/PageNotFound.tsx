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


const PageNotFound = () => (
    <>
    <ContainerNotFound>

            <IconNotFound src={NotFoundImage} alt="Page Not Found" />
            <Typography size={'xlarge'}>La página a la que intentas ingresar no existe</Typography>
            <Typography size={'small'}>
                Revisa posibles errores de tipeo o <Link to='/'>vuelve al inicio</Link>
            </Typography>
    </ContainerNotFound>
    </>
);

export default PageNotFound;
