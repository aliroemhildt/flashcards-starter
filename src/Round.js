const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.deck.cards[0];
    this.currentTurn = '';
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turns++;
    this.currentTurn = new Turn(guess, this.currentCard);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    let currentIndex = this.deck.cards.indexOf(this.currentCard);
    if (currentIndex === this.deck.cards.length - 1) {
      this.currentCard = null;
    } else {
      this.currentCard = this.deck.cards[currentIndex + 1];
    };
    // console.log(this.returnCurrentCard())
    return this.currentTurn.giveFeedback();
  }

  calculatePercentCorrect() {
    let numCorrect = this.deck.cards.length - this.incorrectGuesses.length;
    let percent = Math.round((numCorrect / this.deck.cards.length) * 100);
    return percent;
  }

  endRound() {
    return `**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`;
  }
}

module.exports = Round;
