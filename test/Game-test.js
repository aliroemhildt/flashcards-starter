const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  var data = [{
      "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"
    }, {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }, {
      "id": 3,
      "question": "What type of prototype method directly modifies the existing array?",
      "answers": ["mutator method", "accessor method", "iteration method"],
      "correctAnswer": "mutator method"
    }];
  var game = new Game(data);
  game.start();

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  })

  it('should be an instancs of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  })

  it('should keep track of current round', function() {
    let game2 = new Game(data);
    // expect(game2.currentRound).to.be.an.instanceof(Round);
    expect(game2.currentRound).to.equal(null);
  })

  it('should create cards', function() {
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  })

  it('should put cards in a deck', function() {
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  })

  it('should create a new round using the deck', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it('should end game when all cards are complete', function() {
    let game3 = new Game(data);
    game3.start();

    turn1 = game3.currentRound.takeTurn('array');
    console.log(game3.currentRound)
    turn2 = game3.currentRound.takeTurn('array');
    console.log(game3.currentRound)
    turn3 = game3.currentRound.takeTurn('mutator method');
    console.log(game3.currentRound)

    expect(game.currentRound.returnCurrentCard()).to.equal(null);
  })
})
