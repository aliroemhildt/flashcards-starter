const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let cards;
  let deck;
  let round;

  beforeEach('create new round', function() {
    card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");
    cards = [card1, card2, card3];
    deck = new Deck(cards);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  //Q: should i have a property that keeps track of this and just return that?
  it('should return the current card in play', function() {
    let currentCard = round.returnCurrentCard();

    expect(currentCard).to.equal(card1);
  });

  // should there be a property for turn, or just return the instance of Turn?
  it.skip('should create a new turn instance', function() {
    let newTurn = round.takeTurn();

    expect(newTurn).to.be.an.instanceof(Turn);
  });

  it.skip('should update turn count', function() {
    round.takeTurn('array');
    expect(round.turns).to.equal(1);

    round.takeTurn('array');
    expect(round.turns).to.equal(2);
  });

  it.skip('should play the next card in deck', function() {
    expect(round.currentCard).to.equal(cards[0]);

    round.takeTurn('array');

    expect(round.currentCard).to.equal(cards[1]);
  });

  it.skip('should store incorrect guesses', function() {
    round.takeTurn('array');

    expect(round.incorrectGuesses).to.equal([1])
  });

  it.skip('should return feedback about guess', function() {
    let feedback = round.takeTurn('array');

    expect(feedback).to.equal('incorrect!');
  });

  it.skip('should calculate the percentage of correct guesses', function() {
    round.takeTurn('array') //incorrect
    round.takeTurn('array') //correct
    round.takeTurn('mutator method') //correct

    let percent = round.calculatePercetCorrect();

    expect(percent).to.equal(2/3);
  })
});
