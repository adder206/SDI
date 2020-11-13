function sum(a, b) {
    return a + b
}
//arrow function.  Sum and Sum 2 are same functions

let sum2 = (a, b) => { 
    return a + b
}
//can be reduced further by removing return and placing on 1 line & removing {}
let sum2 = (a, b) => a + b

//Example #2
function isPositive(number) {
return number >=0
}

//change step1 - assign variable, remove fn
let isPositive2 = (number) {
    return number >=0
}
//change step2 - remove {} and place on 1 line, remove return
let isPositive2 = (number) => number > = 0 
//change3 - remove () around number because its a single parameter
let isPositive2 = number => number >= 0

//Example #3
function randomNumber() {
    return Math.random
}
//Step1
let randomNumber2 = () => Math.random

//Example4 - anonymous functions or functions with no names
document.addEventListenter('click', function() {
    console.log('click')
})
//step1-remove 'function word', add arrow
document.addEventListenter('click', () =>  {
    console.log('click')
})
//Step 2 - remove {} and place on 1 line
document.addEventListenter('click', () =>  console.log('click'))

//calling the function
isPositive2.number()