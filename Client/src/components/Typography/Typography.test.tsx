import { render, screen } from '@testing-library/react';
import Typography from './Typography'; 
import { ThemeProvider } from 'styled-components'; 
import { theme } from '../../styles/theme'; 

const MockTypography = ({ size, children }: { size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge', children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>
    <Typography size={size}>{children}</Typography>
  </ThemeProvider>
);

describe('Typography Component', () => {
  it('renders the correct tag based on the size prop', () => {
    render(<MockTypography size="small">Texto de prueba</MockTypography>);
    const paragraphElement = screen.getByText('Texto de prueba');
    expect(paragraphElement.tagName).toBe('P');

    render(<MockTypography size="large">Encabezado de prueba</MockTypography>);
    const heading2Element = screen.getByText('Encabezado de prueba');
    expect(heading2Element.tagName).toBe('H2');

    render(<MockTypography size="xlarge">Título grande</MockTypography>);
    const heading1Element = screen.getByText('Título grande');
    expect(heading1Element.tagName).toBe('H1');
  });

  it('applies the correct font size based on the size prop', () => {
    render(<MockTypography size="xsmall">Texto pequeño</MockTypography>);
    const smallText = screen.getByText('Texto pequeño');
    expect(smallText).toHaveStyle('font-size: 12px');

    render(<MockTypography size="medium">Texto mediano</MockTypography>);
    const mediumText = screen.getByText('Texto mediano');
    expect(mediumText).toHaveStyle('font-size: 18px');

    render(<MockTypography size="xlarge">Texto grande</MockTypography>);
    const largeText = screen.getByText('Texto grande');
    expect(largeText).toHaveStyle('font-size: 32px');
  });
});
