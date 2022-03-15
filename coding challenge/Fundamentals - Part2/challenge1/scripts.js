const calcAverage = (a,b,c) => (a+b+c)/3;
let dolphinAverage = calcAverage(23,34,27);
let koalasAverage = calcAverage(85,54,41);
console.log(dolphinAverage,koalasAverage);

const checkWinner = function(x,y){

    if (x >= (2*y)){
        console.log(`Dolphins win (${x} vs ${y})`)
    } else if(y >= (2*dolphinAverage)) {
        console.log(`Koalas win (${y} vs ${x})`)
    } else {
        console.log(`No one wins`)
    }
}

checkWinner(dolphinAverage,koalasAverage);

