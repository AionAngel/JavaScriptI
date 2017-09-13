console.log("Hello World!");

var linha1 = document.querySelector(".numero");
var tdNum1 = linha1.querySelector(".primeiro");
var tdNum2 = linha1.querySelector(".segundo");
var res = linha1.querySelector(".resultado");

var num1 = tdNum1.textContent;
var num2 = tdNum2.textContent;

res.textContent = +num1 + +num2;