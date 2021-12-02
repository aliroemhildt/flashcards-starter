const chai = require('chai');
const expect = chai.expect;
const data = require('../src/data');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', function() {
  var game = new Game(data.prototypeQuestions);
  game.start();

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instancs of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', function() {
    expect(game).to.have.property('currentRound');
  });

  it('should create cards', function() {
    expect(game.currentRound.deck.cards[0]).to.be.an.instanceof(Card);
  });

  it('should put cards in a deck', function() {
    expect(game.currentRound.deck).to.be.an.instanceof(Deck);
  });

  it('should create a new round using the deck', function() {
    expect(game.currentRound).to.be.an.instanceof(Round);
  });
});
