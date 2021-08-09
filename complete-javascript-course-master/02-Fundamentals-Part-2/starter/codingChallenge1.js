'use strict';

const calcAverage = (score1,score2,score3) => (score1+score2+score3)/3;


// const dAv = calcAverage(44,23,71);
// const kAv = calcAverage(65,54,49);

const dAv = calcAverage(85,54,41);
const kAv = calcAverage(23,34,27);

const checkWinner = (dAv,kAv) => {

    if ((dAv * 2) > kAv){
        console.log(`Dolphins win (${dAv} vs ${kAv}).`);
    } else if ((kAv * 2) > dAv){
        console.log(`Dolphins win (${kAv} vs ${dAv}).`);
    } else {
        console.log(`No team wins!`);
    }
}

checkWinner(dAv,kAv);

