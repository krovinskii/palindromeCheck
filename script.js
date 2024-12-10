
//Checks if user input is empty, recommends  adding a value
function checkIfInput() {
    const button1 = document.getElementById("check-btn");
    button1.addEventListener("click", alertNoInput);

    function alertNoInput() {
        const input = document.getElementById("text-input");
        if (input.value === "") {
            alert("Please input a value");
        }
    }
}

// Call the function after the page has loaded
window.onload = checkIfInput;