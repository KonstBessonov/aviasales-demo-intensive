import React from "react";
import styled from "styled-components";
import DayPicker from "react-day-picker";
import { withClickOutside } from "react-clickoutside";

import "react-day-picker/lib/style.css";

const Container = withClickOutside()(styled.div`
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
        <DayPicker onDayClick={this.props.handleDayClick} />
      </Container>
    );
  }
}

export default Picker;
