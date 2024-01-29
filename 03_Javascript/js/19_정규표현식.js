// 정규 표현식 객체 생성 + 확인하기
document.querySelector("#btn1").addEventListener("click", () => {

    // 정규표현식 객체 생성
    // 방법 1
    const regExp1 = new RegExp("script");
                    // "script"와 일치하는 문자열이
                    //  있는지 검사하는 정규표현식
    // 방법 2
    const regExp2 = /java/;
                // "java"와 일치하는 문자열이 있는지
                //  검사하는 정규표현식

    // 확인하기
    const str1 = "저희는 지금 javascript를 공부하고 있습니다";
    const str2 = "jsp(java server page)도 나중에 할 겁니다";
    const str3 = "java, java, java";

    console.log("regExp1.test(str1) : " + regExp1.test(str1));
    console.log(regExp1.exec(str1));
    console.log("regExp2.test(str2) : " + regExp2.test(str2));
    console.log(regExp2.exec(str2));
    console.log("regExp1.test(str3) : " + regExp1.test(str3));
    console.log(regExp1.exec(str3));


});

// 메타 문자 확인하기
document.getElementById("btn2").addEventListener("click", () => {

    const div1 = document.getElementById("div1");
    
    // a (일반문자열) : 문자열 내에 a라는 문자열이 존재하는지 검색
    const regExp1 = /a/;
    div1.innerHTML += "/a/, apple : " + regExp1.test("apple") + "<hr>"; // true
    div1.innerHTML += "/a/, price : " + regExp1.test("price") + "<hr>"; // false

    // [abcd] : 문자열 내에 a, b, c, d 중 하나라도 일치하는 문제가 있는지 검색
    const regExp2 = /[abcd]/;
    div1.innerHTML += "/[abcd]/, apple : " + regExp2.test("apple") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, ssbss : " + regExp2.test("ssbss") + "<hr>"; // true
    div1.innerHTML += "/[abcd]/, qwerty : " + regExp2.test("qwerty") + "<hr>"; // false

    // ^ (캐럿) : 문자열의 시작을 의미
    const regExp3 = /^group/; // 문자열의 시작이 group인지 확인
    div1.innerHTML += "/^group/, group100 : " + regExp3.test("group100") + "<hr>"; // true
    div1.innerHTML += "/^group/, 100group : " + regExp3.test("100group") + "<hr>"; // false

    // $ (달러) : 문자열의 끝을 의미
    const regExp4 = /group$/;
    div1.innerHTML += "/^group/, group100 : " + regExp4.test("group100") + "<hr>"; // false
    div1.innerHTML += "/^group/, 100group : " + regExp4.test("100group") + "<hr>"; // true


});

// ---------------------------------------------------------

// 이름 유효성 검사

/*
this. 코드를 사용하려면
fucntion() 를 사용해야함
() => 를 사용하면 this. 리딩 못함
 -> 이 경우에는 (e) 괄호에 변수 넣어주고
    e.target.~~~ 입력하면 작동됨

화살표 함수의 this : 상위(부모) 스코프 값이 상속됨

일반 function : this. 
     -> 이벤트가 일어난 객체
*/

const inputName = document.querySelector("#inputName");

inputName.addEventListener("keyup", function() {

    // 결과 출력용 span
    const result = document.querySelector("#inputNameResult");
    
    // 한글 2~5글자 정규표현식 객체 만들기
    const regExp = /^[ㄱ-힣]{2,5}$/;

    // 빈 칸인지 검사
    // 이 코드가 없으면 빈칸(공백)도 regExp를 통해 
    // 검사 후 맞지 않음으로 유효하지 않다는 메시지가
    // span 태그에 입력이 된다.
    // 그래서 공백일 경우는 공백을 계속유지하도록 이 코드 입력
    if (this.value.length == 0){
        result.innerText = "";
        return;
    }

    // 유효성 검사
    if(regExp.test(this.value)){
        // 유효한 경우
        result.innerText = "유효한 이름 형식입니다"
        result.style.color = "green";
        result.style.fontWeight = "bold";
    } else {
        // 유효하지 않은 경우
        result.innerText = "이름 형식이 유효하지 않습니다";
        result.style.color = "red";
        result.style.fontWeight = "bold";
    }

});

// --------------------------------------------------- 

// 주민등록번호

document.querySelector("#inputPno").addEventListener("keyup", (e) => {

    // 결과 출력용 span
    const result = document.querySelector("#inputPnoResult");

    if(e.target.value.length == 0){
        result.innerText = "주민등록번호를 작성해주세요";
        result.classList.remove("error");
        result.classList.remove("confirm");
        return;
    }

    // -와 같은 특수 문자는 앞에 \를 붙여주어야 한다
    // $로 끝맺음을 지어줘야 함()
    const regExp = /\d{6}\-\d{7}$/;

    // 유효성 검사
    if(regExp.test(e.target.value)){
        // 유효한 경우
        result.innerText = "유효한 주민등록번호 형식입니다"
        result.classList.remove("error");
        result.classList.add("confirm");
    } else {
        // 유효하지 않은 경우
        result.innerText = "유효하지 않습니다";
        result.classList.remove("confirm");
        result.classList.add("error");
    }

});

