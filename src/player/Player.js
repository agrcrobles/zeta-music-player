import * as React from "react";
import { selectSelectedSong, selectAttrs } from "../store/rootReducer";
import { useSelector, useDispatch } from "react-redux";

import AudioPlayer from "./AudioPlayer";

const Player = (props) => {
  const song = useSelector(selectSelectedSong);
  const { canBack, canFwd } = useSelector(selectAttrs);

  const dispatch = useDispatch();

  const handleNext = (e) => {
    e.preventDefault();
    dispatch({
      type: "player/NEXT_SONG",
    });
  };

  const handlePrev = (e) => {
    e.preventDefault();
    dispatch({
      type: "player/PREV_SONG",
    });
  };
  // after a user select a track/song to play and the write/type on the search bar
  if (!song) {
    return null;
  }
  return (
    <AudioPlayer
      canBack={canBack}
      canFwd={canFwd}
      handlePrev={handlePrev}
      handleNext={handleNext}
      song={song}
    />
  );
};

export default Player;
