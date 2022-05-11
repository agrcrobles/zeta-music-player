import React from "react";
import { render } from "@testing-library/react";
import SongsGrid from "./SongsGrid";

import store from "../store/index";

import TestApp from "../utils/TestApp";

test("renders Empty Search", () => {
  const { getAllByText } = render(
    <TestApp store={store()}>
      <SongsGrid />
    </TestApp>
  );

  expect(getAllByText("Use the search bar to find the songs").length).toBe(1);
});
