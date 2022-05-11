import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AudioPlayer from "./AudioPlayer";

import songs from "../__fixtures__/songs.json";
const song = songs[0];

// unless perform clear on all mocks beforeEach this reusage scope of vars is not recommended.
// https://jestjs.io/docs/en/mock-function-api.html
const handleNext = jest.fn();
const handlePrev = jest.fn();
let play;
// TODO: click on next and click on prev units tests

describe("AudioPlayer", () => {
  beforeAll(() => {
    jest
      .spyOn(window.HTMLMediaElement.prototype, "pause")
      .mockImplementation(() => {});

    // stubs should be located on jest.setup
    play = jest
      .spyOn(window.HTMLMediaElement.prototype, "play")
      .mockImplementation(() => {});
  });
  it("renders", () => {
    const { getByText } = render(
      <AudioPlayer
        handlePrev={handlePrev}
        handleNext={handleNext}
        canFwd={false}
        canBack={false}
        song={song}
      />
    );
    expect(getByText(song.artistName)).toMatchInlineSnapshot(`
      <span
        class="sc-fzozJi fCBKpx"
      >
        Los 4 & Micha
      </span>
    `);
    expect(getByText(song.trackName)).toMatchInlineSnapshot(`
      <span
        class="sc-fzoLsD RaOYA"
      >
        Pa' Que Te Enteres
      </span>
    `);
  });

  it("should play when clicking on play button", () => {
    const { getByAltText } = render(
      <AudioPlayer
        handlePrev={handlePrev}
        handleNext={handleNext}
        canFwd={false}
        canBack={false}
        song={song}
      />
    );

    const node = getByAltText("Play");

    fireEvent.click(node);

    expect(play).toBeCalledTimes(1);

    expect(getByAltText("Pause")).toMatchInlineSnapshot(`
      <img
        alt="Pause"
        class="sc-AxjAm emyYtY"
        role="button"
        src="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAjCAMAAACw/5reAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAATlBMVEX/UBj/////UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBj/UBgAAAAXqF+qAAAAGHRSTlMAAAqL5NdsekPFjuWt5q7nr8+XeUKD1mQ00FyNAAAAAWJLR0QZ7G61iAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB+IMEBQVKBue7/UAAABzSURBVCjP7ZM5DsAgDASNIeEIuQ/4/0tzLhSR6CPF1WpGRhReYqniMVVN9wgh6uokSjLp+IyBNCCaLKKDdCCWGkQP6UEaahE7yA6kLW/+8pdflMWL71+bQ94cEVPLJhBLM2Lq5wKiidfrS1vIzQ7b9ejKO+a/Og2Qoec2AAAAAElFTkSuQmCC"
      />
    `);
  });
});
