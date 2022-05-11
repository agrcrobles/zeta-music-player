import * as React from "react";
import styled from "styled-components";
import images from "../images";

import { bool, func } from "prop-types";
import { Icon, DisabledIcon } from "./Buttons";
const ButtonFwd = (props) => {
  const { handleNext, canFwd } = props;

  if (canFwd) {
    return (
      <Icon
        src={images.player_next_enabled}
        onClick={handleNext}
        alt="Forward"
      />
    );
  }

  return (
    <DisabledIcon disabled src={images.player_next_disabled} alt="Forward" />
  );
};

ButtonFwd.propTypes = {
  handleNext: func.isRequired,
  canFwd: bool.isRequired,
};
export default ButtonFwd;
