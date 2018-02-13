import React from "react";
import styled from "styled-components";
import { BlueSection } from "../assets";

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  padding: 2rem;
  text-align: center;
`;

export default () => {
  return (
    <BlueSection>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-lg-10 col-lg-offset-1">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
          </div>
        </div>
      </div>
    </BlueSection>
  );
};
