import { fireEvent } from '@testing-library/react';
import { render } from '../../ThemeCustomTest';
import CustomButton from './Button'; 

describe('CustomButton', () => {
    test('renders with default size', () => {
        const { getByText } = render(<CustomButton onClick={() => {}}>Click me</CustomButton>);
        const button = getByText(/Click me/i);

        expect(button).toBeInTheDocument();
        expect(button).toHaveStyle('padding: 12px 20px');
        expect(button).toHaveStyle('font-size: 16px');
    });

    test('renders with small size', () => {
        const { getByText } = render(<CustomButton size="small" onClick={() => {}}>Click me</CustomButton>);
        const button = getByText(/Click me/i);

        expect(button).toHaveStyle('padding: 8px 12px');
        expect(button).toHaveStyle('font-size: 12px');
    });

    test('renders with medium size', () => {
        const { getByText } = render(<CustomButton size="medium" onClick={() => {}}>Click me</CustomButton>);
        const button = getByText(/Click me/i);
        expect(button).toHaveStyle('padding: 12px 20px');
        expect(button).toHaveStyle('font-size: 16px');
    });

    test('renders with large size', () => {
        const { getByText } = render(<CustomButton size="large" onClick={() => {}}>Click me</CustomButton>);
        const button = getByText(/Click me/i);

        expect(button).toHaveStyle('padding: 16px 24px');
        expect(button).toHaveStyle('font-size: 20px');
    });

    test('calls onClick when clicked', () => {
        const handleClick = jest.fn(); 
        const { getByText } = render(<CustomButton onClick={handleClick}>Click me</CustomButton>);
        const button = getByText(/Click me/i);
        
        fireEvent.click(button); 
        
        expect(handleClick).toHaveBeenCalledTimes(1); 
    });
});
