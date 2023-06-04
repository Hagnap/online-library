/* Store DOM element references */
const addBookBtn = document.querySelector("#add-book-btn");
const submitFormBtn = document.querySelector("#submit-btn");
const cancelFormBtn = document.querySelector("#cancel-btn");

const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");

let displayForm = false;

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

    console.log("Click!");
});

cancelFormBtn.addEventListener("click", (event) => {


    formContainer.style.display = "none";
});