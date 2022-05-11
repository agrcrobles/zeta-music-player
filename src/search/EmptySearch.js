import * as React from "react";
import styled from "styled-components";

import images from "../images";
const Container = styled.div`
  font-size: 16px;
`;

const SearchForTooltip = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.tooltipFontSize};
  flex-direction: column;
`;

const SearchForTooltipText = styled.span`
  font-weight: 100;
  padding: 1rem 0;
  letter-spacing: -0.5px;
  color: ${(props) => props.theme.tooltipFontColor};
  font-size: ${(props) => props.theme.tooltipFontSize};
`;

const Image = styled.img`
  height: 8vmin;
`;

const EmptySearch = (props) => {
  return (
    <Container>
      <SearchForTooltip>
        <Image src={images.glass_empty_state} alt="Search" />
        <SearchForTooltipText>
          Use the search bar to find the songs
        </SearchForTooltipText>
      </SearchForTooltip>
    </Container>
  );
};

export default EmptySearch;
