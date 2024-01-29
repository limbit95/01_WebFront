// 생성 버튼 요소
const btn1 = document.querySelector("#btn");
// 생성된 input창의 모든 숫자 더하기 기능 버튼 요소
const sumBtn = document.querySelector("#sumBtn");
// input 창 생성할 div 영역 요소
const container = document.querySelector("#container");
// 모든 숫자 더한 값 출력 영역 요소
const result1 = document.querySelector("#result");


btn1.addEventListener("click", () => {

    // 생성하고 싶은 개수 만큼의 input 창 개수 하는 기능
    for(let i = 0; i < btn1.previousElementSibling.value; i++){
        const createInput = document.createElement("input");
        createInput.classList.add("input-number")
        container.append(createInput);
    }


    // 생성된 인풋창 배열 요소
    const inputList = document.querySelectorAll(".input-number");

    // input창의 모든 숫자 더한 값 출력
    sumBtn.addEventListener("click", () => {

        let sum = 0;

        for(let i = 0; i < inputList.length; i++){
            sum += Number(inputList[i].value);
            inputList[i].remove();
            
        }

        result1.innerText = sum;

    });

});