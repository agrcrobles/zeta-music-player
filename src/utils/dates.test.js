import { formatTotalTime } from "./dates";

test("dates ms transformation", () => {
  expect(formatTotalTime(10000)).toMatchInlineSnapshot(`"0:10"`);
  expect(formatTotalTime(1000000)).toMatchInlineSnapshot(`"16:40"`);
  expect(formatTotalTime(6000000)).toMatchInlineSnapshot(`"100:0"`);
});
