const temperatures = [17,21,23];
const temperatures2 = [12,5,-5,0,4];

const printForecast = function(arr) {
    let str = '';
    for(let i=0; i<arr.length; i++){
        str += ` ${arr[i]}℃ in ${i+1} days ... `;
     
    }

    console.log(str);
}

console.log("===TEMP1===");
printForecast(temperatures);
console.log("===TEMP2===");
printForecast(temperatures2);

