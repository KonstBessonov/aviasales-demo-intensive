import React from "react";
import styled from "styled-components";
import Range from "rc-slider/lib/Range";
import "rc-slider/assets/index.css";

import { minWidth } from "../../../assets";
import FilterSection from "./FilterSection";
import { CheckBox, RangeFilter } from "./UI";
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
        <FilterHeader>
          Москва <PlaneIcon src={plane} alt="" /> Барселона
        </FilterHeader>
        <RangeFilter
          title="Вылет из Москвы:"
          startText="c 00:05, 24 фев"
          endText="до 23:45, 24 фев"
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <RangeFilter
          title="Прибытие в Барселону:"
          startText="c 03:05, 24 фев"
          endText="до 13:50, 26 фев"
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <FilterHeader>
          Барселона <PlaneIcon src={plane} alt="" /> Москва
        </FilterHeader>
        <RangeFilter
          title="Вылет из Барселоны:"
          startText="c 06:00, 3 мар"
          endText="до 23:45, 3 мар"
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <RangeFilter
          title="Прибытие в Москву:"
          startText="c 15:00, 3 мар"
          endText="до 09:55, 5 мар"
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
        <RangeFilter
          startText="от 4 ч 20 м"
          endText="до 48 ч 50 м"
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
        <FilterHeader>
          Барселона <PlaneIcon src={plane} alt="" /> Москва
        </FilterHeader>
        <RangeFilter
          startText="от 4 ч 10 м"
          endText="до 41 ч 20 м"
          min={0}
          max={100}
          defaultValue={[0, 100]}
        />
      </FilterSection>
      <FilterSection title="АВИАКОМПАНИИ" initialOpen badge={43}>
        <CheckBox defaultChecked={false} title="Несколько авиакомпаний" />
        <span>
          Показывать билеты с перелетами, выполняемыми несколькими
          авиакомпаниями, включая выбранную
        </span>
        <div>
          <FilterHeader>Альянсы</FilterHeader>
          <CheckBox defaultChecked={true} title="Все" />
          <CheckBox defaultChecked={true} title="Star Alliance" price={11150} />
          <CheckBox defaultChecked={true} title="OneWorld" price={12370} />
          <CheckBox defaultChecked={true} title="SkyTeam" price={16290} />
        </div>
        <div>
          <FilterHeader>Авиакомпании</FilterHeader>
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
