import React from "react";
import styled from "styled-components";
import { minWidth } from "../../assets";

const Filter = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Button = styled.button`
  color: white;
  background-color: #00ace2;
  border: none;
  border-radius: 3rem;
  padding: 1rem 3rem;
  ${minWidth.md`
    display: none;
  `};
`;

export default () => {
  return (
    <Filter>
      <Button>Фильтровать</Button>
    </Filter>
  );
};
