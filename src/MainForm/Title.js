import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  vertical-align: middle;
  color: #ffffff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: bold;
  @media screen and (min-width: 48rem) {
    font-size: 4rem;
  }
  @media screen and (min-width: 75rem) {
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  vertical-align: middle;
  font-size: 2.5rem;
  @media screen and (max-width: 48rem) {
    display: none;
  }
  @media screen and (min-width: 75rem) {
    font-size: 3rem;
  }
`;

export default () => {
  return (
    <Wrapper>
      <Title>Поиск дешевых авиабилетов</Title>
      <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
    </Wrapper>
  );
};
