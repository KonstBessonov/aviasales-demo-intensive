import React from "react";
import styled from "styled-components";
import { displaySize } from "../assets";

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
  @media screen and (min-width: ${displaySize.md}) {
    flex-basis: 50%;
  }
  @media screen and (min-width: ${displaySize.xl}) {
    flex-basis: 20%;
  }
`;

const InputSmall = styled.div`
  flex-basis: 50%;
  @media screen and (min-width: ${displaySize.md}) {
    flex-basis: 25%;
  }
  @media screen and (min-width: ${displaySize.xl}) {
    flex-basis: 12%;
  }
`;

const InputDiv = styled.div`
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
  background: url(${props => props.src}) center no-repeat;
  width: 20px;
  height: 24px;
  padding: 0;
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
  padding-right: 1rem;
`;

export default () => {
  return (
    <DirectionForm>
      <InputBig>
        <InputDiv>
          <PlaceInput defaultValue="Оренбург" placeholder="Город вылета" />
          <InputButton src={arrows} />
          <IATACode>REN</IATACode>
        </InputDiv>
      </InputBig>
      <InputBig>
        <InputDiv>
          <PlaceInput value="" placeholder="Город прибытия" />
          <IATACode />
        </InputDiv>
      </InputBig>
      <InputSmall>
        <InputDiv>
          <PlaceInput value="" placeholder="Туда" />
          <InputButton src={calendar} />
        </InputDiv>
      </InputSmall>
      <InputSmall>
        <InputDiv>
          <PlaceInput value="" placeholder="Обратно" />
          <InputButton src={calendar} />
        </InputDiv>
      </InputSmall>
      <InputBig>
        <InputDiv>
          <PaxButton>
            1 пассажир, <PaxAdditional>эконом</PaxAdditional>
            <PopDownMark src={popdown} alt="Dropdown" />
          </PaxButton>
        </InputDiv>
      </InputBig>
    </DirectionForm>
  );
};
