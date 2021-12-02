class Deck {
  constructor(cards) {
    this.cards = cards;
    this.numCards = cards.length;
  }

  countCards() {
    return this.numCards;
  }
}

module.exports = Deck;
