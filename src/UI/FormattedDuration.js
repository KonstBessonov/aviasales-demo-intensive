import React from "react";
import Formatted from "react-intl-formatted-duration";

import styled from "styled-components";

const Text = styled.span``;

export default ({ duration }) => {
  return (
    <Formatted
      seconds={duration * 60}
      textComponent={Text}
      format="extra_short"
    />
  );
};
