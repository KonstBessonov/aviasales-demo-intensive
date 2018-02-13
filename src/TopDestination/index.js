import React from "react";
import styled from "styled-components";
import compass from "./compass.svg";

const Compass = styled.img`
  display: inline-block;
`;

const OriginText = styled.p`
  font-size: 2.25rem;
  font-weight: 500;
  color: #4a4a4a;
  > span {
    color: #00ace2;
  }
`;

export default () => {
  return (
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-8">
          <Compass src={compass} alt="compass" />
          <OriginText>
            Популярные направления перелетов из города <span>Москва</span>
          </OriginText>
        </div>
      </div>
      <p>Категории</p>
      <div class="row center-xs">
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
        <div class="col-xs-4 col-md-2 col-lg-1">
          картинка<br />текст
        </div>
      </div>
      <p>Направления</p>
      <div class="row">
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
        <div class="col-xs-12 col-md-10 col-lg-5">
          картинка<br />
          стоимость
        </div>
      </div>
    </div>
  );
};
