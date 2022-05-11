import * as React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectAttrs } from "../store/rootReducer";

import SongsGrid from "./SongsGrid";

const Container = styled.div`
  background-color: ${(props) => props.theme.background};
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Search = (props) => {
  const { sortKey } = useSelector(selectAttrs);
  return (
    <Container>
      <SongsGrid sortKey={sortKey} />
    </Container>
  );
};

export default Search;
