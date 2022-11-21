import { describe, it } from "@zuplo/test";
import { expect } from "chai";

/**
 * This example how to use ignore and only.
 */
describe("Ignore and only test example", () => {
  it.ignore("This is a failing test but it's been ignored", () => {
    expect(1 + 4).to.equals(6);
  });

  //   it.only("This is the only test that would run if it were not commented out", () => {
  //     expect(1 + 4).to.equals(5);
  //   });
});
