// 조건문 (if)

const input1 = document.getElementById("input1");

function check1() {
    if(Number(input1.value) > 0) {
        alert("양수입니다")
    } else if(Number(input1.value) <= 0) {
        alert("양수가 아닙니다")
    }
}

// else if : 홀짝 판별하기

function check2() {
    // 난수 발생 : Math.random()
    // 난수 범위 : - <= Math.random() < 1
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(randomNumber);

    if(randomNumber % 2 == 1) {
        alert(`${randomNumber} 는 홀수입니다.`)
    } else {
        alert(`${randomNumber} 는 짝수입니다.`)
    }
}

// else if 

function check3() {
    const randomNumber = Math.floor(Math.random() * 7) - 3;
    console.log(randomNumber);

    let message = randomNumber + "은/는 ";

    if(randomNumber == 0) {
        message += "0입니다.";
    } else if (randomNumber > 0) {
        message += "짝수입니다";
    } else if (randomNumber < 0) {
        message += "음수입니다";
    }

    alert(message);
}

// ----------------------------------------------------

// 어린이, 청소년, 성인 구분하기

const inputAge = document.getElementById("inputAge");

function check4() {
    const age = inputAge.value;

    if(inputAge.value.length == 0){
        alert("미입력");
    } else {
        if (age < 0 || age > 150){
            alert("잘못 입력 하셨습니다");
        } else if (age <= 0 && age <= 13) {
            alert("어린이");
        } else if (age <= 19) {
            alert("청소년");
        } else if (age <= 150) {
            alert("성인");
        }
    }
}

// ----------------------------------------------------

// switch문

// 계산기

const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const calcResult = document.getElementById("calcResult");

function calc(op) {
    // 매개 변수(Parameter)
    // - 함수 호출 시 전달되는 값을 저장하는 변수

    // ex) calc('+') : '*' 값이 매개변수에 저장됨

    const v1 = Number(number1.value);
    const v2 = Number(number2.value);

    let result; // 결과 저장 변수 선언

    switch(op) {
    // op 값이 따른 처리 case 작성
        case '+': result = v1 + v2; break;
        case '-': result = v1 - v2; break;
        case '*': result = v1 * v2; break;
        case '/': result = v1 / v2; break;
        case '%': result = v1 % v2; break;

        // 맞는 case가 없을 경우에 적용할 기본값 (else)
        default : result = "잘못된 연산자"; break;
    }


    calcResult.innerText = result;

    
    // 계산기 if문 버젼
    if(op == '+') {
        calcResult.innerText = v1 + v2;
    } else if(op == '-') {
        calcResult.innerText = v1 - v2;
    } else if(op == '*') {
        calcResult.innerText = v1 * v2;
    } else if(op == '/') {
        calcResult.innerText = v1 / v2;
    } else if(op == '%') {
        calcResult.innerText = v1 % v2;
    } else {
        calcResult.innerText = "잘못된 연산자"
    }
}

// ----------------------------------------------------

// 예제 문제

