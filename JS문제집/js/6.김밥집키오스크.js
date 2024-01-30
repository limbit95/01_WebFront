// 메뉴 선택 버튼 배열
const menuList = document.querySelectorAll(".menu-item");
// 장바구니 영역 요소
const cart = document.querySelector("#cart");

let cnt = 1;




// 메뉴 버튼 클릭 시 메뉴 이름과 메뉴 가격 요소
function addToCart(menu, price) {

    // 메뉴 추가시 장바구니 드러나게 하기
    cart.style.display = "block";
    // 메뉴 추가시 "장바구니가 비어 있습니다" 칸 숨기기
    document.querySelector("#empty-cart").style.display = "none";


    // 메뉴 담을 카트 생성
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    // 카트 안의 세 영역으로 나눌 span 생성
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    span2.classList.add("quantity", "cnt");
    const span3 = document.createElement("span");
    span3.classList.add("quantity");

    // 카트 안에 담길 메뉴 정보 생성
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "group");

    // 수량 조절 버튼 생성
    const quantityBtn1 = document.createElement("button");
    quantityBtn1.innerHTML = "+";
    const quantityBtn2 = document.createElement("button");
    quantityBtn2.innerHTML = "-"

    // 삭제 버튼 생성
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button")
    deleteBtn.innerHTML = "&times;"

    // 숫자를 담는 h4태그 생성
    const h4 = document.createElement("h4");
    h4.classList.add("count");
    h4.setAttribute("type", "number");
    
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
        span2.append(quantityBtn1)
        span2.append(h4);
        h4.append(cnt);
        span2.append(quantityBtn2)

        // 생성한 삭제 버튼 카트 오른쪽 영역에 추가
        span3.append(deleteBtn);
    }

    // 메뉴 이름 배열
    const testName = document.querySelectorAll(".group");
    const testName2 = document.querySelectorAll(".menu-item");

    // createItem();
    if(cart.firstChild == null){
        createItem();
    } 
    // else if(cart.children.length == 1 ){
    //     if(testName[0].firstChild.textContent == menu){
    //         alert();
    //         console.log("첫번째 else문입니다");
    //     } else {
    //         createItem();
    //         console.log("첫번째 생성");
    //     }
    // } 

    for(let i = 0; i < testName2.length; i++){
        // console.log(testName2[i].firstChild);
        for(let k = 0; k < testName.length; k++){
            console.log(testName[k].firstChild);
        }
    }
    
}