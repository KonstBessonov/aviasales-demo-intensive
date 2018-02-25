import React from "react";
import styled from "styled-components";

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