// ---------------------------------------------------------

// 회원 가입 양식

// 아이디
const inputId = document.querySelector("#inputId");
inputId.addEventListener("keyup", (e) => {

    const regExp = /^[a-z, A-Z, \-, \_, 0-9]{6,13}$/;

    if(e.target.value.length == 0) {
        e.target.style.backgroundColor = "white";
    }

    if(regExp.test(e.target.value)){
        e.target.style.backgroundColor = "springgreen";
        inputId.setAttribute("boolean", "true");
    } else {
        e.target.style.backgroundColor = "white";
        inputId.setAttribute("boolean", "false");
    }
});

// 비밀번호 입력
const inputpw = document.querySelector("#inputPw");
const inputpw2 = document.querySelector("#inputPw2");
const samePw = document.querySelector("#samePw");

inputpw.addEventListener("keyup", () => {

    if (inputpw.value.length == 0){
        samePw.innerText = "";
    } 

});

// 비밀번호 일치 확인
inputpw2.addEventListener("keyup", () => {

    if (inputpw.value.length == 0){
        alert("비밀번호를 입력해주세요");
        inputpw2.value = "";
    } else if (inputpw2.value.length == 0){
        samePw.innerHTML = "";
    } else if (inputpw.value == inputpw2.value){
        samePw.innerText = "비밀번호 일치";
        samePw.classList.remove("error");
        samePw.classList.add("confirm");
        inputpw.setAttribute("boolean", "true");
        inputpw2.setAttribute("boolean", "true");
    } else {
        samePw.innerText = "비밀번호 불일치";
        samePw.classList.remove("confirm");
        samePw.classList.add("error");
        inputpw.setAttribute("boolean", "false");
        inputpw2.setAttribute("boolean", "false");
    }


});

// 이름
const inputName1 = document.querySelector("#inputName1");
const sameName = document.querySelector("#sameName");

inputName1.addEventListener("keyup", () => {

    const regExp = /^[ㄱ-힣]{2,5}$/;
    if(inputName1.value.length == 0){
        sameName.innerHTML = "";
    } else if(regExp.test(inputName1.value)){
        sameName.innerHTML = "정상입력"
        sameName.classList.remove("error");
        sameName.classList.add("confirm");
        inputName1.setAttribute("boolean", "true");
    } else {
        sameName.innerHTML = "한글만 입력하세요"
        sameName.classList.remove("confirm");
        sameName.classList.add("error");
        inputName1.setAttribute("boolean", "false");
    }

});

// 성별 : 미선택시 선택해달라는 경고창 팝업

const gender = document.querySelectorAll(".checkBox");

// if(gender[0].checked){
//     gender[0].boolean = true;
// } else {
//     gender[0].boolean = false;
// }

// if(!gender[0].checked && !gender[1].checked){
//     alert("성별을 선택해주세요")
// } 

// 전화번호
const inputNum = document.querySelector("#inputNum");

inputNum.addEventListener("keyup", () => {

    const regExp = /^[0][0-9]{1,2}-[0-9]{3,4}-[0-9]{4}$/;

    if(regExp.test(inputNum.value)){
        inputNum.setAttribute("boolean", "true");
    } else {
        inputNum.setAttribute("boolean", "false");
    }
});

// 이메일 
const inputEmail = document.querySelector("#inputEmail");

// 모든 내용 초기화하는 함수
function clear(){
    inputId.value = "";
    inputId.style.backgroundColor = "white";
    inputId.setAttribute("boolean", "false");
    inputpw.value = "";
    inputpw2.value = "";
    inputpw2.setAttribute("boolean", "false");
    samePw.innerHTML = "";
    inputName1.value = "";
    inputName1.setAttribute("boolean", "false");
    gender[0].checked = false;
    gender[1].checked = false;
    sameName.innerHTML = "";
    inputNum.value = "";
    inputNum.setAttribute("boolean", "false");
    inputEmail.value = "";
}

// 초기화 버튼 요소 
const reset1 = document.querySelector("#reset"); 
// 초기화
reset1.addEventListener("click", () => {

    clear();

});

document.querySelector("#test1").addEventListener("click", () => {
    console.log(inputId);
    console.log(inputpw);
    console.log(inputpw2);
    console.log(inputName1);
    console.log(gender[0].checked);
    console.log(gender[1]);
    console.log(inputNum);
});


// 회원가입
const createUser = document.querySelector("#createUser");
createUser.addEventListener("click", () => {

    if(inputId.boolean == true && inputpw2.boolean == true &&
        inputpw.boolean == true && inputName1.boolean == true && inputNum.boolean == true && 
        gender[0].checked ||
        inputId.boolean == true && inputpw2.boolean == true &&
        inputpw.boolean == true && inputName1.boolean == true && inputNum.boolean == true && 
        gender[1].checked) {
            alert("회원가입 완료");
            clear();
    } else {
        alert("회원가입 실패");
        
    }

});