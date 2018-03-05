import React from "react";
import styled from "styled-components";
import { BlueSection, minWidth } from "../../assets";

import rating from "./rating.svg";
import apple from "./apple.svg";
import android from "./android.svg";
import winphone from "./winphone.svg";

import PhonePicture from "./PhonePicture";

const MobileApp = BlueSection.extend`
  padding: 0;
  margin: 0;
  ${minWidth.md`
    margin-top: 6rem;
  `};
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  line-height: 3.5rem;
  ${minWidth.md`
    font-size: 4rem;
    text-align: left;
    line-height: 5rem;
    margin-top: 6rem;
  `};
  ${minWidth.xl`
    margin-top: 8rem;
  `};
`;

const Rating = styled.div`
  ${minWidth.md`
    text-align: left;
  `};
`;

const AppList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7rem 0 7rem 0;
  ${minWidth.md`
    flex-direction: row;
    justify-content: flex-start;
    padding: 5rem 0 6rem 0;
  `} ${minWidth.xl`
    padding: 5rem 0 8rem 0;
  `};
`;

const AppLink = styled.a`
  display: flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    padding-bottom: 2.5rem;
  }
  ${minWidth.md`
    &:not(:last-child) {
      padding: 0;
      padding-right: 2.5rem;
      border-right: 1px solid rgba(255, 255, 255, 0.5);
   }
    &:not(:first-child) {
      padding-left: 2.5rem;
   }
  `};
`;

const AppLinkIcon = styled.img`
  margin-right: 1rem;
`;

export default () => {
  return (
    <MobileApp>
      <div className="container">
        <div className="row center-xs start-md">
          <div className="col-xs-12 col-md-7 col-md-offset-4">
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
                <AppLinkIcon src={apple} alt="" /> iPhone или iPad
              </AppLink>
              <AppLink href="#">
                <AppLinkIcon src={android} alt="" /> Android
              </AppLink>
              <AppLink href="#">
                <AppLinkIcon src={winphone} alt="" /> Windows Phone
              </AppLink>
            </AppList>
          </div>
        </div>
      </div>
    </MobileApp>
  );
};
