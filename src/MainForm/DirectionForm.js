import React from "react";
import styled from "styled-components";
import { minWidth } from "../assets";

import arrows from "./arrows.svg";
import calendar from "./calendar.svg";
import popdown from "./popdn.svg";

const DirectionForm = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputBig = styled.div`
  flex-basis: 100%;
  ${minWidth.md`
    flex-basis: 50%;
  `} ${minWidth.xl`
    flex-basis: 20%;
  `};
`;

const InputSmall = styled.div`
  flex-basis: 50%;
  ${minWidth.md`
    flex-basis: 25%;
  `} ${minWidth.xl`
    flex-basis: 12%;
  `};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: #4a4a4a;
  background: #ffffff;
  position: relative;
  margin: 1px;
`;

const PlaceInput = styled.input`
  color: inherit;
  padding: 2rem 0 2rem 2rem;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const IATACode = styled.span`
  margin-right: 1rem;
  color: #a0b0b9;
`;

const InputButton = styled.button`
  margin-right: 1rem;
  border: none;
  width: 20px;
  height: 24px;
  padding: 0;
`;

const SwapPlaces = InputButton.extend`
  background: url(${arrows}) center no-repeat;
`;

const Calendar = InputButton.extend`
  background: url(${calendar}) center no-repeat;
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
  position: relative;
`;

const PaxAdditional = styled.span`
  color: #a0b0b9;
`;

const PopDownMark = styled.img`
  position: absolute;
  right: 1rem;
  top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  background: url(${popdown}) center no-repeat;
`;

export default () => {
  return (
    <DirectionForm>
      <InputBig>
        <InputWrapper>
          <PlaceInput defaultValue="Оренбург" placeholder="Город вылета" />
          <SwapPlaces />
          <IATACode>REN</IATACode>
        </InputWrapper>
      </InputBig>
      <InputBig>
        <InputWrapper>
          <PlaceInput value="" placeholder="Город прибытия" />
          <IATACode />
        </InputWrapper>
      </InputBig>
      <InputSmall>
        <InputWrapper>
          <PlaceInput value="" placeholder="Туда" />
          <Calendar />
        </InputWrapper>
      </InputSmall>
      <InputSmall>
        <InputWrapper>
          <PlaceInput value="" placeholder="Обратно" />
          <Calendar />
        </InputWrapper>
      </InputSmall>
      <InputBig>
        <InputWrapper>
          <PaxButton>
            1 пассажир, <PaxAdditional>эконом</PaxAdditional>
            <PopDownMark />
          </PaxButton>
        </InputWrapper>
      </InputBig>
    </DirectionForm>
  );
};
