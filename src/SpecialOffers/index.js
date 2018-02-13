import React from "react";
import styled from "styled-components";
import { BlueSection } from "../assets";

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  padding: 2rem 0;
`;

export default () => {
  return (
    <BlueSection>
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div class="row around-lg">
          <div class="col-xs-12 col-lg-3">Компонент спецпредложения</div>
          <div class="col-xs-12 col-lg-3">Компонент спецпредложения</div>
          <div class="col-xs-12 col-lg-3">Компонент спецпредложения</div>
        </div>
        <a href="#">Смотреть все спецпредложения</a>
        <p>
          <sup>*</sup>Средняя цена по направлению
        </p>
      </div>
    </BlueSection>
  );
};