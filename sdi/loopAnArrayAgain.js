function loopAnArrayAgain(array) {
    // create a loop which iterates over the input array
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
// log current array element to the console
    }

  }

  loopAnArrayAgain(['a', 'b', 'c', 'd']);
// console output:
  // a
  // b
  // c
  // d

loopAnArrayAgain([1, 2, 3, 4, 5]);
// console output:
  // 1
  // 2
  // 3
  // 4
  // 5