import React from "react";
import styled from "styled-components";

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
`;

export default () => {
  return (
    <Filter>
      <Button>НАВЕРХ</Button>
    </Filter>
  );
};
