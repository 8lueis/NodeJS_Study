// function a(){
//   console.log('A');
// }

// 함수 이름 x -> 익명 함수
// function(){
//   console.log('A');
// }
var a = function(){
  console.log('A');
}
// 변수 뒤에 함수 호출하는 걸 통해서 a라는 변수가 담고 있는 함수를 호출할 수 있따
// a();

function slowfunc(callback){
  callback();
}
slowfunc(a); // callback 파라미터는 a가 가리키는 함수를 갖게 됨
// -> 그 함수가 슬행이 될 것 
