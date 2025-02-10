import Compras from '../../assets/compras.svg';
import styled from 'styled-components';
import Typography from '../../components/Typography/Typography';

const IconNotFound = styled.img`
    width: 200px;
    height: 200px;
`;

const ContainerHome = styled.div`
    text-align: center;
    height: 100vh;
    align-content: center;
`;

const Home = () => (
    <>
    <ContainerHome>
            <IconNotFound src={Compras} alt="Page Not Found" />
            <Typography size={'xlarge'}>Empezá a buscar</Typography>
            <Typography size={'small'}>
                Algo fascinante espera por vos
            </Typography>
    </ContainerHome>
    </>
);

export default Home;
