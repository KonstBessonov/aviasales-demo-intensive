import React from "react";
import styled from "styled-components";

const Div = styled.div``;

const Title = styled.h2`
  vertical-align: middle;
  color: ##5c5c5c;
  font-size: 4rem;
  text-align: center;
`;

export default () => {
  return (
    <Div>
      <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
    </Div>
  );
};
