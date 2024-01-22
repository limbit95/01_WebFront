// 변수 선언

// document = HTML 문서 내에서

// get : 얻다
// Element : HTML 요소
// ById : 아이디가 일치하는
const number1 = document.getElementById("input1");

const number2 = document.getElementById("input2");

const result = document.getElementById("calcResult");

console.log(result);

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
    // input요소.value : input 요소에 작성된 값 얻어오기
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log(value1, value2);

    console.log("두 수의 함 :", value1 + value2);

    // -> html의 input 요소에 작성된 값은 무조건 문자열 형태라서
    //    더했을 때 이어쓰기 되는 문제가 발생함

    // [해결방법]
    // 문자열(string)을 숫자(number)으로 변경하는 코드를 수행
    
    // 숫자만 작성된 문자열("123")을
    // 진짜 숫자(123)로 바꾸는 방법
    // -> Number("123") --> 123

    console.log("두 수의 함 :", value1 + value2);

    /*
    두 수의 함을
    아이디가 "calcResult"인 요소(result)의
    내부 글자(innerText : HTML 요소 내용)로 대입하기
    */

    result.innerText = value1 + value2;
}

function minusFn() {
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) - Number (value2);
    // 위에 value1, value2 함수 없애고 아래와 같은 코드로도 기능 수행 가능
    // result.innerText = Number(number1.value) - Number (number2.value);
}

function multiFn() {
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) * Number (value2);
}

function divFn() {
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) / Number (value2);
}

function modFn() {
    const value1 = number1.value;
    const value2 = number2.value;

    result.innerText = Number(value1) % Number (value2);
}

// -------------------------------------------------------

// 증가 / 감소 연산자 (++, --)

// (주의) const로 선언하면 값을 증가 / 감소시킬 수 없다 -> const는 상수이기 때문에
// 변경 가능한 let이나 var로 선언해주어야 한다
let cnt = 0;

// 문서 내에서 id가 "result2"인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

function increase() {
    cnt++;
    result2.innerText = cnt;
}

function decrease() {
    cnt--;
    result2.innerText = cnt;
}

// // 나 혼자 풀이
// function decrease() {
//     result2.innerText = --cnt;
// }

// function increase() {
//     result2.innerText = ++cnt;
// }

// 전위, 후위 연산 확인하기
function check() {
    // 함수 밖, 안은 구분되는 공간으로 생각하면 된다
    // 밖에 작성한 변수 cnt, 안에 작성한 cnt는 서로 다른 변수(동명이인) 
    let cnt = 100;

    // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
    // 코드를 하나하나 실행하는 것들 전부 연산이라 한다.

    // 전위 연산(++cnt, --cnt) 확인
    // -> 다른 연산보다 먼저 수행
    // -> cnt 값이 먼저 증가, 감소된 후 console에 출력

    console.log("++cnt :", ++cnt)
    console.log("++cnt :", ++cnt)
    console.log("--cnt :", --cnt)

    // 후위 연산(cnt++, cnt--) 확인
    // -> 다른 연산이 다 끝나고 마지막에 수행

    cnt = 50;

    console.log("cnt++ :", cnt++) // 50
    console.log("후위 연산 후 cnt :", cnt) // 51
    console.log("cnt++ :", cnt++) // 51
    console.log("후위 연산 후 cnt :", cnt) // 52
    console.log("cnt-- :", cnt--) // 52
    console.log("후위 연산 후 cnt :", cnt) // 51

    let a = 10;
    let b = 5;
    let c = ++a * b--;

    // a = 11
    // b = 4;
    // c = 55;

    console.log("a :", a)
    console.log("b :", b)
    console.log("c :", c)
}