
const number = 175;


let temp = number;
let count = 0;
while (temp > 0) {
    count++;
    temp = Math.floor(temp / 10);
}

let sum = 0;
temp = number;
while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, count);
    temp = Math.floor(temp / 10);
    count--;
}

if (sum === number) {
    console.log(number + " is a Disarium number.");
} else {
    console.log(number + " is not a Disarium number.");
}