import React, { Fragment } from 'react';
import styled from 'styled-components';

import { minWidth } from '../../../assets';
import FilterSection from './FilterSection';
import { CheckBox, RangeFilterDuration, RangeFilterDate, Clear } from './UI';
import plane from './plane.svg';

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

export default () => (
  <FilterPanel>
    <FilterSection title="ПЕРЕСАДКИ" initialOpen filterPresent>
      <Fragment>
        <CheckBox title="Все" />
        <CheckBox checked title="Без пересадок" price={7712} />
        <CheckBox title="1 пересадка" price={11150} />
        <CheckBox title="2 пересадки" price={16821} />
        <CheckBox title="3 пересадки" price={23986} />
      </Fragment>
    </FilterSection>
    <FilterSection title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" initialOpen>
      <Fragment>
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
      </Fragment>
    </FilterSection>
    <FilterSection title="БАГАЖ">Панель фильтров</FilterSection>
    <FilterSection title="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ">Панель фильтров</FilterSection>
    <FilterSection title="ВРЕМЯ В ПУТИ" initialOpen>
      <Fragment>
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
      </Fragment>
    </FilterSection>
    <FilterSection title="АВИАКОМПАНИИ" initialOpen badge={43}>
      <Fragment>
        <CheckBox checked={false} title="Несколько авиакомпаний" />
        <span>
          Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая выбранную
        </span>
        <div>
          <FilterHeader>Альянсы</FilterHeader>
          <CheckBox checked title="Все" />
          <CheckBox checked title="Star Alliance" price={11150} />
          <CheckBox checked title="OneWorld" price={12370} />
          <CheckBox checked title="SkyTeam" price={16290} />
        </div>
        <div>
          <FilterHeader>Авиакомпании</FilterHeader>
          <CheckBox checked title="Все" />
          <CheckBox checked title="Aegean Airlines" price={20357} />

          <CheckBox checked title="Air Algerie" price={29105} />
          <CheckBox checked title="Air Europa" price={22202} />
          <CheckBox checked title="Air France" price={17050} />
          <CheckBox checked title="Air Moldova" price={22630} />
          <CheckBox checked title="Alitalia" price={22717} />
          <CheckBox checked title="Alitalia CityLiner" price={20271} />
          <CheckBox checked title="Belle Air" price={18371} />
          <CheckBox checked title="British Airways" price={23839} />
          <CheckBox checked title="Brussels Airlines" price={11150} />
          <CheckBox checked title="Bulgaria Air" price={20114} />
        </div>
      </Fragment>
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
