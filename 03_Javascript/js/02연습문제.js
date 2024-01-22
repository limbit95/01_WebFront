const userName = document.getElementById("input1");
const userAge = document.getElementById("input2");
const userGender = document.getElementById("input3");

// 내가 한 풀이
function javascriptObject() {
    const name = userName.value;
    const age = userAge.value;
    const gender = userGender.value;

    const info = {"이름 : " : name, "나이 : " : age, "성별 : " : gender};

    console.log(info);
}

// 강사님 풀이
function javascriptObject() {
    const info = {
        이름 : userName.value, 
        나이 : userAge.value, 
        성별 : userGender.value
    };

    console.log(info);
}