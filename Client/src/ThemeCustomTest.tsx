import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme'

// eslint-disable-next-line react-refresh/only-export-components
const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};

const customRender = (ui: React.ReactElement, options = {}) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export { customRender as render };