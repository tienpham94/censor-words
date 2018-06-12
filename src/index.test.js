import censorWords from ".";

test("replaces blacklisted words with asterisks", () => {
  expect(censorWords("My name is Tien", ["Tien"])).toBe("My name is ***");
});

test("replaces all instances", () => {
  expect(censorWords("My name is Tien and Tien is cool", ["Tien"])).toBe("My name is *** and *** is cool");
});
