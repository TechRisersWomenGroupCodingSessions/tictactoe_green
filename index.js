const game = {
	playerO: [],
	playerX: [],
	entries: 0,
	gameOver: false,

	tictactoe(playerKey, gameSquare) {
		let validTurn = false;
		if (playerKey == 0) {
			validTurn = this.addO(gameSquare)
		}


		return validTurn;
	},

	addO(gameSquare) {
		if (this.entries < 9) {
			this.playerO.push(gameSquare);
			this.entries++;
		}
	}
};

module.exports = game;
