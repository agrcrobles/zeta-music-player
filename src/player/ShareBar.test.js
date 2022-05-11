import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShareBar from "./ShareBar";

test("share on twitter", () => {
  global.open = jest.fn();
  const { getByAltText } = render(<ShareBar />);

  const node = getByAltText("Share on Twitter");

  fireEvent.click(node);

  expect(global.open).toBeCalledTimes(1);
});
