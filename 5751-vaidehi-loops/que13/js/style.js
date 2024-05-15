const size = 5;

// Outer loop to iterate over rows
for (let i = 1; i <= size; i++) {
    // Inner loop to print numbers
    for (let j = size; j >= size - i + 1; j--) {
        document.write(j + " ");
    }
    document.write("<br>");
}