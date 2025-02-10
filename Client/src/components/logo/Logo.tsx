import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
`;

const LinkStyled = styled(Link)`
    transition: filter 200ms ease;
    &:hover {
        outline: none;
        filter: drop-shadow(0 0 15px white);
    }
    &:focus {
        outline: 1px dashed $gray-300;
    }
    &:active {
        opacity: 0.8;
        transform: translateY(1px);
    }
`;

const Logo = () => {
    return (
        <LogoContainer>
            <LinkStyled to='/' aria-label='Volver al inicio'>
                <img src={logo} alt='Logo Mercado Libre' />
            </LinkStyled>
        </LogoContainer>
    );
};

export default Logo;
