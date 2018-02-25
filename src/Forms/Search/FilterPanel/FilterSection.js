import React from "react";
import styled from "styled-components";
import arrow from "./arrow.svg";

const OpenMark = styled(({ className, isOpen }) => (
  <img className={className} src={arrow} alt="" />
))`
  margin-right: 1rem;
  ${({ isOpen }) => isOpen && `transform: rotate(90deg);`};
`;

const Header = styled(({ className, children, isOpen, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <OpenMark isOpen={isOpen} />
      {children}
    </div>
  );
})`
  cursor: pointer;
  ${({ isOpen }) => (isOpen ? `padding: 0 0 2rem 0` : `padding: 0`)};
`;

const Badge = styled.span`
  color: #a0b0b9;
  padding-left: 1rem;
`;

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: props.initialOpen };
  }

  handleClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div className={this.props.className}>
        <Header isOpen={this.state.isOpen} onClick={this.handleClick}>
          {this.props.title}
          {this.props.badge !== undefined && <Badge>{this.props.badge}</Badge>}
        </Header>
        {this.state.isOpen === true && this.props.children}
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
