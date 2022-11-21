import { describe, it } from "@zuplo/test";
import { expect } from "chai";

/**
 * This example how to use the @zuplo/test module.
 */
describe("Basic test example", () => {
  it("should add positive numbers", () => {
    expect(1 + 4).to.equals(5);
  });
});
