// Task 1: Created Book Class
class Book {
    constructor (title, author, isbn, copies) {
        this.title = title; // Assigns title property
        this.author = author; // Assigns author property
        this.isbn = isbn; // Assigns ISBN property
        this.copies = copies; // Assigns copies property
    }; 
    getDetails () {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // Returns book details in string format
    };
    updateCopies (quantity) {
        this.copies += quantity; // Modifies copies when book is borrowed or returned
    }; 
}; // Declares Book class with attributes
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Produces expected output of "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails()); // Produces expected output of "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"