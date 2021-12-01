class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    this.isCorrect;
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
    if (this.isCorrect) {
      return 'correct!';
    } else {
      return 'incorrect!';
    };
  };
};

module.exports = Turn;
