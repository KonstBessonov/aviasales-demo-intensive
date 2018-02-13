import React from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import arrows from "./arrows.svg";
import calendar from "./calendar.svg";
import popdown from "./popdn.svg";
import aero from "./aero.svg";

const Header = styled.section`
  background: linear-gradient(
    148.48deg,
    #00b0de 22.46%,
    #01aedc 26.15%,
    #02abdb 29.89%,
    #02abdb 33.59%,
    #02abdb 33.81%,
    #196ebd 122.26%
  );
  padding-bottom: 10rem;
`;

const Logo = styled.img`
  padding-top: 1rem;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: bold;
  padding-bottom: 2rem;
`;

const DirectionForm = styled.div`
  background: #ffffff;
  color: #4a4a4a;
  border-radius: 0.5rem;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const PlaceInput = styled.input`
  ${"" /* display: inline-block; */} color: inherit;
  padding: 2rem 0 2rem 2rem;
  width: 70%;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const IATACode = styled.span`
  margin-top: 2rem;
  margin-right: 1rem;
  color: #a0b0b9;
  float: right;
`;

const SwapPlaces = styled.img`
  margin-top: 2rem;
  margin-right: 1rem;
  float: right;
`;

const Calendar = styled.img`
  margin-top: 2rem;
  margin-right: 1rem;
  float: right;
`;

const PaxButton = styled.button`
  background: #ffffff;
  color: inherit;
  border-radius: inherit;
  border: none;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
`;

const PaxAdditional = styled.span`
  color: #a0b0b9;
`;

const PopDownMark = styled.img`
  padding-top: 1rem;
  padding-right: 1rem;
  float: right;
`;

const SubmitButton = styled.button`
  border-radius: 0.5rem;
  background: #ff9241;
  border: none;
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
`;

export default () => {
  return (
    <Header>
      <div className="container">
        <div className="row">
          <div className="col-xs-2">
            <Logo src={logo} alt="logo" />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12">
            <Title>Поиск дешевых авиабилетов</Title>
          </div>
        </div>
        <DirectionForm>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <PlaceInput defaultValue="Оренбург" placeholder="Город вылета" />
              <SwapPlaces src={arrows} alt="Swap places" />
              <IATACode>REN</IATACode>
            </div>
            <div className="col-xs-12 col-md-6">
              <PlaceInput value="" placeholder="Город прибытия" />
              <IATACode />
            </div>
            <div className="col-xs-6 col-md-3">
              <PlaceInput value="" placeholder="Туда" />
              <Calendar src={calendar} alt="Calendar depart" />
            </div>
            <div className="col-xs-6 col-md-3">
              <PlaceInput value="" placeholder="Обратно" />
              <Calendar src={calendar} alt="Calendar return" />
            </div>
            <div className="col-xs-12 col-md-6">
              <PaxButton>
                1 пассажир, <PaxAdditional>эконом</PaxAdditional>
                <PopDownMark src={popdown} alt="Dropdown" />
              </PaxButton>
            </div>
          </div>
        </DirectionForm>
        <div className="row center-xs">
          <div className="col-xs-12 col-md-6">
            <SubmitButton>
              Найти билеты <img src={aero} alt="aero" />
            </SubmitButton>
          </div>
        </div>
      </div>
    </Header>
  );
};
