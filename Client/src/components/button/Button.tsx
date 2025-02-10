import styled from 'styled-components';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void; 
    children: React.ReactNode;
}

const Button = styled.button<ButtonProps>`
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    padding: ${({ size }) => {
        switch (size) {
            case 'small':
                return '8px 12px';
            case 'medium':
                return '12px 20px';
            case 'large':
                return '16px 24px';
            default:
                return '12px 20px'; 
        }
    }};
    font-size: ${({ size }) => {
        switch (size) {
            case 'small':
                return '12px';
            case 'medium':
                return '16px';
            case 'large':
                return '20px';
            default:
                return '16px'; 
        }
    }};
    transition: background-color 0.3s;

    &:hover {
        background-color: darkblue; 
    }
`;

const CustomButton: React.FC<ButtonProps> = ({ size, onClick, children }) => {
    return (
        <Button size={size} onClick={onClick}>
            {children}
        </Button>
    );
};

export default CustomButton;
