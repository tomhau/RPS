export class GameStatus {
    wins: number;
    draws: number;
    losses: number;

    constructor() {
        this.wins = 0;
        this.draws = 0;
        this.losses = 0;
    }

    recordWin() {
        this.wins++;
    }

    recordDraw() {
        this.draws++;
    }

    recordLoss() {
        this.losses++;
    }
}
