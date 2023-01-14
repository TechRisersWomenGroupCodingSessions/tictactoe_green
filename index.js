const game = {
	playerO: [],
	playerX: [],
	entries: 0,
	gameOver: false,

	tictactoe(playerKey, gameSquare) {
		let validTurn = this.takeTurn(playerKey, gameSquare);

		return validTurn;
	},

	takeTurn(playerKey, gameSquare) {
		if (this.entries < 9 && this.squareOpen(gameSquare)) {
			if (playerKey == 0) {
				this.playerO.push(gameSquare);
			} else {
				this.playerX.push(gameSquare);
			}
			this.entries++;
			return true;
		}

		return false;
	},

	squareOpen(gameSquare) {
		return !(
			this.playerO.includes(gameSquare) || this.playerX.includes(gameSquare)
		);
	},
};

module.exports = game;
