import React from "react";
import styled from "styled-components";
import { WhiteSection } from "../assets";

const Footer = WhiteSection.extend`
  border-top: 1px solid #e0e6e8;
  padding-top: 3rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  color: #5B5B5C;
  padding: 1rem;
  transition: color 0.3s;
  &:hover {
    color: #FD8A27;
  }
  }
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
          <Link href="#">Вконтакте</Link>
          <Link href="#">Фейсбук</Link>
          <Link href="#">Инстаграм</Link>
          <Link href="#">Твиттер</Link>
          <Link href="#">Вайбер</Link>
        </div>
      </div>
    </Footer>
  );
};
