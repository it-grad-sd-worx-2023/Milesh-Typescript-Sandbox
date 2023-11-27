// Dummy flashcards for testing
const flashcards = [
    { title: "Card 1", content: "Content for Card 1" },
    { title: "Card 2", content: "Content for Card 2" },
    // Add more flashcards as needed
];
// Function to render flashcards
function renderFlashcards() {
    const flashcardsContainer = document.getElementById("content");
    flashcardsContainer.innerHTML = ""; // Clear previous content
    // Loop through each flashcard and render it
    flashcards.forEach((card) => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${card.title}</h5>
                <p class="card-text">${card.content}</p>
            </div>
        `;
        flashcardsContainer.appendChild(cardElement);
    });
}
// Event listener for the "View flash cards" button
const viewFlashCardsButton = document.getElementById("viewFlashCards");
viewFlashCardsButton.addEventListener("click", () => {
    // Set a title for the flashcards section
    const titleElement = document.getElementById("title");
    titleElement.textContent = "Flashcards";
    // Render flashcards
    renderFlashcards();
});
