// 과일 배열
const fruits = document.querySelectorAll(".row");

const apple = fruits[0];
const banana = fruits[1];
const melon = fruits[2];

// count 버튼 요소
const cntBtn = document.querySelector("#btn");
// 총 합계를 출력할 영역 요소
const result = document.querySelector("#result");

cntBtn.addEventListener("click", () => {

    // 과일 가격 총 합계
    let totalAmount = 0;

    // 사과 가격 * 사과 개수
    if(apple.children[0].checked) {
        totalAmount += Number(apple.children[2].textContent) * 
                   Number(apple.children[3].value);
    } else {
        apple.children[3].value = 0;
    }
    // 바나나 가격 * 바나나 개수
    if(banana.children[0].checked) {
        totalAmount += Number(banana.children[2].textContent) * 
                   Number(banana.children[3].value);
    } else {
        banana.children[3].value = 0;
    }
    // 멜론 가격 * 멜론 개수
    if(melon.children[0].checked) {
        totalAmount += Number(melon.children[2].textContent) * 
                   Number(melon.children[3].value);
    } else {
        melon.children[3].value = 0;
    }
    
    result.innerHTML = `${apple.children[1].textContent} ${apple.children[3].value}개
                        ${banana.children[1].textContent} ${banana.children[3].value}개 
                        ${melon.children[1].textContent} ${melon.children[3].value}개 
                        총합 : ${totalAmount}`;
    
});