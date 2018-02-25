import React from "react";
import styled from "styled-components";
import { minWidth } from "../../../assets";

import FilterSection from "./FilterSection";
import { CheckBox } from "./UI";

const FilterPanel = styled.div`
  max-width: 38rem;
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
      <FilterSection title="ПЕРЕСАДКИ" initialOpen>
        <CheckBox defaultChecked={false} title="Все" />
        <CheckBox defaultChecked={true} title="Без пересадок" price={7712} />
        <CheckBox defaultChecked={false} title="1 пересадка" price={11150} />
        <CheckBox defaultChecked={false} title="2 пересадки" price={16821} />
        <CheckBox defaultChecked={false} title="3 пересадки" price={23986} />
      </FilterSection>
      <FilterSection title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" initialOpen>
        <h4>Москва - Барселона</h4>
        <h4>Барселона - Москва</h4>
      </FilterSection>
      <FilterSection title="БАГАЖ">Панель фильтров</FilterSection>
      <FilterSection title="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ">
        Панель фильтров
      </FilterSection>
      <FilterSection title="ВРЕМЯ В ПУТИ" initialOpen>
        Панель фильтров
      </FilterSection>
      <FilterSection title="АВИАКОМПАНИИ" initialOpen badge={43}>
        <CheckBox defaultChecked={false} title="Несколько авиакомпаний" />
        <span>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </span>
        <div>
          <h4>Альянсы</h4>
          <CheckBox defaultChecked={true} title="Все" />
          <CheckBox defaultChecked={true} title="Star Alliance" price={11150} />
          <CheckBox defaultChecked={true} title="OneWorld" price={12370} />
          <CheckBox defaultChecked={true} title="SkyTeam" price={16290} />
        </div>
        <div>
          <h4>Авиакомпании</h4>
          <CheckBox defaultChecked={true} title="Все" />
          <CheckBox
            defaultChecked={true}
            title="Aegean Airlines"
            price={20357}
          />

          <CheckBox defaultChecked={true} title="Air Algerie" price={29105} />
          <CheckBox defaultChecked={true} title="Air Europa" price={22202} />
          <CheckBox defaultChecked={true} title="Air France" price={17050} />
          <CheckBox defaultChecked={true} title="Air Moldova" price={22630} />
          <CheckBox defaultChecked={true} title="Alitalia" price={22717} />
          <CheckBox
            defaultChecked={true}
            title="Alitalia CityLiner"
            price={20271}
          />
          <CheckBox defaultChecked={true} title="Belle Air" price={18371} />
          <CheckBox
            defaultChecked={true}
            title="British Airways"
            price={23839}
          />
          <CheckBox
            defaultChecked={true}
            title="Brussels Airlines"
            price={11150}
          />
          <CheckBox defaultChecked={true} title="Bulgaria Air" price={20114} />
        </div>
      </FilterSection>
      <FilterSection title="АЭРОПОРТЫ">Панель фильтров</FilterSection>
      <FilterSection title="АЭРПОРТЫ ПЕРЕСАДКИ" badge={71}>
        Панель фильтров
      </FilterSection>
      <FilterSection title="АГЕНТСТВА" badge={26}>
        Панель фильтров
      </FilterSection>
      <ClearFilters>СБРОСИТЬ ВСЕ ФИЛЬТРЫ</ClearFilters>
    </FilterPanel>
  );
};
