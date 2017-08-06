var currentValue = ''; // tracker for the user's input

// calcObj stores the current calculation - two inputs and an operation - as strings
var calcObj = {
    inputOne: '',
    inputTwo: '',
    operation: ''
};

// POST the calculation object to the server, then fire off the GET command
function sendData() {
    $.ajax('/operate', {
        method: 'POST',
        data: calcObj,
        success: function (response) {
            console.log('POST successful, response:', response);
        }
    });
    getData();
}

// get the 'result' string from the server and clear client-side vars
function getData() {
    $.ajax('/operate', {
        method: 'GET',
        success: function (response) {
            updateDelay(response);
        }
    });
    currentValue = '';
    calcObj.inputOne = '';
    calcObj.inputTwo = '';
    calcObj.operation = '';
}

// three-second delay before updating the display with thepassed string
function updateDelay(numbers) {
    updateDisplay('cOmpuTInG...');
    setTimeout(function () {
        updateDisplay(numbers);
    }, 3000);
}

// update the display with the passed string
function updateDisplay(numbers) {
    while (numbers[0] === '0') {
        numbers = numbers.substr(1);
    } // strip leading zeroes from the display value

    if (numbers.length > 14) {
        $('#resultWindow').html('#ERR-LENGTH');
    } else {
        $('#resultWindow').html(numbers);
    }

}

//add input (which is a string) to currentValue and update the display
function pressNum(input) {
    console.log('pressNum', input);
    if (currentValue.length < 10) {
        currentValue += input;
        updateDisplay(currentValue);
    }
}

// only add a dot to the input string if there isn't one already
function pressDot() {
    console.log('pressDot');
    if (currentValue.indexOf('.') < 0) {
        currentValue += '.';
    }
}

// create an object with the input and the operation 
function pressOp(input) {
    console.log('pressOp', input);
    if (calcObj.operation.length === 0) {
        calcObj.inputOne = currentValue;
        calcObj.operation = input;
        currentValue = '';
        updateDisplay('');
    }
}

// set inputTwo to the current value and then send the calculation object to the server
function pressEquals() {
    if (calcObj.inputOne.length > 0 && calcObj.inputTwo.length === 0 && calcObj.operation.length === 1) {
        calcObj.inputTwo = currentValue;
    }
    console.log('pressEquals');
    console.log(calcObj);
    sendData();
}

// clear the display and the user input tracker
function pressClear() {
    currentValue = '';
    updateDisplay(currentValue);
}

// our doc ready is really just click handlers
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

    $('#clearButton').on('click', pressClear);
    $('#divideButton').on('click', function () {
        pressOp('/')
    });
    $('#multiplyButton').on('click', function () {
        pressOp('*')
    });
    $('#subtractButton').on('click', function () {
        pressOp('-')
    });
    $('#addButton').on('click', function () {
        pressOp('+')
    });
    $('#equalsButton').on('click', pressEquals);

});



/*--------------------TODO--------------------

trim result?
input fields
silly buttons with nic & templin faces
jquery animations

--------------------------------------------*/