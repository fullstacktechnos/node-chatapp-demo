const expect = require("expect");

const { generateMessage, generateLocationMessage } = require("./message");

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

describe("generateLocationMessage", () => {
  it("should generate correct location object", () => {
    const from = 'Admin'
    const latitude = 17.5;
    const longitude = 78.19;
    const url = `https://www.google.com/maps?q=${latitude},${longitude}`;

    const location = generateLocationMessage(from, latitude, longitude);

    expect(location.from).toBe(from);
    expect(location.url).toBe(url);
    expect(location.createAt).toBeTruthy();
    expect(typeof location.createAt).toBe('number');
  });
});

