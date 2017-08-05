var currentValue = '0';

// stores the current calculation - two inputs and an operation - as strings
var calcObj = {
    inputOne: '',
    inputTwo: '',
    operation: ''
};

function sendData() {
    //POST the numbers + operation obj and GET a number back
}

function updateDisplay(numbers) {
    //clear #resultsWindow and display the numbers there (maybe) with commas
    console.log('updateDisplay');

    while (numbers[0] === '0') {
        numbers = numbers.substr(1);
    } // strip leading zeroes from the display value

    $('#resultWindow').html(numbers);
}

//add input (which is a string) to currentValue and update the display
function pressNum(input) {
    console.log('pressNum', input);
    if (currentValue.length < 10) {
        currentValue += input;
        updateDisplay(currentValue);
    }
}

function pressDot(){
    console.log('pressDot');
    if (currentValue.indexOf('.') < 0){
        currentValue += '.';
    }
}

// create an object with the input and the operation 
function pressOp(input) {
    console.log('pressOp', input);
    calcObj.inputOne = currentValue;
    calcObj.operation = input;
}

// set inputTwo to the current value and send the whole thing to the server
function pressEquals(){
    console.log('pressEquals');
    calcObj.inputTwo = currentValue;
    sendData();
}

$(document).ready(function () {
    $('#zeroButton').on('click', function () {
        pressNum('0')
    });
    $('#oneButton').on('click', function () {
        pressNum('1')
    });
    $('#twoButton').on('click', function () {
        pressNum('2')
    });
    $('#threeButton').on('click', function () {
        pressNum('3')
    });
    $('#fourButton').on('click', function () {
        pressNum('4')
    });
    $('#fiveButton').on('click', function () {
        pressNum('5')
    });
    $('#sixButton').on('click', function () {
        pressNum('6')
    });
    $('#sevenButton').on('click', function () {
        pressNum('7')
    });
    $('#eightButton').on('click', function () {
        pressNum('8')
    });
    $('#nineButton').on('click', function () {
        pressNum('9')
    });
    $('#dotButton').on('click', pressDot);

    // $('#clearButton').on('click', pressClear);
    // $('#divideButton').on('click', pressDivide);
    // $('#multiplyButton').on('click', pressMultiply);
    // $('#subtractButton').on('click', pressSubtract);
    // $('#addButton').on('click', pressAdd);
    // $('#equalsButton').on('click', pressEquals);

});