/* Store DOM element references */
const addBookBtn = document.querySelector("#add-book-btn");
const formContainer = document.querySelector(".form-container");

/* Add EventListeners */
addBookBtn.addEventListener("click", (event) => {
    formContainer.style.display = "flex";
    console.log("Click!");
});