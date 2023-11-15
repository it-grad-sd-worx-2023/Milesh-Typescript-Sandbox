// Define an object representing a book
var book = {
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
var BookGenres;
(function (BookGenres) {
    BookGenres["Fiction"] = "Fiction";
    BookGenres["Mystery"] = "Mystery";
    BookGenres["ScienceFiction"] = "Science Fiction";
    BookGenres["Biography"] = "Biography";
    BookGenres["Poetry"] = "Poetry";
})(BookGenres || (BookGenres = {}));
// Assigning genres to different books
var bookGenreOne = BookGenres.Fiction;
var bookGenreTwo = BookGenres.Mystery;
var bookGenreThree = BookGenres.ScienceFiction;
var bookGenreFour = BookGenres.Biography;
var bookGenreFive = BookGenres.Poetry;
console.log("Genre of Book One: " + bookGenreOne);
console.log("Genre of Book Two: " + bookGenreTwo);
console.log("Genre of Book Three: " + bookGenreThree);
console.log("Genre of Book Four: " + bookGenreFour);
console.log("Genre of Book Five: " + bookGenreFive);
