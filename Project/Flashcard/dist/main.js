import { FlashCard } from "./flashcard.js";
const flashCards = [
    new FlashCard('Javascript', 'A popular programming language used for web development.'),
    new FlashCard('Typescript', 'A statically typed superset of javascript.')
];
function showFlashCards() {
    const title = document.getElementById('title');
    const content = document.getElementById('content');
    content.innerHTML = "";
    title.innerHTML = '<h2>Flash cards</h2>';
    for (const flashcard of flashCards) {
        const cardDiv = document.createElement('div');
        const cardBodyDiv = document.createElement('div');
        cardDiv.className = 'card mb-3 bg-secondary text-white me-2';
        cardBodyDiv.className = 'card-body';
        cardDiv.appendChild(cardBodyDiv);
        cardBodyDiv.innerHTML = `
        <p class = "term">
            <span class = "fw-bold">Term: </span> ${flashcard.term}
        </p>    


        <p class = "definition d-none">
            <span class = "fw-bold">Definition: </span> ${flashcard.definition}
        </p>    

       `;
        content.appendChild(cardDiv);
    }
}
showFlashCards();
