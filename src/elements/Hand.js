export default class {
    constructor() { 
        this.cards = [];
    }

    addCard(card) {
        this.cards.push(card);
    }

    sortBySuit() {
        var i, j, min_j;
        for (let i = 0; i < this.cards.length; i++) {
            min_j = i;
            
            for ( j = i + 1 ; j < this.cards.length ; j++ ) {
                if ( this.cards[j].color < this.cards[min_j].color ) {
                    min_j = j; // We found a smaller suit value, update min_j 
                }
            }
            
            var help = this.cards[i];
            this.cards[i] = this.cards[min_j];
            this.cards[min_j] = help;
        }
    }

    sortByRank() {
        var i, j, min_j;

        for (let i = 0; i < this.cards.length; i++) {
            min_j = i;

            for ( j = i + 1 ; j < h.length ; j++ ) {
                if ( this.cards[j].value < this.cards[min_j].value ) {
                    min_j = j;    // We found a smaller rank value, update min_j     
                }
            }

            var help = this.cards[i];
            this.cards[i] = this.cards[min_j];
            this.cards[min_j] = help;
        }
    }

    is2s() {

        sortByRank()

        a = []

        for (let i = 0; i < this.cards.length - 1; i++) {
            a[i] = this.cards[i] == this.cards[i + 1];
        }

        resp = false
        for (let i = 0; i < this.a.length - 1; i++) {
            a_resp = a[i] || a[i + 1]
            resp = resp || a_resp
        }

        return resp
    }

    get bestCombination() {
        // TODO: Add combination detection mechanism
        return null
    }
}
