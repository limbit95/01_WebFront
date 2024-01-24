// 클래스 접근 테스트
function classTest(){

    // 유사 배열이란?
    // 배열처럼 index, length를 가지고 있으나
    // 배열 전용 기능(메서드)를 제공하지 않음
    // pop(), push().. 등 제공하지 않음

    // .cls-test 요소 모두 얻어오기
    // -. HTMLCollection ( == 유사 배열)
    const divs = document.getElementsByClassName("cls-test");

    console.log(divs);

    // divs 0, 1, 2 번째 요소에 접근하여 배경색 변경

    divs[0].style.backgroundColor = "black";
    divs[1].style.backgroundColor = "blue";
    divs[2].style.backgroundColor = "red";

}