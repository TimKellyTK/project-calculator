// Javascript variables
let displayValue = '';
let n1;
let n2;
let operator;


// DOM selectors for calculator buttons 

const displayContainer = document.querySelector('.number-container')
const numberBtns = document.querySelectorAll('.number-button')
const operatorBtns = document.querySelectorAll('.operator-button:not(#equal)')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('.clear-button')

// Event listeners for calculator buttons

numberBtns.forEach((button) => {

    button.addEventListener('click', (e) => {
      let number = button.textContent.replace(/\s/g, "")
      clickNumber(number);
    });
});

operatorBtns.forEach((button) => {

button.addEventListener('click', (e) => {
    let operator = button.textContent.replace(/\s/g, "")
    clickOperator(operator);
    });
});

equalBtn.addEventListener('click', function (e) {
    clickEqual(n1, operator)
});

clearBtn.addEventListener('click', function (e) {
    clickClear()
});

// Functions for calculator

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if(a && b) {
        return a / b
    } else {
        displayValue = '';
        n1 = 0;
        n2 = 0;
        operator = '';
        displayContainer.textContent = 0;
        return alert("You snake! If you divide by 0, you get nothing AND break the calculator")
    }
}

function operate(a, b, operator) {
    switch(operator) {
        case(operator = "+"):
        return add(a,b)

        case(operator = "−"): 
        return substract(a,b)

        case(operator = "×"):
        return multiply(a,b)

        case(operator = "÷"):
        return divide(a,b)

        default:
            alert("Not a valid operator")
            break;
    }
}

// Functions for button clicks

function clickNumber(number) {
    displayValue += `${number}`
    return displayContainer.textContent = displayValue
}

function clickOperator(string) {
    operator = string
    if (displayValue > 0) {
        n1 = Number(displayValue)
        displayValue = '';
    }
}

function clickEqual(a, operator) {
    if (n1 && displayValue) {
        n2 = Number(displayValue)
        n1 = Math.round((operate(a,n2,operator) + Number.EPSILON) * 100) / 100
        displayValue = n1
        if (displayValue == 0) {
            displayValue = '';
            displayValue.textContent = 0;
        } else {
        displayContainer.textContent = displayValue
        }
    } 
}

function clickClear() {
    n1 = '';
    n2 = '';
    operator = '';
    displayValue = ''
    return displayContainer.textContent = 0
}