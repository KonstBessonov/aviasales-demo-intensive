import React from "react";
import styled from "styled-components";
import { minWidth } from "../assets";

const Wrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  ${minWidth.md`
    margin-bottom: 5rem;
  `};
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  margin-top: 6rem;
  margin-bottom: 1rem;
  font-weight: bold;
  ${minWidth.md`
    margin-top: 11rem;
    font-size: 4rem;
  `} ${minWidth.xl`
    margin-top: 25rem;
    font-size: 5rem;
  `};
`;

const Subtitle = styled.h2`
  font-size: 2.5rem;
  display: none;
  ${minWidth.md`
    display: initial;
  `} ${minWidth.xl`
    font-size: 3rem;
  `};
`;

export default () => {
  return (
    <Wrapper>
      <Title>Поиск дешевых авиабилетов</Title>
      <Subtitle>Лучший способ купить авиабилеты дешево</Subtitle>
    </Wrapper>
  );
};
