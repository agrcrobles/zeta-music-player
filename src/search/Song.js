import * as React from "react";
import styled from "styled-components";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { any } from "prop-types";

import { formatTotalTime } from "../utils/dates";
const Body = styled.span`
  text-align: left;
`;

const BodySong = styled.span`
  text-align: left;
  color: ${(props) => props.theme.primaryFontColor};
  font-weight: 400;
  &:hover {
    cursor: pointer;
  }
`;

const Currency = styled.span`
  text-align: right;
  margin-right: 1rem;
`;

const ArtWork = styled.div`
  text-align: left;
  padding-left: 2rem;
`;

const ImgArtWork = styled.img`
  text-align: left;
  width: 30px;
`;

const Song = (props) => {
  const { song } = props;

  const history = useHistory();

  const dispatch = useDispatch();
  const handleClickTrackName = (e) => {
    e.preventDefault();

    dispatch({
      type: "player/SELECT_SONG",
      selectedSong: song.trackId,
      history,
    });
  };
  return (
    <>
      <ArtWork>
        <ImgArtWork src={song.artworkUrl60} alt="art work" />
      </ArtWork>
      <BodySong onClick={handleClickTrackName} role="button">
        {song.trackName}
      </BodySong>
      <Body>{song.artistName}</Body>
      <Body>{song.collectionName}</Body>
      <Body>{formatTotalTime(song.trackTimeMillis)}</Body>
      <Body>{song.primaryGenreName}</Body>
      <Currency>${song.trackPrice}</Currency>
    </>
  );
};

Song.propTypes = {
  song: any.isRequired,
};

export default React.memo(Song);
