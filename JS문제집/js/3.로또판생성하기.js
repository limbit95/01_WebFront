// 로또 번호 생성 영역 요소
const lottoBoard = document.querySelector("#lottoBoard");
// 로또 번호 생성 요소
const createBtn = document.querySelector("#createBtn");

createBtn.addEventListener("click", () => {
    
    lottoBoard.innerHTML = "";

    for(let i = 0; i < 45; i++){
        const createBall = document.createElement("div");
        createBall.classList.add("number");
        createBall.innerText = Math.floor(Math.random() * 45) + 1;
        
        lottoBoard.append(createBall);
    }
});

