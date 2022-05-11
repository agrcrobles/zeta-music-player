import * as React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import images from "../images";
import { useHistory } from "react-router-dom";

import useDebounceCallback from "../utils/useDebounceCallback";

const Input = styled.input`
  border: none;
  border-radius: 10px;
  padding: 0.3rem;
  font-weight: 100;
  font-size: 13px;
  padding-left: 1.6rem;
  max-width: 130px;
  background-color: ${(props) => props.theme.inputBackgroundColor};
  color: ${(props) => props.theme.primaryFontColor};
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  height: 12px;
  margin: auto 0.5rem;
  position: absolute;
`;
const SearchInput = (props) => {
  const [searchValue, setSearchValue] = React.useState("");

  const dispatch = useDispatch();

  const history = useHistory();

  const handleApiDispatch = useDebounceCallback((criteria) => {
    dispatch({ type: "player/GET_SONGS", criteria, history });
  }, 400);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    handleApiDispatch(e.target.value);
  };

  return (
    <InputContainer>
      <Icon src={images.glass_search_bar} alt="Search" />
      <Input
        data-testid="search-track"
        value={searchValue}
        onChange={handleSearch}
      />
    </InputContainer>
  );
};

export default React.memo(SearchInput);
