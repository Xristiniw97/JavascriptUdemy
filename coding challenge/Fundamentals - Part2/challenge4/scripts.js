const bills = [22,295,176,440,37,105,10,1100,86,52];
const tips = [];
const totals = [];

const calcTip = (a) => {return (a> 50 && a<300) ? a*0.15 : a*0.2}; 

for (let index = 0; index < bills.length; index++) {
    tips.push(calcTip(bills[index]));
    totals.push(calcTip(bills[index]) + bills[index])
}

for (let index = 0; index < tips.length; index++) {
    console.log(tips[index],totals[index]);
}   

const arr = [22,295,176,440,37,105,10,1100,86,52];

const calcAverage = function (totals) {
    let sum = 0;
    for (let index = 0; index < totals.length; index++) {
        sum += totals[index];   
    }
    return sum/arr.length;
}

console.log(calcAverage(totals));









