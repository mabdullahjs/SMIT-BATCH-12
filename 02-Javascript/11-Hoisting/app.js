
// console.log(username);
// var username = 'abdullah';


// // hoisting

// hello()
// function hello() {
//     console.log('hello');

// }





// setTimeout(function () {
//     console.log("console after one second")
// }, 2000)


// setTimeout(hello, 2000)



// var num = 0
// var interval = setInterval(function () {
//     num += 70
//     console.log(num);

// }, 500)



// function stopIntervals() {
//     console.log("interval stopped")
//     clearInterval(interval)
//     num = 0
// }

var h1 = document.querySelector('#timer')
var num = 0
var minutes = 0
var hours = 0

var timer;
function startTimer() {
    timer = setInterval(function () {
        num += 1
        h1.innerHTML = num
    }, 100)
}
function stopTimer() {
    clearInterval(timer)
}
function resetTimer() {
    num = 0
    h1.innerHTML = 0
    clearInterval(timer)
}
