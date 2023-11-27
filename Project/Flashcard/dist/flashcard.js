export class FlashCard {
    constructor(term, definition) {
        this.term = term;
        this.definition = definition;
    }
    displayCards() {
        console.log(`Definition: ${this.definition}`);
        console.log(`Term: ${this.term}`);
    }
}
