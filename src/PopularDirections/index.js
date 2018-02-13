import React from "react";
import styled from "styled-components";
import calend from "./calend.svg";

const Compass = styled.img``;

const OriginText = styled.p`
  font-size: 2.25rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const AdvertiseText = styled.p``;

const OfferText = styled.p``;

export default () => {
  return (
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-8">
          <Compass src={calend} alt="Calendar" />
          <OriginText>Лучшие цены на авиабилеты за последний месяц</OriginText>
        </div>
      </div>
      <div class="row">
        {/* 1 контейнер */}
        <div class="col-xs-12 col-lg-4">
          <div class="row middle-xs">
            <div>картинка </div>
            <div>
              <p>Симферополь (Крым)</p>
              <p>Крым</p>
            </div>
          </div>
          <div>
            <div class="row berween-xs">
              <div class="col-xs-8">Из Москвы</div>
              <div class="col-xs-4">от 4813 р.</div>
              <div class="col-xs-8">Из Санкт-Петербурга</div>
              <div class="col-xs-4">от 7857 р.</div>
              <div class="col-xs-8">Из Новосибирска</div>
              <div class="col-xs-4">от 15127 р.</div>
            </div>
          </div>
        </div>
        {/* 2 контейнер */}
        <div class="col-xs-12 col-lg-4">
          <div class="row middle-xs">
            <div>картинка </div>
            <div>
              <p>Ереван</p>
              <p>Армения</p>
            </div>
          </div>
          <div>
            <div class="row berween-xs">
              <div class="col-xs-8 col-lg-3">Из Москвы</div>
              <div class="col-xs-4 col-lg-1">от 4813 р.</div>
            </div>
          </div>
        </div>
        {/* 3 контейнер */}
        <div class="col-xs-12 col-lg-4">
          <div class="row middle-xs">
            <div>картинка </div>
            <div>
              <p>Кишинев</p>
              <p>Молдавия</p>
            </div>
          </div>
          <div>
            <div class="row berween-xs">
              <div class="col-xs-8 col-lg-3">Из Москвы</div>
              <div class="col-xs-4 col-lg-1">от 4813 р.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <AdvertiseText>
          Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220 стран
          мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и 728
          авиакомпаний.
        </AdvertiseText>
      </div>
      <div class="row">
        <OfferText>
          Цены, найденные пользователями за последние 48 часов, не являются
          офертой.
        </OfferText>
      </div>
    </div>
  );
};
