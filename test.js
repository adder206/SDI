var arr = [1, 2, 3, 4];

var squares = arr.map(function(element) {
  return element * element;
});

console.log(squares); 

var arr = [1, 2, 3, 4];

var squares = [];

for (var i = 0; i < arr.length; i++) {
  squares.push(arr[i] * arr[i]);
}

console.log(squares); // [1, 4, 9, 16]

var arr = [1, 2, 3, 4];

var odds = arr.filter(function(element) {
  return element % 2 !== 0;
});

console.log(odds); // [1, 3]