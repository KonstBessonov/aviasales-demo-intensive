import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

import FilterSection from "./FilterSection";
import { CheckBox } from "./UI";

const FilterPanel = styled.div`
  min-width: 38rem;
  font-size: 1.5rem;
  color: #5b5b5c;
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-right: 2rem;
  display: none;
  ${minWidth.xl`
    display: block;
  `};
`;

const ClearFilters = styled.button`
  color: #00bde4;
  padding 2rem;
  width: 100%;
  background: none;
  border: none;
  text-align: left;
`;

export default () => {
  return (
    <FilterPanel>
      <FilterSection title="ПЕРЕСАДКИ">
        <CheckBox defaultChecked={false} title="Все" />
        <CheckBox defaultChecked={true} title="Без пересадок" value={7712} />
        <CheckBox defaultChecked={false} title="1 пересадка" value={11150} />
        <CheckBox defaultChecked={false} title="2 пересадки" value={16821} />
        <CheckBox defaultChecked={false} title="3 пересадки" value={23986} />
      </FilterSection>
      <FilterSection title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ">
        Панель фильтров
      </FilterSection>
      <FilterSection title="БАГАЖ">Панель фильтров</FilterSection>
      <FilterSection title="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ">
        Панель фильтров
      </FilterSection>
      <FilterSection title="ВРЕМЯ В ПУТИ">Панель фильтров</FilterSection>
      <FilterSection title="АВИАКОМПАНИИ">Панель фильтров</FilterSection>
      <FilterSection title="АЭРОПОРТЫ">Панель фильтров</FilterSection>
      <FilterSection title="АЭРПОРТЫ ПЕРЕСАДКИ">Панель фильтров</FilterSection>
      <FilterSection title="АГЕНТСТВА">Панель фильтров</FilterSection>
      <ClearFilters>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</ClearFilters>
    </FilterPanel>
  );
};
