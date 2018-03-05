import React from "react";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

import checked from "./checked.svg";
import unchecked from "./unchecked.svg";
import clear from "./clear.svg";

import FormattedCurrency from "../../../UI/FormattedCurrency";
import FormattedDuration from "../../../UI/FormattedDuration";

const formatDate = date => {
  if (date) return format(date, "HH:mm, D MMM", { locale: ruLocale });
};

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #4a4a4a;
  line-height: 4.5rem;
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const Check = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  left: 0;
  transition-duration: 0.1s;
  background-image: url(${unchecked});
`;

const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  color: #4a4a4a;
  line-height: 4.5rem;
  padding-left: 3rem;
  cursor: pointer;

  & ${Checkbox}:checked ~ ${Check} {
    background-image: url(${checked});
  }
`;

const Price = styled.span`
  cursor: pointer;
  color: #a0b0b9;
`;

export const CheckBox = ({ checked, title, price, onChange, onValueClick }) => (
  <CheckBoxWrapper>
    <Label>
      <span>{title}</span>
      <Checkbox type="checkbox" checked={checked} onChange={onChange} />
      <Check />
    </Label>
    <Price onClick={onValueClick}>
      {price > 0 && <FormattedCurrency value={price} />}
    </Price>
  </CheckBoxWrapper>
);

const RangeContainer = styled.div`
  margin-top: 1.5rem;
  font-size: 1.5rem;
  line-height: 2.25rem;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RangeFilter = props => {
  const { title, startText, endText, ...restProps } = props;
  return (
    <RangeContainer>
      <span>{title}</span>
      <SpaceBetween>
        <span>{startText}</span>
        <span>{endText}</span>
      </SpaceBetween>
      <Range {...restProps} />
    </RangeContainer>
  );
};

export const RangeFilterDate = props => {
  const { startDate, endDate, ...restProps } = props;
  return (
    <RangeFilter
      {...restProps}
      startText={"c " + formatDate(startDate)}
      endText={"до " + formatDate(endDate)}
    />
  );
};

export const RangeFilterDuration = props => {
  const { minDuration, maxDuration, ...restProps } = props;
  return (
    <RangeFilter
      {...restProps}
      startText={
        <React.Fragment>
          от <FormattedDuration duration={minDuration} />
        </React.Fragment>
      }
      endText={
        <React.Fragment>
          до <FormattedDuration duration={maxDuration} />
        </React.Fragment>
      }
    />
  );
};

export const Clear = styled.img`
  background: none;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${clear});
  border: none;
  padding: 1rem;
`;
