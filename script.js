function getUserInput() {
    // Get a reference to the input element
    var inputElement = document.getElementById("userInput");
    var inputElement1 = document.getElementById("userInput1");
    var symbol = document.getElementById("symbol");
    
    // Get the value of the input element
    var symbol = symbol.value;
    var inputValue = inputElement.value;
    var inputElement1 = inputElement1.value;
    // Get a reference to the output paragraph element
    var outputElement = document.getElementById("output");

    // Update the text content of the output paragraph element
    let random = Math.random();
    console.log(random);
    if(random > 0.1){
        if(symbol ==  "+"){

            outputElement.textContent = Number(inputValue) - Number(inputElement1);
        }
        else if( symbol == "-"){
            outputElement.textContent = Number(inputValue) + Number(inputElement1);
        }
        else if( symbol == "*"){
            outputElement.textContent = Number(inputValue) / Number(inputElement1);
        }
        
        else if( symbol == "/"){
            outputElement.textContent = Number(inputValue) * Number(inputElement1);
        }
    }
    else{
        if(symbol ==  "+"){

            outputElement.textContent = Number(inputValue) + Number(inputElement1);
        }
        else if( symbol == "-"){
            outputElement.textContent = Number(inputValue) - Number(inputElement1);
        }
        else if( symbol == "*"){
            outputElement.textContent = Number(inputValue) * Number(inputElement1);
        }
        
        else if( symbol == "/"){
            outputElement.textContent = Number(inputValue) / Number(inputElement1);
        }
    }
}