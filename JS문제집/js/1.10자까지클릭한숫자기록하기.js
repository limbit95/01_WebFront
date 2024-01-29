// 각 버튼 배열 요소
const btnList = document.querySelectorAll(".number");

// 숫자 입력값 요소
const result1 = document.querySelector("#result");

// 초기화 버튼 요소
const reset1 = document.querySelector("#reset");

// 각 버튼 이벤트 리스너 for문 돌리기
for(let i = 0; i < btnList.length; i++){
    btnList[i].addEventListener("click", () => {

        if(result1.textContent.length > 9){
            alert("10자리 수까지만 입력해주세요");
        } else {
            result1.innerText += btnList[i].textContent;
        }
    });

    reset1.addEventListener("click", () => {
        result1.innerText = "";
    });
}

