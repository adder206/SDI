var toFraction = function(number) {
    // Your code here
    if (parseFloat(number) === parseInt(number)) {
        return number;
    }
var a =0.05;
console.log(a);

var result = 55;
result /= 5;
console.log('result', result);

//Write a function that takes a number as its argument and returns a string that represents that number's simplified fraction.
Example: toFraction(0.5) === '1/2'
Whole numbers and mixed fractions should be returned as irregular fractions
Example: toFraction(3.0) === '3/1'
Example: toFraction(2.5) === '5/2'

/Example #2
function isPositive(number) {
return number >=0
}

//change step1 - assign variable, remove fn
let isPositive2 = (number) {
    return number >=0
}
//change step2 - remove {} and place on 1 line, remove return
let isPositive2 = (number) => number > = 0 

function isFractionCoverter(number) {
   var result = Math.fraction(number);
    return number;
}
var result = isFractionCoverter(0.5)
console.log(result);