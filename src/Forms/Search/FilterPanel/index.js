import React from "react";
import styled from "styled-components";

import { minWidth } from "../../../assets";
import FilterSection from "./FilterSection";
import { CheckBox, RangeFilterDuration, RangeFilterDate, Clear } from "./UI";
import plane from "./plane.svg";

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

const FilterHeader = styled.h4`
  display: flex;
  align-items: center;
`;

const PlaneIcon = styled.img`
  padding: 0 1rem;
`;

const ClearFilters = styled.button`
  color: #00bde4;
  padding 2rem;
  width: 100%;
  background: none;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default () => {
  return (
    <FilterPanel>
      <FilterSection title="ПЕРЕСАДКИ" initialOpen filterPresent>
        <CheckBox checked={false} title="Все" />
        <CheckBox checked={true} title="Без пересадок" price={7712} />
        <CheckBox checked={false} title="1 пересадка" price={11150} />
        <CheckBox checked={false} title="2 пересадки" price={16821} />
        <CheckBox checked={false} title="3 пересадки" price={23986} />
      </FilterSection>
      <FilterSection title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" initialOpen>
        <FilterHeader>
          Москва <PlaneIcon src={plane} alt="" /> Барселона
        </FilterHeader>
        <RangeFilterDate
          title="Вылет из Москвы:"
          startDate={1519412700000}
          endDate={1519497900000}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <RangeFilterDate
          title="Прибытие в Барселону:"
          startDate={1519423500000}
          endDate={1519635000000}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <FilterHeader>
          Барселона <PlaneIcon src={plane} alt="" /> Москва
        </FilterHeader>
        <RangeFilterDate
          title="Вылет из Барселоны:"
          startDate={1520038800000}
          endDate={1520102700000}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <RangeFilterDate
          title="Прибытие в Москву:"
          startDate={1520071200000}
          endDate={1520225700000}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
      </FilterSection>
      <FilterSection title="БАГАЖ">Панель фильтров</FilterSection>
      <FilterSection title="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ">
        Панель фильтров
      </FilterSection>
      <FilterSection title="ВРЕМЯ В ПУТИ" initialOpen>
        <FilterHeader>
          Москва <PlaneIcon src={plane} alt="" /> Барселона
        </FilterHeader>
        <RangeFilterDuration
          minDuration={260}
          maxDuration={2900}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <FilterHeader>
          Барселона <PlaneIcon src={plane} alt="" /> Москва
        </FilterHeader>
        <RangeFilterDuration
          minDuration={250}
          maxDuration={2480}
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
      </FilterSection>
      <FilterSection title="АВИАКОМПАНИИ" initialOpen badge={43}>
        <CheckBox checked={false} title="Несколько авиакомпаний" />
        <span>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </span>
        <div>
          <FilterHeader>Альянсы</FilterHeader>
          <CheckBox checked={true} title="Все" />
          <CheckBox checked={true} title="Star Alliance" price={11150} />
          <CheckBox checked={true} title="OneWorld" price={12370} />
          <CheckBox checked={true} title="SkyTeam" price={16290} />
        </div>
        <div>
          <FilterHeader>Авиакомпании</FilterHeader>
          <CheckBox checked={true} title="Все" />
          <CheckBox checked={true} title="Aegean Airlines" price={20357} />

          <CheckBox checked={true} title="Air Algerie" price={29105} />
          <CheckBox checked={true} title="Air Europa" price={22202} />
          <CheckBox checked={true} title="Air France" price={17050} />
          <CheckBox checked={true} title="Air Moldova" price={22630} />
          <CheckBox checked={true} title="Alitalia" price={22717} />
          <CheckBox checked={true} title="Alitalia CityLiner" price={20271} />
          <CheckBox checked={true} title="Belle Air" price={18371} />
          <CheckBox checked={true} title="British Airways" price={23839} />
          <CheckBox checked={true} title="Brussels Airlines" price={11150} />
          <CheckBox checked={true} title="Bulgaria Air" price={20114} />
        </div>
      </FilterSection>
      <FilterSection title="АЭРОПОРТЫ">Панель фильтров</FilterSection>
      <FilterSection title="АЭРПОРТЫ ПЕРЕСАДКИ" badge={71}>
        Панель фильтров
      </FilterSection>
      <FilterSection title="АГЕНТСТВА" badge={26}>
        Панель фильтров
      </FilterSection>
      <ClearFilters>
        СБРОСИТЬ ВСЕ ФИЛЬТРЫ<Clear />
      </ClearFilters>
    </FilterPanel>
  );
};
