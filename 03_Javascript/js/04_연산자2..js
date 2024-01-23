const cv1 = document.getElementById("compareValue1"); // input
const cv2 = document.getElementById("compareValue2"); // input
const result1 = document.getElementById("result1") // span

// 궁금한 점 전역 변수로 result1을 선언을 꼭 해야하는지?

// // 두 수가 같은지 확인
// function compareFn1() {
//     if(cv1.value == cv2.value == true) {
//         result1.innerText = "두 수는 서로 같습니다."
//     } else if(cv1.value == cv2.value == false) {
//         result1.innerText = "두 수는 서로 같지 않습니다."
//     }
// }

// // 좌변의 수가 우변의 수보다 큰지 확인
// const cv3 = document.getElementById("compareValue3");
// const cv4 = document.getElementById("compareValue4");
// const result2 = document.getElementById("result2")

// function compareFn2() {
//     if(Number(cv3.value) > Number(cv4.value) == true) {
//         result2.innerText = "왼쪽이 큽니다";
//     } else if(Number(cv3.value) > Number(cv4.value) == false) {
//         result2.innerText = "오른쪽이 큽니다";
//     }
// }

// 배수가 맞는지 확인
const input3_1 = document.getElementById("input3_1");
const input3_2 = document.getElementById("input3_2");
const result3 = document.getElementById("result3")

function checkFn3() {
    // const v1 = Number(input3_1.value) % Number(input3_2.value) == 0;

    // result3.innerText = "5은/는 2의 배수 : " + v1;

    // - 문자열 전체를 백틱(')으로 감싼 후
    //   변수, 연산결과 등이 출력되는 자링
    //   ${변수명} 또는 ${연산식} 을 작성
    const v1 = Number(input3_1.value);
    const v2 = Number(input3_2.value);

    result3.innerText = `${v1}은/는 ${v2}의 배수 : ${v1 % v2 == 0}`;
}

//---------------------------------------------------------------------------

// 복합대입 연산자
let count = 0;
const input4 = document.getElementById("input4");
const result4 = document.getElementById("result4");

// 차감
function minus4() {
    count -= Number(input4.value);
    result4.innerText = count;
}

// 누적
function plus4() {
    count += Number(input4.value);
    result4.innerText = count;
}

//---------------------------------------------------------------------------

// 논리 연산자
        // ex) let test = true;

function checkFn5(){
    // AND (&&)
    const bool1 = (104 >= 100) && (100 % 2 == 0);
    console.log(`104는 100 이상의 수 이면서 짝수인가? ${bool1}`); // true
    const bool2 = (50 <= 70) && (50 % 4 == 0);
    console.log(`50은 70 이하이고, 4의 배수인가? ${bool2}`); // false
    const bool3 = (1 < 3) && (3 < 10);
    console.log(`3은 1 부터 10 사이의 수가 맞는가? ${bool3}`); // true

    // OR (||)
    const bool4 = (4 > 10) || (4 % 2 == 0); 
    console.log(`4는 10을 초과 하거나, 짝수인가? ${bool4}`); // true
    const bool5 = (50 <= 0) || (50 > 40); 
    console.log(`50은 0 이하 또는 40 이상인가 ${bool5}`); // true

    // NOT (!)
    const bool6 = true;
    console.log(`!true = ${!bool6}`); // false
    console.log( !(bool6 != true) ); // true
}

//---------------------------------------------------------------------------

// 삼항 연산자

const userId = document.getElementById("inputId");
const userPw = document.getElementById("inputPw");

function login() {
    const success = "로그인 성공!"
    const fail = "아이디 또는 비밀번호가 일치하지 않습니다"

    const message = (userId.value) == "member01" && (userPw.value) == "pass01!" ? 
                    success : fail;

    alert(message);

    // 내 코딩
    // userId.value == "member01" && userPw.value == "pass01!" ? 
    // alert(success) : alert(fail);
}