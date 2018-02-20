import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../assets";

const Navigation = WhiteSection.extend`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 4rem;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  color: #5B5B5C;
  padding-top: 1rem;
  transition: color 0.3s;
  &:hover {
    color: ${props => props.theme.hover};
  }
  }
`;

const LinkBold = Link.extend`
  padding-top: 1.5rem;
  font-weight: 500;
`;

export default () => {
  return (
    <Navigation>
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>СТРАНЫ</Title>
            <nav>
              <Link href="#">Россия</Link>
              <Link href="#">Таиланд</Link>
              <Link href="#">Черногория</Link>
              <Link href="#">Кипр</Link>
              <Link href="#">Болгария</Link>
              <Link href="#">Грузия</Link>
              <LinkBold href="#">Все страны &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>ГОРОДА</Title>
            <nav>
              <Link href="#">Москва</Link>
              <Link href="#">Санкт-Петербург</Link>
              <Link href="#">Симферополь</Link>
              <Link href="#">Адлер</Link>
              <Link href="#">Екатеринбург</Link>
              <Link href="#">Лондон</Link>
              <LinkBold href="#">Все города &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АВИАКОМПАНИИ</Title>
            <nav>
              <Link href="#">Air Berlin</Link>
              <Link href="#">Air France</Link>
              <Link href="#">Alitalia</Link>
              <Link href="#">Air Baltic</Link>
              <Link href="#">Emirates</Link>
              <Link href="#">KLM</Link>
              <LinkBold href="#">Все авиакомпании &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АЭРОПОРТЫ</Title>
            <nav>
              <Link href="#">Шереметьево</Link>
              <Link href="#">Курумоч</Link>
              <Link href="#">Домодедово</Link>
              <Link href="#">Толмачево</Link>
              <Link href="#">Владивосток</Link>
              <Link href="#">Гамбург</Link>
              <LinkBold href="#">Все аэропорты &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>НАПРАВЛЕНИЯ</Title>
            <nav>
              <Link href="#">MOW – SIP</Link>
              <Link href="#">MOW – AER</Link>
              <Link href="#">MOW – TIV</Link>
              <Link href="#">MOW – MRV</Link>
              <Link href="#">LED – MOW</Link>
              <Link href="#">MOW – BKK</Link>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>СЕРВИСЫ</Title>
            <nav>
              <Link href="#">Горящие авиабилеты</Link>
              <Link href="#">Календарь низких цен</Link>
              <Link href="#">Карта низких цен</Link>
              <Link href="#">Спецпредложения</Link>
              <Link href="#">Таблица цен</Link>
              <Link href="#">Блог</Link>
              <Link href="#">Помощь</Link>
            </nav>
          </div>
        </div>
      </div>
    </Navigation>
  );
};
