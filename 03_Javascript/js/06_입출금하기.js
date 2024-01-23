// prompt 사용 연습
function test() {
    
    const password = prompt("비밀번호를 입력하세요")
    
    // 확인 -> 입력한 문자열 전송
    // 취소 -> null 전송

    if(password == null) { // 취소
        alert()
    } else {
        if(password == "1234") {
            alert("비밀번호 일치")
        } else {
            alert("비밀번호를 불일치")
        }
    }
}

const amount = document.getElementById("amount");
const output = document.getElementById("output");

let balance = 10000;

output.innerText = balance;

// 입금
// function deposit() {
//     const money = Number(amount.value);
    
//     if (money != Math.floor(money) || 0 > money) {
//         alert("금액을 다시 제대로 입력해주세요")
//     } else if (0 < money) {
//         output.innerText = balance += money;
//         alert("입금 완료")
//     }
// }

// // 출금
// function withdrawal() {
//     const money = Number(amount.value);
//     const password = prompt("비밀번호를 입력하세요");
    
//     if(password == null) {
//         // 취소 버튼
//     } else {
//         if(password == "1234") {
//             alert("비밀번호 일치");

//             if (money <= 0 || money == null || money != Math.floor(money)){
//                 alert("금액을 다시 입력해주세요");
//             } else if(money > balance) {
//                 alert("잔액이 부족합니다");
//             } else {
//                 alert("출금 완료");
//                 output.innerText = balance -= money;
//             }
//         } else {
//             alert("비밀번호를 불일치");
//         }
//     }
// }


// 강사님 코드

function deposit() {
    // 1. 입금 버튼 클릭
    // 2. input에 입력된 금액 구하기
    // 3. 구한 금액을 잔액(balance)에 추가하기
    if(amount.value.length == 0) {
        alert("금액을 입력해주세요")
    } else {
        balance += Number(amount.value);
        output.innerText = balance;

        amount.value = ''; // input에 작성된 값 제거
    }
}

function withdrawal() {

    if(amount.value.length == 0) {
        alert("금액을 입력해주세요")
    } else {
        const password = prompt("비밀번호를 입력하세요");

        if(password == null) {
            alert("취소")
        } else {
            // 비밀번호가 일치하지 않을 경우
            if(password != "1234") {
                alert("비밀번호가 일치하지 않습니다");
            } else { // 비밀번호가 일치하는 경우
                const money = Number(amount.value);

                // 출금할 금액이 잔액보다 큰 경우
                if (money > balance) {
                    alert("출금 금액이 잔액보다 클 수 없습니다");
                } else { // 출금할 금액이 작거나 같은 경우
                    balance -= money;
                    output.innerText = balance;
                    amount.value = '';

                    alert(`${money}원이 출금 되었습니다. 남은 잔액 ${balance}원`);
                }
            }
        }
    }
}