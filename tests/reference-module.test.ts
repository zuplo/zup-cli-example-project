import { describe, it } from "@zuplo/test";
import { expect } from "chai";
import { NameUtil } from "modules/util";

/**
 * This example shows how to reference other modules.
 */
describe("Referencing other module example", () => {
  it("should uppercase name", () => {
    const n = new NameUtil("zuplo");
    expect(n.name).to.equals("ZUPLO");
  });
});
