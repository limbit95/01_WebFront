// // 추가 버튼 요소 얻어오기
// const add = document.querySelector("#add");
// // 하위 div들을 담고 있는 container 요소 얻어오기
// const container = document.querySelector(".container");

// add.addEventListener("click", () => {

//     // 추가 생성할 div 값 세팅
//     const addDiv = document.createElement("div");
//     addDiv.classList.add("row");

//     // 추가 생성할 input창 값 세팅
//     const addInput = document.createElement("input");
//     addInput.type = "number";
//     addInput.classList.add("input-number");

//     // 추가 생성할 span태그 값 세팅
//     const addSpan = document.createElement("span");
//     addSpan.classList.add("remove-row");

//     // x 버튼 추가
//     addSpan.innerText = "x"
//     // addSpan.innerHTML = "&times;"

//     // 생성한 div 추가
//     container.append(addDiv);
//     // 생성한 input 추가
//     addDiv.append(addInput);
//     // 생성한 span 추가
//     addDiv.append(addSpan);

//     // input, x 버튼 삭제
//     // 아래 이벤트 리스너를 외부에서 호출하려하니
//     // 아직 생성되지 않은 span 태그를 정의할 수 없다며
//     // 오류 발생으로 '추가' 버튼 이벤트 리스너
//     // 내부에 코딩하여 '추가' 버튼을 클릭함으로 생성되는
//     // span 태그를 지우는 이벤트 리스너를 만듬
//     addSpan.addEventListener("click", () => {
//         addInput.remove();
//         addSpan.remove();
//     });
// });

// // 계산 버튼 요소 얻어오기
// const calc = document.querySelector("#calc");
// const input = document.getElementsByClassName("input-number");

// calc.addEventListener("click", () => {

//     let sum = 0;

//     for(let i = 0; i < input.length; i++){
//         sum += Number(input[i].value);
//     }

//     alert(`합계 : ${sum}`);

// });



// -----------------------------------------------------



// 강사님 코드

// 요소.remove() : 요소 제거
// 요소.classList.add("클래스명") : 클래스 추가
// 요소.classList.remove("클래스명") : 클래스 제거

// 만들려는 기능 중 공통적으로 사용되는 요소를 전역 변수 선언
const addBtn = document.getElementById("add"); // 추가 버튼
const calcBtn = document.getElementById("calc"); // 계산 버튼
const container = document.querySelector(".container");
// 최종적으로 동적으로 만들어진 요소를 붙여야하는 요소

// 추가 버튼 클릭 시 
addBtn.addEventListener("click", () => {
    
    // 1. div 요소 생성하기
    const row = document.createElement("div");

    // 2. 요소에 class 추가하기
    row.classList.add("row");

    // 3. input 요소 생성하기
    const input = document.createElement("input");
    input.type = "number";
    // 요소.setAttribute("속성", "속성값");
    input.setAttribute("type", "number");

    // 4. 클래스 "input-number" 추가하기ㅣ
    input.classList.add("input-number");
    // 요소.classList.add("클래스명");
    // 이 녀석은 추가 하는 기능이므로
    // 하나의 클래스명 추가 이후 또 다른 클래스명 추가하면
    // 기존의 클래스명 이후에 새로운 클래스명이 이어붙어진다
    // 하지만 input.setAttribute("type", "number");
    // 이녀석은 하나의 정의 밖에 내리지 못 한다

    // 5. span 요소 생성하기
    const span = document.createElement("span");

    // 6. span 태그에 클래스 "remove-row" 추가
    span.classList.add("remove-row");

    // 7. 내용으로 &times; 추가 (innerHTML 사용해야함)
    span.innerHTML = "&times;";

    // 조립하기

    // 8. div.row 요소에게 자식으로 input, span 추가
    row.append(input);
    row.append(span);

    // 9. 완성된 div.row를 container의 마지막 자식으로 추가하기
    container.append(row);

    // ----------------------------------------------
    // 클릭된 x 버튼의 부모 요소를 제거

    // 1. 만들어지는 x버튼(span)에 이벤트 리스너 추가

    span.addEventListener("click", e => {

        // 2. 현재 이벤트가 발생한 요소(클릭된 x버튼)의
        //    부모 요소를 선택(탐색)
        const parent = e.target.parentElement; // == div.row

        // 3. 부모 요소를 제거하기
        parent.remove();

    });
});

calcBtn.addEventListener("click", () => {

    // 1) 모든 .input-number 얻어오기
    const numbers = document.querySelectorAll(".input-number");

    // 2) for문으로 모든 요소 접근하여
    //    작성된 값(value)을 얻어와
    //    숫자로 변경(Number()) 한 후
    //    합계 저장 변수 sum에 누적

    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i].value);
    }

    alert("합계 : " + sum);

});