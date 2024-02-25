let box1 = document.querySelector(".box1")
let input1 = document.querySelector(".input1")
let error1 = document.querySelector(".error1")
let btn1 = document.querySelector(".btn1")

// =====================================================
let box2 = document.querySelector(".box2")
let name1 = document.querySelector(".name1")
let input2 = document.querySelector(".input2")
let error2 = document.querySelector(".error2")
let btn2 = document.querySelector(".btn2")

// ==========================================================
let box3 = document.querySelector(".box3")
let input3 = document.querySelector(".input3")
let error3 = document.querySelector(".error3")
let btn3 = document.querySelector(".btn3")

// ==============================================================
let box4 = document.querySelector(".box4")
let name2 = document.querySelector(".name2")
let input4 = document.querySelector(".input4")
let error4 = document.querySelector(".error4")
let btn4 = document.querySelector(".btn4")
let chanceNumber = document.querySelector(".chanceNumber")
let chance = 5
// // ==============================================================
let box5 = document.querySelector(".box5")
let result = document.querySelector(".result")
// let input5 =document.querySelector(".input5")
// let error5 =document.querySelector(".error5")
// let btn5 =document.querySelector(".btn5")

btn1.addEventListener('click', function () {
    if (input1.value == "") {
        error1.innerHTML = "plz enter your name ...!"
    } else {
        box1.style.display = "none"
        box2.style.display = "flex"
        name1.innerHTML = input1.value
    }
})


btn2.addEventListener('click', function () {
    if (input2.value < 10 && input2.value >= 0) {
        error2.innerHTML = ""
        box2.style.display = "none"
        box3.style.display = "flex"
    } else {
        error2.innerHTML = "plz enter a number between 0 t0 9 ...!"
    }
})

btn3.addEventListener('click', function () {
    if (input3.value == "") {
        error3.innerHTML = "plz enter your name"
    } else {
        box3.style.display = "none"
        box4.style.display = "flex"
        name2.innerHTML = input3.value
    }
})

btn4.addEventListener('click', function () {
    if (input2.value == input4.value) {
        box4.style.display = "none"
        box5.style.display = "flex"
        result.innerHTML = `player ${input3.value} wine <br/> the number is: ${input2.value}`
    } else {
        chance--;
        chanceNumber.innerHTML = chance
        if (chance == 0) {
            box4.style.display = "none"
            box5.style.display = "flex"
            result.innerHTML = `player ${input1.value} wine <br/> the number is: ${input2.value}`
        }
    }
})



