import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const CategoryStlyed = styled.button`
  font-size: 1.5rem;
  transition: color 0.3s;
  border: none;
  padding: 0;
  background: inherit;
  ${({ isActive, theme }) =>
    isActive ||
    css`
      color: #00ace2;
      cursor: pointer;
      &:hover {
        color: ${theme.hover};
      }
    `};
`;

const Image = styled.img`
  padding: 13px;
  width: 48px;
  height: 48px;
  box-shadow: 0 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50%;
`;

const Text = styled.div`
  padding-bottom: 0.5rem;
  margin-bottom: 2.5rem;
  margin-top: 1.5rem;
  line-height: 2.5rem;
  ${props =>
    props.isActive &&
    css`
      border-bottom: 1px #00ace2 solid;
    `};
`;

const Category = ({ isActive, category: { img, text } }) => (
  <CategoryStlyed isActive={isActive}>
    <Image src={img} alt="" />
    <Text isActive={isActive}>{text}</Text>
  </CategoryStlyed>
);

Category.defaultProps = {
  isActive: false,
};

Category.propTypes = {
  isActive: PropTypes.bool,
  category: PropTypes.shape({}).isRequired,
};

export default Category;
