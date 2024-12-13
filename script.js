function palindromeCheck(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    let x = cleanedStr.length - 1;
    for (let i = 0; i < cleanedStr.length / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[x]) {
            return false;
        }
        x--;
    }
    return true;
}

function masterFunction() {
    const input = document.getElementById("text-input");        result.style.color = "green";  
    const result = document.getElementById("result");

    if (input.value === "") {
        alert("Please input a value"); 
        return;  // Stop further execution if no input
    }

    const isPalindrome = palindromeCheck(input.value);

    if (isPalindrome) {
        result.innerText = `${input.value} is a palindrome`;
    } else {
        result.innerText = `${input.value} is not a palindrome.`;
    }
}

function setupEventListener() {
    const button1 = document.getElementById("check-btn");
    button1.addEventListener("click", masterFunction);  // Listen for the button click
}

// Initialize event listener when the page loads
window.onload = setupEventListener;