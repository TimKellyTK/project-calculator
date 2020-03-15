function add(n1, n2) {
    return n1 + n2
}

function substract(n1, n2) {
    return n1 - n2
}

function multiply(n1, n2) {
    return n1 * n2
}

function divide(n1, n2) {
    if(n1 && n2) {
        return n1 / n2
    } else {
        return alert("You snake! If you divide by 0, you get nothing AND break the calculator")
    }
}

function operate(n1, n2, operator) {
    switch(operator) {
        case(operator = "+"):
        return add(n1,n2)

        case(operator = "-"): 
        return substract(n1,n2)

        case(operator = "*"):
        return multiply(n1,n2)

        case(operator = "/"):
        return divide(n1,n2)

        default:
            alert("Not a valid operator")
            break;
    }
}


/* Create a function that populates the display when you click number buttons and stores display value 

What this involves:
0. Setting up a DOM layer variable that says displayContainer.InnerText = displayValue
1. Setting up event listeners for number buttons
2. Setting up event listeners for operator buttons
3. Setting up event listeners for equal buttons
4. Setting up event listeners for clear buttons
5. For number clicks, get the number and add it to a displayValue variable ('string' + 'string') and update displayContainer.InnerText
6. For operator clicks, store the old displayValue in n1 variable, get the operator value and store it in a operator variable 
and reset the displayValue to 0 and update the displayContainer.InnerText
7. For equal clicks, store the displayValue as n2 variable and set the new displayValue = operator(n1,n2,operator) and udpate the displayContainer.InnerText
8. For clear clicks, make the variables n1, n2, operator and displayValue = 0 and update the displayContainer.InnerText
*/

const displayContainer = document.querySelector('.number-container')
const numberBtns = document.querySelectorAll('.number-button')
const operatorBtns = document.querySelectorAll('.operator-button:not(#equal)')
const equalBtn = document.querySelector('#equal')
const clearBtn = document.querySelector('.clear-button')

// Testing the displayContainer
displayContainer.textContent = 3223

// Event listeners for calculator buttons
numberBtns.forEach((button) => {

    button.addEventListener('click', (e) => {
      alert(button.textContent.replace(/\s/g, ""));
    });
});

operatorBtns.forEach((button) => {

button.addEventListener('click', (e) => {
    alert(button.textContent.replace(/\s/g, ""));
    });
});

equalBtn.addEventListener('click', function (e) {
    alert(e.target.textContent.replace(/\s/g, ""));
});

clearBtn.addEventListener('click', function (e) {
    alert(e.target.textContent.replace(/\s/g, ""));
});


/* Make the calc. work! Store first number n1 as an input when a user presses an operator
and also save which operation has been chosen and then use the operate function when the user presses the = key */

/* Bugs you need to fix for
1. String together operations -> 12 + 7 - 5 * 3
2. Round answers with long decimals so they don't overflow the screen
3. Pressing = before entering all the numbers or an operator could cause problems
4. Make sure the 'clear' really clears everything 
5. Show an error message if the user tries to divide by 0*/
