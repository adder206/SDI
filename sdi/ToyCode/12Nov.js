function reverseInteger(number) { 
    let newNumber=0;
    while (number!==0){
        newNumber=newNumber*10+number%10;
        if (number>0){
          number=Math.floor(number/10);
        }else{
          number=Math.ceil(number/10);
        }
    }
    return newNumber;