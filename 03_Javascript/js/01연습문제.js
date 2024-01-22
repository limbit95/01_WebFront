const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const number3 = document.getElementById("num3");
const result = document.getElementById("total");
// getElementById("") : 괄호 안에 쌍따옴표 꼭 넣기

function totalFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    const value3 = Number(number3.value);

    // Java에서 습관된 return 넣지 않기!!!
    result.innerText = value1 + value2 + value3;
}