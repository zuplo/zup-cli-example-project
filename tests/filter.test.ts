import { describe, it } from "@zuplo/test";
import { expect } from "chai";

/**
 * This example shows how to filter the test by the name in the describe() function.
 * You can run `zup test --filter '#labelA'`
 * If you want to use regex, you can do `zup test --filter '/#label[Aa]/'`
 */
describe("[#labelA #labelB] Addition", () => {
  it("should add positive numbers", () => {
    expect(1 + 4).to.equals(5);
  });
});
