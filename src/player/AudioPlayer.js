import * as React from "react";
import styled from "styled-components";

import { any, bool, func } from "prop-types";

import AudioPlayerBar from "./AudioPlayerBar";
import ShareBar from "./ShareBar";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  border: 0.5px solid ${(props) => props.theme.primaryFontColor};
  box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 1);
  margin: 0.5rem;
  width: 200px;
`;

const ArtistName = styled.span`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 14px;
  font-weight: 600;
`;
const TrackName = styled.span`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 14px;
`;

const PlayerFooter = styled.div`
  background-color: ${(props) => props.theme.footerPrimary};
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 0;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Placeholder = styled.div``;

// quick workaround to improve image res
const imageSourceUrl = (url100) => {
  return url100.replace("100x100bb", "200x200bb");
};
const AudioPlayer = (props) => {
  const { song, canBack, canFwd, handlePrev, handleNext } = props;

  return (
    <Container>
      <Content>
        <Image src={imageSourceUrl(song.artworkUrl100)} />
        <ArtistName>{song.artistName}</ArtistName>
        <TrackName>{song.trackName}</TrackName>
      </Content>
      <PlayerFooter>
        <Placeholder />
        <AudioPlayerBar
          canBack={canBack}
          canFwd={canFwd}
          handlePrev={handlePrev}
          handleNext={handleNext}
          song={song}
        />
        <ShareBar />
      </PlayerFooter>
    </Container>
  );
};

AudioPlayer.propTypes = {
  song: any.isRequired,
  handlePrev: func.isRequired,
  handleNext: func.isRequired,
  canBack: bool.isRequired,
  canFwd: bool.isRequired,
};

export default React.memo(AudioPlayer);
