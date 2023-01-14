const game = require("./index.js");

describe("index", () => {
	it("player takes a valid turn", () => {
		game.startGame();
		let validTurn = game.tictactoe(0, 1);
		expect(validTurn).toBe(true);
	});

	it("player takes an invalid turn", () => {
		game.startGame();
		let validTurn = game.tictactoe(0, 1);
		let invalidTurn = game.tictactoe(0, 1);
		
		expect(invalidTurn).toBe(false);
	});

	it("game stores player turn correctly", () => {
		game.startGame();
		game.tictactoe(0, 1);
		let playerOEntries = game.playerO;		
		expect(playerOEntries).toEqual([1]);
	});
});
