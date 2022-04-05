import { LineLabelPlacement } from "protomaps";

describe("Check protomaps import", () => {
  test("Test LineLabelPlacement", () => {
    expect(LineLabelPlacement.Above).toEqual(1);
  });
});
