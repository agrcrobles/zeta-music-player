import * as React from "react";
import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";

import EmptySearch from "./EmptySearch";
import { selectSortedSongs, selectCriteria } from "../store/rootReducer";
import SongsSearchGrid from "./SongsSearchGrid";

const SearchFor = styled.div`
  padding: 1rem 0 2rem 0;
  align-self: baseline;
`;
const SearchForText = styled.span`
  letter-spacing: -0.5px;
  padding-left: 2rem;
  font-weight: 100;
  color: ${(props) => props.theme.tooltipFontColor};
  font-size: ${(props) => props.theme.tooltipFontSize};
`;

const SongsGrid = (props) => {
  const songs = useSelector(selectSortedSongs);

  const criteria = useSelector(selectCriteria);

  const dispatch = useDispatch();
  const handleSortByKey = (sortKey) =>
    dispatch({
      type: "SET_SORT_PARAMS",
      sortKey,
    });

  if (songs.length === 0) {
    return <EmptySearch />;
  }

  return (
    <>
      <SearchFor>
        <SearchForText>Searching for "{criteria}"</SearchForText>
      </SearchFor>

      <SongsSearchGrid handleSortByKey={handleSortByKey} songs={songs} />
    </>
  );
};

export default React.memo(SongsGrid);
