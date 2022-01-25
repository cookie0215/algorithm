let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().split(' ');

let hour = parseInt(input[0]);
let min = parseInt(input[1]);

min = min - 45;

if (min < 0) {
  hour--;
  min = min + 60;

  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour, min);