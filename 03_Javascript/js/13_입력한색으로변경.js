const changeBtn = document.getElementById("changeButton");
const boxes = document.getElementsByClassName("box");
const input = document.getElementsByClassName("color-input");

changeBtn.addEventListener("click", function(e) {

    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = input[i].value;
    }
});

// 강사님 코드

// const boxList = document.querySelectorAll(".box");
// const inputList = document.querySelectorAll(".color-input");

// document.querySelector("#changeButton").addEventListener
// ("click", function(e) {

//     for(let i = 0; i < boxList.length; i++){
//         boxList[i].style.backgroundColor = inputList[i].value;
//     }
// });