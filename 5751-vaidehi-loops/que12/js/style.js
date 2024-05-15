let sum = 0;

// Loop through numbers from 1 to 10 (squares from 1 to 100)
for (let i = 1; i <= 10; i++) {
    // Calculate the square of the current number
    let square = i * i;
    // Add the square to the sum
    sum += square;
}
console.log(sum);