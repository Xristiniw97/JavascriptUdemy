/*let js = "amazing";
if (js === "amazing") alert("JS is amazing!!");

console.log("Xristina");
console.log(10+14);

let firstName = "Christina";
console.log(firstName);

let age;
age = 10 + 14;
console.log(age);

console.log(typeof age);
//single comment
/*
multiline comment

*/

/*
// Mathematical operators 
const ageChristinas = 2037 - 1997;
console.log(ageChristinas);
console.log(ageChristinas * 2, ageChristinas / 2, 2 ** 2);

const firstname = "Christina";
const lastName = 'Nikiforou';
// concat 
console.log(firstname + " " + lastName);

// Assignment operators
// = equal
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4;  // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1

// Comparison operators 
// > < <= >= !=

// STRINGS & Template Literals 
const firstName = "Christina";
const job = "Front End Developer";
const birthYear = 1997;
const year = 2021;

// simple string 
const christinas = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(christinas);

// the same with literal 
const christinasNew = `I'm ${firstName}, a ${year-birthYear} years old ${job}!`;
console.log(christinasNew);

// simple string 
console.log('String with\nmultiple\nlines');
// the same with literal 
console.log(`String
multiple
lines`);*/

/*
//if else
const age = 15;

if (age >= 18){
    console.log(`Sarah can start driving license 🚗.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :).`)
}*/

/*
// type conversion
const inputYear = "1997";
// string se number 
console.log(Number(inputYear), inputYear);

console.log(Number(inputYear) + 24);

// bgazei apotelesma NaN 
console.log(Number('Christina'));
//number se string
console.log(String(23),23);

// type coercion 
console.log('I am ' + 24 + ' years old')
console.log('23' - '10' - 3); //10
console.log('23' + '10' + 3); //23103
console.log('23' * '2'); //46

console.log(2+3+4+'5'); // 2+3+4 = 9 ara '9' + '5' = '95'
console.log('10'-'4'-'3'-2+'5'); //'10'-'4'-'3' = 3 - 2 = 1 ara '1' + '5' = '15'
console.log('10'-'4'-'3'); // 3
*/

/*
//5 falsy values: 0,'',undefined,null,Nan
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Christina'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
// an to money einai true kai afou exei to 100 einai true
//an to money eixe to 0 tote tha itan false
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log("You should get a job!");
}

let height;
if (height) {
    console.log("Height is defined!");
} else {
    console.log("Height is undefined!");
}

// 18 === 18 true
// 18 === 19 false
// '18' == 18 true (loose equal)
// '18' === 18 false  (strict equal)
// != different 

const number = Number(prompt("What's your favourite number?"));
console.log(number);
*/

/*
//Switch Statement

const day = prompt("Give me a day")
console.log(day);


// switch(day){
//     case 'monday':
//         console.log("Hello It's " + day + "!");
//         // break;
//     case 'tuesday':
//         console.log("Hello It's " + day + "!");
//         break;
//     case 'wednesday':
//         console.log("Hello It's " + day + "!");
//         break;
//     case 'thursday':
//         console.log("Hello It's " + day + "!");
//         break;
//     case 'friday':
//         console.log("Hello It's " + day + "!");
//         break;
//     case 'saturday':
//         console.log("Hello It's " + day + "!");
//         break;
//     case 'sunday':
//         console.log("Hello It's " + day + "!");
//         break;
//     default: 
//         console.log("I don't know what day is");
//         break;
    
// }
// case 'friday': 
// case 'saturday':
// case 'sunday':
//     console...

// πρέπει σε κάθε case να βάζουμε στο τέλος ένα break.


// metatroph switch se if 
if (day === "monday") {
    console.log("Plan course structure");
    console.log('Go to coding');
} else if ( day === "tuesday") {
    console.log('Prepare theory videos');
} else if (day === "friday") {
    console.log("Record videos");
} else if ((day === "wednesday") || (day === "thursday")){
    console.log("Write code examples");
} else if ((day === "saturday") || (day === "sunday")) {
    console.log("Enjoy the weekend");
} else {
    console.log("Not a valid day!");
}
*/

// Conditional ternary operator 
const age = 17;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink milk 🥛");