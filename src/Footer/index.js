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

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  transition: color 0.3s;
  &:hover {
    color: #FD8A27;
  }
  &::before {
    content: url(${props => props.image});
    position: relative;
    right: 0.5rem;
    vertical-align: sub;
  }
  }
`;

const Apps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`;

const AppLink = styled.a`
  display: block;
  align: flex;
  margin: 1rem 0 0 0;
`;

export default () => {
  return (
    <Footer>
      <div className="container">
        <div className="row">
          <Link href="#">О компании</Link>
          <Link href="#">Партнёрская программа</Link>
          <Link href="#">Реклама</Link>
          <Link href="#">Вакансии</Link>
          <Link href="#">Помощь</Link>
          <Link href="#">Правила</Link>
          <Link href="#">White Label авиабилеты</Link>
        </div>
        <div className="row">
          <Link href="#" image={vk}>
            Вконтакте
          </Link>
          <Link href="#" image={facebook}>
            Фейсбук
          </Link>
          <Link href="#" image={insta}>
            Инстаграм
          </Link>
          <Link href="#" image={twi}>
            Твиттер
          </Link>
          <Link href="#" image={viber}>
            Вайбер
          </Link>
        </div>
        <div className="row center-xs">
          <Link href="#">Поиск и бронирование отелей</Link>
        </div>
        <Apps>
          <AppLink href="#">
            <img src={appstore} alt="App Store" />
          </AppLink>
          <AppLink href="#">
            <img src={googleplay} alt="Google Play" />
          </AppLink>
          <AppLink href="#">
            <img src={winphone} alt="Windows Phone" />
          </AppLink>
        </Apps>
        <div className="row center-xs">
          &copy; 2007–2018, Aviasales — дешевые авиабилеты
        </div>
      </div>
    </Footer>
  );
};
