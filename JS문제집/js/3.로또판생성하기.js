// 로또 번호 생성 영역 요소
const lottoBoard = document.querySelector("#lottoBoard");
// 로또 번호 생성 버튼 요소
const createBtn = document.querySelector("#createBtn");

createBtn.addEventListener("click", () => {
    
    lottoBoard.innerHTML = "";

    for(let i = 0; i < 45; i++){
        const createBall = document.createElement("div");
        createBall.classList.add("number");
        createBall.innerText = Math.floor(Math.random() * 45) + 1;
        
        lottoBoard.append(createBall);
    }

    // 로또공 요소
    const balls = document.querySelectorAll(".number");

    let cnt = 0;

    for(let i = 0; i < balls.length; i++){
        
        balls[i].addEventListener("click", () => {

            if(cnt != 6 && balls[i].style.backgroundColor != "orange"){
                balls[i].style.backgroundColor = "orange";
                cnt++;
            } else if (balls[i].style.backgroundColor == "orange"){
                balls[i].style.backgroundColor = "white";
                cnt--;
            } else {
                alert("6개까지 선택할 수 있습니다")
            } 
        });
    }
});