// objects

// object literal syntax 
// const jonas = {
//     //properties
//     firstName: 'Christina',
//     lastName: 'Nikiforou',
//     birthYear: 1997,
//     job: 'Web developer',
//     friends: ['Maria','Anna','Eirini'],
//     hasDriverLicense: true,

//     // calcAge: function (birthYear) {
//     //     return 2022 - birthYear;
//     // }
    
//     // calcAge: function () {
//     //     return 2022 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2022 - this.birthYear
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()} - year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license. `
//     }

// };

// getting a property of an object 

// jonas.firstName;
// jonas['firstName']
// px
// const nameKey = 'Name';
// jonas['first' + nameKey]; -> jonas.firstName
// jonas['last' + nameKey]; -> jonas.lastName

// px2 
// const insterestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job and friends');
// console.log(jonas[insterestedIn]); oxi jonas.insterestedIn giati den gnwrizei to property intrestedin
// if (jonas[insterestedIn]) {
//     console.log(jonas[insterestedIn]);
// } else {
//     console.log('Wrong request! Choose between firstName,lastName,age,job and friends');
// }

// add property to an Object 
// jonas.location = 'Heraklion Crete';
// jonas['insta'] = '@christina_nikiforou';

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);

// object function 
// console.log(jonas.calcAge(1997));
// console.log(jonas['calcAge'](1997));
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(`${jonas.firstName} is a ${this.age}-year old ${jonas.job}`)
// console.log(jonas.getSummary());



//loops

//for loop
// for loop keeps running while condition is TRUE
// for (let rep=1; rep <=10; rep++){
//     console.log(`Lifting weight repetition ${rep} 🦾`);
// }

const jonas = [
    'Christina',
    'Nikiforou',
    1997,
    'Web developer',
    ['Maria','Anna','Eirini'],
    true
];

// const types = [];


// console.log('----ONLY STRINGS----')
// for (let rep=0; rep <jonas.length; rep++){
//     // reading from jonas array 
  
//     if(typeof jonas[rep] !== 'string') continue;
        
//     console.log(jonas[rep], typeof jonas[rep]);
    
//     // filling types array
//     // types[i] = typeof jonas[i];
//     // types.push(typeof jonas[rep]);
// }

// console.log('----BREAK WITH NUMBER----')
// for (let rep=0; rep <jonas.length; rep++){
//     // reading from jonas array 
  
//     if(typeof jonas[rep] === 'number') break;
        
//     console.log(jonas[rep], typeof jonas[rep]);
    
//     // filling types array
//     // types[i] = typeof jonas[i];
//     // types.push(typeof jonas[rep]);
// }

// console.log(types);

// const years = [1997,2007,2017,2022];
// const ages = [];

// for (let index = 0; index < years.length; index++) {
//     ages.push(2037- years[index]);
// }
// console.log(ages);

//backward for loop
// for (let index = jonas.length-1; index >= 0; index--) {
//    console.log(jonas[index]);
// }

// //for loop in for loop 
// for (let index = 1; index <= 4; index++) {
//     // console.log(`Starting exercise ${index}`);
//     for(let i=1; i<=7; i++){
//         console.log(`Starting exercise ${index} repeat ${i}`);
//     }
    
// }

// WHILE LOOP 
// let rep = 1;
// while (rep<=10) {
//     console.log(`Starting exercise ${rep}`);
//     rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !==6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice===6) console.log('Loop is about to end...');
}

