function balancePets(dogs, cats) {
    // if there are more than 8 dogs and fewer than 9 cats
    if (dogs > 8 && cats < 9) {
      return 'number of cats and dogs is acceptable';
    } else {
      return 'number of cats and dogs is not acceptable';
    }
}
      // return 'number of cats and dogs is acceptable'
    // otherwise
      // return 'number of cats or dogs is not acceptable'

var result1 = balancePets(8);
console.log('should log "number of cats and dogs is acceptable":', result1);

var result2 = balancePets(12);
console.log('should log "number of cats or dogs is not acceptable":', result2);

var result3 = balancePets(7);
console.log('should log "number of cats or dogs is not acceptable":', result3);

var result4 = balancePets(14);
console.log('should log "number of cats or dogs is not acceptable":', result4);