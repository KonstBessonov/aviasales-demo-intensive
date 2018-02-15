import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  flex-basis: 50%;
  text-align: center;
  @media screen and (min-width: 75rem) {
    text-align: left;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0.5rem;
`;
const Subtitle = styled.h3`
  font-size: 2rem;
  font-weight: normal;
  line-height: 2.75rem;
  margin: 0.5rem;
  width: ;
`;

//ToDo: убрать <br> переделать паддингами!

export default () => {
  return (
    <Wrapper>
      <Title>Хотите знать всё о скидках на авиабилеты?</Title>
      <Subtitle>
        Вы можете подписаться на нашу рассылку<br />через соцсети или по
        электронной почте.
      </Subtitle>
    </Wrapper>
  );
};
