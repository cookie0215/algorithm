const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
const len = Number(input[0]);

let result = '';

for (let i = 1; i <= len; i++) {
  let [a, b] = input[i].split(' ')
  result += Number(a) + Number(b) + '\n'
}
console.log(result);