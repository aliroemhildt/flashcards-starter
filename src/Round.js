const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = this.deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess) {
      this.incorrectGuesses.push()
    }
    return turn;
  }
}

module.exports = Round;
