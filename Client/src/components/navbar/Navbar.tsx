import styled from 'styled-components';
import SearchBar from '../searchBar/SearchBar';
import Logo from '../logo/Logo';

const NavbarContainer = styled.nav`
    background-color: ${({ theme }) => theme.colors.yellow}; 
    box-shadow: 0 4px 2px -2px gray;
`;

const NavBarContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1280px;
    padding: 16px 0;
    margin: auto;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
        <NavBarContent>
            <Logo/>
            <SearchBar/>
        </NavBarContent>
    </NavbarContainer>
  );
};

export default Navbar;
