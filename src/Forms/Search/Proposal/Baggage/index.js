import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import hasHandbag from './handbag.svg';
import hasBaggage from './baggage.svg';
import noBaggage from './no-baggage.svg';
import noBaggageRed from './no-baggage-red.svg';

import FormattedCurrency from '../../../../UI/FormattedCurrency';

const Baggage = styled.div`
  flex: 0 0 50%;
  margin: 0;
  padding: 1rem 0;
  ${({ selected }) =>
    !selected &&
    css`
      background-color: #f8fbfb;
      border-bottom: 1px solid #dddddd;
      border-left: 1px solid #dddddd;
      &:first-child {
        border-left: none;
        border-right: 1px solid #dddddd;
      }
    `};
`;

const Badges = styled.div`
  display: flex;
  justify-content: center;
`;

const NoBaggage = styled.span`
  font-size: 1.25rem;
  color: ${({ active }) => (active ? '#DADADA' : '#9AB0B9')};
`;

const ExtraCost = styled.span`
  font-size: 1.25rem;
  color: #66d295;
`;

const BadgeContainer = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  position: relative;
  opacity: ${({ dimmed }) => (dimmed ? 0.4 : 1)};
  &:not(:first-child) {
    margin-left: 0.5rem;
  }
`;

const HandbagIcon = () => <img src={hasHandbag} alt="" />;

const HandbagText = styled.span`
  color: #9ab0b9;
  position: absolute;
  left: 0;
  right: 0;
  top: 7px;
  margin-left: auto;
  margin-right: auto;
`;

const getBaggageIcon = (weight, selected) => {
  if (weight) return hasBaggage;
  if (selected) return noBaggageRed;
  return noBaggage;
};

const BaggageIcon = ({ weight, selected }) => (
  <img
    src={getBaggageIcon(weight, selected)}
    alt=""
  />
);

BaggageIcon.defaultProps = {
  selected: false,
};

BaggageIcon.propTypes = {
  weight: PropTypes.number.isRequired,
  selected: PropTypes.bool,
};

const BaggageText = styled.span`
  color: #9ab0b9;
  position: absolute;
  left: 0;
  right: 0;
  top: 8px;
  margin-left: auto;
  margin-right: auto;
`;

const HandbagBadge = ({ weight }) => (
  <BadgeContainer dimmed={!weight}>
    <HandbagIcon />
    <HandbagText>{weight || '?'}</HandbagText>
  </BadgeContainer>
);

HandbagBadge.defaultProps = {
  weight: 0,
};

HandbagBadge.propTypes = {
  weight: PropTypes.number,
};

const BaggageBadge = ({ weight, selected }) => (
  <BadgeContainer>
    <BaggageIcon weight={weight} selected={selected} />
    {!weight || <BaggageText>{weight}</BaggageText>}
  </BadgeContainer>
);

BaggageBadge.defaultProps = {
  weight: 0,
  selected: false,
};

BaggageBadge.propTypes = {
  weight: PropTypes.number,
  selected: PropTypes.bool,
};

export const BaggageSection = styled.div`
  display: flex;
  justify-content: center;
  ${({ compact }) => compact || 'margin-bottom: 1rem;'};
`;

export const BaggageData = ({
  data: {
    handbag, baggage, selected, extraCost,
  }, compact,
}) => (
  <Baggage selected={selected}>
    <Badges>
      <HandbagBadge weight={handbag} selected={selected} />
      <BaggageBadge weight={baggage} selected={selected} />
    </Badges>
    {compact ||
      !extraCost || (
        <ExtraCost>
          - <FormattedCurrency value={extraCost} />
        </ExtraCost>
      )}
    {compact || !!baggage || <NoBaggage>Нет багажа</NoBaggage>}
  </Baggage>
);

BaggageData.defaultProps = {
  data: {},
  compact: false,
};

BaggageData.propTypes = {
  data: PropTypes.shape({}),
  compact: PropTypes.bool,
};
