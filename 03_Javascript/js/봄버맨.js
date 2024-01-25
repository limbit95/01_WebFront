// const man = document.querySelector("#bomberman");
// const bomb = document.querySelector("#bomb");

// let leftRight = 0;
// let upDown = 0;

// // 좌우상하 이동
// document.addEventListener
// ("keydown", function(e) {

//     switch(e.key) {
//         case "ArrowRight" : 
//             leftRight += 25;
//             man.style.marginLeft = leftRight + 'px'; break;
//         case "ArrowLeft" :
//             leftRight -= 25;
//             man.style.marginLeft = leftRight + 'px'; break;
//         case "ArrowDown" :
//             upDown += 25;
//             man.style.marginTop = upDown + 'px'; break;
//         case "ArrowUp" :
//             upDown -= 25;
//             man.style.marginTop = upDown + 'px'; break;
//         default : break;
//     }
// });

// // 폭탄 놓기
// document.addEventListener
// ("keyup", function(e) {
//     console.log(e);
    
//     if(e.key.toLowerCase() == "x"){
//         man.innerText = bomb;
//     }
// });



// 강사님 코드

let xindex = 0; // x좌표 방향대로 얼마만큼 이동했는지 기억할 변수
let yindex = 0; // y좌표 방향대로 얼마만큼 이동했는지 기억할 변수

// addEventListener("이벤트종류", 함수(이벤트가 발생했을때 수해할 기능))
// 전달인자 2개
document.addEventListener
("keydown", function(e) {
    
    const bomberman = document.getElementById("bomberman"); // 봄버맨 이미지
    
    switch(e.key) {
        case 'ArrowRight' : 
        xindex += 10; break;
        case 'ArrowLeft' :
        xindex -= 10; break;
        case 'ArrowUp' :
        yindex -= 10; break;
        case 'ArrowDown' :
        yindex += 10; break;
        case 'x' :
            const box = document.getElementById("box");
            box.innerHTML += 
            `<img src="/images/boom.png" 
            style="transform: translate3d(${xindex}px, ${yindex}px, 0); position: absolute;">`;
            break;

        default:
            alert("방향키와 x만 가능"); break;
    }

    bomberman.style.transform = `translate3d(${xindex}px, ${yindex}px, 0)`;
});