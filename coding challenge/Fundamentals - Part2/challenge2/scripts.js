
let bill= 100;

let calcTip = (a) => {return (a> 50 && a<300) ? a*0.15 : a*0.2}; 
let bills = [calcTip(125),calcTip(555),calcTip(44)];
let total = [calcTip(125)+125,calcTip(555)+555,calcTip(44)+44];

console.log(calcTip(bill));
console.log(bills);
console.log(total);



