let tip;

let bill= 275;

tip = (bill> 50 && bill<300) ? bill*0.15 : bill*0.2; 
let sum = tip + bill;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${sum}`);