var o = {
  v1:'v1',
  v2:'v2',
  f1:function(){
    console.log(this.v1);
  },
  f2:function(){
    console.log(this.v2);
  }
}



o.f1();
o.f2();

// 협업 중 위에 만든 함수 이름으로 다른 사람이 만들었을 경우 엉뚱하게 흘러감
// 이런 상황에 도움이 되는 것 == 객체
// 멤버로써 추가
