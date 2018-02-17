import React from "react";
import styled from "styled-components";
import { BlueSection } from "../assets";

import rating from "./rating.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import winphone from "./winphone.svg";

import PhonePicture from "./PhonePicture";

const MobileApp = BlueSection.extend`
  padding: 0;
  margin: 0;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    margin-top: 6rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    text-align: left;
  }
`;

const Rating = styled.div`
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    text-align: left;
  }
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 0;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    flex-direction: row;
    justify-content: flex-start;
    padding: 8rem 0;
  }
  @media screen and (min-width: ${props => props.theme.displaySizes.lg}) {
    padding: 10rem 0;
  }
`;

const AppLink = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 1.5rem 0;
  @media screen and (min-width: ${props => props.theme.displaySizes.md}) {
    padding: 0 1.5rem;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export default () => {
  return (
    <MobileApp>
      <div className="container">
        <div className="row center-xs left-md">
          <div className="col-xs-12 col-md col-md-offset-4">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <img src={rating} alt="rating 4.6 stars" /> Более 103&nbsp;000
              оценок
            </Rating>
          </div>
        </div>
        <div className="row bottom-xs">
          <div className="col-xs-6 col-md-4 col-xl-3 col-xl-offset-1">
            <PhonePicture />
          </div>
          <div className="col-xs-6 col-md-8 col-xl">
            <AppList>
              <AppLink href="#">
                <img src={apple} alt="" /> iPhone или iPad
              </AppLink>
              <AppLink href="#">
                <img src={android} alt="" /> Android
              </AppLink>
              <AppLink href="#">
                <img src={winphone} alt="" /> Windows Phone
              </AppLink>
            </AppList>
          </div>
        </div>
      </div>
    </MobileApp>
  );
};
