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

  //Q: okay to use card in expect statement, or should I write out the object long hand?
  //Q: should I split this into two tests?
  it('should store the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    expect(turn.card).to.equal(card);
    expect(turn.card).to.be.an.instanceof(Card);
  });

  //Q: should i use guess var or just put method in expect statment?
  it('should return the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    guess = turn.returnGuess();
    expect(guess).to.equal('array');
  });

  //Q: should i use cardInPlay var or just put method in expect statement?
  //Q: okay to use card in expect statement, or should I write out the object long hand?
  it('should return the card in play', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    const turn = new Turn('array', card);
    cardInPlay = turn.returnCard();
    expect(cardInPlay).to.equal(card)
  });

  //Q: should the happy/sad paths be in separate tests?
  it('should evaluate the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    guessEval1 = turn1.evaluateGuess();

    const turn2 = new Turn('object', card);
    guessEval2 = turn2.evaluateGuess();

    expect(guessEval1).to.equal(false);
    expect(guessEval2).to.equal(true);
  });

  //Q: is it okay to include evaluateGuess method inside giveFeedback method?
  //Q: should these be separate tests?
  it('should give feedback about the guess', function() {
    const card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

    const turn1 = new Turn('array', card);
    feedback1 = turn1.giveFeedback();

    const turn2 = new Turn('object', card);
    turn2.evaluateGuess();
    feedback2 = turn2.giveFeedback();

    expect(feedback1).to.equal('incorrect!');
    expect(feedback2).to.equal('correct!');
  });
});
