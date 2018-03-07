import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

const Formatted = ({ value, ...restProps }) => (
  <FormattedNumber
    style={String('currency')}
    currency="RUB"
    minimumFractionDigits={0}
    maximumFractionDigits={0}
    value={value}
    {...restProps}
  />
);

Formatted.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Formatted;
