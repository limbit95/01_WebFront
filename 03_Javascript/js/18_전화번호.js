const numbtn = document.querySelectorAll("[class='numbtn-list'] > button");
const input1 = document.querySelector("#input-number");

// 각 버튼에 하나씩 이벤트 리스너 넣기 귀찮아서 button의 클래스들을 담는 배열을 만들어
// for문으로 한꺼번에 돌려버려 같이 기능하도록 만듬
for(let i = 0; i < numbtn.length; i++){
    numbtn[i].addEventListener("click", () => {
        input1.innerText += numbtn[i].textContent;
    });
}

// -------------------------------------------------------------

// 초기화 버튼 구현
const clear1 = document.querySelector(".clear");

clear1.addEventListener("click", () => {
    input1.innerText = "";
});

// -------------------------------------------------------------

// 추가 버튼 구현

// 추가 버튼 요소 얻어오기
const add1 = document.querySelector(".add");

// 번호 리스트 영역 요소 얻어오기
const list1 = document.querySelector(".user-list");

add1.addEventListener("click", () => {

    // 구현해야할 생성 div

    // <div class="addNumber">
    //     <h4>01012345678</h4>
    //     <i id="star" class="fa-regular fa-star"></i>
    //     <span class="remove">&times;</span>
    // </div>

    // div
    const createDiv = document.createElement("div");
    createDiv.classList.add("addNumber");

    // h4
    const createh4 = document.createElement("h4");
    createh4.textContent = input1.textContent;

    // 별모양 버튼
    const star = document.createElement("i");
    star.setAttribute("id", "star");
    star.setAttribute("class", "fa-regular fa-star");

    // span
    const createSpan = document.createElement("span");
    createSpan.classList.add("remove");
    createSpan.innerHTML = "&times;"

    // 순서대로 -> div -> 번호 -> 별 -> x
    list1.append(createDiv);
    createDiv.append(createh4);
    createDiv.append(star);
    createDiv.append(createSpan);

    input1.textContent = "";

    // 저장된 번호 삭제
    createSpan.addEventListener("click", e => {

        const parent = e.target.parentElement;
        
        parent.remove();

    });

    // 별 버튼 클릭 시 변화

    
    star.addEventListener("click", () => {

        if(star.className == "fa-regular fa-star"){
            star.setAttribute("class", "fa-solid fa-star");
            createh4.style.color = "red";
        } else {
            star.setAttribute("class", "fa-regular fa-star");
            createh4.style.color = "black";
        }
        

    });
    
    
    
    

   

});

// 별 버튼 요소 얻어오기
const star1 = document.querySelector("#star");





// 별 버튼 클릭 시 배경색 yellow로 변경할 시 필요한 
// star.setAttribute("class", "fa-regular fa-star");