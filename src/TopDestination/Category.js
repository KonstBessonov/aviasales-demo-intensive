import React from "react";
import styled, { css } from "styled-components";

const Category = styled.button`
  font-size: 1.5rem;
  transition: color 0.3s;
  border: none;
  background: inherit;
  ${props =>
    props.isActive ||
    css`
      color: #00ace2;
      cursor: pointer;
      &:hover {
        color: #fd8a27;
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

const Text = styled.p`
  padding-bottim: 0.5rem;
  margin: 0 -1rem 3rem -1rem;
  ${props =>
    props.isActive &&
    css`
      border-bottom: 1px #00ace2 solid;
    `};
`;

export default props => {
  return (
    <Category isActive={props.isActive}>
      <Image src={props.category.img} alt="" />
      <Text isActive={props.isActive}>{props.category.text}</Text>
    </Category>
  );
};
