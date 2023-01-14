const game = require("./index.js");

describe("index", () => {
	it("player takes a valid turn", () => {
		expect(game.tictactoe(0, 1)).toBe(true);
	});
});
