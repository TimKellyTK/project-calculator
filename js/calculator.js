/* Things I need to create

Creating functions for the following items and testing them in my browser's console
1. add
2. substract
3. multiply
4. divide
*/

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

/* Create a new function operate() -> takes an operator an d2 numbers and 
calls one of the above functions on numbers */

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


/* Create a function that populates the display when you click number buttons and stores display value */

/* Make the calc. work! Store first number n1 as an input when a user presses an operator
and also save which operation has been chosen and then use the operate function when the user presses the = key */

/* Bugs you need to fix for
1. String together operations -> 12 + 7 - 5 * 3
2. Round answers with long decimals so they don't overflow the screen
3. Pressing = before entering all the numbers or an operator could cause problems
4. Make sure the 'clear' really clears everything 
5. Show an error message if the user tries to divide by 0*/
