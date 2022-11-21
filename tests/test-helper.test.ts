import { describe, it, TestHelper } from "@zuplo/test";
import { expect } from "chai";

/**
 * This example shows how to read the endpoint passed from `zup test --endpoint`.
 */
describe("Accessing the endpoint passed in the CLI", () => {
  it("should be able to access the URL", async () => {
    const response = await fetch(TestHelper.TEST_URL);
    expect(response.status).to.equal(200);
  });
});
