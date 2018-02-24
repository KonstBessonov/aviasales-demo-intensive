import React from "react";
import styled, { css } from "styled-components";
import { withRouter } from "react-router-dom";
import format from "date-fns/format";
import ruLocale from "date-fns/locale/ru";

import { minWidth } from "../../assets";

import DayPicker from "./DayPicker";

import arrows from "./arrows.svg";
import calendar from "./calendar.svg";
import clear_date from "./clear-date.svg";
import popdown from "./popdn.svg";
import aero from "./aero.svg";

const formatDate = date =>
  date === undefined ? "" : format(date, "D MMMM, dd", { locale: ruLocale });

const Container = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const InputBig = withRouter(styled.div`
  flex-basis: 100%;
  max-width: 100%;
  ${minWidth.md`
    flex-basis: 50%;
    max-width: 50%;
  `};
  ${minWidth.xl`
    flex-basis: 25%;
    max-width: 25%;
  `};
  ${({ location }) =>
    location.pathname.includes("search") &&
    css`
      ${minWidth.xl`
        flex-basis: 18.2%;
        max-width: 18.2%;
      `};
    `};
`);

const InputSmall = withRouter(styled.div`
  flex-basis: 50%;
  max-width: 50%;
  ${minWidth.md`
    flex-basis: 25%;
    max-width: 25%;
  `};
  ${minWidth.xl`
    flex-basis: 12.5%;
    max-width: 12.5%;
  `};
  ${({ location }) =>
    location.pathname.includes("search") &&
    css`
      ${minWidth.xl`
        flex-basis: 14.5%;
        max-width: 14.5%;
      `};
    `};
`);

const InputPax = withRouter(InputBig.extend`
  ${({ location }) =>
    location.pathname.includes("search") &&
    css`
      ${minWidth.md`
        flex-basis: 25%;
        max-width: 25%;
      `};
      ${minWidth.xl`
        flex-basis: 17.2%;
        max-width: 17.2%;
      `};
    `};
`);

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  color: #4a4a4a;
  background: #ffffff;
  position: relative;
  margin: 1px;
`;

const PlaceInput = styled.input`
  color: inherit;
  padding: 2rem 0 2rem 2rem;
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: none;
  border-radius: inherit;
  ::placeholder {
    color: #a0b0b9;
  }
`;

const DateInput = PlaceInput.extend`
  cursor: pointer;
`;

const IATACode = styled.span`
  margin-right: 1rem;
  color: #a0b0b9;
`;

const InputButton = styled.button`
  cursor: pointer;
  margin-right: 1rem;
  border: none;
  width: 20px;
  height: 24px;
  padding: 0;
`;

const SwapPlaces = InputButton.extend`
  background: url(${arrows}) center no-repeat;
`;

const Calendar = InputButton.extend`
  background: url(${calendar}) center no-repeat;
`;

const ClearDate = InputButton.extend`
  background: url(${({ value }) =>
      value === undefined ? calendar : clear_date})
    center no-repeat;
`;

const PaxButton = styled.button`
  background: #ffffff;
  color: inherit;
  border-radius: inherit;
  border: none;
  padding: 2rem;
  padding-right: 3rem;
  width: 100%;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

const PaxAdditional = styled.span`
  color: #a0b0b9;
`;

const PopDownMark = styled.img`
  position: absolute;
  right: 1rem;
  top: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 1rem;
  background: url(${popdown}) center no-repeat;
`;

const NavButton = withRouter(({ className, children, history, newPath }) => (
  <button className={className} onClick={() => history.push(newPath)}>
    {children}
  </button>
));

const SubmitButton = withRouter(styled(NavButton)`
  border-radius: 0.5rem;
  background: #ff9241;
  border: none;
  font-size: 3rem;
  font-weight: 900;
  color: #ffffff;
  padding: 1.5rem;
  margin-top: 2rem;
  flex-grow: 1;
  flex-basis: 100%;
  cursor: pointer;
  ${minWidth.md`
    margin-top: 4rem;
    flex-basis: 40%;
    max-width: 40%;
  `};
  ${minWidth.xl`
    margin-top: 6rem;
    flex-basis: 30%;
    max-width: 30%;
  `};
  ${({ location }) =>
    location.pathname.includes("search") &&
    css`
      ${minWidth.md`
        margin: 1px 0;
        font-size: 2.5rem;
        flex-basis: 25%;
        max-width: 25%;
      `};
      ${minWidth.xl`
        margin: 1px 0;
        font-size: 2.5rem;
        flex-basis: 17.2%;
        max-width: 17.2%;
      `};
    `};
`);

const SubmitButtonIcon = withRouter(styled.img`
  ${({ location }) =>
    location.pathname.includes("search") &&
    css`
      display: none;
    `};
`);

class DirectionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: new Date(),
      to: undefined,
      isPicker: false,
      pickerField: "from"
    };
  }
  handleDateInputClick = pickerField =>
    this.setState(prevState => ({ isPicker: true, pickerField: pickerField }));

  handleClearDateClick = () => {
    if (this.state.to) {
      this.setState({ to: undefined, isPicker: false });
    } else {
      this.handleDateInputClick("to");
    }
  };

  handleClickOutside = () => this.setState({ isPicker: false });
  handleDayClick = day => {
    this.setState(prevState => {
      const newState = {};
      newState.isPicker = prevState.pickerField === "from";
      newState[prevState.pickerField] = day;
      newState.pickerField = "to";
      return newState;
    });
  };

  render = () => {
    return (
      <Container>
        <InputBig>
          <InputWrapper>
            <PlaceInput defaultValue="Оренбург" placeholder="Город вылета" />
            <IATACode>REN</IATACode>
            <SwapPlaces />
          </InputWrapper>
        </InputBig>
        <InputBig>
          <InputWrapper>
            <PlaceInput value="" placeholder="Город прибытия" />
            <IATACode />
          </InputWrapper>
        </InputBig>
        <InputSmall>
          <InputWrapper>
            <DateInput
              value={formatDate(this.state.from)}
              placeholder="Туда"
              onClick={() => this.handleDateInputClick("from")}
            />
            <Calendar onClick={() => this.handleDateInputClick("from")} />
            {this.state.isPicker &&
              this.state.pickerField === "from" && (
                <DayPicker
                  onClickOutside={this.handleClickOutside}
                  onDayClick={this.handleDayClick}
                  selectedDays={this.state.from}
                />
              )}
          </InputWrapper>
        </InputSmall>
        <InputSmall>
          <InputWrapper>
            <DateInput
              value={formatDate(this.state.to)}
              placeholder="Обратно"
              onClick={() => this.handleDateInputClick("to")}
            />
            <ClearDate
              value={this.state.to}
              onClick={() => this.handleClearDateClick()}
            />
            {this.state.isPicker &&
              this.state.pickerField === "to" && (
                <DayPicker
                  onClickOutside={this.handleClickOutside}
                  onDayClick={this.handleDayClick}
                  selectedDays={this.state.to}
                />
              )}
          </InputWrapper>
        </InputSmall>
        <InputPax>
          <InputWrapper>
            <PaxButton>
              1 пассажир, <PaxAdditional>эконом</PaxAdditional>
              <PopDownMark />
            </PaxButton>
          </InputWrapper>
        </InputPax>
        <SubmitButton newPath="/search">
          Найти билеты <SubmitButtonIcon src={aero} alt="" />
        </SubmitButton>
      </Container>
    );
  };
}

export default DirectionForm;
