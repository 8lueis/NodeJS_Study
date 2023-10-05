var fs = require('fs');

// readFileSync

// console.log('a'); // 실행 순서 확인하기
// var result = fs.readFileSync('syntax/sample.txt', 'utf8')
// console.log(result);
// console.log('c');

console.log('a'); // 실행 순서 확인하기
fs.readFile('syntax/sample.txt', 'utf8', function(err, result){
  console.log(result);
});
console.log('c');
