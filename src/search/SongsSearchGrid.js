import * as React from "react";
import styled from "styled-components";

import { arrayOf, any, func } from "prop-types";

import Song from "./Song";

const Container = styled.li`
  display: grid;
  column-gap: 0.3rem;
  grid-template-columns: 5rem repeat(3, 1fr) repeat(3, 4rem);
  grid-template-rows: 2rem;
  color: ${(props) => props.theme.primaryFontColor};
  align-items: center;
`;

const Element = styled.li`
  &:hover {
    background-color: ${(props) => props.theme.selectedRow};
  }
  align-items: center;
  display: grid;
  column-gap: 0.3rem;
  grid-template-columns: 5rem repeat(3, 1fr) repeat(3, 4rem);
  grid-template-rows: 3rem;
  color: ${(props) => props.theme.primaryFontColor};
`;

const Grid = styled.ul`
  font-size: 13px;
  width: 100%;
`;
const Header = styled.span`
  text-align: left;
`;

const ClickableCurrencyHeader = styled.span`
  text-align: right;
  margin-right: 1rem;
  color: ${(props) => props.theme.primaryFontColor};
  cursor: pointer;
`;

const ClickableHeader = styled.span`
  text-align: left;
  color: ${(props) => props.theme.primaryFontColor};
  cursor: pointer;
`;

const SongsSearchGrid = (props) => {
  const { songs, handleSortByKey } = props;

  const handleSortByDuration = (e) => {
    e.preventDefault();
    handleSortByKey("trackTimeMillis");
  };

  const handleSortByGenre = (e) => {
    e.preventDefault();
    handleSortByKey("primaryGenreName");
  };

  const handleSortByPrice = (e) => {
    e.preventDefault();
    handleSortByKey("trackPrice");
  };
  return (
    <Grid>
      <Container>
        <Header></Header>
        <Header>Song</Header>
        <Header>Artist</Header>
        <Header>Album</Header>
        <ClickableHeader onClick={handleSortByDuration} role="button">
          Duration
        </ClickableHeader>
        <ClickableHeader onClick={handleSortByGenre} role="button">
          Genre
        </ClickableHeader>
        <ClickableCurrencyHeader onClick={handleSortByPrice} role="button">
          Price
        </ClickableCurrencyHeader>
      </Container>
      {songs.map((song) => {
        return (
          <Element key={song.trackId}>
            <Song song={song} />
          </Element>
        );
      })}
    </Grid>
  );
};
SongsSearchGrid.propTypes = {
  songs: arrayOf(any).isRequired,
  handleSortByKey: func.isRequired,
};
export default SongsSearchGrid;
