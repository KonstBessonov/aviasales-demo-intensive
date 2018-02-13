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
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div className="row around-lg">
          <div className="col-xs-12 col-lg-3">Компонент спецпредложения</div>
          <div className="col-xs-12 col-lg-3">Компонент спецпредложения</div>
          <div className="col-xs-12 col-lg-3">Компонент спецпредложения</div>
        </div>
        <a href="#">Смотреть все спецпредложения</a>
        <p>
          <sup>*</sup>Средняя цена по направлению
        </p>
      </div>
    </BlueSection>
  );
};
