// 메뉴 선택 버튼 배열
const menuList = document.querySelectorAll(".menu-item");
// 장바구니 영역 요소
const cart = document.querySelector("#cart");

// 메뉴 개수 배열
let menuAndQuantity = [["김밥", "라면", "튀김", "떡볶이", "돈까스", "우동"],
                      [0, 0, 0, 0, 0, 0]];
// {
//     김밥 : 0,
//     라면 : 0,
//     튀김 : 0,
//     떡볶이 : 0,
//     돈까스 : 0,
//     우동 : 0
// };





let num = 0;

// 메뉴 버튼 클릭 시 메뉴 이름과 메뉴 가격 요소
function addToCart(menu, price) {

    // 메뉴 추가시 장바구니 드러나게 하기
    cart.style.display = "block";
    // 메뉴 추가시 "장바구니가 비어 있습니다" 칸 숨기기
    document.querySelector("#empty-cart").style.display = "none";

    // 메뉴 담을 카트 생성
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // 카트 안에 담길 메뉴 정보 생성
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "group");

    // 카트 안의 세 영역으로 나눌 span 생성
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span2.classList.add("quantity");
    const span3 = document.createElement("span");
    span3.classList.add("quantity");

    // 수량 조절 버튼 생성
    const quantityBtn1 = document.createElement("button");
    quantityBtn1.classList.add("plus");
    quantityBtn1.setAttribute("onclick", "plus("+num+")");
    quantityBtn1.innerHTML = "+";
    const quantityBtn2 = document.createElement("button");
    quantityBtn2.classList.add("minus");
    quantityBtn2.setAttribute("onclick", "minus("+num+")");
    quantityBtn2.innerHTML = "-"

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");
    deleteBtn.setAttribute("onclick", "del("+num+")");
    deleteBtn.innerHTML = "&times;"

    // h4 태그 생성
    const h4 = document.createElement("h4");
    h4.classList.add("cnt");

    num++;

    function createItem() {
        // 생성한 카트 추가
        cart.append(cartItem);

        // 생성한 메뉴 정보 카트 왼쪽 영역에 추가
        cartItem.append(span1);
        cartItem.append(span2);
        cartItem.append(span3);
        menuItem.innerHTML = `${menu}<br>₩${String(price)[0]},${String(price).slice(1,4)}`;
        span1.append(menuItem);

        // 생성한 메뉴 수량 카트 가운데 영역에 추가
        span2.append(quantityBtn2);
        span2.append(h4);
        h4.innerHTML = 1;
        span2.append(quantityBtn1);

        // 생성한 삭제 버튼 카트 오른쪽 영역에 추가
        span3.append(deleteBtn);
    }

    // 메뉴 개수 카운팅
    for(let i = 0; i < menuAndQuantity[0].length; i++){
        if(menu == menuAndQuantity[0][i]){
            menuAndQuantity[1][i] += 1;
        }
    }

    // 메뉴 이름 배열
    const testName = document.querySelectorAll(".group");

    // 장바구니에 메뉴 추가하되 중복되는 아이템 추가하지 않도록
    let has = false;

    for(let i = 0; i < 1; i++){

        for(let k = 0; k < testName.length; k++){
            if(menu == testName[k].firstChild.textContent){
                has = true;
                break;
            } else {
                has = false;
            }
        }

        if(has == false){
            createItem();
        } else {
            console.log("같은 요소가 있습니다");
            num--;
            for(let x = 0; x < testName.length; x++){
                if(menu == testName[x].firstChild.textContent){
                }
            }
        } 
    }

    // 동일한 메뉴 추가시 담겨 있는 메뉴의 개수만 증가시키기
    const cnt = document.querySelectorAll(".cnt");

    for(let i = 0; i < testName.length; i++){
        if(menu == testName[i].firstChild.textContent){
            for(let k = 0; k < menuAndQuantity[0].length; k++){
                if(menu == menuAndQuantity[0][k]){
                    cnt[i].innerHTML = menuAndQuantity[1][k];
                }
            }
        }
    }


    

}

// 삭제 버튼 기능
const del = document.querySelector(".delete-button");
del.addEventListener("click", () => {
    
});


// + 버튼 클릭시 menuAndQuantity 배열의 [1]에 해당하는 개수 증가
function plus(number){

    for(let i = 0; i < menuAndQuantity[0].length; i++){
        if(cart.childNodes[number].firstChild.firstChild.firstChild.textContent 
            == menuAndQuantity[0][i]){
                menuAndQuantity[1][i] += 1;
                cart.childNodes[number].childNodes[1].childNodes[1].innerHTML = menuAndQuantity[1][i];
        }
    }
}

// - 버튼 클릭시 menuAndQuantity 배열의 [1]에 해당하는 개수 감소
function minus(number){

    for(let i = 0; i < menuAndQuantity[0].length; i++){
        if(menuAndQuantity[1][i] > 0 &&
            cart.childNodes[number].firstChild.firstChild.firstChild.textContent 
            == menuAndQuantity[0][i]){
                menuAndQuantity[1][i] -= 1;
                cart.childNodes[number].childNodes[1].childNodes[1].innerHTML = menuAndQuantity[1][i];
        }
    }
}




// 테스트 버튼
const test1 = document.querySelector(".qwer");

test1.addEventListener("click", () => {

    console.log();

});



// // 추가 버튼
// function plus1(){
//     console.log("김밥 추가");
// }
// function plus2(){
//     console.log("라면 추가");
// }
// function plus3(){
//     console.log("튀김 추가");
// }
// function plus4(){
//     console.log("떡볶이 추가");
// }
// function plus5(){
//     console.log("돈까스 추가");
// }
// function plus6(){
//     console.log("우동 추가");
// }

// function minus1(){
//     console.log("김밥 빼기");
// }
// function minus2(){
//     console.log("라면 빼기");
// }
// function minus3(){
//     console.log("튀김 빼기");
// }
// function minus4(){
//     console.log("떡볶이 빼기");
// }
// function minus5(){
//     console.log("돈까스 빼기");
// }
// function minus6(){
//     console.log("우동 빼기");
// }


