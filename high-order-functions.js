var itemsThatAreCans = (groceryItem) => {
    if(groceryItem.unit == "can")
        return groceryItem.name;
}

var result = groceryCart.filter(itemsThatAreCans)
console.log(result);

//-----------------------------------------

var myNumbersArray = [0,10,15,20,25,30];
var addNumbers = function(accumulator, item){
    return accumulator += item;
}

var result = myNumbersArray.reduce(addNumbers, 0)
console.log(result);

var multiplier = function(accumulator, item){
    return accumulator *= item;

}

var result2 = myNumbersArray.reduce(multiplier, 0);
console.log(result2)