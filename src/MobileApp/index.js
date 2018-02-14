import React from "react";
import styled from "styled-components";
import { BlueSection } from "../assets";
import rating from "./rating.svg";
import phone_sm from "./phone_sm.png";

import apple from "./apple.svg";
import android from "./android.svg";
import winphone from "./winphone.svg";

const MobileApp = BlueSection.extend`
  padding-bottom: 0;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  padding: 2rem;
  text-align: center;
`;

const Rating = styled.div`
  display: flex;
  justify-content: center;
`;

const App = styled.div`
  display: flex;
  justify-content: center;
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 3rem;
`;

const AppLink = styled.a`
  color: inherit;
  text-decoration: none;
  margin: 1.5rem 0;
  &:hover {
    text-decoration: underline;
  }
  &:before {
    position: relative;
    right: 1rem;
    content: url(${props => props.img});
  }
`;

export default () => {
  return (
    <MobileApp>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-10 col-lg-offset-1">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
          </div>
        </div>
      </div>
      <Rating>
        <img src={rating} alt="rating 4.6 stars" /> Более 103&nbsp;000 оценок
      </Rating>
      <App>
        <div>
          <img src={phone_sm} alt="" />
        </div>
        <AppList>
          <AppLink href="#" img={apple}>
            iPhone или iPad
          </AppLink>
          <AppLink href="#" img={android}>
            Android
          </AppLink>
          <AppLink href="#" img={winphone}>
            Windows Phone
          </AppLink>
        </AppList>
      </App>
    </MobileApp>
  );
};
