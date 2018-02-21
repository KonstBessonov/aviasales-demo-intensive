import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../assets";
import { Link } from "react-router-dom";

const Navigation = WhiteSection.extend`
  padding-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 4rem;
`;

const LinkStyled = styled(Link)`
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

const LinkBold = LinkStyled.extend`
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
              <Link to="#">Россия</Link>
              <Link to="#">Таиланд</Link>
              <Link to="#">Черногория</Link>
              <Link to="#">Кипр</Link>
              <Link to="#">Болгария</Link>
              <Link to="#">Грузия</Link>
              <LinkBold to="#">Все страны &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>ГОРОДА</Title>
            <nav>
              <Link to="#">Москва</Link>
              <Link to="#">Санкт-Петербург</Link>
              <Link to="#">Симферополь</Link>
              <Link to="#">Адлер</Link>
              <Link to="#">Екатеринбург</Link>
              <Link to="#">Лондон</Link>
              <LinkBold to="#">Все города &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АВИАКОМПАНИИ</Title>
            <nav>
              <Link to="#">Air Berlin</Link>
              <Link to="#">Air France</Link>
              <Link to="#">Alitalia</Link>
              <Link to="#">Air Baltic</Link>
              <Link to="#">Emirates</Link>
              <Link to="#">KLM</Link>
              <LinkBold to="#">Все авиакомпании &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>АЭРОПОРТЫ</Title>
            <nav>
              <Link to="#">Шереметьево</Link>
              <Link to="#">Курумоч</Link>
              <Link to="#">Домодедово</Link>
              <Link to="#">Толмачево</Link>
              <Link to="#">Владивосток</Link>
              <Link to="#">Гамбург</Link>
              <LinkBold to="#">Все аэропорты &rarr;</LinkBold>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>НАПРАВЛЕНИЯ</Title>
            <nav>
              <Link to="#">MOW – SIP</Link>
              <Link to="#">MOW – AER</Link>
              <Link to="#">MOW – TIV</Link>
              <Link to="#">MOW – MRV</Link>
              <Link to="#">LED – MOW</Link>
              <Link to="#">MOW – BKK</Link>
            </nav>
          </div>
          <div className="col-xs-6 col-md-3 col-xl-2">
            <Title>СЕРВИСЫ</Title>
            <nav>
              <Link to="#">Горящие авиабилеты</Link>
              <Link to="#">Календарь низких цен</Link>
              <Link to="#">Карта низких цен</Link>
              <Link to="#">Спецпредложения</Link>
              <Link to="#">Таблица цен</Link>
              <Link to="#">Блог</Link>
              <Link to="#">Помощь</Link>
            </nav>
          </div>
        </div>
      </div>
    </Navigation>
  );
};
