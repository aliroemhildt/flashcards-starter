const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

class Game {
  constructor(data) {
    this.data = data;
    this.currentRound = null;
  }

  start() {
    let cards = prototypeQuestions.map(element => {
      return new Card(element.id, element.question, element.answers, element.correctAnswer);
    })
    let deck = new Deck(cards);
    this.currentRound = new Round(deck);
    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
