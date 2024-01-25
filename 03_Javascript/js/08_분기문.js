// break 확인
function check1() {
    // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤
    for(let i = 1; i <= 10; i++){
        console.log(i);
        if(i == 5){
            break;
        }
    }
}

// 무한 반복하는 while문 멈추기
function check2() {
    let num = 1;
    while(true) {
        console.log(num++);
        if(num > 10){
            break;
        }
    }
}

// continue 확인하기
function check3() {
    
    for(let i = 1; i <= 20; i++){
        if(i % 3 == 0){
            continue;
        } 
        console.log(i); 
    }


    console.log("while문 방식")
    // while문 방식
    let num = 0;
    while(num < 20) {
        num++;
        if(num % 3 == 0){
            continue;
        } 
        console.log(num); 
    }
}

// 1부터 30까지 1씩 증가하며 출력
// 단, 홀수 또는 10의 배수는 건너뛰기
function check4() {
    for(let i = 1; i <= 30; i++){
        if(i % 2 != 0 || i % 10 == 0){
            continue;
        }
        console.log(i);
    }
}

// 0부터 9까지 5줄 출력
// 각 줄에서 4의 배수는 건너뛰기
// 3번째 줄 출력 후 멈추기
function check5() {
    
    for(let i = 1; i <= 5; i++){
        let str = "";
        
        for(let x = 0; x <= 9; x++){
            if(x % 4 == 0 && x != 0){
                continue;
            }
            str += x;
        }
        
        if(i > 3){
            break;
        }
        console.log(str);
    }
}

// UP / DOWN GAME

function startGame() {

    let random = Math.floor(Math.random() * 100) + 1;
    
    let input;

    console.log(random);

    input = prompt("1~100 사이 숫자를 입력하세요")

    while(input != random) {
        if(input === null){
            break;
        } else if(input > random){
            input = prompt("1~100 사이 숫자를 입력하세요 / DOWN")
            // alert("DOWN");
        } else if (input < random){
            input = prompt("1~100 사이 숫자를 입력하세요 / UP")
            // alert("UP");
        } 
    }
    if (Number(input) == random) {
        alert("정답입니다");
    }
}