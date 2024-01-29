// 결과물 출력할 영역 요소
const result1 = document.querySelector(".result");

// 적용하기 버튼 요소
const apply = document.querySelector(".apply");





// 적용 속성들 요소
// 너비
const width1 = document.querySelector(".width");
// 높이
const height1 = document.querySelector(".height");
// 글자크기
const fontSize = document.querySelector(".font-size");
// 글자색
const color1 = document.querySelector(".color");
// 배경색
const backgroundColor1 = document.querySelector(".background-color");
// 세로 정렬
const col1 = document.querySelector(".col");
// 출력 문자열
const printstr = document.querySelector(".printstr");


apply.addEventListener("click", () => {

    result1.innerHTML = "";


    // 생성 div
    const createDiv = document.createElement("div");
    createDiv.classList.add("createDiv");
    createDiv.style.width = width1.value+"px";
    createDiv.style.height = height1.value+"px";
    createDiv.style.backgroundColor = backgroundColor1.value;
    createDiv.style.display = "flex";


    // 생성 글자
    const createFont = document.createElement("h3");
    createFont.innerText = printstr.value;
    createFont.style.fontSize = fontSize+"px";
    createFont.style.color = color1.value;
    createFont.style.fontWeight = "normal";

    // 글자 굵기 배열 요소
    const bold1 = document.querySelectorAll(".checkbox1");

    if(bold1[0].checked){
        createFont.style.fontWeight = bold1[0].value;
    } else if(bold1[1].checked){
        createFont.style.fontWeight = bold1[1].value;
    }

    // 가로정렬 checkbox 배열 요소
    const row1 = document.querySelectorAll(".checkbox2");

    if(row1[0].checked){
        createDiv.style.justifyContent = row1[0].value;
    } else if(row1[1].checked){
        createDiv.style.justifyContent = row1[1].value;
    } else if(row1[2].checked){
        createDiv.style.justifyContent = row1[2].value;
    }

    // 세로정렬 checkbox 배열 요소
    const col1 = document.querySelectorAll(".checkbox3");

    if(col1[0].checked){
        createDiv.style.alignItems = col1[0].value;
    } else if(col1[1].checked){
        createDiv.style.alignItems = col1[1].value;
    } else if(col1[2].checked){
        createDiv.style.alignItems = col1[2].value;
    }

    // 생성한 div 추가
    result1.append(createDiv);
    // 생성한 글자 추가
    createDiv.append(createFont);


    // 지우기 버튼
    const clear1 = document.querySelector(".clear");

    clear1.addEventListener("click", () => {
        createDiv.remove();
        createFont.remove();
    });

});