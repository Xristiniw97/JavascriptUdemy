const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function(){
        return (this.mass / (this.height**2));
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,

    calcBMI: function(){
        return (this.mass / (this.height**2));
    }
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.calcBMI() > john.calcBMI()) {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's (${john.calcBMI()})!`);
} else if((mark.calcBMI() < john.calcBMI())) {
    console.log(`Jonh's BMI (${john.calcBMI()}) is higher than Marks's (${mark.calcBMI()})!`);
} else {
    console.log(`They have the same BMI!`);
}



