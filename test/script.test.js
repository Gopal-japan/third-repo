const { greetUser } = require('../script');

test('greetUser returns the correct greeting message', () => {
  expect(greetUser()).toBe("Hello, welcome to the site!");
});
