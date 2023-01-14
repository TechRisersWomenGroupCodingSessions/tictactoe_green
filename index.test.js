const game = require("./index.js");

describe("it returns an O", () => {
	expect(game.tictactoe(0, 1)).toBe(true);
});
