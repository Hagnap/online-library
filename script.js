/* Store DOM element references & Declare needed variables */
const addBookBtn = document.querySelector("#add-book-btn");
const submitFormBtn = document.querySelector("#submit-btn");
const cancelFormBtn = document.querySelector("#cancel-btn");

const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const booksSection = document.querySelector("#books-section");

let displayForm = false;
let library = [];

/* Util functions */
function hideForm() {
    formContainer.style.display = "none";
    form.reset();
    displayForm = false;
}

function showForm() {
    formContainer.style.display = "flex"
    displayForm = true;
}

function addBook() {
    
    // Create obj, update webpage, and add book to library
    var book = new Book(
        this.title = document.querySelector(".form-item #book-title").value,
        this.author = document.querySelector(".form-item #book-author").value,
        this.pages = document.querySelector(".form-item #book-pages").value,
        this.isRead = document.querySelector(".form-item #book-isRead").checked ? true : false,
    );

    var bookItem = document.createElement("div");
    bookItem.setAttribute("class", "book-item");
    bookItem.setAttribute("data-index", library.length);

    var bookData = document.createElement("div");
    bookData.setAttribute("class", "book-data");

    var bookButtons = document.createElement("div");
    bookButtons.setAttribute("class", "book-buttons");

    var bookTitle = document.createElement("p");
    bookTitle.textContent = book.title;

    var bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    var bookPages = document.createElement("p");
    bookPages.textContent = `${book.pages} Pages`;

    var bookIsRead = document.createElement("p");
    bookIsRead.textContent = book.isRead;

    var toggleIsReadBtn = document.createElement("button");
    toggleIsReadBtn.setAttribute("id", "toggle-is-read-btn")
    if(book.isRead){
        toggleIsReadBtn.style.backgroundColor = "#AEC3B0";
        toggleIsReadBtn.textContent = "Read";
    }
    else {
        toggleIsReadBtn.style.backgroundColor = "#A63446";
        toggleIsReadBtn.textContent = "Not Read";
    }

    toggleIsReadBtn.addEventListener("click", (event) => {

        // If read -> Make unread & Vice versa
        if(book.isRead){
            toggleIsReadBtn.style.backgroundColor = "#A63446";
            toggleIsReadBtn.textContent = "Not Read";
            book.isRead = false;
        }
        else {
            toggleIsReadBtn.style.backgroundColor = "#AEC3B0";
            toggleIsReadBtn.textContent = "Read";
            book.isRead = true;
        }

    });


    var removeIndex = bookItem.getAttribute("data-index");
    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("id", "remove-btn");
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", (event) => {

        library.splice(removeIndex, 1);
        booksSection.removeChild(bookItem);
    });


    bookData.appendChild(bookTitle);
    bookData.appendChild(bookAuthor);    
    bookData.appendChild(bookPages);        
    bookButtons.appendChild(toggleIsReadBtn);   
    bookButtons.appendChild(removeBtn);  
    
    bookItem.appendChild(bookData);
    bookItem.appendChild(bookButtons);

    booksSection.append(bookItem);

    library.push(book);
}



/* Add EventListeners */
addBookBtn.addEventListener("click", (event) => {
    //toggle form display
    if(!displayForm) {
        showForm();   
    }
    else {
        hideForm();
    }
});

cancelFormBtn.addEventListener("click", (event) => {
    hideForm();
});

submitFormBtn.addEventListener("click", (event) => {

    // Use form data to create book object & Add it to the library
    addBook();

    // hide & reset form after adding book to library
    hideForm();

});



/* Book Code */
function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;       
    this.pages = pages;
    this.isRead = isRead;

    this.info = function() {
        return `${this.title} by ${this.author} has ${this.pages} pages and ${this.isRead ? "has" : "has not"} been read.`;
    }
}