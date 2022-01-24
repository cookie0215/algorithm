let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split('\n');

const line = input[0].split(' ');
console.log(line)

const A = parseInt(line[0]);
const B = parseInt(line[1]);
const C = parseInt(line[2]);

console.log((A + B) % C)
console.log(((A % C) + (B % C)) % C)
console.log((A * B) % C)
console.log(((A % C) * (B % C)) % C)