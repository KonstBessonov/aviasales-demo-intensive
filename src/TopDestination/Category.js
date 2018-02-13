import React from "react";
import styled, { css } from "styled-components";

const Category = styled.div`
  font-size: 1.5rem;
  transition: color 0.3s;
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
  box-shadow: 0 2px 4px rgba(74, 74, 74, 0.1);
  border-radius: 50%;
`;

const Text = styled.p`
  padding-bottom: 0.5rem;
  margin-bottom: 3rem;
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
