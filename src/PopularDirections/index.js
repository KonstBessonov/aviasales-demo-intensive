import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../assets";
import calend from "./calend.svg";

import BestPrice from "./BestPrice.js";
import { bestPrices } from "./data.js";

const BestPrices = WhiteSection.extend``;

const Compass = styled.img``;

const OriginText = styled.p`
  font-size: 2.25rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const AdvertiseText = styled.p``;

const OfferText = styled.p`
  color: #a0b0b9;
`;

export default () => {
  return (
    <BestPrices>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-8">
            <Compass src={calend} alt="Calendar" />
            <OriginText>
              Лучшие цены на авиабилеты за последний месяц
            </OriginText>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-lg-4">
            <BestPrice data={bestPrices[0]} />
          </div>
          <div className="col-xs-12 col-lg-4">
            <BestPrice data={bestPrices[1]} />
          </div>
          <div className="col-xs-12 col-lg-4">
            <BestPrice data={bestPrices[2]} />
          </div>
        </div>

        <div className="row center-xs">
          <AdvertiseText>
            Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
            стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств и
            728 авиакомпаний.
          </AdvertiseText>
        </div>
        <div className="row center-xs">
          <OfferText>
            Цены, найденные пользователями за последние 48 часов, не являются
            офертой.
          </OfferText>
        </div>
      </div>
    </BestPrices>
  );
};
