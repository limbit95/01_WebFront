// 추가 버튼 요소 얻어오기
const add = document.querySelector("#add");
// 하위 div들을 담고 있는 container 요소 얻어오기
const container = document.querySelector(".container");

add.addEventListener("click", () => {

    // 추가 생성할 div 값 세팅
    const addDiv = document.createElement("div");
    addDiv.classList.add("row");

    // 추가 생성할 input창 값 세팅
    const addInput = document.createElement("input");
    addInput.type = "number";
    addInput.classList.add("input-number");

    // 추가 생성할 span태그 값 세팅
    const addSpan = document.createElement("span");
    addSpan.classList.add("remove-row");

    // x 버튼 추가
    addSpan.innerText = "x"

    // 생성한 div 추가
    container.append(addDiv);
    // 생성한 input 추가
    addDiv.append(addInput);
    // 생성한 span 추가
    addDiv.append(addSpan);

    // input, x 버튼 삭제
    // 아래 이벤트 리스너를 외부에서 호출하려하니
    // 아직 생성되지 않은 span 태그를 정의할 수 없다며
    // 오류 발생으로 '추가' 버튼 이벤트 리스너
    // 내부에 코딩하여 '추가' 버튼을 클릭함으로 생성되는
    // span 태그를 지우는 이벤트 리스너를 만듬
    addSpan.addEventListener("click", () => {
        addInput.remove();
        addSpan.remove();
    });
});

// 계산 버튼 요소 얻어오기
const calc = document.querySelector("#calc");
const input = document.getElementsByClassName("input-number");

calc.addEventListener("click", () => {

    let sum = 0;

    for(let i = 0; i < input.length; i++){
        sum += Number(input[i].value);
    }

    alert(`합계 : ${sum}`);

});