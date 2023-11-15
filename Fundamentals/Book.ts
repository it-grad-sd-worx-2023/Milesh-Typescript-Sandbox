// Define an object representing a book
const book: { title: string, author: string, year: number, genre?: string } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
};

book.genre = "Fantasy";

console.log("Title: " + book.title);
console.log("Author: " + book.author);
console.log("Year: " + book.year);
console.log("Genre: " + book.genre);

// Define an enum representing different genres of books
enum BookGenres {
    Fiction = "Fiction",
    Mystery = "Mystery",
    ScienceFiction = "Science Fiction",
    Biography = "Biography",
    Poetry = "Poetry"
}

// Assigning genres to different books
let bookGenreOne: BookGenres = BookGenres.Fiction;
let bookGenreTwo: BookGenres = BookGenres.Mystery;
let bookGenreThree: BookGenres = BookGenres.ScienceFiction;
let bookGenreFour: BookGenres = BookGenres.Biography;
let bookGenreFive: BookGenres = BookGenres.Poetry;

console.log("Genre of Book One: " + bookGenreOne);
console.log("Genre of Book Two: " + bookGenreTwo);
console.log("Genre of Book Three: " + bookGenreThree);
console.log("Genre of Book Four: " + bookGenreFour);
console.log("Genre of Book Five: " + bookGenreFive);
