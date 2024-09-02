


// function hello(){
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
//     console.log("hello world!");
// }

// hello()




// function sum(num1 , num2){ //parameter receive krna
//     console.log(num1 + num2);
// }

// sum(20 , 30); // argument send krna.
// sum(50 , 50);
// sum(80 ,60);











// var hello;
// console.log(hello);





// function greetUser(username){
//     console.log("hello " + username)
// }

// greetUser("abdullah");
// greetUser();






// aik function banaan ha jisma user sa uska username or uski age leni ha. agar age 18 sa bari hojaye to "welcome to our gym" warna "get lost"



// function admission(username , age){
//     if(age >= 18){
//         console.log("welcome to the gym " + username)
//     }else{
//         console.log("maalik admission nahi hoga");

//     }
// }

// admission("abdullah" , 18);
// admission("usman" , 17);
// admission("huzaifa" , 12);
// admission("ammar" , 21);











// function greetUser(username) {
//     console.log("hello " + username, age, email)
// }

// greetUser("Abdullah", 20, "mabdullah@gmail.com")




















// var username;
// console.log(username);




// function sum(num1, num2) {
//     // console.log(num1 + num2)
//     return num1 + num2
// }

// // var total = sum(10, 10)
// // console.log(total)

// console.log(sum(40, 60));




// var username = prompt("Enter your name");
// console.log(username);










// function greetUser(username) {
//     return "hello " + username
// }


// alert(greetUser("abdullah"))













// function multiply(num1, num2) {

//     return num1 * num2
// }

// var totalValue = multiply(20, 600);
// console.log(totalValue);



// function calculatePercentage(sub1, sub2, sub3) {
//     var totalMarks = 300;
//     var obtainedMarks = sub1 + sub2 + sub3;
//     var percentage = obtainedMarks / totalMarks * 100;
//     return percentage + "%"
// }


// // var hassan = calculatePercentage(80, 40, 90);
// var student2 = calculatePercentage(70, 30, 90)
// console.log(student2);





// var head = document.querySelector("#head")
// head.innerHTML = "changed through javascript"




// var para = document.querySelector(".para");

// para.innerHTML = "lorem abc batch 12 <br/> behtreen class nahi ha."


// var div = document.querySelector("div");

// div.innerHTML = "<h1>Hello inside div</h1><p>Lorem ipsum dolor sit amet.</p><ul><li>Home </li><li>About </li><li>Contact</li></ul>"





// var div = document.querySelector("div");

// function hello() {
//     console.log("hello world")
//     div.innerHTML = "<h1>Hello inside div</h1><p>Lorem ipsum dolor sit amet.</p><ul><li>Home </li><li>About </li><li>Contact</li></ul>"
// }






// var head = document.querySelector("#head");


// function changeValue() {
//     // console.log("func");
//     if (head.innerHTML === "On") {
//         head.innerHTML = "Off"
//     } else {
//         head.innerHTML = "On"
//     }
// }







var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var h1 = document.querySelector("#total");

function sum() {
    var total = +num1.value + +num2.value
    h1.innerHTML = total

    num1.value = ""
    num2.value = ""
}




// dom manipulation
// function