import React from "react";
import { FormattedNumber } from "react-intl";

export default ({ value }) => (
  <FormattedNumber
    style={`currency`}
    currency="RUB"
    minimumFractionDigits={0}
    maximumFractionDigits={0}
    value={value}
  />
);
