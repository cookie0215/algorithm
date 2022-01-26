const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split(' ');

const n = Number(input[0])

let result = 0;

for (let i = 1; i <= n; i++) {
  result = result + i
}

console.log(result)
