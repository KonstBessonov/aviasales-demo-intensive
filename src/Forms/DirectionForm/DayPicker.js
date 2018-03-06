import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DayPicker from 'react-day-picker';
import { withClickOutside } from 'react-clickoutside';

import FormattedCurrency from '../../UI/FormattedCurrency';
import './daypicker.css';
import switch_off from './switch-off.svg';

const WEEKDAYS_SHORT = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const WEEKDAYS_LONG = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];
const MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
const LABELS = {
  nextMonth: 'следующий месяц',
  previousMonth: 'предыдущий месяц',
};

const Container = withClickOutside()(styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2), 0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`);

const OneWay = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin: 2rem 3rem;
`;

const Switch = styled.button`
  padding: 1.5rem 2.5rem;
  margin-right: 2rem;
  background: none;
  background-position: center;
  packground-repeat: no-repeat;
  background-image: url(${switch_off});
  border: none;
  cursor: pointer;
`;

const Day = styled.div``;

const Price = styled.div`
  color: #00c455;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.5rem;
`;

const dayPrices = {
  24: 43606,
  25: 43606,
  26: 41920,
  27: 42140,
  28: 42130,
};

const renderDay = (day) => {
  const date = day.getDate();
  return (
    <div>
      <Day>{date}</Day>
      {dayPrices[date] && (
        <Price>
          <FormattedCurrency value={dayPrices[date]} />
        </Price>
      )}
    </div>
  );
};

const Picker = ({ onClickOutside, ...restProps }) => (
  <Container onClickOutside={onClickOutside}>
    <DayPicker
      locale="ru"
      months={MONTHS}
      weekdaysLong={WEEKDAYS_LONG}
      weekdaysShort={WEEKDAYS_SHORT}
      firstDayOfWeek={1}
      labels={LABELS}
      disabledDays={[{ before: new Date() }]}
      renderDay={renderDay}
      {...restProps}
    />
    <OneWay>
      <Switch />
      <span>Показать цены в одну сторону</span>
    </OneWay>
  </Container>
);

Picker.defaultProps = {
  onClickOutside: undefined,
};

Picker.propTypes = {
  onClickOutside: PropTypes.func,
};

export default Picker;
