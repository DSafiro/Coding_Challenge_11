// Task 1: Created Book Class
class Book {
    constructor (title, author, isbn, copies) {
        this.title = title; // Assigns title property
        this.author = author; // Assigns author property
        this.isbn = isbn; // Assigns ISBN property
        this.copies = copies; // Assigns copies property
    }; 
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; // Returns book details in string format
    };
    updateCopies(quantity) {
        this.copies += quantity; // Modifies copies when book is borrowed or returned
    }; 
}; // Declares Book class with attributes
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); // Produces expected output of "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5"
book1.updateCopies(-1);
console.log(book1.getDetails()); // Produces expected output of "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 2: Created Borrower Class
class Borrower {
    constructor (name, borrowerId) {
        this.name = name; // Assigns name property  
        this.borrowerId = borrowerId; // Assgins borrower ID property
        this.borrowedBooks = []; // Assigns borrowed books as an array
    };
    borrowBook(book) {
       return this.borrowedBooks.push(book); // Adds book title to borrowed books array
    };
    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book); // Indexes borrowed books to find book
        if (index !== -1) { // If index finds book in borrowed books array -> Removes book from array
            this.borrowedBooks.splice(index, 1); // Removes book if found
        };
    };
}; // Declares Borrower class with attributes
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby"); 
console.log(borrower1.borrowedBooks); // Produces expected output of ["The Great Gatsby"]
borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); // Produces expected output: []

// Task 3: Created Library Class
class Library {
    constructor () {
        this.books = []; // Assigns books as an array
        this.borrowers = []; // Assigns borrows as an array
    };
    addBook(book) {
        return this.books.push(book); // Adds book to books array
    };
    listBooks() {
        return this.books.forEach(book => console.log(book.getDetails())); // Returns book details from book class and logs it
    }; 
    
    // **** Part of Task 4: Implemented Book Borrowing **** //
    addBorrower(borrower) {
        return this.borrowers.push(borrower); // Adds borrower to borrowers array
    };
    lendBook(borrowerId, isbn) {
        const book = this.books.find(book => book.isbn === isbn); // Finds book through ISBN
        if (book.copies > 0) {
            book.updateCopies(-1); // If book exists and copies are greater than 0 -> Reduces available copies by 1
        } else {
            return console.log(`No book copies available.`); // Returns that no copies are available
        };
        const borrower = this.borrowers.find(borrower => borrower.borrowerId === borrowerId); // Finds borrower through borrower ID
        if (borrower) {
            return borrower.borrowBook(book.title); // Adds book title to borrowed books array
        };
    };

}; // Creates Library class with attributes
const library = new Library();
library.addBook(book1);
library.listBooks();// Produces expected output: "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4"

// Task 4: Implemented Book Borrowing
library.addBorrower(borrower1); // Adds borrower1 to borrowers array
library.lendBook(201, 123456);
console.log(book1.getDetails()); // Produces expected output of "Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 3"
console.log(borrower1.borrowedBooks); // Produces expected output of ["The Great Gatsby"]