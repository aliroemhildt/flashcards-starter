const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.guess).to.equal('array');
  });

  //Q: should I split this into two tests?
  it('should store the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.card).to.equal(card);
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    let guess = turn.returnGuess();
    expect(guess).to.equal('array');
  });

  it('should return the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    let cardInPlay = turn.returnCard();
    expect(cardInPlay).to.equal(card)
  });

  //Q: should the happy/sad paths be in separate tests?
  it('should evaluate the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    let guessEval1 = turn1.evaluateGuess();

    const turn2 = new Turn('object', card);
    let guessEval2 = turn2.evaluateGuess();

    expect(guessEval1).to.equal(false);
    expect(guessEval2).to.equal(true);
  });

  //Q: should these be separate tests?
  it('should give feedback about the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    let feedback1 = turn1.giveFeedback();

    const turn2 = new Turn('object', card);
    turn2.evaluateGuess();
    let feedback2 = turn2.giveFeedback();

    expect(feedback1).to.equal('incorrect!');
    expect(feedback2).to.equal('correct!');
  });
});
