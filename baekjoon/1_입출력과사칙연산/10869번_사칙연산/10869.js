let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const line = input[0].split(' ');
// console.log(line)

const a = parseInt(line[0]);
const b = parseInt(line[1]);

console.log(a, typeof a);
console.log(b, typeof b);


console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);