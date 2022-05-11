import React from "react";
import { render } from "@testing-library/react";
import SongsGrid from "./SongsGrid";

import songs from "../__fixtures__/songs.json";

import store from "../store/index";

import TestApp from "../utils/TestApp";

test("renders SongsGrid when no tracks", () => {
  const { container } = render(
    <TestApp store={store()}>
      <SongsGrid />
    </TestApp>
  );

  expect(container.innerHTML).toMatch("Use the search bar to find the songs");
});

test("renders SongsGrid when list track", () => {
  const { container, getAllByText } = render(
    <TestApp
      store={store({
        songs,
      })}
    >
      <SongsGrid />
    </TestApp>
  );

  expect(container.innerHTML).toMatch("Searching for");

  expect(getAllByText("Pa' Que Te Enteres")).toMatchInlineSnapshot(`
    Array [
      <span
        class="sc-AxgMl dSXElg"
        role="button"
      >
        Pa' Que Te Enteres
      </span>,
    ]
  `);
});
