const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');

const a = parseInt(input[0])
// const b = parseInt(input[1])
// console.log(a , b)

const b = input[1];

function solution() {
  for (let i = b.length - 1; i >= 0; i--) {
    let c = a * b[i]
    console.log(c);
  }
  console.log(a * parseInt(b))
}

solution();

