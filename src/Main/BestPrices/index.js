import React from "react";
import styled from "styled-components";
import { WhiteSection, minWidth } from "../../assets";
import calend from "./calend.svg";

import BestPrice from "./BestPrice";
import { bestPrices } from "./data";

const BestPrices = WhiteSection.extend``;

const Calendar = styled.img``;

const Title = styled.h2`
  font-size: 2.25rem;
  font-weight: 500;
  color: #4a4a4a;
`;

const SplitLine = styled.div`
  border-bottom: 1px dashed #afbec6;
  margin: 3rem 0;
  ${minWidth.xl`
    border: none;
    border-right: 1px dashed #afbec6;
    min-height: 100%;
    width: 1px;
    margin: 0 auto;
  `};
`;

const Advertising = styled.p`
  text-align: center;
`;

const NotOffer = styled.p`
  text-align: center;
  color: #a0b0b9;
`;

export default () => {
  return (
    <BestPrices>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-md-8">
            <Calendar src={calend} alt="Calendar" />
            <Title>Лучшие цены на авиабилеты за последний месяц</Title>
          </div>
        </div>
        <div className="row center-md">
          <div className="col-xs-12 col-md-10 col-xl-3 col-xl-offset-1">
            <BestPrice data={bestPrices[0]} />
          </div>
          <div className="col-xs-12 col-md-10 col-xl">
            <SplitLine />
          </div>
          <div className="col-xs-12 col-md-10 col-xl-3">
            <BestPrice data={bestPrices[1]} />
          </div>
          <div className="col-xs-12 col-md-10 col-xl">
            <SplitLine />
          </div>
          <div className="col-xs-12 col-md-10 col-xl-3">
            <BestPrice data={bestPrices[2]} />
          </div>
          <div className="hidden-xs col-xl-1" />
        </div>

        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1 col-xl-6 col-xl-offset-3">
            <Advertising>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Advertising>
            <NotOffer>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </NotOffer>
          </div>
        </div>
      </div>
    </BestPrices>
  );
};
