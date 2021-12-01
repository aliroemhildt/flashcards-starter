const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function() {
  var deck;
  var cards;
  beforeEach('create new deck', function() {
    const card1 = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    const card2 = new Card(2, "What is a comma-separated list of related values?", ["array", "object", "function"], "array");
    const card3 = new Card(3, "What type of prototype method directly modifies the existing array?", ["mutator method", "accessor method", "iteration method"], "mutator method");

    cards = [card1, card2, card3];
    deck = new Deck(cards);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  //Q: should i create a count property so that the value is accessible, and the function just returns it? or should I only return it in the function
  it('should store a deck of cards', function() {
    expect(deck.cards).to.equal(cards);
  });

  it('should count the number of cards in the deck', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
