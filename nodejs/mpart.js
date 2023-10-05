var M = {
  v:'v',
  f:function(){
    console.log(this.v);
  }
}

// 약속된 ㄱㅐㄱ체
// M 기능(객체)을 바깥에서 사용할 수 있도록 export 하겠다
module.exports = M;
