function check1() {
    let numbers = "";

    for(let num = 1; num <= 5; num++) {
        numbers += num;
    }

    console.log(numbers);
}

function check2() {
    for(let num = 1; num <= 10; num++) {
        console.log(num)
    }
}

function check3() {
    for(let num = 1; num <= 20; num++) {
        console.log(num)
    }
}

function check4() {
    for(let num = 5; num <= 15; num++) {
        console.log(num)
    }
}

function check5() {
    for(let num = 1; num <= 30; num += 2) {
        console.log(num);
    }
}

function check6() {
    let sum = 0;

    for(let num = 1; num <= 10; num++) {
        sum += num
    }

    console.log(sum);
}

// -------------------------------------------------------

// 응용 문제


// 합계 구하기
function sumFn() {
    // input에 입력된 값을 얻어와 변수에 저장하는 코드
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    
    // 결과 출력을 위한 결과 요소 얻어와 변수에 저장
    const result1 = document.getElementById("result1");
    
    // 합계 변수
    let sum = 0;

    for (let num = start; num <= end; num++) {
        sum += num;
    }

    result1.innerText = sum;
}


// 입력 받은 범위 내 모든 정수 출력1
function executeFn2() {
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value);

    // for (let num = start; num <= end; num+=val) {
    //     // li 생성 (아직 ul 태그 안에 li태그를 추가한 건 아님!!!)
    //     let livalue = document.createElement('li');
    //     // 생성한 li 태그 안에 값 넣기
    //     livalue.textContent = num;
    //     // 생성한 li태그를 ul 태그 안에 추가
    //     ul.appendChild(livalue);
    // }

    const ul = document.getElementById("result2");

    ul.innerHTML = "";
    
    // 강사님 코드
    for (let num = start; num <= end; num+=val) {
        ul.innerHTML += `<li>${num}</li>`;
    }

}

// 요소.innerText = `<li>${num}</li>`;
// -> 요소의 내용으로 문자열을 대입
//    (HTML 태그를 해석하지 않고 문자열 그대로 보여줌)

// 요소.innerHTML = `<li>${num}</li>`;
// -> HTML 태그를 해석해서 화면에 태그의 본 기능대로 출력


// 구구단

function executeFn3() {
    const input3 = Number(document.getElementById("input3").value);

    const ul = document.getElementById("result3");

    ul.innerHTML = "";

    // 강사님 코드 추가
    if(input3 < 2 || input3 > 9) {
        alert("2~9 사이만 입력해 주세요")
        return;
    }

    for(let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${input3} x ${num} = ${input3 * num}</li>`;
    }
    
}

// -------------------------------------------------------

// 중첩 반복문(2중 for문)

function check8() {
    for(let num1 = 1; num1 <= 4; num1++) {
        let str = "";

        for(let num2 = 1; num2 <= 5; num2++) {
            str += num2;
        }
        console.log(str);
    }
}

function check9() {
    for(let x = 1; x <= 5; x++) {
        let str = "";

        for(let y = 1; y <= x; y++) {
            str += y;
        }
        console.log(str);
    }
}

// while문

function check16() {

    let val;

    while(val !== null) {
        //동일 비교 연산자
        // !== : 값, 자료형이 모두 다른 경우 true
        // === : 값, 자료형이 모두 같은 경우 true

        val = prompt("입력 후 확인"); // 변수에 prompt 값 대입
        // 확인 -> 입력한 값
        // 취소 -> null

        console.log(val);

        // 아무것도 입력하지 않은 상태에서 확인을 눌러도 반복문의
        // 조건식인 val !== null 에 해당하는 이유는
        // 결국 빈 공백도 string 형태로 들어감으로 val 에 값은 없으나
        // 자료형이 string으로 val !== null의 조건에 부합으로
        // 계속 반복문이 수행되는 것이다
    }
}

// 메뉴 주문하기

function check17() {
    
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000;

    // 주문 개수 카운트
    let gCnt = 0; // 김밥
    let rCnt = 0; // 라면
    let dCnt = 0; // 돈가스

    // prompt로 입력한 값을 저장할 변수 선언
    let input;

    while(input !== null) {
        input = prompt("메뉴 번호를 입력하세요");

        switch(input) {
            case "1" : gCnt++; break;
            case "2" : rCnt++; break;
            case "3" : dCnt++; break;
            case null : alert("주문 완료!"); break;
            default : alert("메뉴에 작성된 번호만 입력해주세요")
        }
    }
    
    alert(`김밥 : ${gCnt}, 라면 : ${rCnt}, 돈가스 : ${dCnt}`)
    let sum = (gimbap * gCnt) + (ramen * rCnt) + (donkkaseu * dCnt);
    alert(`총 가격 : ${sum} 원`)

}

// while 문을 for문처럼 사용하기

function check18() {

    let num1 = 1;

    while(num1 < 11) {
        console.log(num1);
        num1++;
    }

    console.log("---------------");

    let num2 = 10;

    while(num2 > 0) {
        console.log(num2);
        num2--;
    }
}