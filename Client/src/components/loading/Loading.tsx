import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3);
  border-top: 8px solid #3498db; /* Color del spinner */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite; /* Animación de rotación */
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Altura completa de la pantalla */
  background-color: rgba(0, 0, 0, 0.05); /* Fondo opcional */
`;

const Loading: React.FC = () => (
  <LoadingContainer>
    <Spinner role="img" aria-label="Loading spinner" />
  </LoadingContainer>
);

export default Loading;
