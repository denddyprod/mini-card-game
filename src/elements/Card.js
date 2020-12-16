export const CARDTYPES = {
    // TODO: Add all cards
    Q: "Q",
    A: "A",
    _10: "10",
    _9: "9",
    _8: "8",
    _7: "7",
    _6: "6",
    _5: "5",
    _4: "4",
    _3: "3",
}


export default class {
    constructor() { 
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    get bestCombination() {
        // TODO: Add combination detection mechanism
        return null
    }
}
