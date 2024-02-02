// 메뉴 선택 버튼 배열
const menuList = document.querySelectorAll(".menu-item");
// 장바구니 영역 요소
const cart = document.querySelector("#cart");

function createCartItem(menu, price){

    // 아이템 별 카트 생성
    const cartItem = document.createElement("div");
    cartItem.classList.add("quantity");

    // 카트 안에 메뉴 이름, 수량, 삭제 3영역으로 나눌 span 태그 생성
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    const span3 = document.createElement("span");
    span1.classList.add("quantity");
    span2.classList.add("quantity");
    span3.classList.add("quantity");

    // span1에 담을 메뉴 이름 생성
    const menuName = document.createElement("div");
    menuName.classList.add("menu-item");
    menuName.innerHTML = menu;

    // span2에 담을 메뉴 수량, 증/감 버튼
    const increaseQuantity = document.createElement("button");
    const decreaseQuantity = document.createElement("button");
    
    // span3에 담을 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-button");

    
    

    
}

