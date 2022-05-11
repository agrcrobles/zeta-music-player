import * as React from "react";

import images from "../images";

import { oneOf, func } from "prop-types";

import { Icon } from "./Buttons";

const ButtonPlay = (props) => {
  const { status, handlePlay, handlePause } = props;

  switch (status) {
    case "PAUSE":
    case "STOP":
      return (
        <Icon
          onClick={handlePlay}
          role="button"
          src={images.player_play}
          alt="Play"
        />
      );
    case "PLAY":
      return (
        <Icon
          onClick={handlePause}
          role="button"
          src={images.player_pause}
          alt="Pause"
        />
      );
  }
};

ButtonPlay.propTypes = {
  handlePause: func.isRequired,
  handlePlay: func.isRequired,
  status: oneOf(["PLAY", "STOP", "PAUSE"]).isRequired,
};
export default ButtonPlay;
