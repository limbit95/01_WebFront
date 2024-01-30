// 속성 값 배열 요소
const opt = document.querySelector(".container");

// 크기 요소
const inputFontSize = opt.children[0];
// 색상 요소
const inputColor = opt.children[1];
// 적용 버튼 요소
const applyBtn = opt.children[2];
// 글이 담기는 영역 요소
const content = opt.children[4];


applyBtn.addEventListener("click", () => {

    content.style.fontSize = inputFontSize.value+"px";
    content.style.color = inputColor.value;
    content.style.fontWeight = "normal";
});

// 등록 버튼
const submit = document.querySelector("#registration");
// 결과 영역
const result = document.querySelector("#result");

// 내용 등록하는 기능
submit.addEventListener("click", () => {

    result.style.fontSize = content.style.fontSize;
    result.style.color = content.style.color;
    result.style.fontWeight = content.style.fontWeight;
    result.innerText = content.value;

});