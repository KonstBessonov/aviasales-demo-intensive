import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import arrow from './arrow.svg';
import { Clear } from './UI';

const OpenMarkStyled = styled.img`
  margin-right: 1rem;
  ${({ isOpen }) => isOpen && 'transform: rotate(90deg);'};
`;

const OpenMark = ({ isOpen }) => <OpenMarkStyled isOpen={isOpen} src={arrow} alt="" />;

OpenMark.defaultProps = {
  isOpen: false,
};

OpenMark.propTypes = {
  isOpen: PropTypes.bool,
};

const HeaderWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ isOpen }) => (isOpen ? 'padding: 0 0 2rem 0' : 'padding: 0')};
  position: relative;
`;

const Header = ({ children, isOpen, onClick }) => (
  <HeaderWrapper onClick={onClick}>
    <OpenMark isOpen={isOpen} />
    {children}
  </HeaderWrapper>
);

Header.defaultProps = {
  isOpen: false,
  onClick: undefined,
};

Header.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

const Badge = styled.span`
  color: #a0b0b9;
  padding-left: 1rem;
`;

const ClearBtn = Clear.withComponent('button').extend`
  position: absolute;
  right: 0;
  cursor: pointer;
`;

const Spacer = styled.span`
  flex-grow: 1;
`;

class Section extends React.Component {
  static defaultProps = {
    initialOpen: false,
    className: '',
    title: '',
    badge: 0,
    filterPresent: false,
    onClearClick: undefined,
  };

  static propTypes = {
    initialOpen: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string,
    badge: PropTypes.number,
    filterPresent: PropTypes.bool,
    children: PropTypes.element.isRequired,
    onClearClick: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = { isOpen: !!props.initialOpen };
  }

  handleClick = (e) => {
    if (!e.defaultPrevented) {
      this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    }
  };

  render() {
    return (
      <div className={this.props.className}>
        <Header isOpen={this.state.isOpen} onClick={this.handleClick}>
          <Fragment>
            <span>{this.props.title}</span>
            {!!this.props.badge && <Badge>{this.props.badge}</Badge>}
            <Spacer />
            {this.props.filterPresent && (
              <ClearBtn
                onClick={(e) => {
                  e.preventDefault();
                  if (this.props.onClearClick) this.props.onClearClick(e);
                }}
              />
            )}
          </Fragment>
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
