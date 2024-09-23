

// var tableNum = document.querySelector("#num1")
// var timesNum = document.querySelector("#num2")
// var div = document.querySelector("div");
// function createTable(){
//     div.innerHTML = ""
//     for (let i = 1; i <= timesNum.value; i++) {  
//         div.innerHTML += `${tableNum.value} * ${i} = ${tableNum.value * i} <br/>`
//     }
// }

// function clearScreen(){
//     div.innerHTML = ""
//     timesNum.value = ""
//     tableNum.value = ""
// }


var div = document.querySelector("div");
var head = document.querySelector("#head");
var body = document.querySelector("body");


var arr = ["orange" , "yellow" , "black" , "white" , "green" , "red" , "blue" , "#38bdf8" , "#f3e5f4" , "#0f172a"]

for (let i = 0; i < arr.length; i++) {
    div.innerHTML += `<button onclick="colorBtn(${i})">${arr[i]}</button>`
}

function colorBtn (index){
    console.log("btn clicked" , arr[index]);
    if(arr[index] === "blue"){
        body.style.backgroundColor = "#38bdf8"
        
    }else{
        body.style.backgroundColor = arr[index]

    }
}