import React from "react";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";

const formatCurrency = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}).format;

const CheckBoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #4a4a4a;
  line-height: 4.5rem;
`;

const Price = styled.span`
  color: #a0b0b9;
`;

export const CheckBox = styled(
  ({ checked, title, price, onChange, onValueClick }) => (
    <CheckBoxWrapper>
      <label>
        <input type="checkbox" checked={checked} onChange={onChange} /> {title}
      </label>
      {price > 0 && (
        <Price onClick={onValueClick}>{formatCurrency(price)}</Price>
      )}
    </CheckBoxWrapper>
  )
)``;

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
