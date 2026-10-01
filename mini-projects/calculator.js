const prompt = require("prompt-sync")();

let num1 = Number(prompt('Enter 1st Number:'))
let operator = prompt('Enter the Operator (+,-,*,/)')
let num2 = Number(prompt('Enter 2nd Number:'))

let result;
if (operator === '+') result = num1 + num2;
else if (operator === '-') result = num1 - num2;
else if (operator === '*') result = num1 * num2;
else if (operator === '/') result = num2 != 0 ? (num1 / num2).toFixed(2) : 'Cannot divide by zero';
else result = 'Invalid Operator';

console.log('Result: ', result);