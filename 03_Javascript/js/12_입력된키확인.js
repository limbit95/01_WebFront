const body1 = document.getElementsByTagName("body");
const keys = document.getElementsByClassName("key");


body1[0].addEventListener("keydown", function(e) {
    if(e.key.toLowerCase() == "q"){
        keys[0].style.backgroundColor = "#3a86ff";
    } else if(e.key.toLowerCase() == "w"){
        keys[1].style.backgroundColor = "#3a86ff";
    } else if(e.key.toLowerCase() == "e"){
        keys[2].style.backgroundColor = "#3a86ff";
    } else if(e.key.toLowerCase() == "r"){
        keys[3].style.backgroundColor = "#3a86ff";
    } 
});

body1[0].addEventListener("keyup", function(e) {
    if(e.key.toLowerCase() == "q"){
        keys[0].style.backgroundColor = "white";
    } else if(e.key.toLowerCase() == "w"){
        keys[1].style.backgroundColor = "white";
    } else if(e.key.toLowerCase() == "e"){
        keys[2].style.backgroundColor = "white";
    } else if(e.key.toLowerCase() == "r"){
        keys[3].style.backgroundColor = "white";
    } 
});

// // 강사님 코드

// // 화면에 존재하는 key 모두 얻어오기
// const keys1 = document.querySelectorAll(".key");

// // 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때
// document.addEventListener("keydown", function(e) {
//     let idx; // index 값을 저장할 변수

//     switch(e.key.toLowerCase()) {
//         case 'q' : idx = 0; break;
//         case 'w' : idx = 1; break;
//         case 'e' : idx = 2; break;
//         case 'r' : idx = 3; break;
//         default : return; // 함수 종료
//     }

//     // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
//     keys1[idx].style.backgroundColor = "deepPink";
// });

// document.addEventListener("keyup", function(e) {
//     let idx;

//     switch(e.key.toLowerCase()) {
//         case 'q' : idx = 0; break;
//         case 'w' : idx = 1; break;
//         case 'e' : idx = 2; break;
//         case 'r' : idx = 3; break;
//         default : return;
//     }

//     keys1[idx].style.backgroundColor = "white";
// })