function getUserInput() {
    // Get a reference to the input element
    var inputElement = document.getElementById("userInput");

    // Get the value of the input element
    var inputValue = inputElement.value;

    // Get a reference to the output paragraph element
    var outputElement = document.getElementById("output");

    // Update the text content of the output paragraph element
    outputElement.textContent = "You entered: " + inputValue;
}