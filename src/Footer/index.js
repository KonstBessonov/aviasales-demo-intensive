import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../assets";
import vk from "./vk.svg";
import facebook from "./facebook.svg";
import insta from "./insta.svg";
import twi from "./twi.svg";
import viber from "./viber.svg";
import appstore from "./appstore.svg";
import googleplay from "./googleplay.svg";
import winphone from "./winphone.svg";

const Footer = WhiteSection.extend`
  border-top: 1px solid #e0e6e8;
  padding-top: 3rem;
  font-size: 1.5rem;
  color: #5b5b5c;
`;

const Outer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 75rem) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
  }
`;

const TopLeft = styled.div`
  margin-bottom: 2rem;
`;

const LinksList = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 1rem;
  margin-right: 2rem;
  transition: color 0.3s;
  &:hover {
    color: #fd8a27;
  }
`;

// &::before {
//   content: url(${props => props.image});
//   position: relative;
//   right: 0.5rem;
// }

const Booking = styled.div`
  text-align: center;
  @media screen and (min-width: 48rem) {
    text-align: left;
  }
`;

const AppsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 48rem) {
    flex-direction: row;
    justify-content: flex-start;
  }
  @media screen and (min-width: 75rem) {
    justify-content: flex-end;
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 48rem) {
    align-items: flex-start;
  }
  @media screen and (min-width: 75rem) {
    align-items: flex-end;
  }
`;

const AppLink = styled.a`
  display: block;
  align: flex;
  margin: 1rem 0 0 0;
  @media screen and (min-width: 48rem) {
    margin: 0 1rem 0 0;
  }
  @media screen and (min-width: 75rem) {
    margin: 0 0 0 1rem;
  }
`;

const Copyright = styled.p`
  margin: 3rem 0;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <Outer>
          <TopLeft>
            <LinksList>
              <Link href="#">О компании</Link>
              <Link href="#">Партнёрская программа</Link>
              <Link href="#">Реклама</Link>
              <Link href="#">Вакансии</Link>
              <Link href="#">Помощь</Link>
              <Link href="#">Правила</Link>
              <Link href="#">White Label авиабилеты</Link>
            </LinksList>
            <LinksList>
              <Link href="#">
                <img src={vk} alt="" /> Вконтакте
              </Link>
              <Link href="#">
                <img src={facebook} alt="" /> Фейсбук
              </Link>
              <Link href="#">
                <img src={insta} alt="" /> Инстаграм
              </Link>
              <Link href="#">
                <img src={twi} alt="" /> Твиттер
              </Link>
              <Link href="#">
                <img src={viber} alt="" /> Вайбер
              </Link>
            </LinksList>
            <Booking>
              <Link href="#">Поиск и бронирование отелей</Link>
            </Booking>
          </TopLeft>
          <BottomRight>
            <AppsList>
              <AppLink href="#">
                <img src={appstore} alt="App Store" />
              </AppLink>
              <AppLink href="#">
                <img src={googleplay} alt="Google Play" />
              </AppLink>
              <AppLink href="#">
                <img src={winphone} alt="Windows Phone" />
              </AppLink>
            </AppsList>
            <Copyright>
              &copy; 2007–2018, Aviasales — дешевые авиабилеты
            </Copyright>
          </BottomRight>
        </Outer>
      </div>
    </Footer>
  );
};
