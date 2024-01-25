// 인라인 이벤트 모델 확인
function check1(btn){
    // 매개변수 btn == 클릭한 버튼(this)
    console.log(btn);

    // 버튼의 배경색을 얻어와 저장
    const bgColor = btn.style.backgroundColor;
    console.log(bgColor);

    // 버튼이 클릭될 때 마다 pink <-> yellow 번갈아 변경
    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
    } else {
        btn.style.backgroundColor = "yellow";
    } 
}

// -------------------------------------------------------

// 고전 이벤트 모델 확인

// 아이디가 test1-1인 요소를 얻어와 test1a 변수에 저장

const test1a = document.querySelector("#test1-1");

// *** 고전 이벤트 모델 작성법 ***

// 요소.이벤트리스너 = 이벤트 핸들러
test1a.onclick = function() {
    alert("고전 이벤트 모델 확인 버튼 클릭됨");
}


// 고전 이벤트 모델 제거

// #test1-2 버튼 클릭 시
// #test1-1의 onclick 이벤트 리스너의 이벤트 핸들러 제거하기
document.querySelector("#test1-2").onclick = function() {
    // 기존 onclick의 이벤트 핸들러를
    // null 로 덮어씌움 (이벤트 제거)

    // 방법 1
    document.querySelector("#test1-1").onclick = null;
    // 방법 2
    test1a.onclick = null;

    alert("이벤트 제거됨");
}


// 고전 이벤트 모델 단점

// #test1-3 요소를 얻어와 test1c 변수에 저장

const test1c = document.querySelector("#test1-3");

// #test1-3 요소가 클릭 되었을 때 배경색을 red로 변경
test1c.onclick = function() {
    test1c.style.backgroundColor = "red";
}

// 배경 색상 변경 후 6개월 후 잊고 있다가
// #test1-3이 클릭 되었을 때 글자색을 "white"로 변경하려고 했을 때
test1c.onclick = function() {
    test1c.style.color = "white";
}

// -> onclick에 저장된 값이 덮어 씌워지면서
//    이전 코드 (배경색 red)가 사라지는 문제 발생

// -------------------------------------------------------

// 표준 이벤트 모델

const test2 = document.querySelector("#test2");

// *** 표준 이벤트 모델 작성법 ***
// 요소.addEventListener("이벤트 종류", 이벤트 핸들러(함수))

// 투명도 조절 이벤트 리스너 및 핸들러
test2.addEventListener("click", function(e) {
    console.log(e);

    // 투명도 1 (불투명) -> 0 (투명) -> 0.1씩 감소시키기
    // 현재 #test2 의 투명도 확인
    let curr = test2.style.opacity;

    // opacity에 아무 값도 주지 않으면
    // 맨 처음에는 투명도 값이 '' 공백으로 
    // -> 1 대입 시켜주기
    if(curr == '') {
        test2.style.opacity = 1;
        curr = 1;
    }

    // 투명도 0.1 감소시키기
    test2.style.opacity = curr - 0.1;

    if(test2.style.opacity == 0) { // 완전히 투명해졌다면
        test2.style.opacity = 1; // 다시 불투명, 원래 상태로 돌아옴
    }
});

// #test2 요소를 클릭하면 클릭 횟수 카운트
let cnt = 0;

test2.addEventListener( "click", function() {
    cnt++; // 카운트 1증가

    // 원래 사용하던 방법
    // test2.innerText = cnt;

    // 표준 이벤트 모델의 이벤트 핸들러 안에서 this
    // == 이벤트가 발생한 요소
    this.innerText = cnt;

    console.log(cnt);
});

// -------------------------------------------------------

// 입력한 색상으로 배경색 변경하기

const box3 = document.querySelector("#box3");
const input3 = document.querySelector("#input3");

input3.addEventListener("keyup", function(e) {
    
    // e : 이벤트 객체(발생한 이벤트에 대한 정보를 담은 객체)

    // if문을 작성하지 않고 바로 대입하면 입력창에
    // 색상을 적자마자 배경색이 바뀜
    // box3.style.backgroundColor = input3.value;

    // 그래서 if문 안에 e.key가 즉, input창에 값을 입력후
    // Enter를 쳤을 때 배경색이 바뀐다 라고 명령해주어야함

    // 다시 설명 -> input창에 값을 입력 후 "Enter"를 누르면
    // e.key의 값이 "Enter"가 대입되고 if문으로 e.key의 값이
    // "Enter"와 같다면 div id="box3"의 배경색상을 변경하라
    if(e.key == "Enter"){
        box3.style.backgroundColor = input3.value;
    }
});

box3.addEventListener("click", function(e) {

    // 기초적 방법
    // alert(`배경색 : ${box3.style.backgroundColor}`);

    // e.target : 이벤트가 발생한 대상 요소 (이벤트 발생 요소)
    alert(`배경색 : ${e.target.style.backgroundColor}`);

    // this도 가능?
    // alert(`배경색 : ${this.style.backgroundColor}`);
})

// -------------------------------------------------------

// 실습 문제

