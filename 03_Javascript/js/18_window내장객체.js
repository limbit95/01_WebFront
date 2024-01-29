// window.setTimeout()
document.querySelector("#btn1").addEventListener("click", () => {

    setTimeout( function() {
        alert("3초 후 출력!");
    }, 3000);
    // ms : 천단위 당 1초(1000)

});

// window.setInterval()

// setInterval을 저장하기 위한 전역 변수
let interval;

// 현재 시간을 문자열로 반환하는 함수
function currentTime() {
    const now = new Date();
    
    let hour = now.getHours(); // 현재 시
    let min = now.getMinutes(); // 현재 분
    let sec = now.getSeconds(); // 현재 초

    if(hour < 10) hour = "0" + hour;
    if(min < 10) min = "0" + min;
    if(sec < 10) sec = "0" + sec;

    return hour + " : " + min + " : " + sec;
}


function clockFn() {
    
    const clock = document.getElementById("clock");
    clock.innerText = currentTime();

    // 방법 1
    interval = setInterval( () => {
        clock.innerText = currentTime();
    }, 1000);

    // // 방법 2
    // setInterval( () => {
    //     clockFn()
    // }, 1000);

}

clockFn(); // 함수 호출

// clearInterval() : setInterval()이 저장된 변수를 
//                   clearInterval(여기에 넣으면) -> 
//                   해당 setInterval() 데이터가 지워진다
document.querySelector("#stop").addEventListener("click", () => {

    clearInterval(interval);

});