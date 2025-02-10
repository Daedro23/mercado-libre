import React from 'react';
import styled from 'styled-components';
import { BreadcrumbProps } from '../../services/interface';

const BreadcrumbContainer = styled.nav`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const BreadcrumbItem = styled.span`
  margin-right: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};

  &:after {
    content: '>';
    margin-left: 8px;
  }

  &:last-child:after {
    content: '';
  }
  @media (max-width: 768px) {
    margin-left: 8px;
  }
`;

const Breadcrumb: React.FC<BreadcrumbProps> = ({ categories }) => {
  return (
    <BreadcrumbContainer>
      {categories.map((category, index) => (
        <BreadcrumbItem key={index}>{category}</BreadcrumbItem>
      ))}
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;
