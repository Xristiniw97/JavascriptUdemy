/*const dScore1 = 96;
const dScore2 = 108;
const dScore3 = 89;

const kScore1 = 88;
const kScore2 = 91;
const kScore3 = 110;

const dAverage = (dScore1+dScore2+dScore3) / 3;
const kAverage = (kScore1+kScore2+kScore3) / 3;

console.log('dAverage: ' + dAverage + ' kAverage: ' + kAverage);

if(dAverage>kAverage){
    console.log("The dolphins are the winner!");
} else if (kAverage === dAverage){
    console.log("The winner is anyone!");
} else {
    console.log("The koalas are the winner!");
}*/

//Data bonus 1
const dScore1 = 97;
const dScore2 = 112;
const dScore3 = 101;

const kScore1 = 109;
const kScore2 = 95;
const kScore3 = 123;

const dAverage = (dScore1+dScore2+dScore3) / 3;
const kAverage = (kScore1+kScore2+kScore3) / 3;

console.log('dAverage: ' + dAverage + ' kAverage: ' + kAverage);

if(dAverage>kAverage && dAverage > 100){
    console.log("The dolphins are the winner!");
} else if( dAverage>kAverage && dAverage < 100){
    console.log("The dolphins are !");  
}else if (kAverage === dAverage){
    console.log("The winner is anyone!");
} else {
    console.log("The koalas are the winner!");
}






