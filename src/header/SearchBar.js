import React from "react";

import styled from "styled-components";
import SearchInput from "./SearchInput";

const Header = styled.header`
  display: flex;
  background-color: ${(props) => props.theme.primaryColor};
  font-weight: 100;
  padding: 0.8rem 1rem 0.8rem 2rem;
  color: white;
  align-items: center;
  font-size: 23px;
  justify-content: space-between;
`;

const SearchBar = (props) => {
  return (
    <Header>
      <span>Zeta Music Player</span>
      <SearchInput />
    </Header>
  );
};

export default React.memo(SearchBar);
