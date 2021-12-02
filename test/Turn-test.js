const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {
  var card;
  var turn;

  beforeEach('create new turn', function() {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    turn = new Turn('array', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    expect(turn.guess).to.equal('array');
  });

  it('should store the card in play', function() {

    expect(turn.card).to.equal(card);
  });

  it('should be an instance of card', function() {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess', function() {
    let guess = turn.returnGuess();

    expect(guess).to.equal('array');
  });

  it('should return the card in play', function() {
    let cardInPlay = turn.returnCard();

    expect(cardInPlay).to.equal(card);
  });

  it('should evaluate the guess', function() {
    const turn1 = new Turn('array', card);
    let guessEval1 = turn1.evaluateGuess();

    const turn2 = new Turn('object', card);
    let guessEval2 = turn2.evaluateGuess();

    expect(guessEval1).to.equal(false);
    expect(guessEval2).to.equal(true);
  });

  it('should give feedback about the guess', function() {
    const turn1 = new Turn('array', card);
    let feedback1 = turn1.giveFeedback();

    const turn2 = new Turn('object', card);
    turn2.evaluateGuess();
    let feedback2 = turn2.giveFeedback();

    expect(feedback1).to.equal('incorrect!');
    expect(feedback2).to.equal('correct!');
  });
});
