let num = 78;
let magicNumbers = [];

let temp = num;
while (temp > 9) {
    let sum = 0;
    while (temp > 0) {
        sum += temp % 10;
        temp = Math.floor(temp / 10);
    }
    temp = sum;
}

if (temp === 1) {
    console.log(num + " is a magic number.");
} else {
    console.log(num + " is not a magic number.");
}