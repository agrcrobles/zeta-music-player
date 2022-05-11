import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "./SearchBar";

import store from "../store/index";
import songs from "../__fixtures__/songs.json";

import TestApp from "../utils/TestApp";
test("renders SearchBar", () => {
  // TODO: Add <ThemeProvider /> maybe?
  const myStore = store({
    songs,
  });

  const { getByTestId, getByText } = render(
    <TestApp store={myStore}>
      <Header />
    </TestApp>
  );

  const input = getByTestId("search-track");
  fireEvent.change(input, { target: { value: "michael" } });

  expect(myStore.getState().criteria).toMatchInlineSnapshot(`undefined`);
});
