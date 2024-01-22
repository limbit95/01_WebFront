// console.log(값)
// 브라우저 콘솔(개발자 도구(F12)에서 console 창)에 괄호() 내부의 값을 출력(기록)

console.log(1234);
console.log("문자열은 양쪽에 쌍따옴표를 작성해야 한다!");
console.log('JS는 홑따옴표도 문자열로 취급한다!');

// ---------------------------------------------------------------

// 변수 선언
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것

// 작성법 : 변수종류 변수명;
var number1;

// 변수에 값 대입
// 선언된 변수에 값을 대입하는 것
// 작성볍 : 변수명 = 값;
number1 = 10;

// 콘솔에 number1 값 출력하기
console.log(number1);

// 변수 선언 + 대입
var number2 = 20;

console.log(number2);

// number1, number2의 합 출력하기
console.log(number1 + number2);

// 변수에 대입한 값 변경하기
number1 = 300;
number2 = 400;

// 변경된 변수의 값 출력
// 1) 문자열 + 문자열?숫자/변수 == 이어쓰기
console.log("number1의 값 : " + number1 + ", number2의 값 : " + number2);
console.log("100" + 100);

// 2) 괄호 내부에 , 를 작성하여 각각의 값을 독립적으로 출력
console.log("number1 : ", number1, "/ number2 : ", number2);

// ---------------------------------------------------------------

// var, let, const 의 차이점

// 1. var
var menu = "삼겹살"; // 변수 최초 선언
console.log(menu);
var menu = "초밥"; // 똑같은 변수명으로 재선언 (가능) / 문제 : 이전에 선언 해놓은 변수 쓸 수 없게 됨
console.log(menu);
menu = "갈비"; // 최초 선언한 변수명에 값만 재할당 가능
console.log(menu);

// ---------------------------------------------------------------

// 2. let : 변수, var의 변수명 중복 문제 해결
let number3 = 25; // 최초 선언
console.log(number3);
// let number3 = 500; // 같은 변수명으로 재선언 불가능
number3 = 500;
console.log(number3); // 최초 선언한 변수명에 값만 재할당 가능

// ---------------------------------------------------------------

// 3. const : 상수, constant의 줄임말, 항[상] 같은 [수]
// 값이 최초 대입되면 새로운 값을 대입할 수 없은
const PI = 3.141592; // 최초 선언
console.log(PI); 
// const PI = 1.23; // 재선언 불가능
// PI = 1.23; // 재할당 불가능
// 오류 문구 : Uncaught TypeError: Assignment to constant variable.
//             상수에 새로운 값을 대입할 수 없는데, 새로운 값이 대입되었다.

// ---------------------------------------------------------------

// 블록 레벨 (let, const)
let foo = 123; // 전역 변수
{
    let foo = 567; // 지역 변수
    let bar = 456; // 지역 변수
}

console.log(foo); // 전역 변수를 불러오므로 123 값의 foo를 호출
// console.log(bar); // Uncaught ReferenceError: bar is not defined

// 함수 레벨 (var)
var test = 123; // 전역 변수
console.log(test);
{
    var test = 456; // 전역 변수로 인식, 함수 내부가 아닌 블록 내부에서 재선언했기에
}
console.log(test); 

// ---------------------------------------------------------------

// JS 자료형 확인하기
// typeof 연산자 : 변수 / 값의 자료형을 출력하는 연산자

// undefined : 정의되지 않은 변수 / 값이 아직 대입되지 않았다
let undef; // 변수 선언
console.log("undef : ",undef);
console.log("undef : ",undef, "/ 자료형 :", typeof undef); // Javascript 식
console.log(typeof undef); // Javascript 식
console.log(typeof(undef)); // Java식

// string(문자열) : "" 또는 '' 내부에 작성된 값
const name = "홍길동";
console.log("name :", name, "/ 자료형 :", typeof name);

const phone = '01012341234';
console.log("name :", phone, "/ 자료형 :", typeof phone);

const gender = 'M'; // 한 글자만 작성해도 문자열(string)
console.log("gender :", gender, "/ 자료형 :", typeof gender);

// number(정수, 실수, 양수, 음수, 0 등 모든 숫자)
const age = 25;
const height = 178.9;
console.log("age :", age, "/ 자료형 :", typeof age);
console.log("height :", height, "/ 자료형 :", typeof height);

// boolean (논리 값 true / false)
const isTrue = true;
console.log("isTrue :", isTrue, "/ 자료형 :", typeof isTrue);
const isFalse = true;
console.log("isFalse :", isFalse, "/ 자료형 :", typeof isFalse);

// object (객체) : 값을 여러 개 저장할 수 있는 형태

// 1) 배열(Array) : 여러 값이 나열되어 있는 것의 묶음
const numbers = [10, 20, 30];
console.log("numbers :", numbers);
// 배열 타입 확인
console.log("numbers :", numbers, "/ 자료형 :", typeof numbers); 
// 배열의 요소 타입 확인 방법
console.log("numbers 배열 값 중 0번째 :", numbers[0]);
console.log("numbers 배열 값 중 0번째 :", numbers[0], "/ numbers 배열 값 중 0번째 자료형 :", typeof numbers[0]);

// JS 객체 : 값을 Key : Value (Map) 형식으로 여러 개 저장하는 형태
//           -> {Key : Value, K:V, K:V ...}
// K(Key) : 값을 구분하는 이름(변수명 비슷)
// V(Value) : K에 대응되는 값 (변수에 대입되는 값 비슷)

const user = {id : "user01", pw : "pass01", userName : "홍길동"};
console.log("user :", user);

// 객체에 존재하는 값 하나씩 얻어오기
// 방법 1 : 변수명['key']
console.log("user['id'] :", user['id']); 
console.log("user['pw'] :", user['pw']); 
console.log("use['userName']r :", user['userName']); 
console.log("user['userName']의 타입은 :", typeof user['userName']);

// 방법 2 : 변수명.key
console.log("user.id :", user.id); 
console.log("user.pw :", user.pw); 
console.log("user.userName :", user.userName); 
console.log("user.userName의 타입은 :", typeof user.userName);

// 함수(function)

// 작성법
// const 변수명 = function() {};
// (변수명 == 함수명)

const sumFn = function(a, b) {return a + b;};

console.log(typeof sumFn); // function
console.log(sumFn(3, 5));  

//  