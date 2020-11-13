var arr = [1, 2, 3, 4];

var odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]

const arr = [1, 2, 2, 10]
const sum = arr.reduce(function(result, element) {
    return result + element;
}, 0);
console.log(sum);

const students = [
    { name: "Stephen", age: 24 },
    { name: "Alice", age: 19 },
    { name: "Jordan", age: 29 },
    { name: "Julie", age: 21 },
    { name: "Chris", age: 26 }
]

let averageAge = students.map((i) => {
  return i.age;
}).reduce((current, i) => {
    return current + i;
  }) / students.length;