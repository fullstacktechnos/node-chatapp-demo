const expect = require("expect");

const { generateMessage } = require("./message");

describe("generateMessage", () => {
  it("should generate correct message object", () => {
    const from = "Raja";
    const text = "Hi there !!";
    const message = generateMessage(from, text);

    expect(message.from).toBe(from);
    expect(message.text).toBe(text);
    expect(message.createAt).toBeTruthy();
    expect(typeof message.createAt).toBe('number');
  });
});
