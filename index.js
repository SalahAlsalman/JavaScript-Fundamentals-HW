//Question 1: Part1: Calculate area of a rectangle
console.log("\nQuestion 1: Part1 : \nCalculate area of a rectangle\n");
let length = 5;
let width = 3;
let area = length * width;
console.log(`The area of the rectangle is: ${area}`);
console.log("\n***********************");

//Question 1: Part 2: The Temperature Converter
console.log("\nQuestion 1: Part 2 : \n(The Temperature Converter)\n");
let celsiusTemperature = 43
//(0°C × 9/5) + 32 = 32°F
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32
console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F\n`);
//(32°F − 32) × 5/9 = 0°C
celsiusTemperature = (fahrenheitTemperature - 32) * 5/9;
console.log(`${fahrenheitTemperature}°F is ${celsiusTemperature}°C`);

console.log("\n***********************");

//Question 2: Part 1: Numbers summations
console.log("\nQuestion 2: Part 1 : \n(Numbers summations)\n");
let Numbers = [23,54,32,87,47]
let total = 0;
for(let i =0; i < Numbers.length; i++) {
    total += Numbers[i];
}
console.log(`Total is: ${total}`);

console.log("\n***********************");

//Question 2: Part 2: Maximum number
console.log("\nQuestion 2: Part 2 : \n(Maximum number)\n");
let q2arr = [16,4,2,0,19,6];
let max = q2arr[0];
for(let i =0; i<q2arr.length; i ++) {
    if(max < q2arr[i]){
        max = q2arr[i];
    }
}
console.log(`Maximum number of this list is: ${max}`);
console.log("\n***********************");

//Question 2: Part 3: Reverse Array
console.log("\nQuestion 2: Part 3 : \n(Reverse Array)\n");
let q2p3arr = [1,2,3,4,5,6,7,8,9,10];
let resultOfq2p3 = '';
for(let i = q2p3arr.length-1; i>=0; i--) {
    resultOfq2p3 += q2p3arr[i] + ' ';
}
console.log(resultOfq2p3);
console.log("\n***********************");

//Question 3: Nested for loop
console.log("\nQuestion 3: Nested for loop\n");
let starRes = ''
let pattern = 4
for(let i = 0; i <= pattern; i++){
    for(let j=0; j<i;j++){
        starRes += '*'
    }
    starRes += '\n'
}
console.log(starRes);
console.log("\n***********************");