let averageDolphins = (96+108+89)/3;

console.log(`The average of Dolphins is ${averageDolphins}`);

let averageKoalas = (88+91+110)/3;

console.log(`The average of Dolphins is ${averageKoalas}`);

if (averageDolphins > averageKoalas) {
    console.log(`The Dolphins is the winner with ${averageDolphins} average.`);
} else if (averageDolphins < averageKoalas){
    console.log(`The Koalas is the winner with ${averageKoalas} average.`);
} else {
    console.log(`There is no winner, the teams have the same average`);
}


let averageDolphins1 = (97+112+80)/3;

console.log(`The average of Dolphins is ${averageDolphins1}`);

let averageKoalas1 = (109+95+80)/3;

console.log(`The average of Dolphins is ${averageKoalas1}`);


if (averageDolphins1 > averageKoalas1 && averageDolphins1 >= 100) {
    console.log(`The Dolphins is the winner with ${averageDolphins1} average.`);
} else if (averageDolphins1 < averageKoalas1 && averageKoalas1 >= 100){
    console.log(`The Koalas is the winner with ${averageKoalas1} average.`);
} else if (averageDolphins1 === averageKoalas1 && averageKoalas1 >= 100 && averageDolphins1 >=100) {
    console.log(`Two winners`);
} else {
    console.log(`No winners the avera is under the 100. Dolphins are ${averageDolphins1} and Koalas are ${averageKoalas1}.`);
}

