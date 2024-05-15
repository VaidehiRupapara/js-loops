let rows = 5;
let counter = 1;

for (let i = 1; i <= rows; i++) {
    let rowPattern = "";
    for (let j = 1; j <= i; j++) {
        rowPattern += counter + " ";
        counter++;
    }
    console.log(rowPattern);
}