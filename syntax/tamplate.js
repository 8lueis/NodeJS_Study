var name = 'Lorem'

// var letter = name + "Ipsum is simply dummy text of the printing and typesetting industry." +name+" Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

// 줄 바꿈 문자 안에서 \n\ 사용 -> 불편

//tamplate literal

// 리터럴 : 정보를 표현하는 기호, 방법
var a = 1; //숫자를 표현하는 리터럴
var a2 = '1'; //문저룰 표현하는 리터럴

var letter = `${name} Ipsum is simply dummy text of the printing and typesetting industry." ${name}" Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

console.log(letter);
