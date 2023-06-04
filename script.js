/* Store DOM element references & Declare needed variables */
const addBookBtn = document.querySelector("#add-book-btn");
const submitFormBtn = document.querySelector("#submit-btn");
const cancelFormBtn = document.querySelector("#cancel-btn");

const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");

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
    var book = new Book(
        this.title = document.querySelector(".form-item #book-title").value,
        this.author = document.querySelector(".form-item #book-author").value,
        this.pages = document.querySelector(".form-item #book-pages").value,
        this.isRead = document.querySelector(".form-item #book-isRead").checked ? true : false,
    );

    library.push(book);

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