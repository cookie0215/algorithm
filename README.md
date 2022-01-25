# algorithm
백준, 프로그래머스 알고리즘 연습 공간입니다.

<br />

## Baekjoon 
[백준 코딩테스트 사이트](https://www.acmicpc.net/) 
- BOJ에서 Node.js의 입출력을 통해 문제를 풀려면 `fs모듈` 또는 `readline` 방식으로 처리해야 한다.
- https://replit.com/ 에서 테스트할 수 있다.

<br />

### fs모듈 방식
readline 방식을 사용할 때 시간초과되는 경우가 있기 때문에,
주로 fs모듈 방식을 사용한다.  
(fs가 좀 더 효율적이고, 빠르다고 하는데... 간혹 런타임에러가 발생하는 문제들이 있어서 readline을 쓰기도 한다...!)

```javascript
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
```
→ 백준에 작성한 코드를 제출할 때, 반드시 `readFileSync()`안의 파일명을 `/dev/stdin`으로 바꿔줘야 런타임에러없이 동작한다!

→ 만약 한 줄에 값이 2개 이상 있는 경우, `.split('\n')`부분을 `.split(' ');` 이렇게 처리해서 작성해줘야 한다!

<br />
<br />

### readline 방식
*fs모듈로 풀었을 때 "런타임 에러 (EACCES)" 형태의 접근권한 오류가 발생한다면, realine 방식으로 풀기!*

<br />

***[소스 코드 1줄 입력받을 때]***

```javascript
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  rl.close();   // 한줄 입력 받은 뒤 종료
}).on("close", function() {
  process.exit();
});
```
→ 매개변수 line에 할당되는 것이 입력값이며, 문자열로 할당
  그리고 한줄을 입력 받은 뒤 종료 될 수 있도록 `rl.close();`를 사용하는 것이다.   

<br />

***[소스 코드 여러줄 입력받을 때]***    

```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line){
  // 입력받는 각 줄의 값을 input 배열에 저장
  input.push(line); 
}).on('close', function(){
  console.log(input);
  process.exit();
})
```
→ 여러줄을 입력 받을 때 `rl.close()`를 사용하지 않았기 때문에 값을 계속 입력할 수 있다.    
  로컬에서 입력을 중지하려면 값을 입력 한 후, `ctrl + d`로 입력을 종료할 수 있다!

<br />

***[한 줄에 여러 값을 입력받을 때]***

```javascript
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function(line){
  // 문자열을 끊어 정수로 변환후 배열로 반환
    input.push(line.split(' ').map((el) => parseInt(el))); 
}).on('close', function(){
    console.log(input);
    process.exit();
})
```

<br />
<br />

### VSC에서 fs모듈 사용 방법

1. `npm install fs` 설치

2. 임의의 `파일명.txt` 생성   
  : 입력값을 넣어놓을 공간임!

3. 실행시킬 코드를 작성할 js파일 생성

4. 작성된 코드를 vsc 터미널에서 실행시키려면 `node 현재작성한js파일경로`를 입력해준다.      
  파일경로 정확하게 입력하지 않으면 에러 발생함    
  (ex. node ./1_입출력과사칙연산/10869번/10869.js)   


<br />
<br />

## Programmers

<br />