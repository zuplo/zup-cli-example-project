/* eslint-disable no-console */
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from "@zuplo/test";
import { expect } from "chai";

/**
 * This example shows how to use the before and after hooks.
 */
describe("Test hooks example", () => {
  afterAll(() => {
    console.log("afterAll is run after all tests.");
  });
  afterEach(() => {
    console.log("afterEach is run after each test.");
  });
  beforeAll(() => {
    console.log("beforeAll is run before all tests.");
  });
  beforeEach(() => {
    console.log("beforeEach is run before each test.");
  });

  it("should add two numbers correctly", () => {
    expect(1 + 4).to.equal(5);
  });

  it("should subtract numbers correctly", () => {
    expect(4 - 1).to.equal(3);
  });
});
