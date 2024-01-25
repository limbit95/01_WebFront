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

// 태그명으로 요소 접근하기

function tagNameTest() {

    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와
    // 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");

    for(let i = 0; i < tagList.length; i++){

        // tagList[i].innerText = "abc" : 내용으로 "abc" 대입하기
        // tagList[i].innerText         : 작성된 내용을 얻어오기
        console.log(tagList[i].innerText);
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
    
}

// name으로 요소 접근하기

function nameTest() {

    // name 속성 값이 'hobby'인 요소를 모두 얻어와 변수에 저장
    const hobbyList = document.getElementsByName("hobby");

    // console.log(hobbyList);

    let str = ""; // 체크된 값 누적
    let cnt = 0; // 체크된 수 카운트

    for(let i = 0; i < hobbyList.length; i++){

        // checkbox, radio 전용 속성 (.checked)

        // input요소.checked -> 요소가 체크되어 있으면 true, 아님 false 반환
        // input요소.checked = true -> 해당 요소를 체크
        // input요소.checked = false -> 해당 요소를 체크 해제

        if(hobbyList[i].checked) {
            str += hobbyList[i].value + " ";
            cnt++;
        }
    }

    document.getElementById("name-div").innerHTML
        = `${str} <br><br>선택된 취미 개수 : ${cnt}`;
}

// css 선택자로 요소 접근하기

function cssTest() {
    /*
    - [요소 1개]
      1) document.querySelector("CSS 선택자");
          -> 선택자가 선택한 요소 중 첫 번째 요소를 반환
    - [요소 n개 -> 배열]
      2) document.querySelectorAll("CSS" 선택자);
          -> 선택한 요소 모두를 배열(유사배열) 형태로 반환
    */ 

    // target-div 속성 값이 "css-div" 요소에 접근
    const container = document.querySelector(['[target-div="css-div"]']);

    // 요소의 테두리 변경
    container.style.border = "10px solid red";

    // 첫 번째 자식 div 접근하여
    // 내용을 "CSS 선택자로 선택해서 값 변경됨"
    const div1 = document.querySelector(['[target-div="css-div"] > div']);
    div1.innerText = "CSS 선택자로 선택해서 값 변경됨";
    
    // 두 번째 자식 div 접근
    const div2 = document.querySelector(['[target-div="css-div"] div:last-child']);
    div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 못함";



    // 모든 자식 div 한 번에 선택(배열)
    const divList = document.querySelectorAll(['[target-div="css-div"] > div']);

    console.log(divList);

    // index를 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i = 0; i < divList.length; i++){
        divList[i].onclick = function() {
            alert(`${i}번째 요소 입니다!`);
        }
    }

}

// 카카오톡 모양의 채팅 화면 만들기

function readValue() {
    
    // 채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg");
    
    // 채팅 내용 입력 input
    const input = document.querySelector("#user-input");

    // 입력된 값이 없을 경우
    // 1) 진짜 안 적음
    // 2) 공백만 적은 경우
    
    // 문자열.trim() : 문자열 좌우 공백 제거
    if(input.value.trim().length == 0){
        alert("채팅 내용을 입력해주세요");

        input.value = ""; // 이전 input에 작성된 값 삭제

        input.focus(); // input 창에 커서 활성화

        return; // 현재 수행 중인 함수 종료 + 호출한 곳으로 돌아감
    }

    // 채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollHeight    : bg의 스크롤 전체 높이
    // bg.scrollTop       : 스크롤 윗부분 위치
    // bg.scrollTop = 값; : 스크롤 윗부분을 값 위치로 이동
    // (값이 너무 크면 제일 밑으로 이동)
    bg.scrollTop = bg.scrollHeight;

    input.value = "";
    input.focus();

}

/*
아이디가 user-input인 요소에서
키가 올라오는 동작이 발생했을 때(감지되었을 때)
올라온 키가 "Enter" 키 라면 readValue() 함수를 호출
*/

// keydown : 키가 눌러졌을 때 (+ 꾹 누르고 있으면 계속 인식됨)
// keyup : 눌러지던 키가 떼어졌을 때 (1회만 인식)

document.querySelector("#user-input")
.addEventListener("keyup", function(e) {
    // e : 이벤트 객체 (발생한 이벤트 정보를 담고 있는 객체)
    console.log(e);

    if(e.key == "Enter"){
        readValue();
    }
});