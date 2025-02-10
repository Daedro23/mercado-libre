import { FormEvent, useState, ChangeEvent  } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import searchIcon from '../../assets/search.png';

const InputContainer = styled.form`
    position: relative;
    width: 90%;
    margin-left: 16px;
`;

const TextInput = styled.input`
    width: 100%;
    padding: 12px 0px 12px 3%;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.yellow};
  }
    @media (max-width: 768px) {
        width: 90%;
    }
`;

const Icon = styled.img`
    width: 24px; 
    height: 24px;
    cursor: pointer; 
    padding-top: 5px;
`;

const InputIcon = styled.div`
    position: absolute;
    right: -3.5%;
    top: 0px;
    padding: 4px 9px;
    background: ${({ theme }) => theme.colors.gray};
    @media (max-width: 768px) {
        right: 6%;
    }
`;

const SearchBar = () => {
    const [query, setQuery] = useState<string>('');
    const navigate  = useNavigate();
  
    const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (query) {
        navigate(`/items?search=${query}`); 
        }
    };

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setQuery(ev.target.value);
    };

    return (
        <InputContainer onSubmit={handleSubmit} data-testid="search-form">
        <TextInput
            placeholder="Buscar, productos, marcas y más..."
            type="text"
            id="search-input"
            value={query}
            onChange={handleChange} 
        />
        <InputIcon> 
            <Icon src={searchIcon} alt="Buscar" />
        </InputIcon>
        </InputContainer>
    );
};

export default SearchBar;
