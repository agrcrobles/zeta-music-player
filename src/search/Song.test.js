import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Song from "./Song";

import songs from "../__fixtures__/songs.json";

import store from "../store/index";

import TestApp from "../utils/TestApp";

test("click on Song", () => {
  const song = songs[0];

  const myStore = store({
    songs,
  });
  const { getByText } = render(
    <TestApp store={myStore}>
      <Song song={song} />
    </TestApp>
  );
  const node = getByText(song.trackName);

  fireEvent.click(node);

  expect(myStore.getState().selectedSong).toMatchInlineSnapshot(`1507636215`);
});
