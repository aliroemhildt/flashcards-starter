class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    if (this.card.correctAnswer === this.guess) {
      this.isCorrect = true;
    } else {
      this.isCorrect = false;
    }
    return this.isCorrect;
  };

  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'correct!';
    } else {
      return 'incorrect!';
    }
  };
};

module.exports = Turn;
