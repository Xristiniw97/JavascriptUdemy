// const bill = 275;
const bill = 430;
let tip;

(bill>= 50 && bill <=300) ? console.log(`The bill was ${bill},the tip was ${bill*0.15}, and the total value ${bill+ (bill*0.15)}`) : console.log(`The bill was ${bill},the tip was ${bill*0.20}, and the total value ${bill+ (bill*0.20)}`);