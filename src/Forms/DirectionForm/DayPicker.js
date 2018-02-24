import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import { withClickOutside } from "react-clickoutside";

import "./daypicker.css";

const WEEKDAYS_SHORT = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
const WEEKDAYS_LONG = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота"
];
const MONTHS = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь"
];
const LABELS = {
  nextMonth: "следующий месяц",
  previousMonth: "предыдущий месяц"
};

const Container = withClickOutside()(styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  box-shadow: 0px 0px 8px rgba(74, 74, 74, 0.2),
    0px 2px 4px rgba(74, 74, 74, 0.2);
  border-radius: 2px;
`);

class Picker extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.onClickOutside = props.onClickOutside;
  // }

  render() {
    return (
      <Container onClickOutside={this.props.onClickOutside}>
        <DayPicker
          locale="ru"
          months={MONTHS}
          weekdaysLong={WEEKDAYS_LONG}
          weekdaysShort={WEEKDAYS_SHORT}
          firstDayOfWeek={1}
          labels={LABELS}
          onDayClick={this.props.onDayClick}
          selectedDays={this.props.selectedDays}
        />
      </Container>
    );
  }
}

export default Picker;
