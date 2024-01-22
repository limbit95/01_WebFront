// .JS 파일 내부를 HTMl의 <script> 태그 내부라고 생각하면 됨

function externalFn() {
    alert("외부 파일에 작성된 external 버튼이 클릭 되었습니다.");
}

// -------------------------------------------------------------

// JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색을 변경

// HTML의 body 태그 요소를 선택하는 코드
const body = document.querySelector("body");

// 실행되면 모드별로 바꾸는 함수(기능)
function darkMode() {
    // . 입력으로 css의 style 코드를 불러올 수 있다.
    body.style.color = "white";
    body.style.backgroundColor = "black";
    
}

function lightMode() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
}