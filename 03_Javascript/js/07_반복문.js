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

    for(let num = 1; num <= 9; num++) {
        ul.innerHTML += `<li>${input3} * ${num} = ${input3 * num}</li>`;
    }
    
}