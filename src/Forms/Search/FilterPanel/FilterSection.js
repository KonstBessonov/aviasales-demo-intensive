import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";
import { Clear } from "./UI";

const OpenMarkStyled = styled.img`
  margin-right: 1rem;
  ${({ isOpen }) => isOpen && `transform: rotate(90deg);`};
`;

const OpenMark = ({ className, isOpen }) => (
  <OpenMarkStyled isOpen={isOpen} src={arrow} alt="" />
);

const HeaderWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ isOpen }) => (isOpen ? `padding: 0 0 2rem 0` : `padding: 0`)};
`;

const Header = ({ children, isOpen, onClick }) => {
  return (
    <HeaderWrapper onClick={onClick}>
      <OpenMark isOpen={isOpen} />
      {children}
    </HeaderWrapper>
  );
};

const Badge = styled.span`
  color: #a0b0b9;
  padding-left: 1rem;
`;

const ClearBtn = Clear.withComponent("button");

const Spacer = styled.span`
  flex-grow: 1;
`;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: !!props.initialOpen };
  }

  handleClick = e => {
    if (!e.defaultPrevented) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <Header isOpen={this.state.isOpen} onClick={this.handleClick}>
          <span>{this.props.title}</span>
          {this.props.badge && <Badge>{this.props.badge}</Badge>}
          <Spacer />
          {this.props.filterPresent && (
            <ClearBtn
              onClick={e => {
                e.preventDefault();
                this.handleClearClick && this.handleClearClick(e);
              }}
            />
          )}
        </Header>
        {this.state.isOpen && this.props.children}
      </div>
    );
  }
}

const FilterSection = styled(Section)`
  padding 2rem;
  border-bottom: 1px solid #dddddd;
  &:last-child {
    border-bottom: none;
  }
`;

export default FilterSection;
