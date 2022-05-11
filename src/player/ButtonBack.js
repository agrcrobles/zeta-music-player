import * as React from "react";

import images from "../images";

import { bool, func } from "prop-types";
import { Icon, DisabledIcon } from "./Buttons";

const ButtonBack = (props) => {
  const { handlePrev, canBack } = props;

  if (canBack) {
    return (
      <Icon
        role="button"
        onClick={handlePrev}
        src={images.player_previous_enabled}
        alt="Back"
      />
    );
  }

  return (
    <DisabledIcon disabled src={images.player_previous_disabled} alt="Back" />
  );
};

ButtonBack.propTypes = {
  handlePrev: func.isRequired,
  canBack: bool.isRequired,
};
export default ButtonBack;
