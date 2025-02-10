import React from 'react';
import styled from 'styled-components';

interface TypographyProps {
  size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  children: React.ReactNode;
}

const StyledTypography = styled.p<{ size?: string }>`
  font-size: ${({ size }) => {
    switch (size) {
      case 'xsmall':
        return '12px';
      case 'small':
        return '14px';
      case 'medium':
        return '18px';
      case 'large':
        return '24px';
      case 'xlarge':
        return '32px';
      default:
        return '14px'; 
    }
  }};
`;
const Typography: React.FC<TypographyProps> = ({ size, children }) => {
  
const getTag = () => {
  switch (size) {
    case 'xsmall':
    case 'small':
    case 'medium':
      return 'p';
    case 'large':
      return 'h2';
    case 'xlarge':
      return 'h1';
    default:
      return 'p';
  }
};

const Component = getTag();

  return (
    <StyledTypography as={Component} size={size}>
      {children}
    </StyledTypography>
  );
};

export default Typography;
