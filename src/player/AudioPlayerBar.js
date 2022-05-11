import * as React from "react";
import styled from "styled-components";

import { any, bool, func } from "prop-types";

import ButtonBack from "./ButtonBack";
import ButtonPlay from "./ButtonPlay";
import ButtonFwd from "./ButtonFwd";

const PlayActions = styled.div`
  text-align: center;
  display: inline-block;
`;

const initialState = { status: "STOP" };

function reducer(state, action) {
  switch (action.type) {
    case "bar/STATUS_STOP":
      return {
        status: "STOP",
      };
    case "bar/STATUS_PLAY":
      return {
        status: "PLAY",
      };
    case "bar/STATUS_PAUSE":
      return {
        status: "STOP",
      };

    default:
      throw new Error();
  }
}

const AudioPlayerBar = (props) => {
  const { song, canBack, canFwd } = props;

  const [state, dispatch] = React.useReducer(reducer, initialState);

  // TODO: React.useCallback might be removed
  const onAudioEnd = React.useCallback(() => {
    dispatch({
      type: "bar/STATUS_STOP",
    });
  });

  let audio = React.useMemo(() => new Audio(song.previewUrl), [
    song.previewUrl,
  ]);
  React.useEffect(() => {
    audio.addEventListener("ended", onAudioEnd);
    return () => {
      audio.pause();
      audio.removeEventListener("ended", onAudioEnd);
    };
  }, [song.previewUrl]);

  const handlePlay = (e) => {
    e.preventDefault();
    dispatch({
      type: "bar/STATUS_PLAY",
    });
    audio.play();
  };

  const handlePause = (e) => {
    e.preventDefault();
    audio.pause();

    dispatch({
      type: "bar/STATUS_PAUSE",
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    audio.pause();

    dispatch({
      type: "bar/STATUS_STOP",
    });
    props.handleNext(e);
  };

  const handlePrev = (e) => {
    e.preventDefault();
    audio.pause();

    dispatch({
      type: "bar/STATUS_STOP",
    });
    props.handlePrev(e);
  };

  return (
    <PlayActions>
      <ButtonBack handlePrev={handlePrev} canBack={canBack} />
      <ButtonPlay
        handlePlay={handlePlay}
        handlePause={handlePause}
        status={state.status}
      />
      <ButtonFwd handleNext={handleNext} canFwd={canFwd} />
    </PlayActions>
  );
};

AudioPlayerBar.propTypes = {
  song: any.isRequired,
  handleNext: func.isRequired,
  handlePrev: func.isRequired,
  canBack: bool.isRequired,
  canFwd: bool.isRequired,
};

export default AudioPlayerBar;
