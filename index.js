const submitButton = document.getElementById("submitButton");

// Evita que el formulario refresque la página al enviarse
submitButton.addEventListener("click", (e) => {
    e.preventDefault();
})

console.log(submitButton);