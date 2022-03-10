let marksWeight = 78;
let marksHeight = 1.69;

let johnsWeight = 92;
let johnsHeight = 1.95;


let bmiMarks = marksWeight / marksHeight ** 2;
console.log(`Mark has ${bmiMarks}`);
let bmiJohns = johnsWeight / johnsHeight ** 2;
console.log(`John has ${bmiJohns}`);

let markHigherBMI;

if(bmiJohns > bmiMarks) {
    markHigherBMI = true;
    console.log("John's BMI is higher than Mark's");
    console.log(markHigherBMI);
} else {
    markHigherBMI = false;
    console.log("Marks's BMI is higher than John's");
    console.log(markHigherBMI);
}

