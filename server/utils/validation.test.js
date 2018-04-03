const expect = require("expect");

const { isRealString } = require("./validation");

describe("isRealString", () => {
  it("should reject non string value", () => {
    const testdata = 1;
    const result = isRealString(testdata);

    expect(result).toBeFalsy();
  });

  it("should reject with only spaces", () => {
    const testdata = '       ';
    const result = isRealString(testdata);

    expect(result).toBeFalsy();
  });

  it("should allow with non string characters", () => {
    const testdata = ' Raja Pattanayak ';
    const result = isRealString(testdata);

    expect(result).toBeTruthy();
  });
});
