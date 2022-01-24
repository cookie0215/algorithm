# algorithm
백준, 프로그래머스 알고리즘 연습 공간입니다.

<br />

## Baekjoon
- BOJ에서 Node.js의 입출력을 통해 문제를 풀려면 `fs모듈` 방식으로 처리해야 한다.
- https://replit.com/ 에서 테스트할 수 있다.

<br />

### fs모듈 방식

```javascript
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
```
→ 백준에 작성한 코드를 제출할 때, 반드시 `readFileSync()`안의 파일명을 `/dev/stdin`으로 바꿔줘야 런타임에러없이 동작한다!

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