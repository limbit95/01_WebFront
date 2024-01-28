// 번호 버튼 요소
const numbtn = document.querySelectorAll("[class='numbtn-list'] > button");
// 번호 입력창 요소
const input1 = document.querySelector("#input-number");
// 번호 입력창의 번호 삭제 버튼
const delete1 = document.querySelector("#delete-btn");

// 각 버튼에 하나씩 이벤트 리스너 넣기 귀찮아서 button의 클래스들을 담는 배열을 만들어
// for문으로 한꺼번에 돌려버려 같이 기능하도록 만듬
for(let i = 0; i < numbtn.length; i++){

    numbtn[i].addEventListener("click", () => {

        if(input1.value.length == 4) {
            input1.value += " - ";
        } 
        // 전화번호 8자리수 초과해서 입력하지 못하도록 하는 기능
        if(input1.value.length == 11){
            alert("입력 번호 자리수 초과입니다");
        } else {
            input1.value += numbtn[i].textContent;
        }

    });

}

// 번호 삭제하는 기능
delete1.addEventListener("click", () => {
        
    let cnt = input1.value.length;

    if(input1.value.length == 8){
        cnt -= 3;
    }

    input1.value = `${input1.value.slice(0, cnt-1)}`;

});

// -------------------------------------------------------------

// 초기화 버튼 구현
const clear1 = document.querySelector(".clear");

clear1.addEventListener("click", () => {
    input1.value = "";
});

// -------------------------------------------------------------

// 추가 버튼 구현

// 추가 버튼 요소 얻어오기
const add1 = document.querySelector(".add");

// 번호 리스트 영역 요소 얻어오기
const list1 = document.querySelector(".user-list");

// 헤드 넘버 요소 얻어오기
const headNum = document.querySelector("#head-number");

add1.addEventListener("click", () => {

    // 구현해야할 생성 div
    // <div class="addNumber">
    //     <h4>01012345678</h4>
    //     <i id="star" class="fa-regular fa-star"></i>
    //     <span class="remove">&times;</span>
    // </div>

    // 010 과 같은 앞 번호 세 자리 체크박스에서
    // 선택하지 않은 상태일 때 '추가' 버튼 클릭 시
    // 저장되지 않고 앞 번호 선택해달라는 문구 출력
    if(headNum.value == ""){
        alert("앞 번호의 선택해주세요");
    } else if (input1.value.length < 11) {
        alert("번호 8자리 전부 입력해주세요");
    } else {
        // div
        const createDiv = document.createElement("div");
        createDiv.classList.add("addNumber");

        // h4
        const createh4 = document.createElement("h4");
        createh4.textContent = `
        ${headNum.value}-${input1.value.slice(0, 4)}-${input1.value.slice(7, 11)}`;

        // 별모양 버튼
        const star = document.createElement("i");
        star.setAttribute("id", "star");
        star.setAttribute("class", "fa-regular fa-star");

        // span
        const createSpan = document.createElement("span");
        createSpan.classList.add("remove");
        createSpan.innerHTML = "&times;";
        
        // 순서대로 -> div -> 번호 -> 별 -> x
        list1.append(createDiv);
        createDiv.append(createh4);
        createDiv.append(star);
        createDiv.append(createSpan);

        input1.value = "";



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

    }

});