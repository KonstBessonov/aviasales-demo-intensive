import React from "react";
import styled from "styled-components";
import { displaySize } from "../assets";

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-weight: bold;
  @media screen and (min-width: ${displaySize.md}) {
    margin-top: 11rem;
    font-size: 4rem;
  }
  @media screen and (min-width: ${displaySize.xl}) {
    margin-top: 25rem;
    font-size: 5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  @media screen and (max-width: ${displaySize.md}) {
    display: none;
  }
  @media screen and (min-width: ${displaySize.xl}) {
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
