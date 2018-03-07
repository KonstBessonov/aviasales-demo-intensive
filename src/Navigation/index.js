import React from 'react';
import styled from 'styled-components';
import { WhiteSection } from '../assets';
import { LinkStyled, LinkBold } from '../UI/Links';

const Navigation = WhiteSection.extend`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 4rem;
`;

export default () => (
  <Navigation>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>СТРАНЫ</Title>
          <nav>
            <LinkStyled to="#">Россия</LinkStyled>
            <LinkStyled to="#">Таиланд</LinkStyled>
            <LinkStyled to="#">Черногория</LinkStyled>
            <LinkStyled to="#">Кипр</LinkStyled>
            <LinkStyled to="#">Болгария</LinkStyled>
            <LinkStyled to="#">Грузия</LinkStyled>
            <LinkBold to="#">Все страны &rarr;</LinkBold>
          </nav>
        </div>
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>ГОРОДА</Title>
          <nav>
            <LinkStyled to="#">Москва</LinkStyled>
            <LinkStyled to="#">Санкт-Петербург</LinkStyled>
            <LinkStyled to="#">Симферополь</LinkStyled>
            <LinkStyled to="#">Адлер</LinkStyled>
            <LinkStyled to="#">Екатеринбург</LinkStyled>
            <LinkStyled to="#">Лондон</LinkStyled>
            <LinkBold to="#">Все города &rarr;</LinkBold>
          </nav>
        </div>
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>АВИАКОМПАНИИ</Title>
          <nav>
            <LinkStyled to="#">Air Berlin</LinkStyled>
            <LinkStyled to="#">Air France</LinkStyled>
            <LinkStyled to="#">Alitalia</LinkStyled>
            <LinkStyled to="#">Air Baltic</LinkStyled>
            <LinkStyled to="#">Emirates</LinkStyled>
            <LinkStyled to="#">KLM</LinkStyled>
            <LinkBold to="#">Все авиакомпании &rarr;</LinkBold>
          </nav>
        </div>
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>АЭРОПОРТЫ</Title>
          <nav>
            <LinkStyled to="#">Шереметьево</LinkStyled>
            <LinkStyled to="#">Курумоч</LinkStyled>
            <LinkStyled to="#">Домодедово</LinkStyled>
            <LinkStyled to="#">Толмачево</LinkStyled>
            <LinkStyled to="#">Владивосток</LinkStyled>
            <LinkStyled to="#">Гамбург</LinkStyled>
            <LinkBold to="#">Все аэропорты &rarr;</LinkBold>
          </nav>
        </div>
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>НАПРАВЛЕНИЯ</Title>
          <nav>
            <LinkStyled to="#">MOW – SIP</LinkStyled>
            <LinkStyled to="#">MOW – AER</LinkStyled>
            <LinkStyled to="#">MOW – TIV</LinkStyled>
            <LinkStyled to="#">MOW – MRV</LinkStyled>
            <LinkStyled to="#">LED – MOW</LinkStyled>
            <LinkStyled to="#">MOW – BKK</LinkStyled>
          </nav>
        </div>
        <div className="col-xs-6 col-md-3 col-xl-2">
          <Title>СЕРВИСЫ</Title>
          <nav>
            <LinkStyled to="#">Горящие авиабилеты</LinkStyled>
            <LinkStyled to="#">Календарь низких цен</LinkStyled>
            <LinkStyled to="#">Карта низких цен</LinkStyled>
            <LinkStyled to="#">Спецпредложения</LinkStyled>
            <LinkStyled to="#">Таблица цен</LinkStyled>
            <LinkStyled to="#">Блог</LinkStyled>
            <LinkStyled to="#">Помощь</LinkStyled>
          </nav>
        </div>
      </div>
    </div>
  </Navigation>
);
