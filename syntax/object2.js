var f = function f1(){
  console.log(1+1);
  console.log(1+2);
}

// 변수에 넣을 수 있는 것 == 값
// 함수도 값으로써 쓸 수 있다

var a = [f];
a[0]();

var o = {
  func:f
}
o.func();
