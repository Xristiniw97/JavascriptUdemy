// PRWTH PERIPTWSH
let marksHeight = 1.69;
let johnsHeight = 1.95;

let marksMass = 78;
let johnsMass = 92;

// BMI MARK 
let bmiMark = marksMass / (marksHeight * marksHeight);

// BMI JOHN 
let bmiJohn = johnsMass / (johnsHeight * johnsHeight);

if (bmiMark > bmiJohn){
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

// DEUTERH PERIPTWSH 
let marksHeight2 = 1.88;
let johnsHeight2 = 1.76;

let marksMass2 = 95;
let johnsMass2 = 85;

// BMI MARK 
let bmiMark2 = marksMass2 / (marksHeight2 * marksHeight2);

// BMI JOHN 
let bmiJohn2 = johnsMass2 / (johnsHeight2 * johnsHeight2);

if (bmiMark2 > bmiJohn2){
    console.log(`Mark's BMI (${bmiMark2}) is higher than John's (${bmiJohn2})!`);
} else {
    console.log(`John's BMI (${bmiJohn2}) is higher than Mark's (${bmiMark2})!`);
}
