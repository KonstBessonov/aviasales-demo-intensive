import React, { Fragment } from 'react';
import styled from 'styled-components';
import pluralize from 'pluralize-ru';
import cloneDeep from 'lodash/cloneDeep';

import { minWidth } from '../../../assets';
import FilterSection from './FilterSection';
import { CheckBox, RangeFilterDuration, RangeFilterDate, Clear } from './UI';
import plane from './plane.svg';

import { stopsFilter, departureArrivalTimeFilter } from './data';

const FilterPanelStyled = styled.div`
  max-width: 38rem;
  font-size: 1.5rem;
  color: #5b5b5c;
  background-color: #ffffff;
  border-radius: 0.5rem;
  margin-right: 2rem;
  display: none;
  ${minWidth.xl`
    display: block;
    max-width: 23%;
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

const pluralizeStops = qty =>
  pluralize(qty, 'Без пересадок', '%d пересадка', '%d пересадки', '%d пересадок');

const toggleChecked = o => ({ ...o, checked: !o.checked });

const toggleElementChecked = (arr, idx) => [
  ...arr.slice(0, idx),
  toggleChecked(arr[idx]),
  ...arr.slice(idx + 1),
];

const setChecked = (o, checked) => ({ ...o, checked });

const setAllChecked = (arr, checked) => arr.map(cur => setChecked(cur, checked));

const isAllChecked = arr => arr.every(cur => cur.checked);

class FilterPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopsFilter: cloneDeep(stopsFilter),
      departureArrivalTimeFilter: cloneDeep(departureArrivalTimeFilter),
    };
  }

  handleAllStopsChange = () => {
    this.setState(({ stopsFilter: oldFilter }) => ({
      stopsFilter: setAllChecked(oldFilter, !isAllChecked(oldFilter)),
    }));
  };

  handleStopsChange = (idx) => {
    this.setState(({ stopsFilter: oldFilter }) => ({
      stopsFilter: toggleElementChecked(oldFilter, idx),
    }));
  };

  handleStopsClear = () =>
    this.setState(({ stopsFilter: oldFilter }) => ({
      stopsFilter: setAllChecked(oldFilter, true),
    }));

  handleStopsValueClick = idx =>
    this.setState(({ stopsFilter: oldFilter }) => ({
      stopsFilter: toggleElementChecked(setAllChecked(oldFilter, false), idx),
    }));

  handleRangeValueChange = (segment, direction, value) => {};

  render() {
    return (
      <FilterPanelStyled>
        <FilterSection
          title="ПЕРЕСАДКИ"
          initialOpen
          filterPresent={!isAllChecked(this.state.stopsFilter)}
          onClearClick={this.handleStopsClear}
        >
          <Fragment>
            <CheckBox
              key={0}
              title="Все"
              checked={isAllChecked(this.state.stopsFilter)}
              onChange={() => this.handleAllStopsChange()}
            />
            {this.state.stopsFilter.map((cur, idx) => (
              <CheckBox
                key={cur.id}
                checked={cur.checked}
                title={pluralizeStops(cur.stops)}
                price={cur.price}
                onChange={() => this.handleStopsChange(idx)}
                onValueClick={() => this.handleStopsValueClick(idx)}
              />
            ))}
          </Fragment>
        </FilterSection>
        <FilterSection title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" initialOpen>
          <Fragment>
            <FilterHeader>
              Москва <PlaneIcon src={plane} alt="" /> Барселона
            </FilterHeader>
            <RangeFilterDate
              title="Вылет из Москвы:"
              startDate={this.state.departureArrivalTimeFilter[0].departure.range[0]}
              endDate={this.state.departureArrivalTimeFilter[0].departure.range[1]}
              value={this.state.departureArrivalTimeFilter[0].departure.value}
              onChange={value => this.handleRangeValueChange(0, 'departure', value)}
            />
            <RangeFilterDate
              title="Прибытие в Барселону:"
              startDate={this.state.departureArrivalTimeFilter[0].arrival.range[0]}
              endDate={this.state.departureArrivalTimeFilter[0].arrival.range[1]}
              value={this.state.departureArrivalTimeFilter[0].arrival.value}
            />
            <FilterHeader>
              Барселона <PlaneIcon src={plane} alt="" /> Москва
            </FilterHeader>
            <RangeFilterDate
              title="Вылет из Барселоны:"
              startDate={this.state.departureArrivalTimeFilter[1].departure.range[0]}
              endDate={this.state.departureArrivalTimeFilter[1].departure.range[1]}
              value={this.state.departureArrivalTimeFilter[1].departure.value}
            />
            <RangeFilterDate
              title="Прибытие в Москву:"
              startDate={this.state.departureArrivalTimeFilter[1].arrival.range[0]}
              endDate={this.state.departureArrivalTimeFilter[1].arrival.range[1]}
              value={this.state.departureArrivalTimeFilter[1].arrival.value}
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
            <RangeFilterDuration minDuration={260} maxDuration={2900} />
            <FilterHeader>
              Барселона <PlaneIcon src={plane} alt="" /> Москва
            </FilterHeader>
            <RangeFilterDuration minDuration={250} maxDuration={2480} />
          </Fragment>
        </FilterSection>
        <FilterSection title="АВИАКОМПАНИИ" initialOpen badge={43}>
          <Fragment>
            <CheckBox checked={false} title="Несколько авиакомпаний" />
            <span>
              Показывать билеты с перелетами, выполняемыми несколькими авиакомпаниями, включая
              выбранную
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
      </FilterPanelStyled>
    );
  }
}

export default FilterPanel;
