'use strict';


//function struct
// simple function declaration
function logger(){
    console.log('My name is Christina');
}

//function call
logger();
logger();
logger();

// parameter functions 
function fruitProcessor(apples,oranges){
    
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; 
}

const myJuice = fruitProcessor(3,2);
console.log(myJuice);
console.log(fruitProcessor(3,2));

// CALLING / RUNNING / INVOKING FUNCTION seira


// expresson function 
const myJuice2 = function fruitProcessor(apples,oranges){
    
    return `Juice with ${apples} apples and ${oranges} oranges.`; 
}

console.log(myJuice2(4,4));

// Sta function declaration mporw na kalesw ta functions prin apo 
// thn sunarthsh enw sta function expressions den mporw!! 

//Function expression
const calcAge1 = function (birthYeah) {
    return 2021 - birthYeah;
}


//Arrow function
const calcAge2 = birthYeah => 2021 - birthYeah;
console.log(calcAge2(1997));


const myJuice3 = (apples,oranges) => {
    console.log(apples,oranges);
    return `Juice with ${apples} apples and ${oranges} oranges.`; 
}

console.log(myJuice3(5,5));


// Function in function 
const cutPicies = function (fruit) {
    return fruit * 4;
}

const fruitProcessor2 = (apples,oranges) => {
    const cuttesApples = cutPicies(apples);
    const cuttedOranges = cutPicies(oranges);

    return `Juice with ${cuttesApples} apples and ${cuttedOranges} oranges.`; 
}

console.log(fruitProcessor2(6,6));
