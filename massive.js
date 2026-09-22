function massiveNumbers(){
    const numbers = [4, 8, 15, 16, 23, 42];
    const greaterThan10 = [];
    sumNumbers = 0;
    best = 0;
    for(let i = 0; i < numbers.length; i++){
        now = numbers[i];
        sumNumbers += numbers[i];
        if( now > 10){
            greaterThan10.push(now);
        }
        if(now > best)
        {
            best = now;
        }
    }
    console.log(sumNumbers, best, greaterThan10);
}